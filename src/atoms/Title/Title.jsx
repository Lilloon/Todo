import React from "react";
import style from './Title.module.css'

export default class Title extends React.Component {
    render() {
        this.title = this.props.title;
        return (
            <div className={style.title}>
                {this.title}
            </div>
        )
    }
};