import Reusable from "./Reusable"

function Reuse() {
    const userData = [
        {
            name: "Ayan",
            Age: "24",
            email: "RajAyan@gmail.com",
            id: "101"

        },
        {
            name: "Asha",
            Age: "22",
            email: "ashaSingh@gmail.com",
            id: "102"

        },
        {
            name: "Aakriti",
            Age: "27",
            email: "Aakritisharma@gmail.com",
            id: "103"

        },
        {
            name: "Piyush",
            Age: "18",
            email: "Rajpiyush@gmail.com",
            id: "104"

        },
        {
            name: "Kritika",
            Age: "22",
            email: "kritikaArora@gmail.com",
            id: "105"

        }
    ]
    return (
        <>
            <h1>Reuse Component in loop</h1>
            {
                userData.map((user) => (
                    
                    <div key={user.id}>
                        <Reusable data={user} ></Reusable>
                    </div>
                ))
            }
        </>
    )

}

export default Reuse