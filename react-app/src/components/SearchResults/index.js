import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchSpots } from '../../store/spots';


function SearchResults ({search, setSearch}){
    const spots = useSelector((state) => state.spotReducer.spots);
    const dispatch = useDispatch()
    const searchSpots = spots.filter(spot => spot.name.toLowerCase().includes(search.toLowerCase()));

    useEffect(() => {
      dispatch(fetchSpots());
    }, [dispatch]);

    return (
        <div>
            <div>Spots Results ({searchSpots.length})
                <div className='search-scroll'>
                {searchSpots.length ? searchSpots.map(spot => (
                    <div key={spot.id}>
                        <Link onClick={() => setSearch('')} to={`/spots/${spot.id}`}>
                            <div>{spot.name}</div>
                            <div className='search-img-container'>
                                <img src={spot.imageUrl}/>
                            </div>
                        </Link>
                    </div>
                )) : null}
                </div>
            </div>
        </div>
    )
}

export default SearchResults
