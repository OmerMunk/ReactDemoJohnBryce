import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Welcome} from './Welcome'

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);


// function tick() {
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
// }
//
// setInterval(tick, 1000);


//function and class components
//function component
// function Welcome1(props) {
//     console.log(props)
//     return (
//         <div>
//             <h1>Hello, {props.name}</h1>
//             <p>Birth date: {props.birth_date}</p>
//         </div>
//     )
// }

// this two definitions is equal.

//class component
// class Welcome2 extends React.Component {
//
//     // constructor(props) {    THIS HAPPENS AUTOMATICALLY
//     //     super(props)
//     // }
//
//     render() {
//         return (
//             <div>
//                 <h1>Hello, {this.props.name}</h1>
//                 <p>Birth date: {this.props.birth_date}</p>
//             </div>
//         )
//     }
// }

// let element = <Welcome2/>

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
