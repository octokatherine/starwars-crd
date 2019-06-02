import React from 'react';

const People = ({people, deletePersons}) => {
    return ( 
        <div id='people' style={{display: 'flex', justifyContent: 'center'}}>
                    <ul>
                        {people.map((person, id) => 
                            <div key={id} style={{display: 'flex'}}>
                                <li>{person.name}</li>
                                <button onClick={()=>deletePerson(person.name)} style={{marginLeft: '1em'}}>X</button>
                            </div>
                        )}
                    </ul>
                </div>
     );
}
 
export default People;