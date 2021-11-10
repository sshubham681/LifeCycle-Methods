import React, { Component } from 'react'

class Counter extends Component {
    constructor() {
        console.log("constructor")
      super();
      this.state = {
        count: 0,
        toggle:true
      };
    }
    //Lifecycle Methods
    
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps");
        return null;
    }
    componentDidMount(){
        console.log("componentDidMount")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate")
        return true;
    }

    increment() {
      this.setState({
        count: this.state.count + 1
      });
    }
    decrement() {
      this.setState({
        count: this.state.count - 1
      });
    }
  
    render() {
        console.log("render");
      return (
        <div>
          <h1>Class Counter</h1>
          <button onClick={() => this.increment()}>+</button>
          <h2>{this.state.count}</h2>
          <button onClick={() => this.decrement()}>-</button>
          
        </div>
      );
    }
  }
  export default Counter;
  