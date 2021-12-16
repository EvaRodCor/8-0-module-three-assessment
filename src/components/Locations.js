import React from "react";
import "../App.css";

class Locations extends React.Component {

constructor() {
    super();
    this.state = { 
        locations:[],
        showLocations: false,
    }
}

componentDidMount() {
    const URL = 'https://ghibliapi.herokuapp.com/locations'
    fetch(URL)
    .then((response) => response.json())
    .then((data) => this.setState({locations: data }))
}

    toggleButton = () => {
        this.setState({showLocations: !this.state.showLocations})
        }

render() { 
const locationDisplay = this.state.locations.map((location) => {
    return (
        <div className="locations"key={location.id}>
            <li>
            <h2>Name: {location.name}</h2>
            <h2>Climate: {location.climate}</h2>
            <h2>Terrain: {location.terrain}</h2>
            </li>
        </div>
    )
})
    return ( 
    <div className="locations">
        <h1>List of Locations</h1>
        <button onClick={this.toggleButton}>{!this.state.showLocations ? "Show Locations" : "Hide Locations"}</button>
        { this.state.showLocations ? locationDisplay : ''}
    </div>
    );
}
}

export default Locations;