module.exports = async function ({ getNamedAccounts, deployments }) {
	const { deploy,deterministic } = deployments

  	const { deployer } = await getNamedAccounts()

	const deployOut = await deploy("AnyswapCreate2Deployer",{
		from: deployer,
		deterministicDeployment:false
	});

	console.log(`Contract Address: ${deployOut.address} from: ${deployer}`)
}

module.exports.tags = ["AnyswapCreate2Deployer"]