import React,{ useState } from 'react'
import {useDispatch} from 'react-redux';
import {auth} from './firebase';
import { loginuser } from './userSlice';

import "./Login.css"

function Login() {

    const[signup, setSignUp]= useState("");
    const[name, setName]= useState("");
    const[photoURL, setPhotoURL]= useState("");
    const[email, setEmail]= useState("");
    const[password, setPassword]= useState("");

    const dispatch = useDispatch();

    const register = (e) =>{
       e.preventDefault();
    
    if(!name){
        return alert("Name is required");
    }

    if(!photoURL){
        return alert("Photo is required");
    }

    if(!email){
        return alert("Email is required");
    }

    if(!password){
        return alert("Password is required");
    }

    auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
        userAuth.user.updateProfile({
            displayName:name,
            photoURL:photoURL
        }).then(()=> {
            dispatch(loginuser({
                email:userAuth.user.email,
                uid: userAuth.user.uid,
                photoURL:photoURL,
                displayName:name
            }))

        }).catch(error => alert(error))
    })

    setName("");
    setEmail("");
    setPassword("");
    setPhotoURL("");
 
 }

   const signIn=(e)=>{
       e.preventDefault();

       if(!email){
        return alert("Email is required");
    }

    if(!password){
        return alert("Password is required");
    }

    auth.signInWithEmailAndPassword(email,password).then(({user})=>
    {
        dispatch(loginuser({
            email: user.email,
            uid: user.uid,
            photoURL:user.photoURL,
            displayName:user.displayName
        }))

    }).catch(error => alert(error))
   }

  return (
      <>
      
    <div className='loginScreen'>
        <img src='https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011-2019.png' alt=""/>

        {
          signup===true? (
      <form onSubmit={register}>
          <input type="text" placeholder="Full Name" value={name} onChange={e=>setName(e.target.value)} />
          <input type="text" placeholder="Profile Picture URL" value={photoURL} onChange={e=>setPhotoURL(e.target.value)}/>
          <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
          <input type="password" placeholder="Password" value={password}
          onChange={e=>setPassword(e.target.value)}/>

          <input type="submit" value="signup"/>

          <h4>Already a member? <span>Login Here</span></h4>
      </form>)
       :(
      <form onSubmit= {signIn}>
          <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
          <input type="password" placeholder="Password"  value={password}
          onChange={e=>setPassword(e.target.value)}/>

          <input type="submit" value ="Sign In"/>

          <h4>Not a member? <span onClick={e=>setSignUp(true)}>Register Here</span></h4>
      </form>)}
    </div>

    </>
  )
       }


export default Login;