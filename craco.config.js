const path = require("path");

module.exports = {
  webpack: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
};
