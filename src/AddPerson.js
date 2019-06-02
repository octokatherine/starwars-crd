import React, { Component } from 'react';
 
class AddPerson extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            newPerson: ''
         }
    }
    render() { 
        return ( 
            <form style={{display: 'flex', justifyContent: 'center'}}>
                <label>Name:</label>
                <input type='text' style={{marginLeft: '1em', marginRight: '1em'}}></input>
                <button type='submit'>Add Person</button>
            </form>
         );
    }
}
 
export default AddPerson;