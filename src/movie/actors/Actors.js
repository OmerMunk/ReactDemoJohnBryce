import React from "react";
import {Actor} from "../actor/Actor";
import './Actors.css'

export class Actors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.actorHandler = this.actorHandler.bind(this)
    }

    actorHandler() {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        const ActorsList = []
        for (let i = 0; i < this.props.actors.length; i++) {
            ActorsList.push(
                <button className="actors_button" onClick={this.actorHandler}>
                    <Actor actor={this.props.actors[i]}/>
                </button>
            );
        }

        return (
            <div>
                <ul>
                    {ActorsList}
                </ul>
            </div>
        )
    }
}