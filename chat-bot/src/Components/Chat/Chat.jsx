import React from 'react'
import './chat.css'
import { user } from '../Join/Join'
import socketIo from 'socket.io-client'
import { useEffect } from 'react'
import { useState } from 'react'
import ReactScrollToBottom from "react-scroll-to-bottom";
import Message from '../Message/Message'
import sendLogo from '../../images/send.png'
import closeIcon from '../../images/closeIcon.png'

const ENDPOINT = 'https://lovoda-clone.herokuapp.com/';

let socket;
const Chat = () => {
    const [id,setId] = useState('')
    const [message,setMessage]= useState([])
    const send = () => {
        const message = document.getElementById('chatInput').value;
        socket.emit('message', { message, id });
        document.getElementById('chatInput').value = "";
    }


useEffect(()=>{
   socket = socketIo(ENDPOINT,{transports:['websocket']})
socket.on('connect',()=>{
    // alert('connected')
    setId(socket.id)
})

socket.emit('joined', { user })

socket.on('welcome', (data) => {
    setMessage([...message, data]);
})

socket.on('userJoined', (data) => {
    setMessage([...message, data]);
})

socket.on('leave', (data) => {
    setMessage([...message, data]);
})
return ()=>{
    socket.emit('disconnect')
    socket.off()
}
},[])



useEffect(() => {
    socket.on('sendMessage', (data) => {
        setMessage([...message, data]);
        // console.log(data.user, data.message, data.id);
    })
    return () => {
        socket.off();
    }
}, [message])

  return (
    <div className="chatPage">
            <div className="chatContainer">
                <div className="header">
                    <h2>The Boys</h2>
                    <a href="/"> <img src={closeIcon} alt="Close" /></a>
                </div>
                <ReactScrollToBottom className="chatBox">
                    {message.map((item, i) => <Message key={i} user={item.id === id ? '' : item.user} message={item.message} classs={item.id === id ? 'right' : 'left'} />)}
                </ReactScrollToBottom>
                <div className="inputBox">
                    <input onKeyPress={(event) => event.key === 'Enter' ? send() : null} type="text" id="chatInput" />
                    <button onClick={send} className="sendBtn"><img src={sendLogo} alt="Send" /></button>
                </div>
            </div>

        </div>
  )
}

export default Chat