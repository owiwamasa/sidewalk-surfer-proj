import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomeMedia } from "../../store/media";
import { fetchComments } from "../../store/comments";
import GoogleMap from "../GoogleMap";
import MediaCard from "../MediaCard/MediaCard";
import './HomePage.css'


  function HomePage() {
    const user = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchHomeMedia());
      dispatch(fetchComments());
    }, [dispatch]);
    const media = useSelector((state) => state.mediaReducer.media);
    const comments = useSelector((state) => state.commentReducer.comments);
  return (
    <div>
      <GoogleMap />
          <div className='home-media'>
            <div className='home-media-header'>
              <div className='home-media-title'>Recent Posts</div>
              <div className='home-media-divider'></div>
            </div>
            <div className='home-media-scroll'>
              {media.map((medium) => {
                let mediaComments = comments.filter(
                  (comment) => comment.mediaId === medium.id
                );
                return (
                  <div className='home-mediaCard'>
                    <MediaCard
                      media={medium}
                      key={medium.id}
                      comments={mediaComments}
                    />
                  </div>
                );
              })}
            </div>
          </div>
    </div>
  );
}

export default HomePage;
