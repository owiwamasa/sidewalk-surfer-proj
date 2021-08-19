import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomeMedia } from "../../store/media";
import GoogleMap from "../GoogleMap";

function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeMedia());
  }, [dispatch]);
  const media = useSelector((state) => state.mediaReducer.media);
  return (
    <div>
      <GoogleMap />
      {media.map((medium) => (
        <img key={medium.id} src={medium.mediaUrl} alt={medium.name} />
      ))}
    </div>
  );
}

export default HomePage;
