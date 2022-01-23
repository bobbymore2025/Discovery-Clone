import React from "react"
import styled from "styled-components"
import play from "../Images//play.png"
import { Link } from "react-router-dom"

import { useState, useEffect } from 'react';

const Toolbar = styled.header`

  .dot{
    max-width:10px;
    height:10px;
    background-color:"black";
    @media all and (max-width:576px){   
     height:"2px"  
   } 
  }
  .play{
    @media all and (max-width:1000px){   
       display:none
   }  
  }
  span{
    @media all and (max-width:1000px){   
       display:none
   }  
  }
  .non{
    @media all and (max-width:900px){   
       display:none
   } 
  }
  .col-4{
    @media all and (max-width:900px){   
       display:none
   } 
  }
`
 export const Corosuel=()=> {
 
  const [showData,setshowData]=useState([])
const slider = [{
  
    title: "Adventure",
    description:"sdfxgchjkhgfdsa",
    image_url: "https://ap2-prod-images.disco-api.com/2022/01/18/31a06cab-27a1-4127-8c1a-63b9aa3df7f1.jpeg?w=600&p=true&q=75",
   
},
{
  
    image_url: "https://ap2-prod-images.disco-api.com/2021/03/01/d35919b6-0146-457d-b48e-ac101c134111.jpeg?w=600&p=true&q=75",
    text: "Science"
},
{
  
    image_url: "https://ap2-prod-images.disco-api.com/2021/03/01/c7f3d702-f0a8-40e3-958c-955a9180affc.jpeg?w=1200&p=true&q=75",
    text: "History"
},
{
  
    image_url: "https://ap2-prod-images.disco-api.com/2021/07/01/58001170-51ce-474e-8dda-70f97c5a74f4.jpeg?w=1200&p=true&q=75",
    text: "Free Watch"
},
{
    
    image_url: "https://ap2-prod-images.disco-api.com/2021/04/23/6ac7cb1d-1d65-47bd-8df1-af2fba730f82.jpeg?w=1200&p=true&q=75",
    text: "Inspiration"
},
{
    image_url: "https://ap2-prod-images.disco-api.com/2021/04/16/0063fb3a-2b5f-416f-b7b1-e526bf4c1b37.jpeg?w=1200&p=true&q=75",
    text: "Lifestyle"
},]


  
  return (
    <Toolbar>
    <div style={{ backgroundColor: "rgb(18,19,23)", padding: "4%", paddingTop: "0px", paddingBottom: "0px" }}>
      <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="carousel" style={{ backgroundColor: "rgb(18,19,23)", padding: "4%", paddingTop: "0px", paddingBottom: "0px" }} >
        <div className="carousel-inner" style={{ padding: "3%" }}>
          <div className="carousel-item active">
            <div className="row">
              <div className="col-4">
                <h1 className='non mt-3 text-white'  ><strong>{slider[0]?.title}</strong></h1>
                <p className="non card-text mb-0 py-1" style={{ color: "#838991", fontSize: "18px" }}>{slider[0]?.description}</p>
                <div className="non btn-group mt-3" role="group" aria-label="Basic example">
                  <button type="button" className="btn btn-secondary py-0 mx-1" style={{ backgroundColor: "rgb(40,46,61)", color: "#b6bbc0", fontSize: "12px" }}>Trending</button>
                  <button type="button" className="btn btn-secondary py-0 mx-1" style={{ backgroundColor: "rgb(40,46,61)", color: "#b6bbc0", fontSize: "12px" }}>Recommanded</button>
                </div>
                <Link to="/watch" style={{textDecoration:"none"}}>

                  <div className='pt-4'>

                    <img className='play' src={play} alt="" style={{ maxWidth: "65px", maxHeight: "65px" }} /><span className='px-3' style={{ color: "#ffffff", fontSize: "18px" }}
                      onClick={() => {
                        setshowData({ ...slider[0] })
                      }}>Play</span>
                  </div> </Link>
              </div>
              <div className="col-12 col-lg-8">
              <Link to="/watch" style={{textDecoration:"none"}}>
                  <img style={{ borderRadius: "10px" }} src={slider[0]?.image_url} className="d-block w-100" alt="..."  onClick={() => {
                        setshowData({ ...slider[0] })
                      }}/>
                </Link>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-4">
                <h1 className='non mt-3 text-white'> <strong>{slider[1]?.title}</strong></h1>
                <p className="non card-text mb-0 py-1" style={{ color: "#838991", fontSize: "18px" }}>{slider[0]?.description}</p>
                <div className=" non btn-group mt-3" role="group" aria-label="Basic example">
                  <button type="button" className="btn btn-secondary py-0 mx-1" style={{ backgroundColor: "rgb(40,46,61)", color: "#b6bbc0", fontSize: "12px" }}>Trending</button>
                  <button type="button" className="btn btn-secondary py-0 mx-1" style={{ backgroundColor: "rgb(40,46,61)", color: "#b6bbc0", fontSize: "12px" }}>Recommanded</button>
                </div>
                <Link to="/watch" style={{textDecoration:"none"}}>
                  <div className='pt-4'>
                    <img className='play' src={play} alt="" style={{ maxWidth: "65px", maxHeight: "65px" }} /><span className='px-3' style={{ color: "#ffffff", fontSize: "18px" }}
                      onClick={() => {
                        setshowData({ ...slider[1] })
                      }}>Play</span>
                  </div>
                </Link>
              </div>
              <div className="col-12 col-lg-8">
                <Link to="/watch" style={{textDecoration:"none"}}>
                  <img style={{ borderRadius: "10px" }} src={slider[1]?.image_url} className="d-block w-100" alt="..."  onClick={() => {
                        setshowData({ ...slider[1] })
                      }}/>

                </Link>
              </div>
            </div>


          </div>

          <div className="carousel-item">
            <div className="row">
              <div className="col-4">
                <h1 className='non mt-3 text-white'> <strong>{slider[2]?.title}</strong></h1>
                <p className="non card-text mb-0 py-1" style={{ color: "#838991", fontSize: "18px" }}>{slider[0]?.description}</p>
                <div className="non btn-group mt-3" role="group" aria-label="Basic example">
                  <button type="button" className="btn btn-secondary py-0 mx-1" style={{ backgroundColor: "rgb(40,46,61)", color: "#b6bbc0", fontSize: "12px" }}>Trending</button>
                  <button type="button" className="btn btn-secondary py-0 mx-1" style={{ backgroundColor: "rgb(40,46,61)", color: "#b6bbc0", fontSize: "12px" }}>Recommanded</button>
                </div>
                <Link to="/watch" style={{textDecoration:"none"}}>
                  <div className='pt-4'>
                    <img className='play' src={play} alt="" style={{ maxWidth: "65px", maxHeight: "65px" }} /><span className='px-3' style={{ color: "#ffffff", fontSize: "18px" }}
                      onClick={() => {
                        setshowData({ ...slider[2] })
                      }}>Play</span>
                  </div>
                </Link>

              </div>
              <div className="col-12 col-lg-8">
                <Link to="/watch" style={{textDecoration:"none"}}>
                  <img style={{ borderRadius: "10px" }} src={slider[2]?.image_url} className="d-block w-100" alt="..."  onClick={() => {
                        setshowData({ ...slider[2] })
                      }}/>
                </Link>
              </div>
            </div>

          </div>

          <div className="carousel-item">
            <div className="row">
              <div className="col-4">
                <h1 className='non mt-3 text-white'> <strong>{slider[3]?.title}</strong></h1>
                <p className="non card-text mb-0 py-1" style={{ color: "#838991", fontSize: "18px" }}>{slider[3]?.description}</p>
                <div className="non btn-group mt-3" role="group" aria-label="Basic example">
                  <button type="button" className="btn btn-secondary py-0 mx-1" style={{ backgroundColor: "rgb(40,46,61)", color: "#b6bbc0", fontSize: "12px" }}>Trending</button>
                  <button type="button" className="btn btn-secondary py-0 mx-1" style={{ backgroundColor: "rgb(40,46,61)", color: "#b6bbc0", fontSize: "12px" }}>Recommanded</button>
                </div>
                <Link to="/watch" style={{textDecoration:"none"}}>
                  <div className='pt-4'>

                    <img className='play' src={play} alt="" style={{ maxWidth: "65px", maxHeight: "65px" }} /><span className='px-3' style={{ color: "#ffffff", fontSize: "18px" }}
                      onClick={() => {
                        setshowData({ ...slider[3] })
                      }}>Play</span>
                  </div>
                </Link>
              </div>
              <div className="col-12 col-lg-8">
                <Link to="/watch" style={{textDecoration:"none"}}>
                  <img style={{ borderRadius: "10px" }} src={slider[3]?.image_url} className="d-block w-100" alt="..."  onClick={() => {
                        setshowData({ ...slider[3] })
                      }}/>

                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='row p-4'>
          <div className="carousel-indicators col-2 mx-0" >
            <button style={{ maxWidth: "10px", height: "10px", borderRadius: "50%" }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active dot" aria-current="true" aria-label="Slide 1"></button>
            <button className='dot' style={{ maxWidth: "10px", height: "10px", borderRadius: "50%" }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button className='dot' style={{ maxWidth: "10px", height: "10px", borderRadius: "50%" }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button className='dot' style={{ maxWidth: "10px", height: "10px", borderRadius: "50%" }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>
          <div className="col-10"></div>
        </div>
        <button className="carousel-control-prev" style={{ maxWidth: "5%" }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next " style={{ maxWidth: "5%" }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </Toolbar>

)
}


