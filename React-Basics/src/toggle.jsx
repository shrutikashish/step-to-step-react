import { useState } from "react"
import { User } from "./UserComponent"
import { MulCondition } from "./user"


function Toggle(){
    const [display,setDisplay] = useState(true)
    return(
        <>
        <h1>Toggle or hide in React JS</h1>
        <button onClick = {()=>setDisplay(!display)}> Toggle </button>
        {display ? <User /> : null}
        <hr></hr>
        <MulCondition></MulCondition>
        </>
    )
}

export default Toggle