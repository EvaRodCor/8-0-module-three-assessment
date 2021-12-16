
import React from 'react';
import '../App.css';

class People extends React.Component {


    constructor() {
        super()
        this.state={
            data:"",
            person:"",
            clicked: false
        }
    }


componentDidMount(){

    fetch ("https://ghibliapi.herokuapp.com/people")
    .then((response) => response.json())
    .then((data) => {
    this.setState({data: data})
    })
}



handleSearch = (e)=> {
    e.preventDefault()
        this.setState({
            person: e.target.value
        })
    }

handleSubmit = (e) => {
    e.preventDefault()
    fetch ("https://ghibliapi.herokuapp.com/people")
    .then((response) => response.json())
    .then((data) => {
    this.setState({
        data: data
        })
    })
}


render () {

    const personInfo = this.state.data && this.state.data.map((person) => {
            if (person.name.toLowerCase() === this.state.person.toLowerCase()) {
                return  (
                <div key={person.id}>
                <h2>Name: {person.name}</h2>
                <p>Age: {person.age }</p>
                <p>Gender: {person.gender}</p>
                </div>
                )
            }
            return "Not Found"
        })



return (

        <div className='people'>
            <h2>Search for a Person</h2>
            <form onSubmit={this.handleSubmit}>
            <input  onChange={this.handleSearch}  id="values" name="search-person" type="text" />
            <button onClick={this.clicked}>Submit</button>
            </form>
            {personInfo}
        </div>
        )
    }
};

export default People;