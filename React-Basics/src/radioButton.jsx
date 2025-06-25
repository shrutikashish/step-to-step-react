import { use } from "react"
import { useState } from "react"
import Reuse from "./Reuse"

function Radiobutt(){
    const[gender,setgender] = useState("male")
    const[city,setCity] = useState("Kolkata")
    const userData = [
        {
            name:"Ayan",
            Age: "24",
            email: "RajAyan@gmail.com",
            id:"101"

        },
        {
            name:"Asha",
            Age: "22",
            email: "ashaSingh@gmail.com",
            id:"102"

        },
        {
            name:"Aakriti",
            Age: "27",
            email: "Aakritisharma@gmail.com",
            id:"103"

        },
        {
            name:"Piyush",
            Age: "18",
            email: "Rajpiyush@gmail.com",
            id:"104"

        },
        {
            name:"Kritika",
            Age: "22",
            email: "kritikaArora@gmail.com",
            id:"105"

        }
    ]
    return(
        <>
         <h1> Handle Radio and dropdown</h1>
         <h3>Select Gender</h3>
         <input type="radio" onChange= {(event)=>{
         setgender(event.target.value)
         }} checked = {gender == 'male'}name= "gender"  value="male" id= "male"/>
         <label htmlFor="male">Male</label>
         <input type="radio" onChange= {(event)=>{
         setgender(event.target.value)
         }} checked = {gender == 'female'}name= "gender"  value="female" id= "male"/>
         <label htmlFor="Female">Female</label>
         <h2>Selected Gender:{gender}</h2>
         <h2>Here we Select city</h2>
         <h3>Select City</h3>
         <select onChange={(event)=>{
            setCity(event.target.value)
         }}>
            <option value= "bangalore">Bangalore </option>
            <option value= "delhi">Delhi</option>
            <option value= "Varanasi"> Varanasi </option>
            <option value ="Kolkata"> Kolkata</option>
         </select>
         <h2>City Name :{city}</h2>
         <br />
         <hr />
         <h1> Table (Loop in Jsx with Map functions)</h1>
         <table border="1"> 
            <thead>
             <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Age</td>
                <td>Email</td>
           </tr>
          </thead>
            <tbody>
                {
                    userData.map((user)=>
                        <tr key={user.id}>
                          <td>{user.id}</td>
                           <td>{user.name}</td>
                           <td>{user.Age}</td>
                          <td>{user.email}</td> 
                    </tr>
                    )
                }
            </tbody>
         </table>
        
        
        </>
    )
}

export default Radiobutt