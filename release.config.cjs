const config = {
    branches: ["main", { name: "next", prerelease: true }],
    plugins: [
        [
          "@semantic-release/commit-analyzer",
          {
            preset: "angular",
            releaseRules: [{ type: "revert", release: "patch" }],
          },
        ],
        "@semantic-release/release-notes-generator",
        [
          "@semantic-release/github",
          {
            failTitle: false,
            labels: false,
            releasedLabels: false,
            successComment:
              ":tada: A prerelease with version ${nextRelease.version} has been published.\n".concat(
                process.env.npm_package_name
                  ? "To install run yarn add ${process.env.npm_package_name}@${nextRelease.version}"
                  : "",
              ),
          },
        ],
        "semantic-release-yarn",
      ],
};

module.exports = config;