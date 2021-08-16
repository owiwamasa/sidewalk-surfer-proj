import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import GoogleMapReact from 'google-map-react';
import { fetchSpots } from '../../store/spots';
import './GoogleMap.css'

function GoogleMap(){
    const dispatch = useDispatch();
    const spots = useSelector(state => state.spotReducer.spots);

    useEffect(() => {
        dispatch(fetchSpots())
    }, [dispatch]);

    const props = {
        center: {
            lat: 34.05223,
            lng: -118.24368
        },
        zoom: 11
    };
    const Marker = ({lat, lng}) => <div className='mapMarker' ><img src='https://toppng.com/uploads/preview/skateboard-11530958315qxezefkvst.png'></img></div>;

    return(
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCAr1UIay5E-L26k5sIxbrGHmuwr2AhQ9o' }}
                defaultCenter={props.center}
                defaultZoom={props.zoom}
                >
                {spots.map(spot => <Marker key={spot.id} lat={spot.longitude} lng={spot.latitude} />)}
                {/* <Marker
                    lat={33.8121}
                    lng={-117.9190}
                /> */}
            </GoogleMapReact>
        </div>
    )
}

export default GoogleMap;
