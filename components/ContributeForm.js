import React, { Component } from "react";
import { Form, Input, Message, Button } from "semantic-ui-react";
import Campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import { Router } from "../routes";

class ContributeForm extends Component {
    state = {
        value: "",
        errorMessage: "",
        loading: false,
    };

    render() {
        return (
            <Form>
                <Form.Field>
                    <label>Amount to Contribute</label>
                    <Input
                        value={this.state.value}
                        onChange={(event) =>
                            this.setState({ value: event.target.value })
                        }
                        label="ether"
                        labelPosition="right"
                    />
                </Form.Field>

                <Message
                    error
                    header="Oops!"
                    content={this.state.errorMessage}
                />
                <Button primary loading={this.state.loading}>
                    Contribute!
                </Button>
            </Form>
        );
    }
}

export default ContributeForm;
