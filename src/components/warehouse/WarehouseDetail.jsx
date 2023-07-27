import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateWarehouse } from "../../store/warehouseSlice";
import "./warehouseDetails.css";

const WarehouseDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const warehouses = useSelector((state) => state.warehouse.warehouses);
  const dispatch = useDispatch();

  const warehouse = warehouses.find((warehouse) => warehouse.name === name);

  const [isEditing, setIsEditing] = useState(false);
  const [editedWarehouse, setEditedWarehouse] = useState(warehouse);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setEditedWarehouse({ ...editedWarehouse, [name]: value });
  };

  const handleCancelEdit = () => {
    setEditedWarehouse(warehouse);

    setIsEditing(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateWarehouse(editedWarehouse));

    navigate(`/listing`);
  };

  if (!warehouse)
    return (
      <div>
        <h2>Warehouse not found</h2>
      </div>
    );

  return (
    <>
      <Link to="/">
        <button>Go back</button>
      </Link>
      <div className="warehouseDetailsContainer">
        {!isEditing ? (
          <div className="warehouse-detail">
            <h2>{editedWarehouse.name}</h2>
            <p>Code: {editedWarehouse.code}</p>
            <p>City: {editedWarehouse.city}</p>
            <p>Space Available: {editedWarehouse.space_available}</p>
            <p>Type: {editedWarehouse.type}</p>
            <p>Cluster: {editedWarehouse.cluster}</p>
            <p>Is Registered: {editedWarehouse.is_registered.toString()}</p>
            <p>Is Live: {editedWarehouse.is_live.toString()}</p>
            <button onClick={() => setIsEditing(true)}>Edit Details</button>
          </div>
        ) : (
          <div>
            <h2>Edit Warehouse Details</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={editedWarehouse.name}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="code"
                value={editedWarehouse.code}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="city"
                value={editedWarehouse.city}
                onChange={handleInputChange}
              />
              <input
                type="number"
                name="space_available"
                value={editedWarehouse.space_available}
                onChange={handleInputChange}
              />
              {/* Add other input fields for other editable details */}

              {/* Save and Cancel buttons */}
              <button type="submit">Save Changes</button>
              <button type="button" onClick={handleCancelEdit}>
                Cancel
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default WarehouseDetail;
