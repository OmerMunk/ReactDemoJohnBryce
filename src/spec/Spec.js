import React from "react";
export class Spec extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
                <span>{this.props.spec}</span>
            </div>
        )
    }
}