import React from "react";
import style from "./ColorsGroup.module.css";
import Color from "../../atoms/Color/Color";
import Title from "../../atoms/Title/Title";

class ColorsGroup extends React.Component {
  render() {
    const isSelected = (id) => {
      if (this.selectedColor?.id === id) return true;
      return false;
    };
    this.setSelectedColor = this.props.setSelected;
    this.onClick = this.props.onClick;
    this.selectedColor = this.props.selectedColor;
    this.colors = this.props.colors;
    const onColorClick = (colorObj) => {
      this.setSelectedColor(colorObj);
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
                onClick={() => {
                  onColorClick(color);
                }}
                key={color.id}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default ColorsGroup;
