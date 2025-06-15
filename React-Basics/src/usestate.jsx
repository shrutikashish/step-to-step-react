import { useState } from "react"
import Counter from "./counter";

function State(){
     const [fruit,setFruit] = useState("Apple");
     const handledFruit = ()=>{
        setFruit("Kiwi")
     }
    return(
        <>
        <h1>State in React JS</h1>
        <h1>{fruit}</h1>
        <button onClick={handledFruit}>Change Fruit Name</button>
        <Counter></Counter>
        </>
    )
}

export default State