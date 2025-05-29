function Types(){
    const name = "Shruti"
    let x = 10
    let y = 20
    let path = "https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?q=80&w=3093&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const userObj = {
        name:"Shruti",
        profession:"Engineer",
        gender:"female",
        
    }
    const arr = ["Tea","Coffee","Coldcoffee"]
    function engineer(){
        return "Done bachelor degree in enginnering"
    }
    function sum(){
        return x+y
    }
    function operation(a,b,op){
        if(op == "+"){
            return a+b
        }
        else if(op == "-"){
            return a-b
        }
        else{
            return a*b
        }
    }

    return(
        <>
        <h1>Curly braces </h1>
        <h1>{name}</h1>
        <h1>{x+y}</h1>
        <h1>{engineer()}</h1>
        <h1>{sum()}</h1>
        <h2>{operation(34,78,"+")}</h2>
        <h2>{operation(24,20)}</h2>
        <h2>{userObj.name}</h2>
        <h2>{userObj.profession}</h2>
        <h2>{[arr[0]]}</h2>
        <img src={path} width={300} height={300}/>
        </>
    )
}

export default Types