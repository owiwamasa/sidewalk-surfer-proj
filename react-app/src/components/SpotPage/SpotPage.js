import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchOneSpot } from "../../store/spots";
import { fetchMedia } from "../../store/media";
import { fetchComments } from "../../store/comments";
import EditSpotModal from "../edit_spot_modal";
import MediaCard from "../MediaCard/MediaCard";
import CreateMediaModal from "../MediaPost";
import "./SpotPage.css";

const SpotPage = () => {
  const user = useSelector((state) => state.session.user);

  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchOneSpot(id));
    dispatch(fetchMedia(id));
    dispatch(fetchComments());
  }, [dispatch, id]);

  const spot = useSelector((state) => state.spotReducer.curSpot);
  const media = useSelector((state) => state.mediaReducer.media);
  const comments = useSelector((state) => state.commentReducer.comments);
  return (
    <div>
      {spot ? (
        <div className="spotPage-container">
          <div className="spotPage-header">
            <div className="spotPage-image-div">
              <img
                className="spotPage-image"
                src={spot?.imageUrl}
                alt={spot?.name}
              ></img>
            </div>
            <div className="spotPage-info-container">
              <div className="spotPage-info">
                <div className="spotPage-name">{spot?.name}</div>
                <div className="spotPage-address">{spot?.address}</div>
                <div className="spotPage-description">{spot?.description}</div>
              </div>
              <div className="spotPage-modal-div">
                {user ? <CreateMediaModal /> : null}
                {spot?.userId === user?.id && <EditSpotModal spot={spot?.id} />}
              </div>
            </div>
          </div>
          <div className="spotPage-divider"></div>
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
