import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import TimeAgo from "timeago-react";
import {
  postComment,
  editOneComment,
  deleteOneComment,
} from "../../store/comments";
import "./MediaPage.css";
import Errors from "../errors";

function MediaPage({ media, comments, setShowModal }) {
  const user = useSelector((state) => state.session.user);
  const spots = useSelector((state) => state.spotReducer.spots);
  const spot = spots.filter((spot) => spot.id === media.spotId)[0];
  const [editClicked, setEditClicked] = useState(false);
  const [comment, setComment] = useState("");
  const [editComment, setEditComment] = useState("");
  const [targetId, setTargetId] = useState("");
  const [commentErrors, setCommentErrors] = useState(false);
  const [editCommentErrors, setEditCommentErrors] = useState(false);
  const dispatch = useDispatch();
  let url = media.mediaUrl;

  if (media?.mediaUrl.includes("youtube")) {
    url = media.mediaUrl.split("watch?v=");
    url[1] = "embed/" + url[1];
    url = url.join("");
  }

  const commentSubmit = async (e) => {
    e.preventDefault();
    const payload = { comment, userId: user?.id, mediaId: media?.id };

    const success = await dispatch(postComment(payload));
    if (success) {
      setComment("");
    } else {
      setCommentErrors(true);
    }
  };

  function closeModal() {
    setShowModal(false);
  }

  const editCommentSubmit = async (e, id) => {
    e.preventDefault();
    const success = await dispatch(
      editOneComment(
        { comment: editComment, userId: user?.id, mediaId: media?.id },
        id
      )
    );
    if (success) {
      setEditClicked(false);
    } else {
      setEditCommentErrors(true);
      setCommentErrors(false);
    }
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
            frameBorder="0"
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
                    src={media.profilePic}
                    onError={(e) =>
                      (e.target.src =
                        "https://media.wired.com/photos/5a0201b14834c514857a7ed7/master/pass/1217-WI-APHIST-01.jpg")
                    }
                  />
                </NavLink>
              </div>
            </div>
            <NavLink to={`/users/${media.userId}`}>
              <span className="mediaPage-mainuserName">{media.username}</span>
            </NavLink>
          </div>
          <TimeAgo datetime={media.createdAt} />
        </div>
        <div id="mediaPage-spotlink">
          <Link to={`/spots/${spot?.id}`} onClick={closeModal}>
            📍{spot.name}
          </Link>
        </div>
        <div className="mediaPage-comments">
          <div className="mediaPage-comment">
            {/* <NavLink to={`/users/${media?.userId}`}>
              <span className="mediaPage-main-userName">{media?.username} </span>
            </NavLink> */}
            <span className="descript">{media?.description}</span>
          </div>
          {comments.map((comment) => (
  <div className='comment_shape'>
            <div className="mediaPage-comment" key={comment.id}>
              <div className="mediaPage-comment-info">
                <div>
                <NavLink to={`/users/${comment.userId}`}>
                  <span className="mediaPage-userName">
                    {comment?.username}{" "}
                  </span>
                </NavLink>
                </div>
                {comment?.userId === user?.id && (
                  <div className="mediaPage-comment-btns">
                    <div>
                    <button
                      onClick={() => {
                        setEditClicked(!editClicked);
                        setEditComment(comment.comment);
                        setTargetId(comment.id);
                      }}
                    >
                      Edit
                    </button>
                    </div>
                    <div>
                      <button onClick={(e) => deleteComment(e, comment.id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
  </div>
              {editClicked && comment?.id === targetId ? (
                <form
                  className="editComment-form"
                  onSubmit={(e) => editCommentSubmit(e, comment.id)}
                >
                  {editCommentErrors ? <Errors /> : null}
                  <textarea
                    type="text"
                    className="editComment"
                    value={editComment}
                    onChange={(e) => setEditComment(e.target.value)}
                  />
                  <button className="editComment-btn" type="submit">
                    Submit Edit
                  </button>
                </form>
              ) : (
                <span className="content">{comment?.comment}</span>
              )}
            </div>
          ))}
        </div>
        {/* {!user ?
        <div>Please log in to add your comment</div> : */}
        <form className="mediaPage-commentForm" onSubmit={commentSubmit}>
          {commentErrors ? <Errors /> : null}
          <textarea
            disabled={!user}
            type="text"
            placeholder={!user ? "**Please log in**" : "Write a comment..."}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button disabled={!user} type="submit">
            Submit Comment
          </button>
        </form>
        {/* } */}
      </div>
    </div>
  );
}

export default MediaPage;
