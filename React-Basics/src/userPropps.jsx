function Detail({user}){
    console.log(user.name)
    return(
        <>
        <h2>Name:{user.name}</h2>
        <h2>Age:{user.age}</h2>
        <h2>email:{user.email}</h2>
        
        </>
    )
}
 export default Detail