
import {Link} from "react-router-dom"
import "../CSS/signin.css"
import { Signin2 } from "./signin2";

export const Signin= () => {

    
    const [ip,setIp] = useState("");
    const [mno,setMno] = useState("");

    const handleChange = (e) => {
        setIp(e.target.value)
    } 

    
    const otp = Math.floor(100000 + Math.random() * 900000);

    if(ip.length === 10)
    {
        // alert("Your OTP is "+otp)
        return <Signin2 />
    }
    else
    {
        alert("Enter Valid Mobile Number")
    }

    
    const getotp = () =>
    {
        console.log(ip)
        if(ip.length === 10)
        {
            // alert("Your OTP is "+otp)
            return <Signin2 />
        }
        else
        {
            alert("Enter Valid Mobile Number")
        }

    }

   

    
    


    return (
         <>
        
        <div id="centerbox">
            <div>
               <span>Sign In Now</span>
            <p> Save your preferences & discover great  </p>
            <p>recommendations</p>
            <input placeholder="Mobile Number" onChange={ handleChange }/><br/>
            <button onClick={ getotp }>Get OTP</button>
            <p>OR</p>
            
            <p >View other sign in Options</p>
             <p>By signing in, you agree to our</p>
           <p> Privacy Policy & Terms of Use</p>
            </div>
        </div>
          
                
               
        </>
    );  
};