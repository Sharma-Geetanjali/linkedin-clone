import React from "react";
import "./header.css";
import HeaderOption from "./headerOption"
import {Avatar} from "@material-ui/core"
import { useSelector } from "react-redux";
import { selectUser } from "./userSlice";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';


function Header(){

   const user= useSelector(selectUser);
   
    return(
       <div className="header">

           
           <div className="header_left">
                <img 
                src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1654343937~hmac=1d435420b8865ed8a5c77c21aeadb01a" alt=""/>
          
           
             <div className="header_search">
               <SearchIcon/>
               
               <input type="text"/>
             </div>
           </div>

           <div className="header_right">
           <HeaderOption icon= {HomeIcon} title="Home"/> 
              <HeaderOption icon= {SupervisorAccountIcon} title="My Network"/> 
              <HeaderOption icon= {BusinessCenterIcon} title="Jobs"/> 
              <HeaderOption icon= {ChatIcon} title="Messaging"/> 
              <HeaderOption icon= {NotificationsIcon} title="Notifications"/> 
             <HeaderOption icon= {Avatar} title={user.displayName}/>
            
           </div>
       </div>

    );
}
export default Header