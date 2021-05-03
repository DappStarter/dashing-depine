require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note muscle puppy harvest industry equal gas'; 
let testAccounts = [
"0xba271dd5360df0bc1fb8ee560a5b56f89bce40e8bfd87085027b93a8c830ce8e",
"0xf1af445ee879e8f9013c8b5d25fc911d9cf6940bb3a7ce07a968a8065ae81e95",
"0xddc8accc48ba44eda90f33c4bd1ad5b06a3899fc1f949b2f92040cda060ce054",
"0xc3b09a4b423c1fd4b362cdf93fdc9ffcecaff917cff49ef087608cbb8a2a649b",
"0x94a0a71abe0f44e2f78337fcb3b3f0bfbf35f4591dbf73a7ea650cf642ab7f1c",
"0xf99c4fa1ffdb776acfc0959f292124ef67ff5df207cb00b56566a84f29936537",
"0xd797abb76a932ab34634c57a779a7761ba308d515c0bf11d056c5a8e26c41c26",
"0x0687ba01d5c3ddbb8ec74e7dde2370a61100ebd48d2ab2b653abc2108e06fc77",
"0xf6b7153261453eabe5678042af78a9ff58bda6287fd1d4aceecd9c7fa84a5f64",
"0x20d190fe3b44884e2f7b136463ead8e51e5e3af0c3cfb9888e101f4d883159ff"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
