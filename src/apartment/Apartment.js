import React from "react";
import {Summary} from "./summary/Summary";
import {Rooms} from "./rooms/Rooms";
import {Room} from "./room/Room";


export class Apartment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            apartment_num: null
        }
        this.buttonHandler = this.buttonHandler.bind(this)
    }

    buttonHandler() {
        this.setState({
            show: !this.state.show
        })
    }

    apartmentHandler(num) {
        this.setState({
            apartment_num: num,
        })
    }

    render() {
        let apartment_to_show = this.props.apartments[this.state.apartment_num]
        return (
            <div>
                {!this.state.show &&
                    <button onClick={this.buttonHandler}>Show Apartment section</button>}

                {this.state.show &&
                    <article>
                        <button onClick={this.buttonHandler}>Hide Apartment section</button>
                        <br/>
                        <button onClick={() => this.apartmentHandler(1)}> 1</button>
                        <button onClick={() => this.apartmentHandler(2)}> 2</button>
                        {this.state.apartment_num &&
                            <div>
                                <h1>Summary</h1>
                                <Summary apartment={apartment_to_show}/>
                                <h1>Rooms</h1>
                                <Rooms apartment={apartment_to_show}/>
                                <h1>Room Details</h1>
                                <Room room={apartment_to_show.rooms[0]}/>
                            </div>}
                    </article>}
            </div>
        )
    }
}