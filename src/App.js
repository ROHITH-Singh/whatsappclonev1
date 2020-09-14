import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./sidebar";
import Chat from "./chat";
import Pusher from "pusher-js";
import axios from "./axios";


function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
     
      setMessages(response.data);
    });
  }, []);
  
  useEffect(() => {
    const pusher = new Pusher("04fce40b2e6ccaebe6ad", {
      cluster: "ap2",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  

  return (
    <div className="App">
      <div className="app__body">
        {/* sidebar  */}

        <Sidebar />

        {/* chat componenet */}
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
