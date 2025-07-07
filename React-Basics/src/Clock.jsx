import { useState } from "react"
import Timer from "./Timer"


function Clock() {
    const [color, setColor] = useState("red")
    return (
        <div>
            <h1>Digital clock in React J.S</h1>
            <select onChange={(event)=>setColor(event.target.value)}>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="orange">Orange</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="purple">Purple</option>
            </select>
            <Timer color={color}></Timer>
        </div>


    )

}
export default Clock