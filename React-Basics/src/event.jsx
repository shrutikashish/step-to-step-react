
function Eveent(){
    function callFun(){
        alert("function called")
    }
    const machine =()=>{
        alert ("machine is working")
    }
    const brand =(name1,name2)=>{
        alert(name1+","+name2)
    }
     return(
        <div>
            <h1>Event and function call</h1>
            <button onClick={callFun}>Button1</button>
            <button onClick={machine}>Button2</button> 
            <button onClick={()=>{
                brand("BMW","Toyato")
            }}>Button3</button>
            <button onClick={()=>{
                brand("Baleno","Tvs")
            }}> Button4 </button>
        </div>
     )
}

export default Eveent