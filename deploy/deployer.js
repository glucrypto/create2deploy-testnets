module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy } = deployments

  const { deployer } = await getNamedAccounts()

  await deploy("AnyswapCreate2Deployer", {
    from: deployer,
    log: true,
  })
}

module.exports.tags = ["AnyswapCreate2Deployer"]