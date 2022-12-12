import React, {useState} from 'react'

function Newupdatestate() {

    const[colour, setColour]=useState({colour:"red"});
    const updateColour=()=>{
        setColour(previousColour=>{
            return{ ...previousColour, colour:"blue"}
        })
    }
  return (

    <div>
        {colour.colour}
        
    <button type='button' onClick={updateColour}>Blue</button>
    </div>
  )
}

export default Newupdatestate
