const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const open = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
}

const revealNodes = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && revealNodes.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  revealNodes.forEach((node) => observer.observe(node));
} else {
  revealNodes.forEach((node) => node.classList.add("in"));
}

const yearTarget = document.querySelector("[data-year]");
if (yearTarget) {
  yearTarget.textContent = String(new Date().getFullYear());
}

const repoList = document.querySelector("[data-repos]");
if (repoList) {
  const user = repoList.getAttribute("data-user");

  if (!user || user === "your-github-username") {
    repoList.innerHTML =
      "<p>Add your GitHub username in <code>src/pages/index.astro</code> to load repositories.</p>";
  } else {
    fetch(`https://api.github.com/users/${user}/repos?sort=updated&per_page=6`)
      .then((response) =>
        response.ok
          ? response.json()
          : Promise.reject(new Error("GitHub API error")),
      )
      .then((repos) => {
        if (!Array.isArray(repos) || repos.length === 0) {
          repoList.innerHTML = "<p>No public repositories found yet.</p>";
          return;
        }

        const cards = repos
          .filter((repo) => !repo.fork)
          .slice(0, 4)
          .map(
            (repo) => `
              <article class="card reveal in">
                <h3>${repo.name}</h3>
                <p>${repo.description || "WordPress / WooCommerce related project repository."}</p>
                <p><a class="btn btn-ghost" href="${repo.html_url}" target="_blank" rel="noreferrer">View Repository</a></p>
              </article>
            `,
          )
          .join("");

        repoList.innerHTML = cards;
      })
      .catch(() => {
        repoList.innerHTML =
          "<p>Unable to load repositories right now. Please try again later.</p>";
      });
  }
}

const buttonSelectors = [
  "button",
  "input[type='button']",
  "input[type='submit']",
  "input[type='reset']",
  "a.btn",
  "[role='button']",
].join(",");

const getButtonLabel = (element) => {
  const ariaLabel = element.getAttribute("aria-label");
  if (ariaLabel) return ariaLabel.trim();

  if (element instanceof HTMLInputElement) {
    return (element.value || element.name || "button").trim();
  }

  const text = element.textContent;
  if (text) return text.replace(/\s+/g, " ").trim();

  return element.id || "button";
};

document.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;

  const clickedButton = event.target.closest(buttonSelectors);
  if (!clickedButton) return;

  if (typeof window.gtag !== "function") return;

  const buttonLabel = getButtonLabel(clickedButton);
  const href = clickedButton instanceof HTMLAnchorElement ? clickedButton.href : "";

  window.gtag("event", "button_click", {
    event_category: "engagement",
    event_label: buttonLabel,
    button_label: buttonLabel,
    button_id: clickedButton.id || "",
    button_classes: clickedButton.className || "",
    button_url: href,
    page_path: window.location.pathname,
  });
});
