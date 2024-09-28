const config = {
    branches: ["main", { name: "next", prerelease: true }],
    preset: "angular",
    tagFormat: "v${version}",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "semantic-release-yarn",
        [
            "@semantic-release/github", {
                failTitle: false,
                labels: false,
                releasedLabels: false,
                successComment:
                    ":tada: ${JSON.stringify(branch)}\n"
            },
        ],
    ],
};

module.exports = config;