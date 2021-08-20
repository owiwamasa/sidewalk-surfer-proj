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
//   const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    // const errs = []
    const spot = { name, address, latitude, longitude, description, imageUrl };
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
    dispatch(addOneSpot(spot)).then(() => setShowModal(false));
    // }
  };

  return (
    <div className="form-div">
      <form onSubmit={onSubmit}>
        <div className="form-content">
          <div className="form-all-inputs-container">
            <div className="form-h3-container">
              <h3 className="form-h3">Create Spot</h3>
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
              Create Spot
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateSpotForm;
