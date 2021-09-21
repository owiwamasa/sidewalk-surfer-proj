import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMedium } from "../../store/media";
import Errors from '../errors'

const CreateMediaForm = ({ setShowModal }) => {
  const [description, setDescription] = useState("");
  const [mediaUrl, setMediaUrl] = useState(null);
  const [imageLoading, setImageLoading] = useState(false)
  const spot = useSelector((state) => state.spotReducer.curSpot);
  const dispatch = useDispatch();

  const onSubmit = async(e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("description", description);
    formData.append("mediaUrl", mediaUrl);

    setImageLoading(true)

      const success = await dispatch(addMedium(formData, spot.id))
      if (success){
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
              <h3 className="form-h3">Media</h3>
            </div>
            <Errors/>
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
                type="file"
                accept='image/*'
                onChange={(e) => setMediaUrl(e.target.files[0])}
              />
            </div>
          </div>
          <div className="form-submit-btn">
            <button className="form-btn" type="submit">
              Create Media
            </button>
            {(imageLoading)&& <p>Loading...</p>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateMediaForm;
