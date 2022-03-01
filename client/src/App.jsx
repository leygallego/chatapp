import './App.css';
import io from 'socket.io-client';
import { useState } from 'react';
import Chat from './Chat';

const socket = io.connect("http://localhost:3001");

const App = () => {

    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);


    const joinRoom = ()=>{
        if (username !== "" && room !== ""){
            socket.emit("join_room", room) // room is receiving as "data" in callback function socket.join at backend
            setShowChat(true)
        }
    }
    return (
        <div className='App' >
            { !showChat ? (
            <div className="joinChatContainer">
            <h3>Únete al chat</h3> 
            <input type="text" placeholder='Tu nombre...' onChange={(event)=> {setUsername(event.target.value)}} />
            <input type="text" placeholder='ID de sala' onChange={(event)=> {setRoom(event.target.value)}} />
            <button onClick={joinRoom} >Únete a una sala</button>
            </div> )
            
            : (
            <Chat socket={socket} username={username} room={room} /> 
            )}
        </div>
    );
}

export default App;
