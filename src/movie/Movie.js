import React from "react";
import {MovieTitle} from "./movietitle/MovieTitle";
import {Genres} from "./genres/Genres";
import {Genre} from "./genre/Genre";
import {Actors} from "./actors/Actors";

export class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            movie_num: null
        }
        this.buttonHandler = this.buttonHandler.bind(this)
    }

    buttonHandler() {
        this.setState({
            show: !this.state.show
        })
    }

    movieHandler(num) {
        this.setState({
            movie_num: num
        })
    }

    render() {
        let movie_to_show = this.props.movies[this.state.movie_num]
        return (
            <div>
                {!this.state.show &&
                    <button onClick={this.buttonHandler}>Show Movie section</button>}
                {this.state.show &&
                    <article>
                        <button onClick={this.buttonHandler}>Hide Movie section</button>
                        <br/>
                        <button onClick={() => this.movieHandler(1)}> 1</button>
                        <button onClick={() => this.movieHandler(2)}> 2</button>
                        <br/>
                        {this.state.movie_num &&
                            <table>
                                <tr>
                                    <th>
                                        Title
                                    </th>
                                    <td>
                                        <MovieTitle movie={movie_to_show}/>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Genre
                                    </th>
                                    <td>
                                        <Genre movie={movie_to_show}/>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Actors
                                    </th>
                                    <td>
                                        <Actors actors={movie_to_show.actors}/>
                                    </td>
                                </tr>
                            </table>}
                        <Genres/>
                    </article>}
            </div>
        )
    }
}