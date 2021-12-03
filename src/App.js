import "./App.css";
import React from "react";
import ColorsGroup from "./molecules/ColorsGroup/ColorsGroup";

export default class App extends React.Component {
  render() {
    const colors = [
      {
        id: 1,
        color: "red",
      },
      {
        id: 2,
        color: "blue",
      },
      {
        id: 3,
        color: "green",
      },
      {
        id: 4,
        color: "white",
      },
    ];
    return (
      <div className="App">
        <ColorsGroup colors={colors} />
      </div>
    );
  }
}
