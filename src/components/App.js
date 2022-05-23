import React, { Component } from "react";
import Web3 from "web3";
import Earn from "./Navigation/Earn"
import Nft from "./Navigation/Nft"
import Trade from "./Navigation/Trade"
import NavBar from "./Navigation/NavBar";
import Win from "./Navigation/Win"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Swap from "./Swap/Swap";
import "./App.css";
import { BigNumber } from "bignumber.js";
import Swal from "sweetalert2";
const BUSDSwapAddress = "0x61Cf31d3B5EAFCa1Df20a6B2a2C526F522A2bD94";
const TokenAddress = "0x893E374cb164b53a04a31aa8Ef5343b0F829D6Bb";
const BUSDAddress = "0xBb3fbbc404A539F82216A3f89e81CC49C8a24DD2";

const BUSDSwapAbi = [{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"address","name":"busdAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"BUSD","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenAmount","type":"uint256"}],"name":"SellToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_busdAmount","type":"uint256"}],"name":"buyTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"multipler","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"registeredUser","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"tokensAlloted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokensPerBUSD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalBUSDSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];

const TokenAbi = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];

const BUSDABi = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];

// const BigNumber = require('bignumber.js');
class App extends Component {

	buyTokens = async (busdAmount) => {
		try {
			this.setState({ loading: true });
			console.log("busdAmount App", busdAmount);
			let x;
			x = (busdAmount * 10 ** 18).toString();
			let z = new BigNumber(x);
			let a = z.toFixed();
			//  let z = new BigNumber(x);
			// z.toString();// "1.111222233334444555566e+21"// z.toFixed();// console.log(z);
			this.state.BUSDContract.methods
				.approve(BUSDSwapAddress, a)
				.send({ from: this.state.account })
				.on("transactionHash", (hash) => {
					this.state.BUSDSwap.methods
						.buyTokens(busdAmount.toString())
						.send({ from: this.state.account })
						.on("transactionHash", (hash) => {
							window.location.reload();
						});
				});
		} catch (error) {
			Swal.fire({
				position: "top",
				icon: 'question',
				text: 'Wallet is not connected',
			})
		}
	};

	sellTokens = async (tokenAmount) => {
		try {
			this.setState({ loading: true });
			let a;
			a = (tokenAmount * 10 ** 18).toString();
			let b = new BigNumber(a);
			let c = b.toFixed();
			this.state.TokenContract.methods
				.approve(BUSDSwapAddress, c)
				.send({ from: this.state.account })
				.on("transactionHash", (hash) => {
					this.state.BUSDSwap.methods
						.SellToken(c.toString())
						.send({ from: this.state.account })
						.on("transactionHash", (hash) => {
							window.location.reload();
						});
				});

		} catch (error) {
			Swal.fire({
				position: "top",
				icon: 'question',
				text: 'Wallet is not connected',
			})
		}

	};

	// react state
	constructor(props) {
		super(props);
		this.state = {
			account: "",
			BUSDContract: {},
			TokenContract: {},
			BUSDSwap: {},
			imagesCount: "",
			TokenBalance: "0",
			busdBalance: "0",
			loading: true,
		};
	}
	render() {
		const handleConnect = async () => {
			await loadWeb3();
			await loadBlockchainData();
		}
		const loadBlockchainData = async () => {
			try {
				const web3 = window.web3;
				// Load BUSD contract
				const BUSDContract = await new web3.eth.Contract(BUSDABi, BUSDAddress);
				this.setState({ BUSDContract });
				// Load Token contract
				const TokenContract = await new web3.eth.Contract(TokenAbi, TokenAddress);
				this.setState({ TokenContract });
				// Load BUSD SWAP contract
				const BUSDSwap = await new web3.eth.Contract(BUSDSwapAbi, BUSDSwapAddress);
				this.setState({ BUSDSwap });

				// get account
				const accounts = await web3.eth.getAccounts();
				this.setState({ account: accounts[0] });

				const balance = await BUSDContract.methods.balanceOf(this.state.account).call();
				const busdconvertinint = parseInt(balance);
				const totalBalance = (busdconvertinint / 10 ** 18);
				console.log('getBalance........', totalBalance);
				
				
				const imagesCount = await BUSDSwap.methods.totalBUSDSale().call();
				const a = parseInt(imagesCount)
				// const ethtovalue = (a / 10 ** 18)
				console.log("imagesCount......", a)
				
				this.setState({ imagesCount: a })
				
				// const balance= await BUSDContract.methods.balanceOf(BUSDAddress).send();
				// var c =parseInt(balance);
				// console.log("balance.....................",balance)
				// console.log("c ",c);
				// // alert(balance)
				// Set user BUSD balance
				let busdBalance = await BUSDContract.methods.balanceOf(this.state.account).call();
				this.setState({ busdBalance: busdBalance });
				let TokenBalance = await TokenContract.methods.balanceOf(this.state.account).call();
				this.setState({ TokenBalance: TokenBalance });
				// Loading is done, to set loading == false
				this.setState({ loading: false });

			} catch (error) {
				console.log();
			}
		}
		const loadWeb3 = async () => {
			// Modern dapp browsers...
			if (window.ethereum) {
				window.web3 = new Web3(window.ethereum);
				await window.ethereum.enable();
			}
			// Legacy dapp browsers...
			else if (window.web3) {
				window.web3 = new Web3(window.web3.currentProvider);
			}
			
			else {
				// window.alert("Non-Ethereum browser detected. You should consider trying MetaMask!");
				Swal.fire({
					position: "top",
					icon: 'error',
					text: 'Non-Ethereum browser detected. You should consider trying MetaMask!',
				})
			}
		}
		console.log("this.state.imagesCount....", this.state.imagesCount);
		return (
			<div>
				<BrowserRouter>
					<Routes>
						<Route exact path="/" element={<NavBar parentState={this.state} buyTokens={this.buyTokens} handleConnect={handleConnect} />} />
						<Route exact path="/Earn" element={<Earn />} />
						<Route exact path="/Trade" element={<Trade />} />
						<Route exact path="/Win" element={<Win />} />
						<Route exact path="/Nft" element={<Nft />} />
						<Route exact path="/Swap" element={<Swap parentState={this.state} sellTokens={this.sellTokens} handleConnect={handleConnect} />} />
					</Routes>
				</BrowserRouter>
			</div>
		);
	}
}
export default App;
