const React = require("react");
const REACT_VERSION = React.version;
const version = REACT_VERSION.substring(0, 2);

if (version >= 18) {
  module.exports = require("./addComponent");
} else {
  module.exports = require("./addComponent17");
}
