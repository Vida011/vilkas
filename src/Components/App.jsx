import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {bg: "palegreen"};
  }

  changeColor = () => ({
    // this.setState({
    //     bg: 'orangered',
    // });

    this.setState(state => {
        return(
        {bg: state.bg == 'palegreen' ? 'orangered': 'palegreen'};

  }
}
  render() {
    return (
      <div className="circle" style={{ backgroundColor: this.state. bg}}>
        <button className="container" onClick={this.changeColor}>Jaaa!</button>
      </div>
    )};
  }


export default App;
