
import Analytics from "./Analytics";
import PropertyModal from "./PropertyModal";
import React,{useState} from 'react'

function MiddleNav() {
    
  const [ showPropertyModal, setShowPropertyModal ] = useState(false)

  function handleClick() {
    setShowPropertyModal(prevState => !prevState)
  }
  
  return (
      <div className="middle-nav-container">
          <div className="middle-nav-contains">
              <button className="main-cta" onClick={handleClick}><p>Add a property</p></button>
              <button className="property-filter">Filters</button>
          </div>
          { showPropertyModal && <PropertyModal/> }

      </div>
    );
  }
  
  export default MiddleNav;