import React from "react";
import style from './Input.module.css';

export default class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = {  value: this.props.value }
    }

    render() {
        this.handler = this.props.Handler;
        this.onChange =  this.props.onChange;
        this.placeholder = this.props.placeholder
        const onEnterPressed = (e) => {
          if ( e.key === 'Enter') {
            this.handler();
          };
        };

       return (
           <input placeholder={this.placeholder}
            className={style.input} value={this.state.value}
            onChange={this.onChange}
            onKeyPress={this.handler ? this.onEnterPressed : (() => {})}
           />
       )
    }
}