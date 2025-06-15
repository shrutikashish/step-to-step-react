import { useState } from "react"

const Counter = ()=>{
    const [count,updateCount] = useState(0)
    const [rcount,reverseCount] = useState(15)
    return(
        <>
        <h1>Counter : {count}</h1>
        <button onClick={()=>updateCount(count+1)}>Update Counter</button>
        <h1>Reverse : {rcount}</h1>
        <button onClick={()=>reverseCount(rcount-1)}>Reverse Counter</button>
        </>
    )
}
export default Counter