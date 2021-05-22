module.exports = async function ({ getNamedAccounts, deployments }) {
	const { deploy,deterministic } = deployments

  	const { deployer } = await getNamedAccounts()

	let deployOut = await deterministic("AnyswapCreate2Deployer",{
		from: deployer,
	});

	let deployRes = await deployOut.deploy();
	console.log(`Contract Address: ${deployOut.address} from: ${deployer}`)
}

module.exports.tags = ["AnyswapCreate2Deployer"]