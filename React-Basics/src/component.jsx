import Types from "./curlybraces"
import Eveent from "./event"
import Apps from "./exp_imp"
import Propps from "./prop"
import Toggle from "./toggle"
import { Login, Profile, User, UserKey } from "./UserComponent"
import State from "./usestate"
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
     <hr></hr>
     <Eveent></Eveent>
     <hr></hr>
     <State></State>
     <hr></hr>
     <Toggle></Toggle>
     <hr></hr>
     <Propps></Propps>
    
      </>
    )
  }
  
  
