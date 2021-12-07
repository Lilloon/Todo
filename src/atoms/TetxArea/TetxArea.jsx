import React from "react";
import style from "./TetxArea.module.css";

export default class TextArea extends React.Component {
  render() {
    this.value = this.props.value;
    this.placeholder = this.props.placeholder;
    this.isActive = this.props.isActive;
    this.onChange = this.props.onChange;
    this.isError = this.props.isError;
    const onChangeHanlder = (e) => {
      this.onChange(e.target.value);
    };
    return (
      <textarea
        onChange={onChangeHanlder}
        className={`${style.textArea} ${this.isError ? style.error : ""}`}
        value={this.value}
        placeholder={
          this.isError ? "Поле не может быть пустым" : this.placeholder
        }
      />
    );
  }
}
