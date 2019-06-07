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
        // Perfect, though this could be [ev.target.name]: ev.target.value and then you could use it for other form inputs.  For a single input, this works though!
        this.setState({newPerson: ev.target.value});
    }

    render() { 
        const { newPerson } = this.state;
        return ( 
            <form onSubmit={(e)=>{this.props.addPerson(e, newPerson); this.setState({newPerson: ''})}} style={{display: 'flex', justifyContent: 'center'}}>
                <label htmlFor='personName'>Name:</label>
                <input name='personName' type='text' value={this.state.newPerson} onChange={this.handleChange} style={{marginLeft: '1em', marginRight: '1em'}}></input>
                <button type='submit'>Add Person</button>
            </form>
         );
    }
}
 
export default AddPerson;