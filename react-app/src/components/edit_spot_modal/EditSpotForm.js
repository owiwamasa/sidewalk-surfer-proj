import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editOneSpot } from "../../store/spots";
import Errors from "../errors";
import Geocode from "react-geocode";

import "./EditSpotForm.css";

Geocode.setApiKey("AIzaSyAgdlEtqn59K7XpcMGDwsM1Ub8IlhtSruw");

const EditSpotForm = ({ setShowModal }) => {
  const spot = useSelector((state) => state.spotReducer.curSpot);
  const [name, setName] = useState(spot?.name);
  const [address, setAddress] = useState(spot?.address);
  // const [latitude, setLatitude] = useState(spot?.latitude);
  // const [longitude, setLongitude] = useState(spot?.longitude);
  const [description, setDescription] = useState(spot?.description);
  const [imageUrl, setImageUrl] = useState(spot?.imageUrl);
  const [imageLoading, setImageLoading] = useState(false)
  // const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    // const errs = []
    let res = await Geocode.fromAddress(address);
    const { lat: latitude, lng: longitude } = res.results[0].geometry.location;
    // const payload = {
    //   name,
    //   address,
    //   latitude,
    //   longitude,
    //   description,
    //   imageUrl,
    // };

    const formData = new FormData();
    formData.append("name", name);
    formData.append("address", address);
    formData.append("latitude", latitude);
    formData.append("longitude", longitude);
    formData.append("description", description);
    formData.append("imageUrl", imageUrl);

    setImageLoading(true)
    const success = await dispatch(editOneSpot(formData, spot.id));
    if (success) {
      setShowModal(false);
      setImageLoading(false)
    }
  };

  return (
    <div className="form-div">
      <form onSubmit={onSubmit}>
        <div className="form-content">
          <div className="form-all-inputs-container">
            <div className="form-h3-container">
              <h3 className="form-h3">Edit Spot</h3>
            </div>
            <Errors />

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
                className="form-input-image"
                type="file"
                accept='image/*'
                onChange={(e) => setImageUrl(e.target.files[0])}
              />
            </div>
          </div>
          {(imageLoading)&& <p>Loading...</p>}
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
