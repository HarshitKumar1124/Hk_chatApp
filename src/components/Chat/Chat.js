import React, { useEffect, useState } from "react";
import { user } from "../Join/Join.js";
import socketIO from "socket.io-client";
import "./chat.css";
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import Message from "../Message/Message"
import ReactScrollToBottom from "react-scroll-to-bottom"

const ENDPOINT = "https://hkchatapp.herokuapp.com/";
// http://localhost:4000/
let socket="";

const Chat = () => {

  const[chats,setChats]=useState([])
  


   
  
  const SendMessage=()=>{

    var message = document.getElementById('InputField').value
    socket.emit('SendMessage',{user,message})
    document.getElementById('InputField').value="";

  }



 console.log(chats)

  useEffect(() => {

    socket = socketIO(ENDPOINT, { transports: ["websocket"] });

    socket.on("connect", () => {
      alert("Connected !");
    });

    socket.emit("Joined",{user})

    socket.on("Welcome",(data)=>{
      console.log(data.user,data.message)
      setChats([...chats,data])

    })

    

   

    

    return()=>{
      socket.emit('disconnect')
      socket.off();
  }


  }, []);


  useEffect(()=>{


    socket.on('UserJoined',(data)=>{
      console.log(data.user,data.message)
      setChats([...chats,data])
    })

    socket.on('Communicate',(data)=>{
      console.log(data.user,data.message)
      setChats([...chats,data])
    })

    socket.on('Leave',(data)=>{

      console.log(data.user,data.message)
      setChats([...chats,data])

    })

  },[chats])

  return (
    <>
      <div className="ChatPage">
        <div className="chartContainer">
          <div className="header">
            Welcome{" "}
            <span style={{ color: "red", marginLeft: "1vmax" }}>{user}</span>
          </div>
          <ReactScrollToBottom className="ChartBox">
                
                {
                  chats.map((item)=>{
                    return <Message message={item.message} user={item.user} user2={user}/>
                  })
                }
            
          
          </ReactScrollToBottom>
          <div className="InputBox">
            <input
            onKeyPress={(event)=>event.key==='Enter'?SendMessage():null}
              type="text"
              placeholder="Enter Your Message"
              id="InputField"
            />
            <Button className="SendBtn" variant="contained" onClick={SendMessage} >
              Send<SendIcon style={{margin:".3vmax"}}/>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
