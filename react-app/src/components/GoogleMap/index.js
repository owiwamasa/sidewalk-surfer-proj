import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import GoogleMapReact from "google-map-react";
import { fetchSpots } from "../../store/spots";
import "./GoogleMap.css";

function GoogleMap() {
  const dispatch = useDispatch();
  const spots = useSelector((state) => state.spotReducer.spots);
  const history = useHistory();
  const [infoLat, setInfoLat] = useState("");
  const [infoLng, setInfoLng] = useState("");
  const [spotInfo, setSpotInfo] = useState();
  const [display, setDisplay] = useState("none");

  function toSpot(spotNum) {
    history.push(`/spots/${spotNum}`);
  }

  function setLatnLng(spot) {
    setInfoLat(spot.latitude);
    setInfoLng(spot.longitude);
    setSpotInfo(spot);
    setDisplay("");
  }

  function ShowInfo({ lat, lng, spot, display }) {
    return (
      <div className="infoBlock" style={{ color: "red", display: display }}>
        <img src={spot?.imageUrl} className="infoImg" alt={spot?.id}></img>
        <div className="spotInfo">
          <span id="spotName">{spot?.name}</span>
          <Link to={`/spots/${spot?.id}`}>Visit Spot</Link>
        </div>
        <span
          id="exit"
          onClick={() => setDisplay("none")}
          style={{ cursor: "pointer" }}
        >
          X
        </span>
      </div>
    );
  }

  useEffect(() => {
    dispatch(fetchSpots());
  }, [dispatch]);

  const props = {
    center: {
      lat: 34.05223,
      lng: -118.24368,
    },
    zoom: 11,
  };
  const Marker = ({ lat, lng }) => (
    <div className="mapMarker">
      <img src="https://i.imgur.com/yyandSM.png" alt=""></img>
    </div>
  );

  return (
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCAr1UIay5E-L26k5sIxbrGHmuwr2AhQ9o" }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
      >
        {!!spots &&
          spots?.map((spot) => (
            <div
              className="spotMarker"
              key={spot.id}
              onClick={(e) => setLatnLng(spot)}
              lat={spot.latitude}
              lng={spot.longitude}
            >
              <Marker />
            </div>
          ))}
        <ShowInfo
          lat={infoLat}
          lng={infoLng}
          spot={spotInfo}
          display={display}
        />
      </GoogleMapReact>
    </div>
  );
}

export default GoogleMap;
