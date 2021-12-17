
import React from 'react';
import '../App.css';

class People extends React.Component {

    constructor() {
        super()
        this.state={
            data:[],
            person:"",
        }
    }


componentDidMount(){
const URL = "https://ghibliapi.herokuapp.com/people"
    fetch (URL)
    .then((response) => response.json())
    .then((data) => {
    this.setState({ data: data })
    })
}



handleChange = (e)=> {
    e.preventDefault()
    this.setState({
        person: e.target.value
    })
}




handleSubmit = (e) => {
    e.preventDefault()
    const people = this.state.data.find((people) => {
        return people.name.includes(this.state.person)
    })

this.setState({ person: "", people: people, isFound: true })
}




render () {
return(   
    <div className='people'>
        <h2>Search for a Person</h2>
        <form onSubmit={this.handleSubmit}>
            <input  onChange={this.handleChange}  value={this.state.person} type="text" />
            <button type="submit">Submit</button>
        </form>
            {this.state.people && (
                <div key={this.state.people.id}>
                <h2>Name: {this.state.people.name}</h2>
                <p>Age: {this.state.people.age }</p>
                <p>Gender: {this.state.people.gender}</p>
                </div>
            )}  
            {!this.state.people && this.state.isFound && 'Not Found'}       
        </div>
        )  
    }        
}    


export default People;