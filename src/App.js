import React, { Component } from 'react';


import 'milligram';
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';

//To do
// Create functions for adding new notes
// Save the note list in the DOM LocalStorage API
// List each note in the Sidebar
// Create functions for updating existing notes
// Highlight the name of the currently edited note in the side bar

class App extends Component {
  constructor(){
    super();
    this.change= this.change.bind(this);
  }



  change(){
    console.log('changed!');
  }
  render() {
    return (
      <div className="App container">
      <h1>marky mark</h1>
      <div className="row" >
        <Sidebar />
        <Editor change={this.change}/>
      </div>
      </div>
    );
  }
}

export default App;
