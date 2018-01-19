import React, { Component } from 'react';
// import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';
// import {Route, HashRouter,Switch} from 'react-router-dom';
import './Home.css'

export default class Home extends Component {
  constructor(){
    super()
    this.state={
      luke: ""
    }
  }

  componentDidMount() {
    axios.get("https://swapi.co/api/people/1").then( response => {
      this.setState({
        luke: response.data
        
      });
      console.log(response.data)
    });
  }

  render(){

    return(
      <div >
        <div>
          <h1>HOME PAGE</h1>
          <Link to='/contact'><h3>CONTACT</h3></Link>
        </div>

        <div>
            <h1>Luke API</h1>
            <h2>name: {this.state.luke.name}</h2>
            <h2>Birth: {this.state.luke.birth_year}</h2>
            <h2>Height: {this.state.luke.height}</h2>
            <img src={this.state.luke.url} alt='starPic'/>
        </div>
        

      </div> 
    )
  }
} 

