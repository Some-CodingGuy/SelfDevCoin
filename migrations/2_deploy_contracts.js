const SelfDevCoin = artifacts.require("SelfDevCoin");

module.exports = function (deployer) {
  deployer.deploy(SelfDevCoin);
};