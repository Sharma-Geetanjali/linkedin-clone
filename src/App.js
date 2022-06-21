import React, { useEffect } from 'react';
import './app.css'
import Header from './header'
import Sidebar from './sidebar';
import Feed from './feed';
import Widget from './Widget';
import Login from './Login';
import {useDispatch, useSelector} from 'react-redux';
import {auth} from './firebase';
import { loginuser, logoutuser, selectUser} from './userSlice'

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect (() => {
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth) {
        //already login
        dispatch(loginuser({
          email: userAuth.email,
          uid: userAuth.uid,
          photoURL: userAuth.photoURL,
          displayName:userAuth.displayName
        }))
      }
      else{
        //logout
        dispatch(logoutuser())
      }
    })
  }, [])




  return (
    <div className="app">
      {
        !user?(<Login/>) : (
      <div className='app_wrapper'>
      {/*Header*/}
       <Header />

      {/*App Body*/}
      <div className='app_body'>
      <Sidebar />
      
      
       {/*Feed*/}
       <Feed />
      

       {/*Widgets*/}
       <Widget />
       </div>
       </div> 

    
    )
      }
      </div>
  );
}

export default App;
