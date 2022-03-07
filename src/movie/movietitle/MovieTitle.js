import React from "react";

export class MovieTitle extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                {this.props.movie.title}
                <br/>
                {this.props.movie.description}
                <br/>
                <img alt='dont look up' src={this.props.movie.url} width='130px'/>
            </div>
        )
    }
}