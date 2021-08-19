import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import GoogleMapReact from "google-map-react";
import { fetchSpots } from "../../store/spots";
import "./GoogleMap.css";

function GoogleMap() {
  const dispatch = useDispatch();
  const spots = useSelector((state) => state.spotReducer.spots);

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
      <img src="https://i.imgur.com/yyandSM.png" alt =""></img>
    </div>
  );

    return(
        <div className='google-map'>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCAr1UIay5E-L26k5sIxbrGHmuwr2AhQ9o' }}
                defaultCenter={props.center}
                defaultZoom={props.zoom}
                >
                {!!spots && spots?.map(spot =>(
                    <Link key={spot.id} to={`/spots/${spot.id}`} lat={spot.latitude} lng={spot.longitude}>
                        <Marker/>
                    </Link>
                ))}
            </GoogleMapReact>
        </div>
    )
}

export default GoogleMap;
