import React, {Component,useState} from "react";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import AttachFile from "@material-ui/icons/AttachFile";
import "./chat.css";
import InsertEmoticon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import axios from "./axios";
import SendIcon from '@material-ui/icons/Send';
function Chat({ messages }) {
  let arr = messages;
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    axios.post("/messages/new", {
      message: input,
      name: "YOUR FRIEND",
      timestamp: "just now",
      received: false,
    });
    setInput("");
  };

  return (
    <div className="chat">
      {/* chat header */}
      {chat__header()}
      {/* chat body */}

      {chat__body(arr)}

      {/* // /* chat footer */}

      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
            
          />
          <button onClick={sendMessage} type="submit">
            <SendIcon />
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

function chat__header() {
  return (
    <div className="chat__header">
      <Avatar />
      <div className="chat__headerinfo">
        <h3>Room name</h3>
        <p>last seen ...</p>
      </div>

      <div className="chat__headerright">
        {" "}
        <IconButton>
          <SearchOutlined />
        </IconButton>
        <IconButton>
          <AttachFile />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
}

function chat__body(messages) {
  return (
    <div className="chat__body">
      {messages.map((message) => bodymessage(message))}
    </div>
  );
}

function bodymessage(message) {
  return (
    <div>
      {" "}
      {
        <p>
          <div
            className={`${message.received && "chat__receiver"} chat__message`}
          >
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">{message.timestamp}</span>
          </div>
        </p>
      }
    </div>
  );
}
export default Chat;