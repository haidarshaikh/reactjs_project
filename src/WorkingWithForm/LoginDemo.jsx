import React, {useState} from "react";



const LoginDemo = () => {

    const [userDetails, setUserDetails] = useState({
        userName: "",
        userEmail: "",
        mobileNumber: "",
        passWord : "",
        confirmPass : "",
      });

      const [textArea, setTextArea] = useState("");

  const [selctCountry, setSelectCountry] = useState("");

  

      const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value });
        // console.log(userDetails);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault()

        if (userDetails.passWord != userDetails.confirmPass){
            alert("Password Doesn't Match")
        }
        if(userDetails.userName && userDetails.userEmail && userDetails.mobileNumber && userDetails.passWord == userDetails.confirmPass ){
            alert("Data Submited successfully!", userDetails)

           
            
        }else{
            
        };

       
    
        console.log(userDetails)
      };
    
      return (
        <div>
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control mb-4 inputes"
              placeholder="Enter Your Full Name"
              required
            
              value={userDetails.userName}
              onChange={handleChange}
              name="userName"
            />
            <input
              type="text"
              className="form-control mb-4 inputes "
              placeholder="Enter Your Email"
              required
              
              value={userDetails.userEmail}
              onChange={handleChange}
              name="userEmail"
            />
            <input
              type="number"
              className="form-control mb-4 inputes"
              placeholder="Enter Your Mobile Number"
              
              value={userDetails.mobileNumber}
              onChange={handleChange}
              name="mobileNumber"
            />
            <input
            
                type="password"
                className="form-control mb-4 inputes"
                placeholder="Enter Your Password"
                required

                value={userDetails.passWord}
                onChange={handleChange}
                name = "passWord"
                />

            <input

            type="password"
            className="form-control mb4 inputes "
            placeholder="Confirm Your Password"
            required

            value={userDetails.confirmPass}
            onChange={handleChange}
            name="confirmPass"
            />

            <br></br>

        <select
          className="form-select mb-4 inputes"
          
          value={selctCountry}
          onChange={(e)=>setSelectCountry(e.target.value)}
        >
          <option >Select Your Country...</option>
          <option value="India">India</option>
          <option value="Saudi">America</option>
          <option value="USA">Australia</option>
          <option value="USA">China</option>
          <option value="USA">Dubai</option>
          
        </select>
        
        <textarea
          name=""
          id=""
          cols=""
          rows=""
          className="form-control mb-4 inputess"
          onChange={(e) => setTextArea(e.target.value)}
          required
        ></textarea>

      

            <div className="text-center ">
              <button className="btn btn-danger m-4" type="submit">
                Submit
              </button>
            </div>
            <hr />
            {/* <h1>Name: {userDetails.userName}</h1>
            <h1>Email: {userDetails.userEmail}</h1>
            <h1>Mobile Number:{userDetails.mobileNumber}</h1> */}
          </form>
        </div>
      );
}

export default LoginDemo; 