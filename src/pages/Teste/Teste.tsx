import React, { useEffect } from "react";
import { useState } from "react";
import io from "socket.io-client";

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const fakeUsername = String(getRandomInt(1, 100))
const socket = io('ws://localhost:4018/', {query: {username: fakeUsername}});

const Teste = (): React.ReactElement => {
  console.log("Username:", fakeUsername)
  const [destination, setDestination] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.on("message", (data) => {
      console.log({data});
    });
  }, [socket]);

  useEffect(() => {
    socket.on("callback", (data) => {
      console.log({data});
    });
  }, [socket]);


  const sendMessage = () => {
    socket.emit('chat', {originUsername: fakeUsername, destinationUsername: destination, text: message})
  }
  return (
    <div>
      <div>
        <input type="text" onChange={e => setDestination(e.target.value)} value={destination} />
      </div>
      <div>
        <input type="text" onChange={e => setMessage(e.target.value)} value={message} />
        <button onClick={sendMessage}>Start chat</button>
      </div>
      Teste
    </div>
  );
};

export default Teste;
