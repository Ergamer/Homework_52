import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Number from './Numbers/Numbers';

class App extends Component {
    state = {
       numbers: []
    };
    getSomeDigit = () => {
      let someDigit = [];
        let counter = 5;
        while(counter > 0){
            let randomDigit = Math.floor(Math.random() * 36 + 1);
            if (someDigit.indexOf(randomDigit) === -1){
                someDigit.push(randomDigit);
                counter --
            }
        }
        this.setState({numbers: someDigit.sort((a, b)=> a > b)});
    };
  render() {
    return (
      <div className="App">
         <Number loto={this.state.numbers[0]}/>
          <Number loto={this.state.numbers[1]}/>
          <Number loto={this.state.numbers[2]}/>
          <Number loto={this.state.numbers[3]}/>
          <Number loto={this.state.numbers[4]}/>
          <button className="btn" onClick={this.getSomeDigit}>Play game</button>
      </div>
    );
  }
}

export default App;
