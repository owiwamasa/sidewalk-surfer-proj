import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { fetchSpots } from "../../store/spots";
import { fetchAllMedia } from "../../store/media";
import { fetchComments } from "../../store/comments";
import EditMediaModal from "../EditPost";
import { deleteMedium } from "../../store/media";
import MediaModal from "../MediaModal";

import "./ProfilePage.css";

function ProfilePage() {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const currentUser = useSelector((state) => state.session.user);
  const spots = useSelector((state) => state.spotReducer.spots);
  const mySpots = spots.filter((spot) => spot.userId === +userId);

  const dispatch = useDispatch();

  function deleteMedia(media) {
    dispatch(deleteMedium(media.id));
    dispatch(fetchSpots());
  }

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

  const media = useSelector((state) => state.mediaReducer.media);
  const comments = useSelector((state) => state.commentReducer.comments);
  if (!user) {
    return null;
  }

  return (
    <div className="profilePage-container">
      <div className="top">
        <div className="top_left">
          <img
            src={user.profilepic}
            alt=""
            onError={(e) =>
              (e.target.src =
                "https://media.wired.com/photos/5a0201b14834c514857a7ed7/master/pass/1217-WI-APHIST-01.jpg")
            }
          />
        </div>
        <div className="top_right">
          <div className="un">{user.username}</div>
          <div className="email">
            <a href={`mailto:${user.email}`} target="_blank" rel="noreferrer">
              {user.email}
            </a>
          </div>
        </div>
      </div>

      {mySpots.length !== 0 && (
        <div className="my-spots">
          <div className="my-spots-header">My Spots</div>
          <div className="my-spots-container">
            {mySpots &&
              mySpots?.map((spot) => (
                <div className="my-spot">
                  <div className="my-spot-name">{spot?.name}</div>
                  <Link to={`/spots/${spot?.id}`}>
                    <div className="my-spot-img">
                      <img src={spot?.imageUrl} alt="skate spot" />
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      )}

      <div className="whole">
        <div className="whole-title">My Posts</div>
        <div className="grid-container">
          {media.map((m) => (
            <div key={m.id}>
              {user?.id === m?.userId ? (
                <div className="spotdiv">
                  <div className="profilePage-img">
                    <img src={convertLink(m)} alt=""></img>
                  </div>
                  <div className="modal">
                    <MediaModal
                      className="profilePage-modal"
                      media={m}
                      comments={comments.filter((c) => c.mediaId === m.id)}
                    ></MediaModal>
                    {currentUser?.id === user?.id ? (
                      <div>
                        <EditMediaModal id="profilePage-modal" media={m} />
                        <button
                          className="mediaCard-delete"
                          onClick={() => deleteMedia(m)}
                        >
                          Delete
                        </button>
                      </div>
                    ) : null}
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
