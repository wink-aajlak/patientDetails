var HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONIC = "Mnemonic Phrase";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "https://rinkeby.infura.io/v3/Your_API_Key")
      },
      network_id: 4,
      gas: 4000000
    }
    // ropsten: {
    //   provider: function() {
    //     return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/v3/Your_API_Key")
    //   },
    //   network_id: 3,
    //   gas: 4000000
    // }
  }
};