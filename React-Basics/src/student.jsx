import { useState } from "react"

export function Student({name}){
   const[count,updateCount] = useState(0)
   return(
      <>
   <h1>StudentListName</h1>
   <h1>Count: {count}</h1>
   <button onClick={()=>updateCount(count+1)}>UpdateCount</button>
   {
        count==0 ?<h1>{name[0]}</h1> 
        :count == 1 ? <h1>{name[1]}</h1>
        :count == 2 ? <h1>{name[2]}</h1>
        :count == 3 ? <h1>{name[3]}</h1>
        :count == 4 ? <h1>{name[4]}</h1>
        :count == 5 ? <h1>{name[5]}</h1>
        :<h1>No student is available</h1>   
    }
    
   </>
   
   )
   
}

export function Specstudent({name}){
   
   return(
      <>
      <h1>Special Student Category</h1>
      <h1>Student Name: {name}</h1>
      </>
   )
}


