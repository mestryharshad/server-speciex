import React, { Component } from "react";
import Main from "../../components/Main";
import "./NavBar.css";
// import Identicon from "identicon.js";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
    };
  }
  render() {
    return (
      <body>
        <main>
          <header>
            <div className="d-flex align-items-lg-center justify-content-center sv">
              <nav className="navbar navbar-expand-lg sv-navbar sv-navbar--light">
                <a className="navbar-brand sv-navbar-brand"  href={() => false}>
                  <img
                    className="sv-navbar-brand-img"
                    alt="Shivverse"
                    src="image/logo.png"
                  />
                </a>
                <button
                  className="navbar-toggler sv-navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon sv-navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse sv-navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto sv-navbar-nav">
                    {/* <li className="nav-item sv-navbar-nav-item active">
                    <a className="nav-link sv-navbar-nav-item-link" href="#">Trade <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item sv-navbar-nav-item">
                    <a className="nav-link sv-navbar-nav-item-link" href="#">Earn</a
                  </li>
                  <li className="nav-item sv-navbar-nav-item">
                    <a className="nav-link sv-navbar-nav-item-link" href="#" tabIndex={-1}>Win</a>
                  </li>
                  <li className="nav-item sv-navbar-nav-item">
                    <a className="nav-link sv-navbar-nav-item-link" href="#" tabIndex={-1}>NFT</a>
                  </li> */}
                    <li className="nav-item sv-navbar-nav-item">
                      <a className="addressStyle nav-link sv-navbar-nav-item-link"  href ="#/">
                        {this.props.parentState &&
                          this.props.parentState.account}
                      </a>
                    </li>
                  </ul>
                  <button
                    className="btn btn-primary-white"
                    style={{
                      backgroundColor: "#fff",
                      color: "#000",
                      fontSize: "1.25rem",
                      padding: "0.15rem 0.875rem",
                      marginLeft: "1rem",
                      borderRadius: "30px",
                      fontFamily: "Neutraface Text Bold",
                    }}
                    onClick={this.props.handleConnect}
                  >
                    Connect Wallet
                  </button>
                </div>
              </nav>
            </div>
          </header>
          <Main
            buyTokens={this.props.buyTokens}
            parentState={this.props.parentState}
          />
        </main>
      </body>
    );
  }
}
export default NavBar;
