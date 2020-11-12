module.exports = {
    presets: [
        ['@babel/env', {
            corejs: 3,
            useBuiltIns: "usage", // or "entry"
            targets: {
                browsers: "> .25%, not dead",
            }
        }]
    ]
};
  