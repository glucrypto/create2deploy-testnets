##### Zero to Cross-Chain 

### Steps:

1. Install:

` npm install `

2. Create new Eth Account & add to Metamask:

` npx mnemonics `

3. Load Sidechain networks into metamask (Log out of your current and import via 12 word phrase)

FTM: [Tutorial](https://docs.fantom.foundation/tutorials/set-up-metamask-testnet)

Network Name: `Fantom testnet`

New RPC Url: [https://rpc.testnet.fantom.network/](https://rpc.testnet.fantom.network/​)

ChainID: `0xfa2`

Symbol: `FTM`

Explorer: [https://testnet.ftmscan.com/](https://testnet.ftmscan.com/)


MATIC: [Tutorial](https://docs.matic.network/docs/develop/network-details/network/)


Name: `Mumbai`
RPC: https://rpc-mumbai.maticvigil.com
ChainID: `80001`
Symbol: `MATIC token``
Block Explorer: [https://explorer-mumbai.maticvigil.com](https://explorer-mumbai.maticvigil.com)


BSC: [Tutorial](https://docs.binance.org/smart-chain/wallet/metamask.html)

Name: Bsc Testnet
RPC: [https://bsc-dataseed.binance.org/](https://bsc-dataseed.binance.org/)
ChainID: `0x61`
Symbol: `BNB`
Block Explorer: [https://testnet.bscscan.com](https://testnet.bscscan.com)

3. Load with testnet tokens:

ETH: [https://faucet.metamask.io/](https://faucet.metamask.io/)
FTM: [ https://faucet.fantom.network/](https://faucet.fantom.network/)
MATIC: [https://faucet.matic.network/](https://faucet.matic.network/)
BSC: [https://testnet.binance.org/faucet-smart](https://testnet.binance.org/faucet-smart)


4. Run `npm testnet:deploy` for public testnets, `npm local:deploy` for local deploy

5. Verify Deploy

6. Head over to [https://github.com/connext/chaindata](https://github.com/connext/chaindata) and follow instructions in deploy.md, replacing MPC with address of deploy contract AnyswapV5ERC20.sol on each chain (Line: 53)
