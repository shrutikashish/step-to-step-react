import Checkboxes from "./checkbox"
import Clock from "./clock"
import Types from "./curlybraces"
import Userr from "./default"
import Eveent from "./event"
import Apps from "./exp_imp"
import Input from "./MultipleInput"
import Propps from "./prop"
import Reuse from "./Reuse"
import Toggle from "./toggle"
import { MulCondition } from "./user"
import { Login, Profile, User, UserKey } from "./UserComponent"
import State from "./usestate"
import Effect from "./useEffect"
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
    <hr></hr>
    <Userr></Userr>
    <Input></Input>
    <hr></hr>
    <Checkboxes></Checkboxes>
    <hr></hr>
    <Reuse></Reuse>
    <hr></hr>
    <Clock></Clock>
    <hr></hr>
    <Effect></Effect>
    </>
    )
  }
  
  
