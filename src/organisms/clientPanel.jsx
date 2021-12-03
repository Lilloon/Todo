import React from "react";
import style from "./clientPanel.module.css";
import ColorsGroup from "../molecules/ColorsGroup/ColorsGroup";
import Input from "../atoms/Input/Input";
import Radio from "../molecules/Radio/Radio";

export default class ClientPanel extends React.Component {
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
      <div className={style.clientPanel}>
        <Input />
        <ColorsGroup colors={colors} />
        <Radio text="add description" />
      </div>
    );
  }
}
