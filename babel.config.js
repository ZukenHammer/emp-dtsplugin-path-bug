module.exports = {
  "presets": [
    "@babel/typescript",
    [
      "@babel/preset-env",
      {
        "targets": {
          "browsers": ["last 1 version"]
        },
        "useBuiltIns": "usage",
        "debug": true,
        "corejs": 3,
        "modules": false
      }
    ]
  ],
  "plugins": ["@babel/plugin-proposal-class-properties"],
}
