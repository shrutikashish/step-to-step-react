const Reusable =({data})=>{
    return(
        <div style = {
            {border:"1px solid green",
                padding:"10px",
                margin: "10px",
                width:"400px",
                borderRadius:"10px"
            }
        }>
        <h2>Name : <span style={{color:"Red"}}>{data.name}</span></h2>
        <h2>Age :<span style={{color:"Red"}}> {data.Age}</span></h2>
        <h2>Email:<span style={{color:"Red"}}>{data.email}</span></h2>
        <h2>Id : <span style={{color:"Red"}}>{data.id}</span></h2>
        </div>
    )
}

export default Reusable