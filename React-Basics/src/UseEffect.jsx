
import { useEffect, useState } from "react"

function Effect(){
    const [ Counts ,setCounts] = useState(0)
    const [ Data,setData] = useState(0)
    useEffect(()=>{
        callOnce()

    },[Counts])
    
    function CounterFun(){
        console.log("counterFunction",Counts)
    }
    
    
    
    function callOnce(){
       console.log("callOnce function called")
    }
    
    return(
        <>
        <h1>useEffect Hook</h1>
       <button  onClick={()=>setCounts(Counts+1)}>Counter {Counts}</button>
       <br /><br />
       <button  onClick={()=>setData(Data+1)}>Data {Data}</button>
        </>
    )
}

export default Effect