/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");
module.exports = {
  // networks: {
  //   goerli: {
  //     url: `https://rinkeby.infura.io/v3/${alchemyApikey}`,
  //     accounts: {mnemonic: mnemonic},
  //   },
  // },

  solidity: {
    version: '0.8.9',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
