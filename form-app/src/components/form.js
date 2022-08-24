import "./form.css"
import { useState } from 'react'

function Form() {

    const [fname, setFname] = useState(" ")
    const [lname, setLname] = useState(" ")
    const [fullName,setFullName] = useState(" ")

    const updateForm = (event) => {
        if (event.target.id == "fname") {
            setFname(event.target.value);

        } else {
            setLname(event.target.value)
        }
    }

    const renderForm = (event)=>{
        event.preventDefault()
        setFullName(`${fname} ${lname}`)
        setFname(" ");
        setLname(" ");

    }

    return (
        <div className="form-outer">
            <form>
                <label>First Name</label>
                <input type="text" id="fname" onChange={(event) => {
                    updateForm(event)
                }} />
                <p>{fname}</p>

                <label>Last Name</label>
                <input type="text" id="lname" onChange={(event) => {
                    updateForm(event)
                }} />
                <p>{lname}</p>

                <p>Full Name : {fullName}</p>

                <input type="submit" onClick={(event)=>{
                    renderForm(event);
                }}/>
            </form>
        </div>
    )
}

export default Form;