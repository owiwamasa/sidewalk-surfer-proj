import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import TimeAgo from "timeago-react";
import {
  postComment,
  editOneComment,
  deleteOneComment,
} from "../../store/comments";
import "./MediaPage.css";

function MediaPage({ media, comments }) {
  const user = useSelector((state) => state.session.user);
  const [editClicked, setEditClicked] = useState(false);
  const [comment, setComment] = useState("");
  const [editComment, setEditComment] = useState("");
  const [targetId, setTargetId] = useState("");
  const dispatch = useDispatch();
  let url = media.mediaUrl;

  if (media?.mediaUrl.includes("youtube")) {
    url = media.mediaUrl.split("watch?v=");
    url[1] = "embed/" + url[1];
    url = url.join("");
  }

  const commentSubmit = (e) => {
    e.preventDefault();
    const payload = { comment, userId: user?.id, mediaId: media?.id };
    dispatch(postComment(payload));
    setComment("");
  };

  const editCommentSubmit = (e, id) => {
    e.preventDefault();
    dispatch(
      editOneComment(
        { comment: editComment, userId: user?.id, mediaId: media?.id },
        id
      )
    );
    setEditClicked(false);
  };

  const deleteComment = (e, id) => {
    e.preventDefault();
    dispatch(deleteOneComment(id));
  };

  return (
    <div className="mediaPage">
      <div className="mediaPage-media">
        {media?.mediaUrl.includes("youtube") ? (
          <iframe
            width="613.75"
            height="100%"
            src={url}
            title={media.name}
            scrolling="no"
            frameborder="0"
          ></iframe>
        ) : (
          <img src={media.mediaUrl} alt="media" />
        )}
      </div>
      <div className="mediaPage-info">
        <div className="mediaPage-Header">
          <div className="mediaPage-user">
            <div>
              <div className="mediaPage-profile-pic">
                <NavLink
                  to={`/users/${media.userId}`}
                  exact={true}
                  activeClassName="active"
                >
                  <img
                    className="mediaPage-profilePic"
                    alt="profilePic"
                    onCanPlayThroughCapture
                    src={media.profilePic}
                  />
                </NavLink>
              </div>
            </div>
            {/* <img
              className="mediaPage-profilePic"
              alt="profilePic"
              src={media.profilePic}
            /> */}
            <NavLink to={`/users/${media.userId}`}>
              <span className="mediaPage-mainuserName">{media.username}</span>
            </NavLink>
          </div>
          <TimeAgo datetime={media.createdAt} />
        </div>
        <div className="mediaPage-comments">
          {comments.map((comment) => (
            <div className="mediaPage-comment" key={comment.id}>
              <div className="mediaPage-comment-info">
                <NavLink to={`/users/${comment.userId}`}>
                  <span className="mediaPage-userName">
                    {comment?.username}{" "}
                  </span>
                </NavLink>
                {comment?.userId === user?.id && (
                  <div className="mediaPage-comment-btns">
                    <button
                      onClick={() => {
                        setEditClicked(!editClicked);
                        setEditComment(comment.comment);
                        setTargetId(comment.id);
                      }}
                    >
                      Edit
                    </button>
                    <button onClick={(e) => deleteComment(e, comment.id)}>
                      Delete
                    </button>
                  </div>
                )}
              </div>
              {editClicked && comment?.id === targetId ? (
                <form
                  className="editComment-form"
                  onSubmit={(e) => editCommentSubmit(e, comment.id)}
                >
                  <textarea
                    type="text"
                    className="editComment"
                    value={editComment}
                    onChange={(e) => setEditComment(e.target.value)}
                  />
                  <button className="editComment-btn" type="submit">
                    Submit
                  </button>
                </form>
              ) : (
                <span className="content">{comment?.comment}</span>
              )}
            </div>
          ))}
        </div>
        <form className="mediaPage-commentForm" onSubmit={commentSubmit}>
          <textarea
            type="text"
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button type="submit">Submit Comment</button>
        </form>
      </div>
    </div>
  );
}

export default MediaPage;
