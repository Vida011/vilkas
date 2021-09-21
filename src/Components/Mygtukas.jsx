import React from "react";
import CountDisplay from './CountDisplay';

class Mygtukas extends React.Component {
  constructor() {
    super();
    this.state = {counter: 0};
  }

  activateLasers(e) {
    e.preventDefault();
    e.stopPropagation();
    // Wrong
    // this.setState({
    //     counter: this.state.counter + 1, 
    // })

    // Correct
    this.setState((state, props) => ({counter: state.counter + props.amount}));  // state yra obj.
    
  }

  valio(e) {
    console.log("Valio");
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div onClick={(e) => this.valio(e)}>
        // sukuriam teva, kuris bus React'o vaikas
        <a
          href=""
          className="container"
          onClick={(e) => this.activateLasers(e)}
        >
          <div className="submit-feedback">{this.props.tekstas} {this.state.counter}</div>
        </a>
        <CountDisplay digit={this.state.counter}></CountDisplay>
      </div>
    );
  }
}

export default Mygtukas;
