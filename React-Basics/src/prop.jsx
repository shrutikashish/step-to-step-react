

import { useState } from "react"
import College from "./college"
import {Student,  Specstudent } from "./student"
import Detail from "./userPropps"

function Propps(){
    //let userName = "Shruti";
    //let Age = "28"
    //let Email = "shruti.kashish8@gmail.com"
   
    let userObj= {
        name : "Shruti",
        age : "28",
        email : "shruti.kashish8@gmail.com"
    }
    let userObj1= {
        name : "Rishav",
        age : "29",
        email : "shruti.kashish8@gmail.com"
    }
    let userObj2= {
        name : "Kashish",
        age :"24",
        email: "asha.kashish3@gmail.com"
    }
    
    let collegeNames = ["DU","MIT","NIT","LPU","IIT","L.N Mishra"]
    let studentNames = ["Ritika","Vaibhavi","Akhsay","Ajay","Aarushi","Lakshya"]
    const [student,setName] = useState()
    return(
        <>
      <h1> Props in React Js</h1>
      <hr></hr>
      {/* <Detail Name = {"Shruti"} Age = {"28"} Email= {"shruti.kashish8@gmail.com"}></Detail*/}
      {/*<Detail  Name = {userName} Age = {Age} Email = {Email}></Detail> */ }
      <Detail user = {userObj}></Detail>
      <hr></hr>
      <Detail user = {userObj1}></Detail>
      <hr></hr>
      <Detail user = {userObj2}></Detail>
      <hr></hr>
      <College names= {collegeNames}></College>
      <hr></hr>
      <Student name={studentNames}></Student>
      <hr></hr>
       {student && < Specstudent name = {student}></Specstudent>}
       <button onClick={()=>{
        setName("Rasha")
       }}>update student name</button>
        </> 
    )
}

export default Propps