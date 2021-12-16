import React from "react";
import "../App.css";

class Movies extends React.Component {
constructor() {
    super();

    this.state = {
    data: [],
    movies: "" ,
    selectedMovie: null,
    };
}

componentDidMount() {
    const URL = 'https://ghibliapi.herokuapp.com/films'
    fetch(URL)
    .then((response) => response.json())
    .then((data) => this.setState({data: data }))
}

handleDropdownChange = (event) => {
    
    let currentMovieObject = this.state.data.find((movies) => {
        return movies.title === event.target.value;
        })
    this.setState({
    selectedMovie: currentMovieObject,
    })
}


render() {
    
    let dropDownOptions = this.state.data.map((movies) => {
    return <option>{movies.title}</option>;
    });

    return (
    <main className="movie-container">
        <h1>This is the Movies page!!</h1>
        <select onChange={this.handleDropdownChange}>
        <option>Select a Movie</option>
        <option value=""></option>
        {dropDownOptions}
        </select>

        <div>
        {this.state.selectedMovie
            ? ( <p>Title: {this.state.selectedMovie?.title}</p>)
            : null}{" "}
        </div>
        <div>
        {this.state.selectedMovie
            ? ( <p>Release Date: {this.state.selectedMovie?.release_date}</p>)
            : null}{" "}
        </div>
        <div>
        {this.state.selectedMovie
            ? ( <p>Description: {this.state.selectedMovie?.description}</p>)
            : null}{" "}
        </div>
    </main>
    );
}
}

export default Movies;
