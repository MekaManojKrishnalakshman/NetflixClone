import React, { useState } from 'react';
import './Login.css';
import filmpire_logo from '../../assets/filmpire.png'; 
import backgroundimage from '../../assets/backgroundimage.jpg';

const Login = () => {

  const [signState, setSignState] = useState("Sign In");

  return (
    <div className="login-background">
      <img src={filmpire_logo} className="login-logo" alt="Filmpire Logo" />
      <div className='login-card'>
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" && <input type="text" placeholder="Your Name" />}
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>New to Filmpire? <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span></p>
          ) : (
            <p>Already have an account? <span onClick={() => setSignState("Sign In")}>Sign In Now</span></p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
