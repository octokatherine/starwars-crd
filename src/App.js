import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav'
import People from './People';
import AddPerson from './addPerson'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            people: []
         }
         this.deletePerson = this.deletePerson.bind(this);
         this.addPerson = this.addPerson.bind(this);
    }

    async componentDidMount() {
      // Great Try/Catch!
        try {
          const response = await axios.get('https://profs-star-wars.herokuapp.com/people');
          this.setState({ people: response.data });
        }
        catch (error) {
          console.log(error);
        }
      }

    deletePerson(name) {
      /* Only reference `this.state` either outside of setState or inside a callback within setState.  i.e.:
      const people = this.state.people.filter((person)=> person.name !== name)
      this.setState({ people });
      */
    this.setState({people: this.state.people.filter((person)=> person.name !== name)});
    }

    addPerson(ev, name) {
        ev.preventDefault();
        // Nice!  This is how state should be changed.  The deletePerson should be done this same way.
        const people = [...this.state.people, {'name': name}];
        this.setState({people});
    }

    render() { 
        // Good destructuring. 
        // Indentation could be one to the left here?
        const { people } = this.state;
        const { deletePerson, addPerson } = this;
        return (
            <HashRouter>
                <div>
                <h1>Star Wars CRD</h1>
                <Nav />  
                </div>
                <Route exact path='/' render={() => 'Welcome!'}/>
                <Route exact path='/people' render={()=><People people={people} deletePerson={deletePerson}/>}/>
                <Route path='/people/create' render={()=><AddPerson addPerson={addPerson}/>}/>
            </HashRouter>
          );
    }
}
 
export default App;