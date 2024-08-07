import React, { useState } from "react";

function Password() {
    const[passwordType,setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(event)=>{
        setPasswordInput(event.target.value)
    }
    const togglePassword =()=>{
        if(passwordType==="password")
        {
         setPasswordType("text")
         return;
        }
        setPasswordType("password")
      }

  return (
    <div className="col-md-12">
      <div className="form-inner">
        <label>Password *</label>
        <input
        type={passwordType} onChange={handlePasswordChange} value={passwordInput}
          
          name="password"
          id="password"
          placeholder="Create A Password"
        />
        <i onClick={togglePassword} className={passwordType === "password" ?"bi bi-eye-slash":"bi bi-eye"} id="togglePassword" />
      </div>
    </div>
  );
}

export default Password;
