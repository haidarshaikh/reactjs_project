import react, {useState} from "react";


const FormWork = () =>{
    const[user, setUser] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");


    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleInput = (e) =>{
        // console.log(event.target.value)
        setUser(e.target.value);
        
    
    };
    // console.log("New Value", user);
    const handleSubmit =(e) =>{

        e.preventDefault();
        console.log("Username =", user)
        console.log("Email =", email)
        console.log("Password =", password)

        if (user == "Haidar Shaikh") {
            alert("Welcom Haidar Shaikh");
        }else{
            alert("Enter valid User");
        };

    }
    return(
      
        <div>
            <h1 className="mb-4">{user}</h1>
            <hr />
              <form onSubmit={handleSubmit}>
        <input type="text" className="form-control w-50 mb-4" placeholder="Enter Username" value={user} onChange={handleInput}/>

        <input type="email" onChange={handleEmail} className="form-control w-50 mb-4" placeholder="Enter Your Mail" value={email}/>

        <input type="password" onChange={handlePassword} className="form-control w-50 mb-4" placeholder="Enter Your Password" value={password}/>

      
        

        
        <button type='submit' className='btn btn-primary mt-4'>Submit</button>

       

       </form>

       
        </div>
    )
}

export default FormWork;