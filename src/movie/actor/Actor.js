import React from "react";
import './Actor.css'

export class Actor extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const url = 'https://www.google.com/search?q=' + this.props.actor
        return (
            <div>
                <li>
                    <a className="a_actor" href={url} target="_blank"> {this.props.actor}</a>
                </li>
            </div>
        )
    }
}
