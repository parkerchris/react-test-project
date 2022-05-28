
import Analytics from "./Analytics";
import PropertyModal from "./PropertyModal";
import React,{useState} from 'react'

function MiddleNav(props) {
    
  
  return (
      <div className="middle-nav-container">
          <div className="middle-nav-contains">
              <button className="main-cta" onClick={props.handleClick}><p>Add a property</p></button>
              <button className="property-filter">Filters</button>
          </div>
          

      </div>
    );
  }
  
  export default MiddleNav;