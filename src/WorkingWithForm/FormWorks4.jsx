import React, { useState } from "react";

const FormWorks4 = () => {

    const [IsCheck, setIsCheck] = useState({
        Hindi : false,
        Marathi : false,
        English : false,
    })

    const handleCheck = (e) => {
        // console.log(!IsCheck)
        const {name, checked} = e.target;

        setIsCheck({
            ...IsCheck, [name]: checked,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(IsCheck);
    };

    return(
        <div>

            <form onSubmit={handleSubmit}>
                <label htmlFor="Hindi">Hindi</label>
                <input type="checkbox" 
                name="Hindi" 
                id="Hindi" 
                onChange ={handleCheck} 
                checked = {IsCheck.Hindi}  />
                <br></br>


                <label htmlFor="">Marathi</label>
                <input type="checkbox" 
                name="Marathi" 
                id="Marathi" 
                onChange ={handleCheck} 
                checked = {IsCheck.Marathi}  />
                <br></br>

                <label htmlFor="">English</label>
                <input type="checkbox" 
                name="English" 
                id="English" 
                onChange ={handleCheck} 
                checked = {IsCheck.English}  />
                <br></br>

                
                <button className="btn btn-success " type="submit">Submit</button>
            </form>
        </div>
    )
}
export default FormWorks4;
