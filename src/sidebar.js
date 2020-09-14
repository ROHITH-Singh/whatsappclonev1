import React from "react";
import "./sidebar.css";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import Sidebarchats from "./sidebarchats"
function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div>
          <Avatar src="https://i.pinimg.com/564x/23/1e/e4/231ee4619bb95cace2ccebc85700bae4.jpg" />
        </div>

        <div className="sidebar__header-right">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="    search" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        <Sidebarchats url = "https://source.unsplash.com/random"/>
        <Sidebarchats  url = "https://picsum.photos/id/237/200/300"/>
        <Sidebarchats  url = "https://picsum.photos/id/236/200/300"/>
        <Sidebarchats url="https://picsum.photos/id/239/200/300" />
         
      </div>
    </div>
  );
}

export default sidebar;
