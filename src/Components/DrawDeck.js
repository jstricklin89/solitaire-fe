import React from "react";
import Card from "./Card";

export default class DrawDeck extends React.Component {
  render() {
    const { deck, drawCardClick, id } = this.props;
    // console.log("updatedDrawDeck==>", deck);
    return (
      <div
        className="card"
        onClick={() => {
          drawCardClick(deck[0], id);
        }}
      >
        {deck[0] ? (
          <img src={require("../images/card_back.png")} alt="oh!no" />
        ) : null}
      </div>
    );
  }
}
