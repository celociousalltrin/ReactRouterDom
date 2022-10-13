import React from "react";
import { useState } from "react";
import { UseUserContext } from "../Utilities/Context";
import {useNavigate} from "react-router-dom";

const SignIn = () => {
  const [user, setUser] = useState("");
  const {logIn} = UseUserContext()
  const navigate = useNavigate()

  const handleClick = (()=>{
   logIn(user)
   navigate("/")
  })

  return (
    <div>
      <label>
        UserName:
        <input type="text" onChange={(e) => setUser(e.target.value)} />
      </label>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default SignIn;
