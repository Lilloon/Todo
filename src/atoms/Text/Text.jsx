import React from "react";
import style from './Text.module.css';

export default class Text extends React.Component {
    render(){
        this.text = this.props.text;
        return (
            <div className={style.text}>
                {this.text}
            </div>
        )
    }
}