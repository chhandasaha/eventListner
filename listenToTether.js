const ethers = require("ethers");
const usdtABI = require("./abis/usdt.json");
// const scfABI = require("./abis/scf.json");

// require("dotenv").config();
const network = "mainnet";

async function main() {
  const usdtAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
  // const scfAddress = "0xdd2ED9e6e71d0669C0C6645Ed0c04b0593abD757";
  const provider = new ethers.providers.AlchemyProvider(
    network,
    "4oXbnG6m2IN0Nhye5BA1M7_2WcnoFuuX"
  );

  const contract = new ethers.Contract(usdtAddress, usdtABI, provider);
  // const contract = new ethers.Contract(scfAddress, scfABI.abi, provider);

  contract.on("Transfer", (from, to, value, event) => {
    let info = {
      from: from,
      to: to,
      value: ethers.utils.formatUnits(value, 6),
      data: event,
    };
    // console.log("INFO->", info);
    console.log(JSON.stringify(info, null, 4));
  });
}

main();
