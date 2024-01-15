import Card from "./Components/Card.jsx";

let empDetals = {
    name: "Pratham",
    profile: "Software Engineer 2"
}
function PropComp() {
    return (
        <>
            <h1 className='bg-blue-500 text-black p-4 rounded-2xl mb-8'> Tailwind Demo</h1>
            <br/> <br/>
            <Card employeeDetails={empDetals}/>
            <br/> <br/>
            <Card/>
        </>
    )

}

export default PropComp
