
module.exports = {
    "presets": [
        "@babel/preset-env",
        "next/babel"
    ],
    "plugins": [
        [
            "@babel/plugin-proposal-decorators",
            {
                "legacy": true
            }
        ],
        ["@babel/plugin-proposal-class-properties", { "loose": true}],
        [
            "@babel/plugin-transform-runtime",
            {
                "corejs": false,
                "helpers": false,
                "regenerator": true,
                "useESModules": false
            }
        ],
        [
            "import",
            {
                "libraryName": "antd",
                "style": true
            }
        ],
        [
            "module-resolver",
            {
                "root": [
                    "./"
                ],
                "alias": {}
            }
        ]
    ]
}