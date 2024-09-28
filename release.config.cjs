const config = {
    branches: ["main", { name: "next", prerelease: true }],
    plugins: [
        "@semantic-release/commit-analyzer",
        {
            "preset": "angular",
            "releaseRules": [
              { "type": "docs", "scope": "README", "release": "patch" },
              { "type": "refactor", "release": "patch" },
              { "type": "style", "release": "patch" }
            ],
            "parserOpts": {
              "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES"]
            }
        },
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