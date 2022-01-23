import { useState } from "react";
import { home } from "./home";


export const Signin2 = () => {

    const otp = Math.floor(100000 + Math.random() * 900000);
    alert("Your OTP is "+otp)
    
    
    const [verifyotp,setVerifyotp] = useState("");

    const handlechange = (e) =>
    {
        setVerifyotp(e.target.value)
    }

    const votp = () =>
    {
        if(otp == verifyotp)
        {
            return <home />
        }
        else
        {
            alert("Invalid OTP")
        }
    }



    return (
        <>       
       <div id="centerbox">
           <div>
              <span>Verify OTP</span>
           <p> Save your preferences & discover great  </p>
           <p>recommendations</p>
           <input placeholder="Enter OTP " onChange={ handlechange } /><br/>
           <button onClick={
               votp
           }>Verify OTP</button>
           <p>OR</p>
           
           <p >View other sign in Options</p>
            <p>By signing in, you agree to our</p>
          <p> Privacy Policy & Terms of Use</p>
           </div>
       </div>
         
               
              
       </>
   );  
};