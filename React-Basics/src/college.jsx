function College({names}){
    console.log(names)
   return(
    <>
    <h1>College Names</h1>
    <h2>1. {names[0]}</h2>
    <h2>2. {names[1]}</h2>
    <h2>3. {names[2]}</h2>
    <h2>4. {names[3]}</h2>
    <h2>5. {names[4]}</h2>
    </>
   )
}

export default College