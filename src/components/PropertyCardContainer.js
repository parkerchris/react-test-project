import PropertyCard from "./PropertyCard";
import React, { useState } from 'react'

import homes from '../homes'



function PropertyCardContainer() {

   const [properties, setproperties] = useState(homes)

   const propertyElement = properties.map(property => {
      return (<PropertyCard 
                  key={property.id}
                  addressNumber={property.address_number}
                  addressStreet={property.address_street}
                  addressCity={property.address_city}
                  addressState={property.address_state}
                  addressZip={property.address_zip}
                  value={property.value}
                  rent={property.rent}
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