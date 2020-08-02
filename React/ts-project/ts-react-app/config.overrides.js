const { override, fixBabelImports } = require("customize-cra");
module.exports = override(
    fixBabelImports("import", {
        libraryName: "antd" /* antd */ ,
        libraryDirectory: "es" /* es */ ,
        style: "css",
    })
);