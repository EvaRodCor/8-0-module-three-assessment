import React from "react";
import "../App.css";
import MovieImage from '../movieImage.png';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
constructor() {
    super();
    this.state = {  }
}
render() { 
    return ( 
    <nav className="NavBar">
        <Link to="/"><img className="movie-logo" src={MovieImage}  alt="movie-logo"/></Link>
        <Link to="/movies">Movies</Link>
        <Link to="/people">People</Link>
        <Link to="/locations">Locations</Link>
    </nav>
    );
}
}

export default NavBar;