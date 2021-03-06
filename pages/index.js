import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
import { Link } from "../routes";
import Head from "next/head";

class CampaignIndex extends Component {
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        return { campaigns };
    }

    renderCampaigns() {
        const items = this.props.campaigns.map((address) => {
            return {
                header: address,
                description: (
                    <Link route={`/campaigns/${address}`}>
                        <a>View Campaign</a>
                    </Link>
                ),
                fluid: true,
            };
        });

        return <Card.Group items={items} />;
    }

    render() {
        return (
            <div className="container">
                <Head>
                    <title>CrowdCoin | Blockchain Kickstarter</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Layout>
                    <div>
                        <h3>Campaigns</h3>
                        <Link route="/campaigns/new">
                            <a>
                                <Button
                                    floated="right"
                                    content="Create Campaign"
                                    icon="add circle"
                                    primary
                                />
                            </a>
                        </Link>

                        {this.renderCampaigns()}
                    </div>
                </Layout>
            </div>
        );
    }
}

export default CampaignIndex;
