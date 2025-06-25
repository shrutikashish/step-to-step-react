import { useState } from "react"

 function Skill(){
    const[skill,setSkill] = useState([])
    const handleSkills=(event)=>{
       console.log(event)
       console.log("skill",skill)
       if(event.target.checked){
        setSkill([...skill,event.target.value])
       }
       else{
        setSkill([...skill.filter((item)=>item != event.target.value)])
       }
    }
    return(
        <>
        <h1>Select your skills</h1>
        <div>
            <h3>
        <input onChange={handleSkills} type="checkbox" id ="php" value="php"/>
        <label htmlFor="php" >PHP</label>
        <br />
        <br />
        <input onChange={handleSkills}type="checkbox" id ="js" value="js"/>
        <label htmlFor="js" >JS</label>
        <br />
        <br />
        <input onChange={handleSkills}type="checkbox" id ="java" value="java"/>
        <label htmlFor="java" >JAVA</label>
        <br />
        <br />
        <input onChange={handleSkills}type="checkbox" id ="node" value="node"/>
        <label htmlFor="node" >Node</label>
        </h3>
        </div>
        <h1>{skill.toString()}</h1>
       
        </>
    )
 }

 export default Skill