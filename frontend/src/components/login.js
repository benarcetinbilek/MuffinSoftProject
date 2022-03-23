import "./login.css"
import loginImage from "../images/bg-01.jpg"
import { useState } from "react";
function Login() {

  const [newUser, setNewUser] = useState(false)

  const loginSignup = () => {
    newUser ? setNewUser(false) : setNewUser(true)
  }

  return (
    <div className="containerLogin">
      <div className="loginContent">
        <div className="loginImage">
          <img src={loginImage} />
        </div>
        <div className="loginForm">
          <div className="header">
            <p>plan your future</p>
          </div>
          <div className="formContent">
            <input placeholder="E-mail"></input>
            <input placeholder="Password"></input>
          {newUser ?
            <div className="LoginSignup"> 
              <button>Sign Up</button>
              <p onClick={loginSignup} >Click for Login</p>              
            </div>
            : 
            <div className="LoginSignup"> 
              <button>Login</button>
              <p onClick={loginSignup} >Click for create an account</p>
            </div>
          }
          </div>  
          <div className="loginWithSocialMedia">
            <img />a   -
            <img />a   -
            <img />a   
          </div>
        </div>
      </div>
    </div>
  );
}
//#935b60
export default Login;
