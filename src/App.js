import React, { Component } from "react";

import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/Cards/Card";
import Pallete from "./Components/Pallete/Pallete";
import Footer from "./Components/Footer/Footer";

class App extends Component {
  state = {
    cards: [],
    displayPallete: false,
    color: "#777777",
    id: 0,
  };
  palleteToggler = () => {
    let isDisplay = this.state.displayPallete;
    this.setState({ displayPallete: !isDisplay });
  };

  colorAdder = (event) => {
    event.preventDefault();
    let stateCopy = this.state;

    stateCopy.id = stateCopy.id + 1;
    stateCopy.cards.push({ id: stateCopy.id, code: this.state.color });
    this.setState({ cards: stateCopy.cards, id: stateCopy.id });
  };

  changeColor = (event) => {
    let stateCopy = this.state;
    stateCopy.color = event.target.value;

    stateCopy.color = event.target.value;

    this.setState({ color: stateCopy.color });
  };

  deleteHandler = (id) => {
    let stateCopy = this.state.cards.filter((card) => id !== card.id);
    this.setState({ cards: stateCopy });
  };

  render() {
    let cards = null;
    let colors = this.state.color;

    if (this.state.cards.length === 0) {
      cards = (
        <h1 className="display-4 pt-5 mt-5">
          There are no cards to display. Please add a card.
        </h1>
      );
    } else {
      cards = this.state.cards.map((card) => {
        return (
          <Card
            key={card.id}
            val={card.id}
            code={card.code}
            deleteCard={() => this.deleteHandler(card.id)}
          />
        );
      });
    }

    return (
      <div className="App">
        <Navbar />
        <div className="container about-container">{cards}</div>
        <Footer />
        <Pallete
          code={this.state.color}
          addColor={(event) => this.colorAdder(event)}
          changed={(event) => this.changeColor(event)}
          newShade={colors}
        />
      </div>
    );
  }
}

export default App;
