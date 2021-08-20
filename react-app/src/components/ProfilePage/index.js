import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSpots } from "../../store/spots";
import { fetchAllMedia } from "../../store/media";
import { fetchComments } from "../../store/comments";
import { NavLink } from "react-router-dom";
import MediaModal from "../MediaModal";

import "./ProfilePage.css";

function ProfilePage() {
  const [user, setUser] = useState({});
  const { userId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
    dispatch(fetchSpots());
    dispatch(fetchAllMedia());
    dispatch(fetchComments());
  }, [userId, dispatch]);

  function convertLink(m) {
    let url = m.mediaUrl;
    if (m?.mediaUrl.includes("youtube")) {
      url = m.mediaUrl.split("watch?v=");
      url = `http://img.youtube.com/vi/${url[1]}/0.jpg`;
    }
    return url;
  }

  const spots = useSelector((state) => state.spotReducer.spots);
  const media = useSelector((state) => state.mediaReducer.media);
  const comments = useSelector((state) => state.commentReducer.comments);
  console.log(comments);
  if (!user) {
    return null;
  }
  return (
    <div>
      <div className="top">
        <div className="top_left">
          <img src={user.profilepic} alt="" />
        </div>
        <div className="top_right">
          <div className="un">{user.username}</div>
          <div className="email">Email: {user.email}</div>
        </div>
      </div>

      <div className="whole">
        <div className="grid-container">
          {media.map((m) => (
            <div key={m.id}>
              {user?.id === m?.userId ? (
                <div className="spotdiv">
                  <img src={convertLink(m)} alt=""></img>
                  <div className="modal">
                    <MediaModal media={m} comments={comments}></MediaModal>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ProfilePage;
