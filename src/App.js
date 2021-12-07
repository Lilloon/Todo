import "./App.css";
import React from "react";
import ClientPanel from "./organisms/clientPanel";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ClientPanel />
      </div>
    );
  }
}
