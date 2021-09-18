import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Element from './Components/element';

// import App from './Components/App';


// const superElement = (
//   <div>
//    <h1>Hello, Bebras!</h1>
//    <small>Labas</small>
//    </div>
// );


ReactDOM.render(
   <Element name={'Petras'} surname={'Antanas'}></Element>, // čia naudojam komponent. iš jsx perduodam 'name'
   //ir'surname'. Čia vyksata el. iškvietimas. Suteikiamos savybės propsui
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

