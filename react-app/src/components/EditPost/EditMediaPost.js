import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editMedium, fetchMedia } from "../../store/media";
import { fetchOneSpot } from "../../store/spots";

const EditMediaForm = ({ setShowModal, media }) => {
  const [description, setDescription] = useState(media.description);
  const [mediaUrl, setMediaUrl] = useState(media.mediaUrl);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    const payload = { description, mediaUrl };

    dispatch(editMedium(payload, media.id));
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
              Edit Media
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditMediaForm;
