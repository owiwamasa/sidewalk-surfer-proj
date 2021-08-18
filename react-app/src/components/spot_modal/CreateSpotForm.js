import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addOneSpot } from "../../store/spots";

const CreateSpotForm = ({ setShowModal }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    const spot = { name, address, latitude, longitude, description, imageUrl };
    return dispatch(addOneSpot(spot)).then(() => setShowModal(false));
  };

  return (
    <div className="form-div">
      <form onSubmit={onSubmit}>
        <div className="form-content">
          <div className="form-all-inputs-container">
            <div className="form-h3-container">
              <h3 className="form-h3">Log In</h3>
            </div>
            <div className="form-input-container">
              <label className="form-label">Name</label>
              <input
                className="form-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-input-container">
              <label className="form-label">Address</label>
              <input
                className="form-input"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="form-input-container">
              <label className="form-label">Latitude</label>
              <input
                className="form-input"
                type="number"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
              />
            </div>
            <div className="form-input-container">
              <label className="form-label">Longitude</label>
              <input
                className="form-input"
                type="number"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
              />
            </div>
            <div className="form-input-container">
              <label className="form-label">Description</label>
              <input
                className="form-input"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="form-input-container">
              <label className="form-label">Image Url</label>
              <input
                className="form-input"
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>
          </div>
          <div className="form-submit-btn">
            <button className="form-btn" type="submit">
              Create Spot
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateSpotForm;
