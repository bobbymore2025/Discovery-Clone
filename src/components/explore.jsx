import React from "react";
import { useState } from "react";
import AnE from "../Images/a&e_explore.png"
import All_exp from "../Images/all_explore.png";
import Animal from "../Images/animal_explore.png";
import Bbc from "../Images/bbc_explore.png";
import Discov from "../Images/disco_explore.png";
import Dmax from "../Images/Dmax_explore.png";
import Euro from "../Images/euro_explore.jpg";
import Food from "../Images/food_explore.jpg";
import Invest from "../Images/invest_explore.png";
import Kid from "../Images/kid_explore.png";
import Mind from "../Images/mind_explore.jpg";
import Sci from "../Images/sci_explore.png";
import Tlc from "../Images/tlc_explore.png";
import Trvl from "../Images/trvl_explore.png";
import Turbo from "../Images/turbo_explore.jpg";
import "../CSS/explore.css"


export const Explore=()=>{
 
const channels = [Sci, Discov, Invest, Animal, Tlc, Kid, Turbo, Euro, Food, Dmax, Trvl];
const explo_shows = [Bbc, AnE, All_exp, Mind];

    return <>
    <div id="screen"  style={{height: "100%", width: "100%", backgroundColor: "#1a1c21"}}>
     <div id="app" className="appStyle">
         <div className="block1">
         <div id="exploreHeader">
             <h6 className="heading_style">Live Channels</h6>
         </div>
         <div className="live_chanl_grid">
          <a className="live_blks" href="">
             <div className="sub_blk"><div className="img_contain">
               <img style={{height: "100%", width: "100%"}} className="img_details" src={Sci}></img>
              </div>  
                   </div> 
          </a> 
          <a className="live_blks" href="">
             <div className="sub_blk"><div className="img_contain">
               <img style={{height: "100%", width: "100%"}} className="img_details" src={Discov}></img>
                   </div>
                      
                   </div> 
          </a>
          <a className="live_blks" href="">
             <div className="sub_blk"><div className="img_contain">
               <img style={{height: "100%", width: "100%"}} className="img_details" src={Invest}></img>
                   </div>
                      
                   </div> 
          </a>
          <a className="live_blks" href="">
             <div className="sub_blk"><div className="img_contain">
               <img style={{height: "100%", width: "100%"}} className="img_details" src={Animal}></img>
                   </div>
                      
                   </div> 
          </a>
          <a className="live_blks" href="">
             <div className="sub_blk"><div className="img_contain">
               <img style={{height: "100%", width: "100%"}} className="img_details" src={Tlc}></img>
                   </div>
                      
                   </div> 
          </a>
          <a className="live_blks" href="">
             <div className="sub_blk"><div className="img_contain">
               <img style={{height: "100%", width: "100%"}} className="img_details" src={Kid}></img>
                   </div>
                      
                   </div> 
          </a>
          <a className="live_blks" href="">
             <div className="sub_blk"><div className="img_contain">
               <img style={{height: "100%", width: "100%"}} className="img_details" src={Turbo}></img>
                   </div>
                      
                   </div> 
          </a>
          <a className="live_blks" href="">
             <div className="sub_blk"><div className="img_contain">
               <img style={{height: "100%", width: "100%"}} className="img_details" src={Euro}></img>
                   </div>
                      
                   </div> 
          </a>
          <a className="live_blks" href="">
             <div className="sub_blk"><div className="img_contain">
               <img style={{height: "100%", width: "100%"}} className="img_details" src={Food}></img>
                   </div>
                      
                   </div> 
          </a>
          <a className="live_blks" href="">
             <div className="sub_blk"><div className="img_contain">
               <img style={{height: "100%", width: "100%"}} className="img_details" src={Dmax}></img>
                   </div>
                      
                   </div> 
          </a>
          <a className="live_blks" href="">
             <div className="sub_blk"><div className="img_contain">
               <img style={{height: "100%", width: "100%"}} className="img_details" src={Trvl}></img>
                   </div>
                      
                   </div> 
          </a>
             
            

         </div>

         </div>
         
     </div>
    </div>

    </>
}