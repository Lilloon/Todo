import React from "react";
import style from "./Button.module.css";
import Title from "../../atoms/Title/Title";

export default class Button extends React.Component {
    render() {
        this.onClick = this.props.onClick;
        this.text = this.props.text;
        const onEnterPressed = (e) => {
            if (e.key === 'Enter') {
                this.onClick()
            }
        }
        return (
            <button className={style.button} onClick={this.onClick}><Title title={this.text} onKeyPressed={onEnterPressed} /></button>
        )
    }    
}