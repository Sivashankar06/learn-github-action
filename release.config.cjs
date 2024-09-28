const config = {
    branches: ["main", { name: "next", prerelease: true }],
    preset: "angular",
    tagFormat: "v${version}",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        [
            "@semantic-release/github", {
                failTitle: false,
                labels: false,
                releasedLabels: false,
                successComment:
                    ":tada: A prerelease with version ${nextRelease.version} has been published.\n"
            },
        ],
        "semantic-release-yarn",
    ],
};

module.exports = config;