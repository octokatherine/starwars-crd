import React, { Component } from 'react';
 
class AddPerson extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            newPerson: ''
         }
         this.handleChange = this.handleChange.bind(this);
    }

    handleChange(ev) {
        this.setState({newPerson: ev.target.value})
    }

    render() { 
        const { newPerson } = this.state;
        return ( 
            <form onSubmit={this.props.addPerson(newPerson)} style={{display: 'flex', justifyContent: 'center'}}>
                <label>Name:</label>
                <input type='text' value={this.state.newPerson} onChange={this.handleChange} style={{marginLeft: '1em', marginRight: '1em'}}></input>
                <button type='submit'>Add Person</button>
            </form>
         );
    }
}
 
export default AddPerson;