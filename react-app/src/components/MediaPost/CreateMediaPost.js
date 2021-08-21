import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMedium } from "../../store/media";
import Errors from '../errors'

const CreateMediaForm = ({ setShowModal }) => {
  const [description, setDescription] = useState("");
  const [mediaUrl, setMediaUrl] = useState("");
  // const [errors, setErrors] = useState([]);
  const spot = useSelector((state) => state.spotReducer.curSpot);
  const dispatch = useDispatch();

  const onSubmit = async(e) => {
    e.preventDefault();
    // const errs = []

    // if (!description.length) errs.push("Description is required");
    // if (!mediaUrl.length) errs.push("Media URL is required");
    // if (description.length > 500) errs.push("Description must be 500 characters or less");
    // if (mediaUrl.length > 500) errs.push("Media URL must be 500 characters or less");
    // setErrors(errs);
    // console.log(errors)
    // if (!errors){
      const media = { description, mediaUrl };
      const success = await dispatch(addMedium(media, spot.id))
      if (success){
        setShowModal(false);
      }
    // }
  };

  return (
    <div className="form-div">
      <form onSubmit={onSubmit}>
        <div className="form-content">
          <div className="form-all-inputs-container">
            <div className="form-h3-container">
              <h3 className="form-h3">Media</h3>
            </div>
            <Errors/>
            {/* <div className='form-error-div'>
                {errors && errors.map(err => (
                  <div className='form-error' key={err}>{err}</div>
                ))}
            </div> */}
            <div className="form-input-container">
              <label className="form-label">Description</label>
              <input
                className="form-input"
                type="textarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="form-input-container">
              <label className="form-label">Media Url</label>
              <input
                className="form-input"
                type="text"
                value={mediaUrl}
                onChange={(e) => setMediaUrl(e.target.value)}
              />
            </div>
          </div>
          <div className="form-submit-btn">
            <button className="form-btn" type="submit">
              Create Media
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateMediaForm;
