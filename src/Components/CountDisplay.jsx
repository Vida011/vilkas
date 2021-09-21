import React from "react";

class CountDisplay extends React.Component {

  render() {
    return (
      <div className= 'nice-d'>
      {this.props.digit} 
      </div>
    );
  }
}

export default CountDisplay;
