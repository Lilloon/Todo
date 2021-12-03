import React from "react";
import style from "./ColorsGroup.module.css";
import Color from "../../atoms/Color/Color";
import Title from "../../atoms/Title/Title";
import store from "../../store/store";
import { setSelectedColor } from "../../actions/selectedColorAction";
import { connect } from "react-redux";

class ColorsGroup extends React.Component {
  render() {
    const isSelected = (id) => {
      if (this.selectedId === id) return true;
      return false;
    };
    this.onClick = this.props.onClick;
    this.selectedId = store.getState().selectedColorReducer.selectedColor.id;

    this.colors = this.props.colors;
    const onColorClick = (colorObj) => {
      store.dispatch(setSelectedColor(colorObj));
      this.selectedId = this.props.selectedColor.id;
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

const mapStateToProps = (state) => {
  return {
    selectedColor: state.selectedColorReducer.selectedColor,
  };
};
export default connect(mapStateToProps)(ColorsGroup);
