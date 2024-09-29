const config = {
    branches: ["main", { name: "next", prerelease: true }],
    plugins: [
        [
            "@semantic-release/commit-analyzer",
            {
                "preset": "angular",
                "releaseRules": [
                    { "type": "docs", "scope": "README", "release": "patch" },
                    { "type": "refactor", "release": "major" },
                    { "type": "revert", "release": "minor" },
                ]
            },
        ],  
        "@semantic-release/release-notes-generator"
    ],
};

module.exports = config;