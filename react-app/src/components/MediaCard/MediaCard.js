import { useDispatch, useSelector } from "react-redux";
import TimeAgo from "timeago-react";
import { NavLink } from "react-router-dom";
import EditMediaModal from "../EditPost";
import { deleteMedium } from "../../store/media";
import MediaModal from "../MediaModal";
import "./MediaCard.css";

const MediaCard = ({ media, comments }) => {
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  let url = media.mediaUrl;

  if (media?.mediaUrl.includes("youtube")) {
    url = media.mediaUrl.split("watch?v=");
    url[1] = "embed/" + url[1];
    url = url.join("");
  }

  function deleteMedia() {
    dispatch(deleteMedium(media.id));
  }
  return (
    <div className="mediaCard">
      <div className="cardHeader">
        <NavLink to={`/users/${media.userId}`} exact={true}>
          <div className="profileLink">
            <img
              className="profilePic"
              alt="profilePic"
              src={media.profilePic}
              onError={(e) =>
                (e.target.src =
                  "https://media.wired.com/photos/5a0201b14834c514857a7ed7/master/pass/1217-WI-APHIST-01.jpg")
              }
            />
            <span className="mainuserName">{media.username}</span>
          </div>
        </NavLink>
        <div>
          {media?.userId === user?.id && <EditMediaModal media={media} />}
          {media?.userId === user?.id && (
            <button className="mediaCard-delete" onClick={deleteMedia}>
              Delete
            </button>
          )}
        </div>
      </div>
      {media?.mediaUrl.includes("youtube") ? (
        <iframe
          width="613.75"
          height="100%"
          src={url}
          title={media.name}
          scrolling="no"
          frameBorder="0"
        ></iframe>
      ) : (
        <div className="mediaCard-img-div">
          <img className="mediaCard-img" src={media.mediaUrl} alt="media" />
        </div>
      )}
      <div className="description">
        <div className="mediaCard-user">
          <span className="mainuserName">{media.username} </span>{" "}
          <span className="mediaCard-description">{media.description}</span>
        </div>
        <TimeAgo datetime={media.createdAt} />
        <div className="mediaCard-comments">
          {comments.map((comment) => (
            <div className="comment" key={comment.id}>
              <NavLink to={`/users/${comment.userId}`}>
                <span className="userName">{comment.username}</span>
              </NavLink>
              <span className="content">{comment.comment}</span>
            </div>
          ))}
        </div>
        <MediaModal media={media} comments={comments} />
      </div>
    </div>
  );
};

export default MediaCard;
