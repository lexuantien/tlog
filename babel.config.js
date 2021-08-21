// Cannot load "react-refresh/babel" in production
const plugins = [
  // [
    // "babel-plugin-styled-components",
    // {
    //   displayName: false,
    // },
  // ],
];

if (process.env.NODE_ENV !== "production") {
  plugins.push("react-refresh/babel");
}

module.exports = {
  presets: [
    "@babel/preset-env",
    // Runtime automatic with React 17+ allows not importing React
    // in files only using JSX (no state or React methods)
    ["@babel/preset-react", {
      runtime: "automatic"
    }],
    "@linaria"
  ],
  plugins: plugins,
};