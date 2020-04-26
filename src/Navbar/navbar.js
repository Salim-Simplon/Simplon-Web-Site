import React from 'react';
import logosimp from './logosimp.png';
import  './navbar.css';
import rep from './rep.jpg';




function Navbar(props){
    return (
    <div><nav className='navbar'>
      
  <img className="logo" src={logosimp} alt="logo simplon" width="100px"/>
            
            <span>
            {props.links}
           </span>
             
           
            </nav>

            <img   className="image" src={rep} alt="carousel"/>


            
            </div>

            
    )
}




export default Navbar;