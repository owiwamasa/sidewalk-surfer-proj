import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TimeAgo from "timeago-react";
import EditMediaModal from "../EditPost";
import { deleteMedium } from "../../store/media";
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

  //   console.log(media.user.username);
  return (
    <div className="mediaCard">
      <div className="cardHeader">
        <img className="profilePic" alt="profilePic" src={media.profilePic} />
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
        <span className="mainuserName">{media.username}</span>{" "}
        {media.description}
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
