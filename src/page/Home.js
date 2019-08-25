import React, { Component } from 'react'
import ReactDOM from 'react-dom'

function Com(props) {
  return <p>{props.name}</p>;
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { date: 0 };
  }
  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState((prevState, props) => {
      return {
        date: prevState.date + 1
      }
    });
  }
  handleClick = (id) => {
    console.log(this.state.date);
    console.log(id);
  }
  render(){
    return (
      <div>
        <span>{this.state.date}</span>
        <Com name="haha"></Com>
        <button onClick={this.handleClick.bind(this,444)}>
          button
        </button>
      </div>
    );
  }
}

export default Home;