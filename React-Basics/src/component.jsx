import Types from "./curlybraces"
import Apps from "./exp_imp"
import { Login, Profile, User, UserKey } from "./UserComponent"

 export function Comp(){
    return (
      <>
      <h2> Second Component</h2>
      </>
    )
  }
 export function Compos(){
    return (
      <>
      <h3> Third Component </h3>
      <hr></hr>
      <Apps></Apps>
     <Login></Login>
     <Profile></Profile>
     <User></User>
     <h1>{UserKey}</h1> 
     <hr></hr>
     <Types></Types>
      </>
    )
  }
  
  
