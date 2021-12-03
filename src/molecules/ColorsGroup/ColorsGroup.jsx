import React from "react";
import style from "./ColorsGroup.module.css";
import Color from "../../atoms/Color/Color";
import Title from "../../atoms/Title/Title";

export default class ColorsGroup extends React.Component {
  render() {
    const isSelected = (id) => {
      console.log(this.selectedId === id);
      if (this.selectedId === id) return true;
      return false;
    };
    this.onClick = this.props.onClick;
    this.selectedId = this.props.selectedId;
    this.colors = this.props.colors;
    const onColorClick = (id) => {
      console.log(id);
      this.onClick(id);
    };
    return (
      <div className={style.colorsGroup}>
        <Title title="Choose color of card" />
        <div className={style.group}>
          {this.colors &&
            this.colors.map((color) => (
              <Color
                isActive={isSelected(color.id)}
                color={color.color}
                id={color.id}
                onClick={onColorClick}
                key={color.id}
              />
            ))}
        </div>
      </div>
    );
  }
}
