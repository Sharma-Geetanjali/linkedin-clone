import React from 'react';
import InputOption from './InputOption';
import "./Post.css"
import { AiOutlineLike} from "react-icons/ai";
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { BiCommentDetail, BiShareAlt, BiSend } from "react-icons/bi";
function Post({name, description, message, photoUrl }) {
  return (
    <div className='post'>  
     <div className='post_header'>
      <div className='post_headerLeft'>
        <Avatar src='dp.jpg' alt='Profile'/>
        <div className='post_info'>
          <h3>{name}</h3>
          <p>{description}</p>
       </div>
      </div>
      
        
       <div className='post_headerRight'>
      <MoreVertIcon/>
      </div>

     </div>

      <div className='post_body'>
          <p>{ message }</p>
      </div>

     <div className='post_buttons'>
         <InputOption Icon={AiOutlineLike} title="Like" color="gray"/> 
         <InputOption Icon={BiCommentDetail} title="Comment" color="gray"/>
         <InputOption Icon={BiShareAlt} title="Share" color="gray"/>
         <InputOption Icon={BiSend} title="Send" color="gray"/>
     </div>
    </div>
  );
}

export default Post;