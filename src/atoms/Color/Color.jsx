import React from "react";
import style from "./Color.module.css";
import styled from "styled-components";
import { colorObj } from "../../assets/colorObj";

export default class Color extends React.Component {
  render() {
    const onClick = () => {
      this.onClick(this.id);
    };

    this.id = this.props.id;
    this.onClick = this.props.onClick;
    this.color = this.props.color;
    this.isActive = this.props.isActive;
    const GlowRect = styled.div``;
    return (
      <GlowRect
        style={
          this?.isActive
            ? {
                WebkitBoxShadow: `0px 0px 10px 5px ${colorObj[this.color]}`,
              }
            : {}
        }
        onClick={onClick}
        className={style.border}
      >
        <div
          style={{ background: colorObj[this.color] }}
          className={`${style.innerRect} ${this.color}`}
        ></div>
      </GlowRect>
    );
  }
}
