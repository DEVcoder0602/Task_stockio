import PropTypes from "prop-types";
import "./listingcard.css";

const ListingCard = ({ warehouse }) => {
  return (
    <div className="card">
      <h2>{warehouse.name}</h2>
      <div className="card-details">
        <p>Code: {warehouse.code}</p>
        <p>City: {warehouse.city}</p>
        <p>Space Available: {warehouse.space_available}</p>
        <p>Type: {warehouse.type}</p>
        <p>Cluster: {warehouse.cluster}</p>
        <div className="card-status">
          <p className={`is-registered ${warehouse.is_registered ? "active" : "inactive"}`}>
            Is Registered: {warehouse.is_registered.toString()}
          </p>
          <p className={`is-live ${warehouse.is_live ? "active" : "inactive"}`}>
            Is Live: {warehouse.is_live.toString()}
          </p>
        </div>
      </div>
    </div>
  );
};

ListingCard.propTypes = {
  warehouse: PropTypes.shape({
    name: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    space_available: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    cluster: PropTypes.string.isRequired,
    is_registered: PropTypes.bool.isRequired,
    is_live: PropTypes.bool.isRequired,
  }).isRequired,
};

export default ListingCard;
