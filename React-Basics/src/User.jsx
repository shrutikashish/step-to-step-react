import { useState } from "react"

 export function User(){
    return(
        <h1>User Component</h1>

    )
 }
 export function MulCondition(){
    const [count,updateCount] = useState(0)
return(
    <>
    <h1>multiple condition in React Js</h1>
    <h1>{count}</h1>
    <button onClick={()=>updateCount(count+1)}>Counter</button>
    {
        count==0 ?<h1>Condition0</h1> 
        :count == 1 ? <h1>Condition1</h1>
        :count == 2 ? <h1>Condition2</h1>
        :count == 3 ? <h1>Condition3</h1>
        :count == 4 ? <h1>Condition4</h1>
        :count == 5 ? <h1>Condition5</h1>
        :<h1>No condition is here</h1>
    }
    </>
)
 }

 

 