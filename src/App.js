import logo from './logo.svg';
import './App.css';
import './clock/Clock.css'
import {Welcome} from "./Welcome";
import {Clock} from './clock/Clock.js'
import {Laptop} from './laptop/Laptop.js'
import React from "react";
import {
    apartment1,
    apartment2,
    movie1,
    movie2
} from './data'
import {Apartment} from "./apartment/Apartment";
import {Movie} from "./movie/Movie"

const apartments = {
    '1': apartment1,
    '2': apartment2
}

const movies = {
    '1': movie1,
    '2': movie2
}

let laptop1 = {
    name: "asus",
    img: "/img/asus-e410_webpage-photo_8k_star-black_05.jpg",
    price: 7200,
    spec: "i7 8GB RAM"
}

let isLoggedIn = true;

function App() {
    return (
        <div className="App">
            <button> Log In</button>
            <Welcome name='omer' birth_date='16/12/1995' loggedIn={isLoggedIn}/>
            <div className="div_col">
                {/*<div className="div_row">*/}
                {/*    <Clock config='ko-KR'/>*/}
                {/*    <Clock config='fa-IR'/>*/}
                {/*</div>*/}
                {/*<div className="div_row">*/}
                {/*    <Clock config='ar-EG'/>*/}
                <Clock/>
                {/*</div>*/}
                <br/>
                <br/>
                <br/>


                <div>
                    <h1>Laptop section</h1>
                    <Laptop details={laptop1}/>
                </div>
                <br/>
                <div>
                    <h1>
                        Apartments section
                    </h1>

                    <Apartment apartments={apartments}/>
                </div>
                <br/>
                <br/>
                <div>
                    <h1>Movies section</h1>
                    <Movie movies={movies}/>
                </div>
                <br/>
                <br/>
            </div>
        </div>
    );
}

export default App;
