const Web3 = require('web3')
const BigNumber = require('bignumber.js')
const abiBQB = require('./abi/BQBToken.json')

const web3Rinkeby = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'))
// const WS_PROVIDER_URL = 'wss://speedy-nodes-nyc.moralis.io/0e1178f702f6a0f85209f04a/fantom/mainnet/ws' // FTM mainnet by moralis
// const WS_PROVIDER_URL = 'wss://speedy-nodes-nyc.moralis.io/0e1178f702f6a0f85209f04a/fantom/testnet/ws' // FTM testnet by moralis
// const WS_PROVIDER_URL = 'wss://wsapi.fantom.network' // FTM mainnet
// const WS_PROVIDER_URL = 'wss://wsapi.testnet.fantom.network' // FTM testnet

const web3Fantom = new Web3(new Web3.providers.WebsocketProvider('wss://speedy-nodes-nyc.moralis.io/0e1178f702f6a0f85209f04a/fantom/testnet/ws',{
	timeout: 30000,
    clientConfig: {
      	maxReceivedFrameSize: 100000000,   // bytes - default: 1MiB
      	maxReceivedMessageSize: 100000000, // bytes - default: 8MiB
		keepalive: true,
      	keepaliveInterval: 60000 // ms
    },
    reconnect: {
        auto: true,
        delay: 5000, // ms
        maxAttempts: 5,
        onTimeout: false
    }
}))
const contractBQB = new web3Fantom.eth.Contract(abiBQB,'0x9B3a3B1D9AdfD9Adb611757577DC679D2994Ad00')
contractBQB.events.allEvents((err, event) => {
	console.log(err, event)
})

module.exports = {
  web3Rinkeby, 
  web3Fantom
}