import React, { useState } from "react";

const FormWorks2 = () => {
  const [userDetails, setUserDetails] = useState({
    userName: "",
    userEmail: "",
    mobileNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
    // console.log(userDetails);
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    if(userDetails.userName && userDetails.userEmail && userDetails.mobileNumber){
        alert("Data Submited successfully!", userDetails)
        
    }else{
        alert("Please fill all values")
    }

    console.log(userDetails)
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-4"
          placeholder="Enter fullname"
          
          value={userDetails.userName}
          onChange={handleChange}
          name="userName"
        />
        <input
          type="text"
          className="form-control mb-4"
          placeholder="Enter email"
          
          value={userDetails.userEmail}
          onChange={handleChange}
          name="userEmail"
        />
        <input
          type="number"
          className="form-control mb-4"
          placeholder="Enter mobile number"
          
          value={userDetails.mobileNumber}
          onChange={handleChange}
          name="mobileNumber"
        />
        <div className="text-end">
          <button className="btn btn-danger" type="submit">
            Submit
          </button>
        </div>
        <hr />
        <h1>Name: {userDetails.userName}</h1>
        <h1>Email: {userDetails.userEmail}</h1>
        <h1>Mobile Number:{userDetails.mobileNumber}</h1>
      </form>
    </div>
  );
};

export default FormWorks2;