import { useEffect, useState } from "react"

const Timer = (({color}) => {
    const [time, SetTime] = useState(0)
    useEffect(() => {
        setInterval(() => {
            SetTime(new Date().toLocaleTimeString())
        }, 1000)
    }, [])
    return (
        <>
            <h1>Clock</h1>
            <h1 style = {{color:color,backgroundColor:"#000",width:"120px",padding:"10px",borderRadius:"5px"}}>{time}</h1>
        </>
    )
})

export default Timer