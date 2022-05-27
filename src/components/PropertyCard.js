

function PropertyCard(props) {
  
  
  return (
      <div className="property-card-container">
          <div className="property-image"></div>
          <p className="property-address">{props.addressNumber} {props.addressStreet}</p>
          <p className="property-city">Redding, CA</p>
          <p className="property-rent"><span>$2000</span> month</p>
      </div>
    );
  }
  
  export default PropertyCard;