import React from 'react'
import './Widget.css'
import InfoIcon from '@material-ui/icons/Info'

function Widget() {
  return (
      <>
    <div className='widget'>
       <div className='widget_top'>
           <div className='widget_header'>
            <h4>LinkedIn News</h4>
            <InfoIcon/>
           </div>
           <div className='widget_body'>
               <ul className="widget_options">
                   <li>
                       <h4>Slaying Job Search Fees</h4>
                       <p>6days ag0 * 4,55 readers</p>
                   </li>
                   <li>
                       <h4>Slaying Job Search Fees</h4>
                       <p>6days ag0 * 4,55 readers</p>
                   </li>
                   <li>
                       <h4>Slaying Job Search Fees</h4>
                       <p>6days ag0 * 4,55 readers</p>
                   </li>
                   <li>
                       <h4>Slaying Job Search Fees</h4>
                       <p>6days ag0 * 4,55 readers</p>
                   </li>
               </ul>
           </div>
        </div>
        <div className='widget_bottom'>
           <div className='widget_header'>
            <h4>Today's top courses</h4>
            <InfoIcon/>
           </div>
           <div className='widget_body'>
               <ul className="widget_options">
                   <li>
                       <h4>Leading with a Heavy Heat</h4>
                       <p>Kay Coly</p>
                   </li>
                   <li>
                       <h4>Building Resillience</h4>
                       <p>6days ag0 * 4,55 readers</p>
                   </li>
                   <li>
                       <h4>Critical Thinking for better judgement</h4>
                       <p>6days ag0 * 4,55 readers</p>
                   </li>
                   <li>
                       <h4>Shorter hour boost productivity</h4>
                       <p>6days ag0 * 4,55 readers</p>
                   </li>
               </ul>
           </div>
        </div>
    </div>
    </>
  )
}

export default Widget;