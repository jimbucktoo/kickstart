import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    "0x723C7Cde405ADFC8Aa20B2E2E582e6849BBE3d16"
);

export default instance;
