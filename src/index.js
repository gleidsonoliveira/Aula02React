import React, { Component } from "react";
import ReactDOM from "react-dom";
import Modal from "./UI/Modal";

import "./styles.css";

class App extends Component {
  state = { modalOpened: false };
  Strings = { title: "Pão de Batata gostosinho", message: "Bosta" };
  handleOpen = () => {
    this.setState({ modalOpened: true });
  };

  handleDismiss = () => {
    this.setState({ modalOpened: false });
  };

  render() {
    return (
      <div className="App">
        <Modal
          opened={this.state.modalOpened}
          handleDismiss={this.handleDismiss}
          title={this.Strings.title}
          message={this.Strings.message}
        />
        <button onClick={this.handleOpen}>Pão de Batata</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
