import './App.css';

import React from 'react';
import TextArea from './atoms/TetxArea/TetxArea';

export default class App extends React.Component {
  render(){
    return (
      <div className="App">
        <TextArea />
      </div>
    );
  }
}
