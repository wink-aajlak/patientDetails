import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import factory from "./ethereum/factory";
import web3 from "./ethereum/web3";

if (module.hot) {
  module.hot.accept();
}

class App extends Component {
  state = {
    mr_number: "",
    patientName: "",
    patientAddress: "",
    mr_number2: "",
    output: false,
    result: [],
  };

  savePatient = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    await factory.methods
      .savePatient(
        this.state.mr_number,
        this.state.patientName,
        this.state.patientAddress
      )
      .send({
        from: accounts[0],
      });
  };

  getPatient = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    this.setState({ output: true });
    await factory.methods
      .getPatient(this.state.mr_number2)
      .call({ from: accounts[0] })
      .then((res) => this.setState({ result: res }));
  };

  render() {
    console.log(this.state.mr_number);
    console.log(this.state.patientName);
    console.log(this.state.patientAddress);
    console.log(this.state.mr_number2);
    console.log(this.state.result);
    return (
      <div>
        <h2 class="ui header" style={{paddingTop: '50px', paddingLeft: '25px'}}>
          <i aria-hidden="true" class="stethoscope icon"></i>
          <div class="content">
            Medi_Care<div class="sub header">Create and View patient records</div>
          </div>
        </h2>
        <div className="ui container" onSubmit={this.savePatient}>
          <form className="ui form">
            <div className="field">
              <label>Mr number</label>
              <input
                placeholder="Mr number"
                value={this.state.mr_number}
                onChange={(event) => {
                  this.setState({ mr_number: event.target.value });
                }}
              />
            </div>
            <div className="field">
              <label>Patient Name</label>
              <input
                placeholder="Enter Patient Name"
                value={this.state.patientName}
                onChange={(event) => {
                  this.setState({ patientName: event.target.value });
                }}
              />
            </div>
            <div className="field">
              <label>Patient Address</label>
              <input
                placeholder="Enter Patient Crypro Address"
                value={this.state.patientAddress}
                onChange={(event) => {
                  this.setState({ patientAddress: event.target.value });
                }}
              />
            </div>
            <button className="ui primary icon right labeled button">
              Add Patient<i aria-hidden="true" className="plus icon"></i>
            </button>
          </form>
        </div>
        <div className="ui divider"></div>
        <div className="ui container" onSubmit={this.getPatient}>
          <form className="ui form">
            <div className="field">
              <label>Mr Number</label>
              <input
                placeholder="Enter Patient Mr"
                value={this.state.mr_number2}
                onChange={(event) => {
                  this.setState({ mr_number2: event.target.value });
                }}
              />
            </div>
            <button className="ui primary icon right labeled button">
              View Patient
              <i aria-hidden="true" className="right arrow icon"></i>
            </button>
          </form>
        </div>
        <div className="ui divider"></div>
        <div className="ui container">
          <div style={{ display: this.state.output ? "block" : "none" }}>
            <div className="header">Patient Details</div>
            <ul className="list">
              <li className="content">{this.state.result[0]}</li>
              <li className="content">{this.state.result[1]}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
