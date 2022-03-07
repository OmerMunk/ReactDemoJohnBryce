import React from "react";
import './Clock.css'


export class Clock extends React.Component {

    constructor(props) {
        console.log('inside constructor')
        super(props);
        this.state = {
            date: new Date(),
            isToggleOff: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    // componentDidMount() {
    //     console.log('inside componentDidMount')
    //
    //     this.timerID = setInterval(
    //         () => this.tick(), //the function we call
    //         1000 // how often to call the function
    //     );
    // }

    componentWillUnmount() {
        console.log('inside componentWillUnmount')

        clearInterval(this.timerID)
    }

    tick() {
        console.log('inside tick')

        this.setState(
            {
                date: new Date()
            }
        )
    }

    handleClick() {
        this.setState({
            isToggleOff: !this.state.isToggleOff
        })
        if (this.state.isToggleOff) {
            this.timerID = setInterval(
                () => this.tick(), //the function we call
                1000 // how often to call the function
            );
        } else {
            clearInterval(this.timerID)
        }

    }

    render() {
        console.log('inside render')
        return (
            <div className="div_col">
                <p> {this.props.name}</p>
                <button className="show_clock" onClick={this.handleClick}>
                    {this.state.isToggleOff ? 'Turn on time' : 'Turn off time'}
                </button>
                {!this.state.isToggleOff &&
                    <h2>It is {this.state.date.toLocaleTimeString(this.props.config)}</h2>
                }
            </div>
        );
    }
}