import PropertyCard from "./PropertyCard";
import React, { useState } from 'react'

import homes from '../homes'



function PropertyCardContainer() {

   const [properties, setproperties] = useState(homes)

   const propertyElement = properties.map(property => {
      return (<PropertyCard 
                  addressNumber={property.address_number}
                  addressStreet={property.address_street}
                  />)
   })


    return (
      <div className="property-section">
         <div className="property-wrapper">
            {propertyElement}
         </div>
      </div>
    );
  }
  
  export default PropertyCardContainer;