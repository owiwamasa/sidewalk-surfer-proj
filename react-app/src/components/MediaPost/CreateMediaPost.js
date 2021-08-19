import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMedium } from "../../store/media";

const CreateMediaForm = ({ setShowModal }) => {
  const [description, setDescription] = useState("");
  const [mediaUrl, setMediaUrl] = useState("");
  const spot = useSelector((state) => state.spotReducer.curSpot);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    const media = { description, mediaUrl };

    dispatch(addMedium(media, spot.id));
    setShowModal(false);
  };

  return (
    <div className="form-div">
      <form onSubmit={onSubmit}>
        <div className="form-content">
          <div className="form-all-inputs-container">
            <div className="form-h3-container">
              <h3 className="form-h3">Media</h3>
            </div>
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
