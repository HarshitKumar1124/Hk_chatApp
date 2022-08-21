import React from 'react'
import "./Message.css"

const Message = ({user,message,user2}) => {
  
  if((user !== user2) && (user!=="Admin") )
  {
    return (
        <div className='MessageBox left'><b>{`${user}:`}</b> {` ${message}`}</div>
      )
  }
  else if((user !== user2) )
  {
    return (
        <div className='MessageBox AdminProperty'><b style={{color:"white"}}>{`${user}:`}</b> {` ${message}`}</div>
      )
  }
  else
  {
    return (
        <div className='MessageBox right'><b>{`You:`}</b> {`${message}`}</div>
      )
  
    }
}

export default Message