import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    "0x96761a602Dd950f62A3927663070565e9Fb2FC5b"
);

export default instance;
