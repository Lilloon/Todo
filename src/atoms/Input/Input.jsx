import React from "react";
import style from "./Input.module.css";

export default class Input extends React.Component {
  render() {
    this.isError = this.props.isError;
    this.value = this.props.value;
    this.handler = this.props.handler;
    this.onChange = this.props.onChange;
    this.placeholder = this.props.placeholder;
    const onEnterPressed = (e) => {
      if (e.key === "Enter") {
        this.handler();
      }
    };
    const changeHandler = (e) => {
      this.onChange(e.target.value);
    };

    return (
      <input
        placeholder={
          !this.isError ? this.placeholder : "Поле должно быть заполнено"
        }
        className={`${style.input} ${this.isError ? style.error : ""}`}
        value={this.value}
        onChange={changeHandler}
        onKeyDown={this.handler ? onEnterPressed : () => {}}
      />
    );
  }
}
