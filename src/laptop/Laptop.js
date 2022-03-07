import React from "react";
import './Laptop.css'
import {Price} from "../price/Price";
import {Spec} from "../spec/Spec";

export class Laptop extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.buttonHandler = this.buttonHandler.bind(this)
    }

    buttonHandler() {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <div>
                {!this.state.show &&
                    <button onClick={this.buttonHandler}> Show Laptop section</button>}
                {this.state.show &&
                    <article>
                        <button onClick={this.buttonHandler}> Hide Laptop section</button>
                        <br/>
                        <br/>
                        <table>
                            <tr>
                                <th>name</th>
                                <td>{this.props.details.name}</td>
                            </tr>
                            <tr>
                                <th>img</th>
                                <td><img src={this.props.details.img} alt="laptop" width='200px'/></td>
                            </tr>
                            <tr>
                                <th>price</th>
                                <td><Price price={this.props.details.price}/></td>
                            </tr>
                            <tr>
                                <th>spec</th>
                                {/*<td>{this.props.details.spec}</td>*/}
                                <td><Spec spec={this.props.details.spec}/></td>
                            </tr>
                        </table>
                    </article>}
            </div>
        )
    }
}