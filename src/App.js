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
        try {
          const response = await axios.get('https://profs-star-wars.herokuapp.com/people');
          this.setState({ people: response.data });
        }
        catch (error) {
          console.log(error);
        }
      }

      deletePerson(name) {
        this.setState({people: this.state.people.filter((person)=> person.name !== name)}) ;
      }

      addPerson(name) {
        console.log(name)
        const people = [...this.state.people, {'name': name}]
        this.setState({people})
        console.log(people)
        console.log(this.state.people)
    }

    render() { 
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