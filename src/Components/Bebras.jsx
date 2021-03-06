import React from 'react';

class Bebras extends React.Component {
  constructor() {
    super();
    this.state = {date: new Date()};
    this.tick = this.tick.bind(this);
  }

    tick() {
        this.setState( {date: new Date()} );
    }

    componentDidMount() {
        console.log('jau', this.props.bebras);

        document.querySelector('.kvadratas').
        addEventListener('click, this.tick');
    

        this.timerID = setInterval(this.tick,1000 );
 }

 componentWillUnmount() {
     clearInterval(this.timerID);
 }

  render() {
    return (
      <span>
        {this.props.bebras}
        <hr />
        {this.state.date.toLocaleTimeString()}
      </span>
    );
  }
}

// bus Komponenetas Komponenete ir susidės iš vieno span'o

// function bebras(props) {
//   // Bebrui reikia propso Bebras
//   return (
//     <span>{props.bebras}</span> // šitie propsai nueis į App.jsx komponentą ir bus atvaizduoti
//   );
// }

export default Bebras;
