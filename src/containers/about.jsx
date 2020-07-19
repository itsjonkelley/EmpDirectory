import React, { Component } from 'react';
import axios from 'axios';

class About extends Component {
    state = {
        randomUser: "",
    }

    componentDidMount() {
        axios
        .get("https://randomuser.me/api?results=50&nat=us")
        .then(response => {
            console.log(response);
            this.setState({
                randomUser: response.data.results[0]
            })
        }).catch(err=> {
            console.log("there is an error")
        })
    }

    render() {
        return (
         <div>
                <h1>This is my about page</h1>
                {/* <h1>{(this.state.randomUser)} </h1> */}
            <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4">Employee Directory</h1>
              <p class="lead">Please use to see all employees. This can be filtered or searched.</p>
            </div>
          </div>
            
        </div>
        )
    }
}

export default About;