import { useState } from "react";
import Userdefault from "./style";
import Wrapper from "./wrapper";


function Userr(){
    const [val,setVal]= useState("")
    return(
        <div>
            <h1>Default Props with styling </h1>
            <Userdefault></Userdefault>
            <Userdefault name = "Shreya"></Userdefault>
             <Userdefault ></Userdefault>
             <Userdefault name = "Kritika"></Userdefault>
             <Userdefault ></Userdefault>
             <Userdefault name= "Sarthak"></Userdefault>
             <hr></hr>
             <h1>Style In React</h1>
             <Wrapper color="green">
             <h1>Hello Everyone</h1>
             </Wrapper>
             <Wrapper color="red">
             <h1>I am client</h1>
             </Wrapper>
             <Wrapper>
             <h1>Hello Admin</h1>
             <h2 style={{color:"blueviolet"}}>Please Login</h2>
             </Wrapper>
             <Wrapper>
                <h1>Coding round is finished</h1>
             </Wrapper>
             <hr></hr>
             <div>
                <h1>Get Input Field Value</h1>
                <input type="text" value= {val} onChange = {(event)=>{ 
                    setVal(event.target.value)}}placeholder="Enter user name"></input>
                 <h1>{val}</h1>
                 <button onClick={()=>setVal("")}>Clear Value</button>
             </div>

             
        </div>
    )
}
export default Userr;