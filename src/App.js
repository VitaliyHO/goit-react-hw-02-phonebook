import './App.css';
import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import Form from './Components/Form/Form';
import {Output} from './Components/Output/Output';

class App extends Component {

  state = {
    contacts: []
  }

  formSubmitHandler = data => {
    this.state.contacts.push({ id: nanoid(), name: data.name, number: data.number });
  }



  render() {
    // const arrayOfContacts = this.state.contacts;
    console.log(this.state.contacts);
    return (
      <div className="App">
        <Form formSubmit={this.formSubmitHandler}/>
        <ul>
        <Output arrayOfContacts={this.state.contacts}/>
        </ul>
      </div>
    );
  }
}

export default App;
