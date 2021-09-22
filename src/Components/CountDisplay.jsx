import React from "react";

class CountDisplay extends React.Component {

  render() {

    if(this.props.digit >30) { //jeigu props>30 - pasidaro žalias
      return (
        <div className= 'nice-d green'>
        {this.props.digit} 
        </div>
      );

    }
    return (
      <div className= 'nice-d'>
      {this.props.digit} 
      </div>
    );
  }
}

export default CountDisplay;
