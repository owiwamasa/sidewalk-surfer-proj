import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import TimeAgo from "timeago-react";
import {postComment}from '../../store/comments';
import './MediaPage.css'

function MediaPage({media, comments}){
    const user = useSelector((state) => state.session.user);
    const [editClicked, setEditClicked] = useState(false);
    const [comment, setComment] = useState('');
    const [editComment, setEditComment] = useState('');
    const dispatch = useDispatch();
    let url = media.mediaUrl;

  if (media?.mediaUrl.includes("youtube")) {
    url = media.mediaUrl.split("watch?v=");
    url[1] = "embed/" + url[1];
    url = url.join("");
  }

  const commentSubmit = (e) => {
    e.preventDefault();
    const payload = {comment, userId:user?.id, mediaId: media?.id}
    dispatch(postComment(payload));
  }

  const editCommentSubmit = (e) => {
    e.preventDefault();
  }

  const deleteComment = (e) => {
    e.preventDefault();
  }

  return (
    <div className="mediaPage">
            <div className='mediaPage-media'>
                {media?.mediaUrl.includes("youtube") ?
                <iframe
                    width="613.75"
                    height="100%"
                    src={url}
                    title={media.name}
                    scrolling="no"
                    frameborder="0"
                ></iframe>
                :
                <img src={media.mediaUrl} alt='media'/>
                }
            </div>
        <div className="mediaPage-info">
            <div className="mediaPage-Header">
                <div className='mediaPage-user'>
                    <img className="mediaPage-profilePic" alt="profilePic" src={media.profilePic} />
                    <span className="mediaPage-mainuserName">{media.username}</span>
                </div>
                    <TimeAgo datetime={media.createdAt} />
            </div>
            <div className='mediaPage-comments'>
                {comments.map((comment) => (
                        <div className="mediaPage-comment" key={comment.id}>
                            <div className='mediaPage-comment-info'>
                                <span className="mediaPage-userName">
                                {comment?.username}{" "}
                                </span>
                                {comment?.userId === user?.id &&
                                <div className='mediaPage-comment-btns'>
                                    <button onClick={() => {
                                        setEditClicked(!editClicked)
                                        setEditComment(comment.comment)
                                        }}>Edit</button>
                                    <button onClick={() => deleteComment(comment.id)}>Delete</button>
                                </div>
                                }
                            </div>
                            {(editClicked && comment?.userId === user?.id)?
                            <form className='editComment-form' onSubmit={editCommentSubmit}>
                                <textarea type="text" className="editComment" value={editComment} onChange={(e) => setEditComment(e.target.value)}/>
                                <button className="editComment-btn" type='submit'>Submit</button>
                            </form>
                            :
                            <span className="content">{comment?.comment}</span>}
                        </div>
                    )) }
            </div>
            <form className='mediaPage-commentForm' onSubmit={commentSubmit}>
                <textarea
                type="text"
                placeholder="Write a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                >
                </textarea>
                <button type='submit'>Submit Comment</button>
            </form>
        </div>
    </div>
  )}

export default MediaPage
