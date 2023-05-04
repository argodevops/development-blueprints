const pkg = require("./package.json");

const branches = [
  "master",
  {
    name: "alpha",
    prerelease: true,
  },
];

const commitAnalyzer = "@semantic-release/commit-analyzer";
const releaseNotesGenerator = "@semantic-release/release-notes-generator";
const changelog = "@semantic-release/changelog";

const docker = [
  "@codedependant/semantic-release-docker",
  {
    dockerTags: [
      "{{#if prerelease.[0]}}{{prerelease.[0]}}{{else}}latest{{/if}}",
      "{{major}}-{{#if prerelease.[0]}}{{prerelease.[0]}}{{else}}latest{{/if}}",
      "{{major}}.{{minor}}-{{#if prerelease.[0]}}{{prerelease.[0]}}{{else}}latest{{/if}}",
      "{{version}}",
    ],
    dockerRegistry: "<DOCKER_REGISTRY>",
    dockerProject: "<DOCKER_PROJECT> or null",
    dockerImage: pkg.name,
  },
];

const git = "@semantic-release/git";

const teams = ["@argo/sematic-release-teams", { packageName: pkg.name }];

module.exports = {
  branches,
  plugins: [
    commitAnalyzer,
    releaseNotesGenerator,
    changelog,
    docker,
    git,
    teams,
  ],
};
