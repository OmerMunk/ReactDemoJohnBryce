import React from "react";
import {Rooms} from "../rooms/Rooms";


export class Summary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            meters: true,
            feets: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    SquareMetersSum(apartment) {
        let sum = 0;
        for (let i = 0; i < apartment.rooms.length; i++) {
            sum = sum + apartment.rooms[i].square_meters
        }
        return sum;
    }

    handleClick() {
        this.setState({
            meters: !this.state.meters,
            feets: !this.state.feets
        })
    }

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>
                            Country
                        </th>
                        <td>
                            {this.props.apartment.country}
                            <br/>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            city
                        </th>
                        <td>
                            {this.props.apartment.city}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Rooms Count
                        </th>
                        <td>
                            {this.props.apartment.rooms.length}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Total Square Meters
                        </th>
                        <td>
                            {this.state.meters &&
                                this.SquareMetersSum(this.props.apartment)}
                            {this.state.feets &&
                                this.SquareMetersSum(this.props.apartment) * 3.281}
                            <br/>
                            {this.state.meters &&
                                <button onClick={this.handleClick}>Convert to feets</button>}
                            {this.state.feets &&
                                <button onClick={this.handleClick}>Convert to meters</button>}
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}