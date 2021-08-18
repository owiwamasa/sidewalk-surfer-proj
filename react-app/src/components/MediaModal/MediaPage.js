import TimeAgo from "timeago-react";
import './MediaPage.css'

function MediaPage({media, comments}){
    let url = media.mediaUrl;

  if (media?.mediaUrl.includes("youtube")) {
    url = media.mediaUrl.split("watch?v=");
    url[1] = "embed/" + url[1];
    url = url.join("");
  }
  console.log(comments)

  return (
    <div className="mediaPage">
      <div className="mediaPage-Header">
        <img className="mediaPage-profilePic" alt="profilePic" src={media.profilePic} />
        <span className="mediaPage-mainuserName">{media.username}</span>
      </div>
      <iframe
        width="613.75"
        height="100%"
        src={url}
        title={media.name}
        scrolling="no"
        frameborder="0"
      ></iframe>
      <div className="mediaPage-description">
        <span className="mediaPage-mainuserName">{media.username}</span>{" "}
        {media.description}
        <TimeAgo datetime={media.createdAt} />
      </div>
      <div className="mediaPage-comments">
        {comments.map((comment) => (
          <div className="comment">
            <span className="userName">
              {comment.username}{" "}
              <span className="content">{comment.comment}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )}

export default MediaPage
