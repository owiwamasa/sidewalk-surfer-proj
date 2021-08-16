const GET_SPOTS = "spots/getSpots";
const GET_ONE_SPOT = "spots/getOneSpot";

export const getSpots = (spots) => {
  return { type: GET_SPOTS, spots };
};

export const getOneSpot = (spot) => {
  return { type: GET_ONE_SPOT, spot };
};

export const fetchSpots = () => async (dispatch) => {
  const res = await fetch("/api/spots");
  if (res.ok) {
    const spots = await res.json();
    dispatch(getSpots(spots));
  }
};

export const fetchOneSpot = (id) => async (dispatch) => {
  const res = await fetch(`/api/spots/${id}`);

  if (res.ok) {
    const spot = await res.json();
    dispatch(getOneSpot(spot));
  }
};

const initialState = { spots: [] };

const spotReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SPOTS:
      return { ...state, ...action.spots };
    case GET_ONE_SPOT:
      return { ...state, ...action.spot };
    default:
      return state;
  }
};

export default spotReducer;
