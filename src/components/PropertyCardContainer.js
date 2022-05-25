import PropertyCard from "./PropertyCard";

function PropertyCardContainer() {
    return (
      <div className="property-section">
         <div className="property-wrapper">
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
         </div>
      </div>
    );
  }
  
  export default PropertyCardContainer;