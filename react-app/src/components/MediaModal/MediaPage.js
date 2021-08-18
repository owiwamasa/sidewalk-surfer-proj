import { useSelector } from "react-redux";
import { useState } from "react";
import TimeAgo from "timeago-react";
import './MediaPage.css'

function MediaPage({media, comments}){
    const user = useSelector((state) => state.session.user);
    const [editClicked, setEditClicked] = useState(false);
    const [comment, setComment] = useState('');
    const [editComment, setEditComment] = useState('');
    let url = media.mediaUrl;

  if (media?.mediaUrl.includes("youtube")) {
    url = media.mediaUrl.split("watch?v=");
    url[1] = "embed/" + url[1];
    url = url.join("");
  }

  const commentSubmit = (e) => {
    e.preventDefault();
  }

  const editCommentSubmit = (e) => {
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
            {comments.map((comment) => (
                    <div className="comment" key={comment.id}>
                        <span className="userName">
                        {comment.username}{" "}
                        {editClicked ?
                        <form onSubmit={editCommentSubmit}>
                            <textarea type="text" className="editComment" value={comment.comment} onChange={(e) => setEditComment(e.target.value)}/>
                            <button type='submit'>Submit Edit</button>
                        </form>
                        :
                        <span className="content">{comment.comment}</span>}
                        </span>
                        {comment.userId === user.id &&
                        <div>
                            <button onClick={() => setEditClicked(!editClicked)}>Edit</button>
                            <button>Delete</button>
                        </div>
                        }
                    </div>
                )) }
            <form onSubmit={commentSubmit}>
                <input
                placeholder="Write a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                >
                </input>
                <button type='submit'>Submit Comment</button>
            </form>
        </div>
    </div>
  )}

export default MediaPage
