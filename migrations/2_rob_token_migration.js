const RobToken = artifacts.require("RobToken");

module.exports = function (deployer) {
  deployer.deploy(RobToken, "RobTokens", "ROBS");
};
