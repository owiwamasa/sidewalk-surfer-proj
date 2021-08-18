import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchOneSpot } from "../../store/spots";
import { fetchMedia } from "../../store/media";
import { fetchComments } from "../../store/comments";
import TimeAgo from "timeago-react";
import MediaModal from "../MediaModal";
import "./MediaCard.css";

const MediaCard = ({ media, comments }) => {
  let url = media.mediaUrl;
  const dispatch = useDispatch();

  if (media?.mediaUrl.includes("youtube")) {
    url = media.mediaUrl.split("watch?v=");
    url[1] = "embed/" + url[1];
    url = url.join("");
  }
  // const { id } = useParams();
  // useEffect(() => {
  //   dispatch(fetchOneSpot(id));
  //   dispatch(fetchMedia(id));
  //   dispatch(fetchComments());
  // }, [dispatch, id]);

  // const medium = useSelector((state) => state.mediaReducer.media);
  // const mediumComments = useSelector((state) => state.commentReducer.comments);
  // const thisMedia = medium.filter((m) => m.id === media.id);
  // const thisComments = mediumComments.filter((c) => c.mediaId === media.id);

  // const mediaId = media.id;

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
        <MediaModal media={media} comments={comments} />

    </div>
  );
};

export default MediaCard;
