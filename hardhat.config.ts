require("@nomicfoundation/hardhat-toolbox");

require('dotenv').config()

module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {

      url: "https://polygon-mumbai.g.alchemy.com/v2/xPACxJYzW3ovyVZS_NMuOHO-BZaKcF2d",
      accounts: "e9bf0a54db6af02cb7e6cf0affef24b7eaeeaef0360ab0a73efb3ec428391cf5" !== undefined ? ["e9bf0a54db6af02cb7e6cf0affef24b7eaeeaef0360ab0a73efb3ec428391cf5"] : [],
    },
  },
};