import React, { Component } from 'react';
import axios from 'axios';
import AddPerson from './addPerson';

class People extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            people: []
         }
         this.deletePerson = this.deletePerson.bind(this);
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
      }

    render() { 
        const { people } = this.state;
        const { deletePerson, addPerson } = this;

        return ( 
                <div id='people' style={{display: 'flex', justifyContent: 'center'}}>
                    <ul>
                        {people.map((person, id) => 
                            <div  key={id} style={{display: 'flex'}}>
                                <li>{person.name}</li>
                                <button onClick={()=>deletePerson(person.name)} style={{marginLeft: '1em'}}>X</button>
                            </div>
                        )}
                    </ul>
                </div>
            );
    }
}
 
export default People;
