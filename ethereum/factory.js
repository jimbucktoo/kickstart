import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    "0x0B1570E3A31010238582B07609CeF2b92381eCBa"
);

export default instance;
