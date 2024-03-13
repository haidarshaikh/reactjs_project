import React, { useState } from "react";

const FormWorks3 = () => {
  const [textArea, setTextArea] = useState("");

  const [selctCountry, setSelectCountry] = useState("USA");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Text area value = >", textArea);

    console.log("Selected Country:", selctCountry)
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="form-control mb-4"
          onChange={(e) => setTextArea(e.target.value)}
        ></textarea>

        <select
          className="form-select mb-4"
          
          value={selctCountry}
          onChange={(e)=>setSelectCountry(e.target.value)}
        >
          <option >Select Your Country...</option>
          <option value="India">India</option>
          <option value="Saudi">Saudi</option>
          <option value="USA">USA</option>
        </select>

        <button className="btn btn-info" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormWorks3;
