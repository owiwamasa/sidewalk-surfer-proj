import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addOneSpot } from "../../store/spots";
import Errors from '../errors'

const CreateSpotForm = ({ setShowModal }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [imageLoading, setImageLoading] = useState(false)

//   const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();

  const onSubmit = async(e) => {
    e.preventDefault();
    // const errs = []
    
    // const spot = { name, address, latitude, longitude, description, imageUrl };

    const formData = new FormData();
    formData.append("name", name);
    formData.append("address", address);
    formData.append("latitude", latitude);
    formData.append("longitude", longitude);
    formData.append("description", description);
    formData.append("imageUrl", imageUrl);

    setImageLoading(true)

    const success = await dispatch(addOneSpot(formData))
    if (success){
      setShowModal(false);
      setImageLoading(false)
    } else {
      setImageLoading(false)
    }
  };

  return (
    <div className="form-div">
      <form onSubmit={onSubmit}>
        <div className="form-content">
          <div className="form-all-inputs-container">
            <div className="form-h3-container">
              <h3 className="form-h3">Create Spot</h3>
            </div>
            <Errors/>

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
                type='file'
                accept='image/*'
                onChange={(e) => setImageUrl(e.target.files[0])}
              />
            </div>
          </div>
          <div className="form-submit-btn">
            {(imageLoading)&& <p>Loading...</p>}
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
