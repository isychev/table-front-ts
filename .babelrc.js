const { NODE_ENV, BABEL_ENV } = process.env;
const cjs = NODE_ENV === "test" || BABEL_ENV === "commonjs";
const loose = true;

module.exports = {
    ignore: ["**/*.test.tsx", "src/App.tsx", "src/index.tsx"],
    plugins: [
        "@babel/proposal-class-properties",
        "@babel/proposal-object-rest-spread",
        cjs && ["@babel/transform-modules-commonjs", { loose }],
        ["@babel/transform-runtime", { useESModules: !cjs }]
    ].filter(Boolean),
    presets: [
        "@babel/env",
        "@babel/preset-typescript",
        "@babel/react",
    ]
};
