import React, { Component } from "react";
import BuyFrom from "./BuyForm";
import SellForm from "./SellForm";

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentForm: "buy",
		};
	}
	render() {
		let content;
		let parentState = this.props.parentState;
		if (this.state.currentForm === "buy")
			content = (
				<BuyFrom
					busdBalance={parentState.busdBalance}
					TokenBalance={parentState.TokenBalance}
					buyTokens={this.props.buyTokens}
					parentState={this.props.parentState}
				/>
			);
		else
			content = (
				<SellForm
					busdBalance={this.props.busdBalance}
					TokenBalance={this.props.TokenBalance}
					sellTokens={this.props.sellTokens}
					parentState={this.props.parentState}
				/>
			);
		return (
			<div id="content" className="mt-">
			<div>
				<div>{content}</div>
			</div>
		</div>
		);
	}
}

export default Main;
