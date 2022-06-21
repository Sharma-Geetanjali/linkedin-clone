import React, {useEffect, useState} from 'react';
import './feed.css';
import InputOption from './InputOption';
import Post from './Post';
import { BiPencil } from "react-icons/bi";
import { MdOutlineArticle } from "react-icons/md";
import { BsCalendar3Event } from "react-icons/bs";
import { HiOutlinePhotograph, HiOutlineVideoCamera } from "react-icons/hi";
import firebase from "firebase";
import { db } from "./firebase";
import { useSelector } from 'react-redux';
import {selectUser} from './userSlice'
import {Avatar} from '@material-ui/core'

function Feed() {

   const user = useSelector(selectUser)
   const [posts, setPosts] = useState([]);
   const [input, setInput] = useState('');

      

      useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
          setPosts(snapshot.docs.map((doc) =>(
            {
            id:doc.id,
            data:doc.data(),
            }))
            )
        );

      }, []);

      const sendPost = (e) => {
        e.preventDefault();

        db.collection("posts").add({
          name:"geet",
          description: "Desp",
          message: input,
          photoURL: '',
          timestamp:firebase.firestore.FieldValue.serverTimeStamp(),

        });
        setInput("");

      };


  return (
    <>
    <div className="feed">
        <div className='feed_inputContainer'>
            <div className='feed_input'>
              <Avatar src={user.photoURL}/>
              <form onSubmit={sendPost}>
                <BiPencil/>
                <input type="text" placeholder='Start a post' value={input} onChange={e=>setInput(e.target.value)}/>

                <button onClick={sendPost} type="submit"> Send</button>
              </form>
            </div>
            <div className='feed_inputOptions'>
              <InputOption Icon = {HiOutlinePhotograph} title="Photo" color="#70B5F9"/>
              <InputOption Icon={HiOutlineVideoCamera} title="Video" color="#E7A33E"/>
              <InputOption Icon={BsCalendar3Event} title="Event" color="#C0CBCD"/>
              <InputOption Icon={MdOutlineArticle} title="Write article" color="#7FC15E"/>
            </div>
         </div>
         
        {/* Posts*/} 

        {posts.map(({id, data : {name, description, message, photoURL}})=>(
          <Post key ={id} 
        name={name}
        description={description}
        message={message}
        photoURL={photoURL} />

        )
            
      
        
        
        )}

        </div>
        

    
      </>
  )
}

export default Feed;