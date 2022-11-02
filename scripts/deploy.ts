const hre = require("hardhat");

async function main() {

  const TiketEvent = await hre.ethers.getContractFactory("tiketEvent");
  const tiketEvent = await TiketEvent.deploy();

  await tiketEvent.deployed();

  console.log(
    ` deployed to ${tiketEvent.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});