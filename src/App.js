import './App.css';
import React from 'react';
import Color from './atoms/Color/Color';


export default class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Color color='green' />
        <Color color='red' />
        <Color color='blue' />
        <Color color='white' />
      </div>
    );
  }
}
