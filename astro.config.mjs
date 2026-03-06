import { defineConfig } from "astro/config";

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";
const owner = process.env.GITHUB_REPOSITORY?.split("/")[0] || "";
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const isProjectPages =
  isGithubActions && repo && owner && repo !== `${owner}.github.io`;

export default defineConfig({
  output: "static",
  site: owner ? `https://${owner}.github.io` : undefined,
  base: isProjectPages ? `/${repo}` : "/",
});
