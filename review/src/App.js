import React, {useState,useReducer, createContext, useContext} from 'react';

import data from './data'
import { reducer, initialState } from './reducer';
import { setName, setLocation } from './reducer'; //come from actions file

const PersonContext = createContext()
const AvengerContext = createContext()

const App = ()=> {
    //const [person, setPerson]= useState(data)
    const [person, dispatch] =useReducer(reducer, initialState)
    console.log("🚀 ~ file: App.js ~ line 6 ~ App ~ person", person)
    
    return(<div className="App component">
        <h1>Main App</h1>
        <PersonContext.Provider value={[person, dispatch]}>
           <AvengerContext.Provider value={{alias: 'WonderWoman'}}>
            <SubComp1 />
            </AvengerContext.Provider>
        </PersonContext.Provider>
    </div>);
};

const SubComp1 = ()=> {
    const [person] = useContext(PersonContext)
    return(<div className="component">
        <h1>Sub Comp 1</h1>
        <p>
            {person.name.first} {person.name.last}
        </p>
        <SubComp2/>
    </div>);
}

const SubComp2 = ()=> {
    const [person] = useContext(PersonContext)
    return(<div className="component">
        <h1>Sub Comp 3</h1>
        <p>{person.location.street}</p>
        <p>{person.location.city}</p>
        <p>{person.location.state}</p>
        <p>{person.location.postcode}</p>
        <SubComp3/>
    </div>);
}
const SubComp3 = ()=> {
    const [person, dispatch] = useContext(PersonContext)
    const {alias} = useContext(AvengerContext)
const changeName = () =>{
    dispatch(setName('miss', 'ashley', 'burns'))
}
const changeLocation=()=>{
   dispatch(setLocation('59 Phillips','amsterdam', 'ny', '12010' ))
    // setPerson({
    //     ...person,
    //     location:{
    //         city: 'amsterdam',
    //         street: '59 Phillips st',
    //         state: 'ny',
    //         postcode: '12010'
    //     }
    // })
}

    return(<div className="component">
        <h1>Sub Comp 3</h1>
        <h2>{alias}</h2>
        <button onClick={changeName}>Change Name </button>
        <button onClick={changeLocation}> Change Location </button>
    </div>);
}

export default App;