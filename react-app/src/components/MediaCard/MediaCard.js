import { useDispatch, useSelector } from "react-redux";
import TimeAgo from "timeago-react";
import { NavLink } from 'react-router-dom';
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
        <div>
          <div className='mediaPage-profile-pic'>
            <NavLink to={`/users/${media.userId}`} exact={true} activeClassName='active'>
              <img className="profilePic" alt="profilePic" src={media.profilePic} />
            </NavLink>
          </div>
        </div>
        {/* <img className="profilePic" alt="profilePic" src={media.profilePic} /> */}
        <span className="mainuserName">{media.username}</span>
        {media?.userId === user?.id && <EditMediaModal media={media} />}
        {media?.userId === user?.id && (
          <button onClick={deleteMedia}>Delete</button>
        )}
      </div>
      <iframe
        width="613.75"
        height="100%"
        src={url}
        title={media.name}
        scrolling="no"
        frameborder="0"
      ></iframe>
      <div className="description">
        <span className="mainuserName">{media.username} </span>{" "}
        {media.description}
        <MediaModal media={media} comments={comments} />
        {comments.map((comment) => (
          <div className="comment">
            <span className="userName">
              {comment.username}{" "}
              <span className="content">{comment.comment}</span>
            </span>
          </div>
        ))}
        <TimeAgo datetime={media.createdAt} />
      </div>
    </div>
  );
};

export default MediaCard;
