require("dotenv").config();
const Web3 = require("web3");
const HDWalletProvider = require("@truffle/hdwallet-provider");

const infuraProjectId = process.env.INFURA_PROJECT_ID || "";
const privKey = process.env.PRIVATE_KEY || "";
const etherscanApiKey = process.env.ETHERSCAN_API_KEY || "";

module.exports = {
  networks: {
    mainnet: {
      networkCheckTimeout: 10000,
      provider: () =>
        new HDWalletProvider(
          privKey,
          `https://mainnet.infura.io/v3/${infuraProjectId}`
        ),
      network_id: 1,
      gasPrice: Web3.utils.toWei("50", "gwei").toString(),
      gas: 6000000,
    },
    ropsten: {
      networkCheckTimeout: 10000,
      provider: () =>
        new HDWalletProvider(
          privKey,
          `https://ropsten.infura.io/v3/${infuraProjectId}`
        ),
      network_id: 3,
      gasPrice: Web3.utils.toWei("50", "gwei").toString(),
      gas: 6000000,
    },
    matic: {
      provider: function () {
        return new HDWalletProvider([privKey], `https://polygon-rpc.com`);
      },
      network_id: 137,
    },
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    tenderly: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*",
      gasPrice: 0,
    },
  },
  contracts_build_directory: "./src/contracts/",
  compilers: {
    solc: {
      version: "0.8.0",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    etherscan: etherscanApiKey,
  },
};
