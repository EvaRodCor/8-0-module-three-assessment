import React from "react";
import "../App.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="Home">
        <h2> Welcome to GhibliApp </h2>
      </div>
    );
  }
}

export default Home;