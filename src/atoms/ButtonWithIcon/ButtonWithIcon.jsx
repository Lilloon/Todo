import React from "react";
import style from "./ButtonWithIcon.module.css";

export default class ButtonWithIcon extends React.Component {
  render() {
    this.onCLickHandler = this.props.onClick;
    this.icon = this.props.icon;

    return (
      <div className={style.button} onClick={this.onCLickHandler}>
        <img className={style.icon} src={this.icon} />
      </div>
    );
  }
}
