import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editOneSpot } from "../../store/spots";
import './EditSpotForm.css'

const EditSpotForm = ({ setShowModal }) => {
  const spot = useSelector((state) => state.spotReducer.curSpot);
  const [name, setName] = useState(spot?.name);
  const [address, setAddress] = useState(spot?.address);
  const [latitude, setLatitude] = useState(spot?.latitude);
  const [longitude, setLongitude] = useState(spot?.longitude);
  const [description, setDescription] = useState(spot?.description);
  const [imageUrl, setImageUrl] = useState(spot?.imageUrl);
  // const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = []
    const payload = {
      name,
      address,
      latitude,
      longitude,
      description,
      imageUrl,
    };
    // if (!name) errs.push("Name is required");
    // if (!address) errs.push("Address is required");
    // if (!latitude) errs.push("Latitude is required");
    // if (!longitude) errs.push("Longitude is required");
    // if (!description) errs.push("Description is required");
    // if (!imageUrl) errs.push("Image URL is required");
    // if (name.length > 255) errs.push("Name must be less than 255 characters");
    // if (address.length > 255) errs.push("Address must be less than 255 characters");
    // if (description.length > 500) errs.push("Description must be less than 500 characters");
    // if (imageUrl.length > 500) errs.push("Image URL must be less than 500 characters");

    // setErrors(errs)
    // if (!errors) {
      dispatch(editOneSpot(payload, spot.id));
      setShowModal(false);
    // }
  };

  return (
    <div className="form-div">
      <form onSubmit={onSubmit}>
        <div className="form-content">
          <div className="form-all-inputs-container">
            <div className="form-h3-container">
              <h3 className="form-h3">Edit Spot</h3>
            </div>
              {/* <div className='form-error-div'>
                {errors && errors.map(err => (
                  <div className='form-error' key={err}>{err}</div>
                ))}
              </div> */}
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
