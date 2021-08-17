import { useEffect } from "react";
import ReactPlayer from "react-player";
import "./MediaCard.css";

const MediaCard = ({ media }) => {
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
        <span className="userName">{media.username}</span>
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
        <span className="userName">{media.username}</span> {media.description}
      </div>
    </div>
  );
};

export default MediaCard;
