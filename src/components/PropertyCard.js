

function PropertyCard(props) {
  
  
  return (
      <div className="property-card-container">
          <div className="property-image"></div>
          <p className="property-address">{props.addressNumber} {props.addressStreet}</p>
          <p className="property-city">{props.addressCity}, {props.addressState}</p>
          <p className="property-rent"><span>${props.rent}</span> month</p>
      </div>
    );
  }
  
  export default PropertyCard;