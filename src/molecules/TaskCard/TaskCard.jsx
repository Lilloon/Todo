import React from "react";
import style from "./TaskCard.module.css";
import Text from "../../atoms/Text/Text";
import Title from "../../atoms/Title/Title";
import ButtonWithIcon from "../../atoms/ButtonWithIcon/ButtonWithIcon";
import trash from "../../assets/img/trash.png";
import arrow from "../../assets/img/arrow.png";
import styled from "styled-components";
import { colorObj } from "../../assets/colorObj";

export default class TaskCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  render() {
    this.card = this.props.card;
    const { selectedColor } = this.card;
    const Border = styled.div`
      border: 2px solid ${colorObj[selectedColor.color]};
      &:hover {
        -webkit-box-shadow: 0px 0px 10px 2px ${colorObj[selectedColor.color]};
        -moz-box-shadow: 0px 0px 10px 2px ${colorObj[selectedColor.color]};
        box-shadow: 0px 0px 10px 2px ${colorObj[selectedColor.color]};
      }
    `;
    const ArrowDiv = styled.div`
      transition: 0.15s ease;
      ${this.state.isOpen
        ? "transform: rotate(180deg)"
        : "transform: rotate(0)"}
    `;
    const toogleWrapper = () => {
      this.setState({ isOpen: !this.state.isOpen });
      console.log(this.state.isOpen);
    };
    return (
      <Border className={style.taskCard}>
        <div className={style.main}>
          <Title title={this.card.inputValue} />
          <div className={style.buttons}>
            <ButtonWithIcon icon={trash} />{" "}
          </div>
        </div>
        {this.card?.isRadioActive ? (
          <div className={style.additional}>
            {this.state.isOpen ? (
              <Text text={this.card.textAreaValue} />
            ) : (
              <></>
            )}{" "}
            <ArrowDiv>
              <ButtonWithIcon icon={arrow} onClick={toogleWrapper} />
            </ArrowDiv>
          </div>
        ) : (
          <></>
        )}
      </Border>
    );
  }
}
