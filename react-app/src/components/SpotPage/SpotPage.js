import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchOneSpot } from "../../store/spots";
import { fetchMedia, getOneMedium } from "../../store/media";
import { fetchComments } from "../../store/comments";
import EditSpotModal from "../edit_spot_modal";
import MediaCard from "../MediaCard/MediaCard";
import CreateMediaModal from "../MediaPost";

const SpotPage = () => {
  const user = useSelector((state) => state.session.user);

  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchOneSpot(id));
    dispatch(fetchMedia(id));
    dispatch(fetchComments());
  }, [dispatch, id]);

  const spot = useSelector((state) => state.spotReducer.spots[0]);
  const media = useSelector((state) => state.mediaReducer.media);
  const comments = useSelector((state) => state.commentReducer.comments);

  return (
    <div>
      {spot?.userId === user?.id && <EditSpotModal spot={spot?.id} />}
      {spot ? (
        <div>
          <div>{spot.name}</div>
          <img src={spot.imageUrl} alt={spot.name}></img>
          <div>{spot.address}</div>
          <div>{spot.description}</div>
          <div>
            <CreateMediaModal />
          </div>
          <div>
            {media.map((medium) => {
              let mediaComments = comments.filter(
                (comment) => comment.mediaId === medium.id
              );
              return (
                <MediaCard
                  media={medium}
                  key={medium.id}
                  comments={mediaComments}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <h1>404 Spot Not Found</h1>
      )}
    </div>
  );
};

export default SpotPage;
