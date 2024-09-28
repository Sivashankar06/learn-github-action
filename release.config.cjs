const config = {
    branches: ["main", { name: "next", prerelease: true }],
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        [
            "@semantic-release/github", {
                successComment: ":tada:",
                assets: [
                    { "path": "dist/index.js", "label": "JS distribution" }
                ]
            },
        ],
    ],
};

module.exports = config;