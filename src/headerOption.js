import React from "react";
import "./headerOption.css";
import {Avatar} from "@material-ui/core"
import { useSelector } from "react-redux";
import {selectUser} from './userSlice'

function HeaderOption({ icon, title, avatar}) {

    const user= useSelector(selectUser)
return (
    <div className="headerOption">
    {
        icon && <icon></icon>
    }
     {
        avatar && <Avatar name={avatar} src={user.photoURL}/>
     }   
     
     
     <span> {title} </span>
    </div>
);

}
export default HeaderOption;
