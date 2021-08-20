import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSpots } from '../../store/spots'
import { fetchAllMedia } from '../../store/media'
import { fetchComments } from "../../store/comments";
import { NavLink } from 'react-router-dom';

import './ProfilePage.css'


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
      <div className='top'>
        <div className='top_left'>
          <img src={user.profilepic} alt=""/>
        </div>
        <div className='top_right'>
          <div className='un'>
            {user.username}
          </div>
          <div className='email'>
            Email: {user.email}
          </div>
        </div>
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
      <div className='grid-container'>
        <div >
          {media.map((m) => (
            <div key={m.id}>
              {user?.id === m?.userId ?
              <div className='spotdiv'>
                <img src={m.mediaUrl} alt=""></img>
                <div className='commHead'>
                  {m.description}
                </div>
                <div className='commHead2'>
                  {comments.map((comment) => (
                    <div key={comment.id}>
                      {comment?.mediaId === m.id ?
                      <div className='comments'>
                        <div className='flex'>
                          <div>
                            <NavLink to={`/users/${comment.userId}`} exact={true} activeClassName='active'>
                              <img src={comment.profilepic} alt=''/>
                            </NavLink>
                          </div>
                          {/* <img src=`{comment.profilepic}` alt=''/> */}
                          <div>
                            {comment.username}
                          </div>
                        </div>
                      <div>
                        {comment.comment}
                      </div>
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
    </div>
  );
}
export default ProfilePage;
