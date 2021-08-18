import { useEffect } from "react";
import TimeAgo from "timeago-react";
import "./MediaCard.css";

const MediaCard = ({ media, comments }) => {
  let url = media.mediaUrl;
  if (media.mediaUrl.includes("youtube")) {
    url = media.mediaUrl.split("watch?v=");
    url[1] = "embed/" + url[1];
    url = url.join("");
  }

  //   console.log(media.user.username);
  return (
    <div className="mediaCard">
      <div className="cardHeader">
        <img className="profilePic" alt="profilePic" src={media.profilePic} />
        <span className="mainuserName">{media.username}</span>
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
