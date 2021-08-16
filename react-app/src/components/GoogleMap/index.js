import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {useHistory} from 'react-router-dom'
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
    const Marker = ({lat, lng}) => <div className='mapMarker' ><img src='https://i.imgur.com/yyandSM.png'></img></div>;

    const history = useHistory()
    function toSpotPage(id){
        return history.push(`/spots/${id}`)
    }
    return(
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCAr1UIay5E-L26k5sIxbrGHmuwr2AhQ9o' }}
                defaultCenter={props.center}
                defaultZoom={props.zoom}
                >
                {!!spots && spots?.map(spot =>(
                        <Marker 
                            key={spot.id} lat={spot.longitude} lng={spot.latitude}
                            onClick={()=>toSpotPage(`${spot.id}`)}
                        >
                        </Marker>
                ))}
            </GoogleMapReact>
        </div>
    )
}

export default GoogleMap;
