const Token = artifacts.require("Token");
const BUSDSwap = artifacts.require("BUSDSwap");
const BUSD = artifacts.require("BUSD");

module.exports = async function(deployer) {
	// Deploy Token
	await deployer.deploy(Token);
	const token = await Token.deployed();

	// Deploy BUSDSwap
	await deployer.deploy(BUSDSwap, token.address);
	const BUSDSwap = await BUSDSwap.deployed();
	//Deploy BUSD
	await deployer.deploy(BUSD);
	const BUSD = await BUSD.deployed();

	// Transfer all the tokens to BUSDSwap (150 Cr)
	await token.transfer(BUSDSwap.address, "1500000000000000000000000000");
};