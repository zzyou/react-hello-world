import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = { greeting: 'Hello'};
    this.removeGreeting = this.removeGreeting.bind(this);
    this.frenchify = this.frenchify.bind(this);
  }
  removeGreeting() {
    this.props.removeGreeting(this.props.name);
  }
  frenchify() {
    this.setState({ greeting: 'Bonjour' });
  }
  render() {
    return (
      <div className="HelloWorld">
      {this.state.greeting} {this.props.name}!
      <br/>
      <button onClick={this.frenchify}>Frenchify!</button>
      <br/>
      <button onClick={this.removeGreeting}>Remove Me!</button>
      </div>
    );
  }
};


export default HelloWorld;
