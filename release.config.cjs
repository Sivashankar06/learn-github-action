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
                    ":tada: ${JSON.stringify(branch)}\n" + 
                    ":tada: ${JSON.stringify(lastRelease)}\n" + 
                    ":tada: ${JSON.stringify(nextRelease)}\n" + 
                    ":tada: ${JSON.stringify(releases)}\n" +
                    ":tada: ${JSON.stringify(commits)}\n" + 
                    ":tada: ${JSON.stringify(issue)}\n"
            },
        ],
    ],
};

module.exports = config;