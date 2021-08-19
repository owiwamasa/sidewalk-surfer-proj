import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSpots } from '../../store/spots'
import { fetchAllMedia } from '../../store/media'
import { fetchComments } from "../../store/comments";


function ProfilePage() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();

  const dispatch =useDispatch()

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
    dispatch(fetchSpots())
    dispatch(fetchAllMedia())
    dispatch(fetchComments());

  }, [userId,dispatch]);

  const spots = useSelector((state) => state.spotReducer.spots);
  const media = useSelector((state) => state.mediaReducer.media);
  const comments = useSelector((state) => state.commentReducer.comments);
  console.log(comments)  
  if (!user) {
    return null;
  }
  return (
    <div>
      <div>
        <img src={user.profilepic} alt=""/>
      </div>
      <div>
        Username: {user.username}
      </div>
      <div>
        Email: {user.email}
      </div>
      {/* <div>
        Spots:
        {spots.map((spot) => (
          <div key={spot.id}>
            {user?.id === spot?.userId ?
            <div>
              <img src={spot.imageUrl} alt=""></img>
              <div>
                {spot.name}
              </div>
              <div>
                {spot.address}
              </div>
              <div>
                {spot.description}
              </div>
            </div>
            : null
            }
          </div>
        ))}
      </div> */}
      <div>
        Posts:
        {media.map((m) => (
          <div key={m.id}>
            {user?.id === m?.userId ?
            <div>
              <img src={m.mediaUrl} alt=""></img>
              <div>
                {m.description}
              </div>
              
              <div>
                comments:
                {comments.map((comment) => (
                  <div key={comment.id}>
                    {comment?.mediaId === m.id ?
                    <div>
                      {comment.comment}
                    </div>
                    : null
                  }
                  </div>
                ))}
              </div>
            </div>
            : null
            }
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProfilePage;
