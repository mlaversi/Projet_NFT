const hre= require("hardhat");

async function main() {

  const TiketEvent = await hre.ethers.getContractFactory("tiketEvent");
  const tiketEvent = await TiketEvent.attach("0xDf518984AabbfF90D9AC4e2101633c2E8Cb4D606");

  const tr = await tiketEvent.mintNFT("0xf9335D3D5a22aDA02fcb12fE48cd0383F9D1EA20", "https://gateway.pinata.cloud/ipfs/Qme6eNVqZrGgEPro4jFyFEbtMmQQT4mKB4bRberJLXvcuq");
  console.log(
    ` tr`, tr
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors. 0x651491353DcC54ea045F5AC3E840381677b3aC22
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//https://mumbai.polygonscan.com/tx/0x2df212e1c7db88bab066a000e611c95d82233f5c0b08f3eff1bfeeea6a150d27