import React, {useState} from "react";
import './Auth.css';
import icon from '../../assets/icon.png'
import AboutAuth from "./AboutAuth";

const Auth=()=>{
    const [isSignup,setIsSignup]=useState(false);

    const handleSwitch=()=>{
        setIsSignup(!isSignup);
    };
    return (
       <section className="auth-section">
        {
            isSignup &&  <AboutAuth /> 
        }
        <div className="auth-container">
            {!isSignup && <img src={icon} height="100 " alt="stack overflow" className="login-logo" />}
            <form>
                {
                    isSignup  && (
                        <label>
                            <h4>Display Name</h4>
                            <input type="text" name="name" id="name" placeholder="display name" />
                        </label>
                    )
                }
                <label htmlFor="email">
                    <h4>Email</h4>
                    <input type="email" name="email" placeholder="email or username" id="email" />
                </label>
                <label htmlFor="password">
                    <div style={{display:"flex",  justifyContent:"space-between"}}>
                        <h4>Password</h4>
                        {!isSignup && <p style={{color:"#007ac6"}}>Forgot password?</p>}
                    </div>
                    <input type="password" name="password" placeholder="password" id="password" />
                    {isSignup && <p style={{color:"#666767", fontSize:"13px"}} >Passwords must contain atleast eight<br />characters, including atleast 1 letter and 1 <br /> number</p>}
                </label>
                {
                    isSignup && 
                    <label htmlFor="check">
                        <input type="checkbox" id="check" name="checkbox" />
                        <p style={{color:"#666767", fontSize:"13px"}}>
                            Opt-in to receive occasional<br /> product updates , user research invitations,<br /> company anouncements, and digests
                        </p>
                    </label>
                }
                <button type="submit" className="auth-btn">{isSignup ? 'Signup' : 'Login'}</button>
                {
                    isSignup && (
                        <p style={{color:"#666767", fontSize:"13px"}}>
                            By clicking “Sign up”, you agree to our 
                            <span style={{color:"#007ac6" }}> terms of<br /> service,</span> 
                            <span style={{color:"#007ac6"}}> privacy policy</span> and 
                            <span style={{color:"#007ac6"}}> cookie policy</span> 
                        </p>
                    )
                }
            </form> 
            <p>
                {isSignup ? 'Already have an account' : "Don't have an account"}
                <button type="button" className="handle-switch-btn" onClick={handleSwitch }>{!isSignup ? 'signup' : 'login'}</button>
            </p>
        </div>
       </section>
    );
}

export default Auth;