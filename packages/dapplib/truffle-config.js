require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remember protect inflict prison outer gesture'; 
let testAccounts = [
"0x7f6934f4e055fec45248d0e5e4d78b6912df37ae265f655b64c00d8bbf3f7ef5",
"0xa0019cec45f07479652147fac86185557fa204b111187e6b81facfcb533457d3",
"0xcdf6cb8d8097a02346c5322748c7ebebf962abe141b06a6681c5e391d2d08b58",
"0x443e1f7df397d657ab6b6551c275a81fcf99751928471366429ca06a2fcd33a0",
"0xe58a19f876b02ba08edaeeb82d7de87e39f6a0eac21013869fa608de3aef3878",
"0xaca9226a3d40fdd6299053708a6ad987f39976683bcbd246d9fa23f7dbe02fa8",
"0xb491b0bc38e04a39521d1a85582dcb7071612cae541e87d0a78bb1ff28d6d224",
"0xee6199f615ca27cc32edde5b5be4edf89bc22d1a562529e6fb2d94ed22ed092d",
"0xb1665617cee2ac1d1127873a6f253b7dc6f2dd2864d495448b639313db4a4b0f",
"0x3cc062ac81a8b982de8b19034081e7daf69a7503e5aa810ae0f6bb384099153c"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
