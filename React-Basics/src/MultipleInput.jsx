import { useState } from "react"

function Input(){
    const [name,newUser] = useState("")
    const [password,newPass] = useState("")
    const [email,newEmail] = useState("")
    return(
        <>
        <h1>Multiple Input field</h1>
        <h2>Form of User</h2>
        <input type="text" value = {name} placeholder="Enter profile name" onChange={(event)=>{newUser(event.target.value)

        }}/>
        <br /><br />
        <input type="text" value = {password} placeholder="Enter password" onChange={(event)=>{newPass(event.target.value)}}/>
        <br/><br />
        <input type="text" value = {email} placeholder="Enter email"onChange={(event)=>{newEmail(event.target.value)}}/>
        <br/><br />
        <button>Submit</button>
        <button onClick={()=>{newUser(""),newPass(""),newEmail("")}}>Clear</button>
        <br />
        <h1>{name}</h1>
        <h1>{password}</h1>
        <h1>{email}</h1>
        
        </>
    )
}

export default Input