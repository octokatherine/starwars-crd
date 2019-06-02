import React from 'react';

const AddPerson = ({ addPerson }) => {
    return ( 
        <form onSubmit={()=>addPerson('Joe')} style={{display: 'flex', justifyContent: 'center'}}>
            <label>Name:</label>
            <input type='text' style={{marginLeft: '1em', marginRight: '1em'}}></input>
            <button type='submit'>Add Person</button>
        </form>
     );
}
 
export default AddPerson;