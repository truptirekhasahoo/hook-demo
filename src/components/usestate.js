import React, { useState } from 'react'

function Hookusestate() {
    const [colour, setColour] = useState("red");
    return (
        <div>
            {colour}
            <button type='button' onClick={()=>setColour("blue")}>Blue</button>
            <button type='button' onClick={()=>setColour("green")}>Green</button>
        </div>
    )
}

export default Hookusestate

