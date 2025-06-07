// babel.config.js
module.exports = {
  presets: [
    ["@babel/preset-env", {
      targets: { node: "16.13" }  // Match your Node version
    }],
    ["@babel/preset-react", {
      runtime: "automatic"  // Required if using JSX with React 17+
    }]
  ],
  plugins: [
    ["@babel/plugin-transform-runtime"]
  ]
};
