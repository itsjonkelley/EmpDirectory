import React, { Component } from 'react';
import axios from 'axios';
import Table from '../components/Table'

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
         <>

                <h1>This is my about page</h1>
                {/* <h1>{(this.state.randomUser)} </h1> */}
                <div class="container-fluid">
                    <Table /> 
                </div>
            
        </>
        )
    }
}

export default About;