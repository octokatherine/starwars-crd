import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            people: []
         }
    }
    render() { 
        return (
            <h1>Star Wars CRD</h1>
          );
    }
}
 
export default App;