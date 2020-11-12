module.exports = {
    presets: [
        ['@vue/app', {
            useBuiltIns: "usage", // or "entry"
            targets: {
                "ie": "10",
                browsers: "> 1%, not dead",
            }
        }]
    ]
};
  