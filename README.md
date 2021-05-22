## Zero to Cross-Chain 


1. Install: ` npm install `

2. Create new Eth Account & add to Metamask: ` npx mnemonics `

3. Load Sidechain networks into metamask (Log out of your current and import via 12 word phrase) 

Network Name | RPC URL           | ChainId  | Symbol | Explorer | Tutorial
| ----------------- |:-----------------:| --------:|-------:|---------:|---------:|
| FTM        | [https://rpc.testnet.fantom.network/](https://rpc.testnet.fantom.network/​)| `0xfa2` | FTM   | [https://testnet.ftmscan.com/](https://testnet.ftmscan.com/)| [Tutorial](https://docs.fantom.foundation/tutorials/set-up-metamask-testnet)|
| Mumbai (MATIC Testnet)| [https://rpc-mumbai.maticvigil.com](https://rpc-mumbai.maticvigil.com)                |  `80001` |  MATIC    |  [https://explorer-mumbai.maticvigil.com](https://explorer-mumbai.maticvigil.com)| [Tutorial](https://docs.matic.network/docs/develop/network-details/network/)| 
| BSC        | [https://data-seed-prebsc-1-s1.binance.org:8545/](https://data-seed-prebsc-1-s1.binance.org:8545/)      |  `0x61` |  BNB    |  [https://testnet.bscscan.com](https://testnet.bscscan.com)    | [Tutorial](https://docs.binance.org/smart-chain/wallet/metamask.html)|


4. Load with testnet tokens:

ETH: [https://faucet.metamask.io/](https://faucet.metamask.io/)

FTM: [ https://faucet.fantom.network/](https://faucet.fantom.network/)

MATIC: [https://faucet.matic.network/](https://faucet.matic.network/)

BSC: [https://testnet.binance.org/faucet-smart](https://testnet.binance.org/faucet-smart)



5. Run `npm testnet:deploy` for public testnets, `npm local:deploy` for local deploy


6. Verify Deploy

7. Deploy AnyswapV5ERC20.sol: Head over to [https://github.com/connext/chaindata](https://github.com/connext/chaindata) and follow instructions in deploy.md, replacing MPC with address of deploy contract AnyswapV5ERC20.sol on each chain (Line: 53)
