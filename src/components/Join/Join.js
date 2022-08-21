import React, { useState } from "react";
import "./Join.css";
import Logo from "../../Images/hk.jpg"
import {Link} from "react-router-dom"
import {useAlert} from "react-alert"


let user="";

const Join = () => {

   const alert = useAlert()
   


  const sendUser=(e)=>{


   

    user = document.getElementById("JoinInput").value;

    if(user=="")
    {
      
      alert.error("Enter Your Name");
      e.preventDefault()
    
    }
    else
    {
      alert.success(`Welcome ${user}`)
    
    }

  }


  return (
    <>
      <div className="JoinPage">
        <div className="JoinPageContainer">
          <img src={Logo} title="HK Logo" />
          <h1>CHAT_APP</h1>
          <input type="text" placeholder="Enter Your Name" id="JoinInput"/>
          <Link tag="a" onClick={sendUser} to={`/chat`}><button className="JoinBtn">JOIN</button></Link>
        </div>
      </div>
    </>
  );
};

export default Join;

export {user};
