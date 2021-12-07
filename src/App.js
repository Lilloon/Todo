import "./App.css";
import React from "react";
import ClientPanel from "./organisms/clientPanel";
import TaskCardsList from "./organisms/TaskCardsList/TaskCardsList";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TaskCardsList />
      </div>
    );
  }
}
