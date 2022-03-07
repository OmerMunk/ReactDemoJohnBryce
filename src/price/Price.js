import React from "react";
import './Price.css'

export class Price extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: null
        }
        this.showPrice = this.showPrice.bind(this);
    }

    showPrice(toggle) {
        this.setState({
            toggled: toggle
        })
    }

    render() {
        return (
            <div>
                <span>{this.props.price}$</span>
                <br/>
                <label>Payments: </label>
                <button className="price_button" onClick={() => this.showPrice(12)}>12</button>
                <button className="price_button" onClick={() => this.showPrice(24)}>24</button>
                <button className="price_button" onClick={() => this.showPrice(36)}>36</button>
                <br/>

                {this.state.toggled &&
                    <span>{this.state.toggled} payments :{this.props.price / this.state.toggled}$</span>}
            </div>
        )
    }


}