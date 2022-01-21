import { Route,Routes } from "react-router-dom";
import {Home} from "../components/home"
import {Explore} from "../components/explore"
import {Premium} from "../components/premium"
import {Kids} from "../components/kids"
import {Signin} from "../components/signin"
import {Otp} from "../components/otp"
import {Mindblown}from "../components/mindblown"
import {Shorts}from "../components/shorts"

export const Router = () => {
    return (
      <>
     
        <Routes>
          
          <Route path="/home" element={<Home/>} > </Route>
          <Route path="/explore" element={<Explore />} > </Route>
         <Route path="/kids" element={<Kids />} > </Route>
         <Route path="/shorts" element={<Shorts />}> </Route>
         <Route path="/mindblown" element={<Mindblown />} > </Route>
         <Route path="/premium" element={<Premium />} > </Route>
         <Route path="/signin" element={<Signin />} > </Route>
         <Route path="/signin/otp" element={<Otp />} > </Route>
         <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </>
    );
  };