import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchOneSpot } from "../../store/spots";

const SpotPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchOneSpot(id));
  }, [dispatch]);

  const spot = useSelector((state) => state.spotReducer.spots[0]);

  return (
    <div>
      {spot ? (
        <div>
          <div>{spot.name}</div>
          <img src={spot.imageUrl} alt={spot.name}></img>
          <div>{spot.address}</div>
          <div>{spot.description}</div>
        </div>
      ) : (
        <h1>404 Spot Not Found</h1>
      )}
    </div>
  );
};

export default SpotPage;