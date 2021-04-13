import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    "0x4A4b650dA1800C7881F460C6b2EF849869c19f54"
);

export default instance;
