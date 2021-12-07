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
    const GlowRect = styled.div`
      &:hover {
        -webkit-box-shadow: 0px 0px 10px 2px ${colorObj[this.color]};
        -moz-box-shadow: 0px 0px 10px 2px ${colorObj[this.color]};
        box-shadow: 0px 0px 10px 2px ${colorObj[this.color]};
      }
      ${this?.isActive
        ? `
                -webkit-box-shadow: 0px 0px 10px 5px ${
                  colorObj[this.color]
                } !important;
                -moz-box-shadow: 0px 0px 10px 5px ${
                  colorObj[this.color]
                }!important;
                box-shadow: 0px 0px 10px 5px ${colorObj[this.color]}!important
            `
        : ""}
    `;
    const InnerRect = styled.div`
      background-color: ${colorObj[this.color]};
    `;
    return (
      <GlowRect onClick={onClick} className={style.border}>
        <InnerRect className={`${style.innerRect} ${this.color}`}></InnerRect>
      </GlowRect>
    );
  }
}
