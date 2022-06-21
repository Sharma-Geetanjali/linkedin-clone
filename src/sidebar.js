import React from 'react';
import "./sidebar.css";
// import {useSelector} from 'react-redux'
// import {selectUser} from './userSlice'

function Sidebar() {

    // const user= useSelector(selectUser);
    const recentItem = (topic) => (
        <div className='sidebar_recentItem'>
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )
    
    return (
      <div className='sidebar'>
   
        <div className='sidebar_top'>
          <img src="bg.jpg" alt="" />
          <h2> Geetanjali Sharma</h2>
          <h4> geet.sgs@gmail.com</h4>
        </div>

        <div className="sidebar_stats">
           
          <div className="sidebar_stat">
          <p>Who viewed you</p> 
          <p className='sidebar_statNumber'>2,447</p>
          </div>

          <div className="sidebar_stat">
          <p>Views on post</p> 
          <p className='sidebar_statNumber'>2,897</p>
          </div>

        </div>

        <div className='sidebar_bottom'> 
        <p> Recent </p>
        {recentItem('react.js')}
        {recentItem('programming')}
        {recentItem('software engineering')}
        {recentItem('design')}
        {recentItem('developer')}
        </div>

     </div>
    
    );
}

export default Sidebar;