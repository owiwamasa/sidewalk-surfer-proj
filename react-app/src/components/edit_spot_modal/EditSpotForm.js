import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editOneSpot, fetchOneSpot } from "../../store/spots";

const EditSpotForm = ({ setShowModal }) => {
  const spot = useSelector((state) => state.spotReducer.spots[0]);
  console.log(spot);
  const [name, setName] = useState(spot?.name);
  const [address, setAddress] = useState(spot?.address);
  const [latitude, setLatitude] = useState(spot?.latitude);
  const [longitude, setLongitude] = useState(spot?.longitude);
  const [description, setDescription] = useState(spot?.description);
  const [imageUrl, setImageUrl] = useState(spot?.imageUrl);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    const payload = {
      name,
      address,
      latitude,
      longitude,
      description,
      imageUrl,
    };
    dispatch(editOneSpot(payload, spot.id));
    setShowModal(false);
  };

  return (
    <div className="form-div">
      <form onSubmit={onSubmit}>
        <div className="form-content">
          <div className="form-all-inputs-container">
            <div className="form-h3-container">
              <h3 className="form-h3">Edit Spot</h3>
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
              Edit Spot
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditSpotForm;
