import React from "react";
import Text from "../../atoms/Text/Text";
import styled from "styled-components";
import style from "./Radio.module.css";

export default class Radio extends React.Component {
  render() {
    this.isActive = this.props.isActive;
    this.onClick = this.props.onClick;
    this.text = this.props.text;
    const InnerCircle = styled.div`
      width: 15px;
      height: 15px;
      background-color: #5a9cff;
      transition: 0.15s ease;
      border-radius: 20px;
      transform: scale(0);
      ${this.isActive ? "transform: scale(1);" : ""};
    `;

    return (
      <div className={style.container} onClick={this.onClick}>
        <div className={style.border}>
          <InnerCircle></InnerCircle>
        </div>
        <Text text={this.text} />
      </div>
    );
  }
}
