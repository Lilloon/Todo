import React from "react";
import style from "./clientPanel.module.css";
import ColorsGroup from "../molecules/ColorsGroup/ColorsGroup";
import Input from "../atoms/Input/Input";
import Radio from "../molecules/Radio/Radio";
import TextArea from "../atoms/TetxArea/TetxArea";
import Title from "../atoms/Title/Title";
import Button from "../molecules/Button/Button";
import { addTask } from "../actions/tasksAction";
import store from "../store/store";

export default class ClientPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      selectedColor: { id: 1, color: "red" },
      isRadioActive: false,
      textAreaValue: "",
      isInputError: false,
      isTextAreaError: false,
    };
  }
  render() {
    const generateId = () => {
      return Math.floor(Math.random() * 1000000);
    }
    const onChangeInput = (value) => {
      this.setState({ inputValue: value });
    };
    const setSelected = (color) => {
      this.setState({ selectedColor: color });
    };
    const toogleRadio = () => {
      this.setState({ isRadioActive: !this.state.isRadioActive });
      if (!this.state.isRadioActive) this.setState({ textAreaValue: "" });
    };
    const onChangeTextArea = (value) => {
      this.setState({ textAreaValue: value });
    };

    const onClickAdd = () => {
      if (!this.state.inputValue.trim()) {
        this.setState({
          isInputError: true,
        });
      }
      if (!this.state.textAreaValue.trim() && this.state.isRadioActive) {
        this.setState({
          isTextAreaError: true,
        });
      }
      if (
        this.state.inputValue &&
        (this.state.isRadioActive ? this.state.textAreaValue : true)
      ) {
        store.dispatch(addTask({id:generateId(), ...this.state, date: new Date(), isDone:false }));
        this.setState({
          inputValue: "",
          textAreaValue: "",
          isInputError: false,
          isTextAreaError: false,
          isRadioActive: false,
        });
      }
    };
    const colors = [
      {
        id: 1,
        color: "red",
      },
      {
        id: 2,
        color: "blue",
      },
      {
        id: 3,
        color: "green",
      },
      {
        id: 4,
        color: "white",
      },
    ];
    return (
      <div className={style.clientPanel}>
        <Title title="Let's append new task!" />
        <Input
          value={this.state.inputValue}
          onChange={onChangeInput}
          isError={this.state.isInputError}
          placeholder="Write some text"
        />
        <ColorsGroup
          colors={colors}
          selectedColor={this.state.selectedColor}
          setSelected={setSelected}
        />
        <Radio
          text="add description"
          isActive={this.state.isRadioActive}
          onClick={toogleRadio}
        />
        {this.state.isRadioActive && (
          <TextArea
            placeholder="Write some text"
            value={this.state.textAreaValue}
            onChange={onChangeTextArea}
            isError={this.state.isTextAreaError}
          />
        )}
        <div className={style.buttonWrapper}>
          <Button text="Add" onClick={onClickAdd} />
        </div>
      </div>
    );
  }
}
