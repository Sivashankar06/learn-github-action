const config = {
    branches: ["main", { name: "next", prerelease: true }],
    plugins: [
        [
            "@semantic-release/commit-analyzer",
            {
                "preset": "angular",
                "releaseRules": [
                { "type": "docs", "scope": "README", "release": "patch" },
                { "type": "refactor", "release": "minor" },
                { "type": "revert", "release": "major", "tag": "revert" }
                ]
            },
        ],  
        "@semantic-release/release-notes-generator"
    ],
};

module.exports = config;