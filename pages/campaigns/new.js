import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Form, Button, Input, Message } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";
import Head from "next/head";

class CampaignNew extends Component {
    state = {
        minimumContribution: "",
        errorMessage: "",
        loading: false,
    };

    onSubmit = async (event) => {
        event.preventDefault();

        const accounts = await web3.eth.getAccounts();

        this.setState({ loading: true, errorMessage: "" });

        try {
            await factory.methods
                .createCampaign(this.state.minimumContribution)
                .send({
                    from: accounts[0],
                });
            Router.pushRoute("/");
        } catch (err) {
            this.setState({ errorMessage: err.message });
        }

        this.setState({ loading: false });
    };

    render() {
        return (
            <div className="container">
                <Head>
                    <title>CrowdCoin | Blockchain Kickstarter</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Layout>
                    <h3>Create A Campaign</h3>
                    <Form
                        onSubmit={this.onSubmit}
                        error={!!this.state.errorMessage}
                    >
                        <Form.Field>
                            <label>Minimum Contribution</label>
                            <Input
                                label="wei"
                                labelPosition="right"
                                value={this.state.minimumContribution}
                                onChange={(event) =>
                                    this.setState({
                                        minimumContribution: event.target.value,
                                    })
                                }
                            />
                        </Form.Field>
                        <Message
                            error
                            headers="Oops!"
                            content={this.state.errorMessage}
                        ></Message>
                        <Button loading={this.state.loading} primary>
                            Create
                        </Button>
                    </Form>
                </Layout>
            </div>
        );
    }
}

export default CampaignNew;
