import React from "react";

export class Genre extends React.Component {
    constructor(props) {
        super(props);
    }

    AllGenres(movie) {
        let all = ''
        for (let i = 0; i < movie.genres.length; i++) {
            all = all + movie.genres[i] + "  "
        }
        return all;
    }

    render() {
        return (
            <div>
                {this.AllGenres(this.props.movie)}
            </div>
        )
    }
}