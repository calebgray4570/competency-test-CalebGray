import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
// import axios from 'axios';
// import {Route, HashRouter,Switch} from 'react-router-dom';
// import './Home.css'
import {addContact} from '../../ducks/reducer'
import {getContact} from '../../ducks/reducer'

class Contact extends Component {
  constructor(){
    super()
    this.state={
        name: "",
        email: "",
        contactData: [],
    }
    this.emailToState=this.emailToState.bind(this)
    this.sendContact=this.sendContact.bind(this)
  }

  emailToState(e){
    if( e.target.id === 'name'){
      this.setState({
        name: e.target.value
      })
    } else if ( e.target.id === 'email'){
      this.setState({
        email: e.target.value 
      })
    }
    console.log(e.target.value)
  }

  sendContact(){
    let { name, email } = this.state
    this.props.addContact({ name, email })
      this.setState({
        name: '',
        email: '',
        getContactData: []
      })
      console.log(this.state)
  }

  componentDidMount(){
   this.props.getContact()
  }


  render(){
    const contactList = this.props.getContactData.map( (e, i, a) => {
      return(
          <div key={ i }>
              <h1>{e.name}</h1>
              <h1>{e.email}</h1>
              <button>DELETE</button>
          </div>
      )
  })

    return(
      <div>
        <h1>Contact Page</h1>
        <Link to='/'><h4>HOME</h4></Link>

        <div>
          <input id="name" value={this.state.name} onChange={this.emailToState } placeholder="Name"/>
          <input id="email" value={this.state.email} onChange={this.emailToState } placeholder="Email"/>
          <button onClick={this.sendContact}>Send</button>
        </div>

        {contactList}


      </div>
    )
  }
}

function mapStateToProps( state ){
  return state
}

export default connect( mapStateToProps, { addContact, getContact } ) ( Contact );

