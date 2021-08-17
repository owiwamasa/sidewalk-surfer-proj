const GET_SPOTS = "spots/getSpots";
const GET_ONE_SPOT = "spots/getOneSpot";
const ADD_SPOT = "spots/addSpot";

export const getSpots = (spots) => {
  return { type: GET_SPOTS, spots };
};

export const getOneSpot = (spot) => {
  return { type: GET_ONE_SPOT, spot };
};

export const addSpot = (spot) => {
  return { type: ADD_SPOT, spot };
}

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

export const addOneSpot = (spot) => async (dispatch) => {
  const res = await fetch(`/api/spots`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(spot)
  })
    if (res.ok) {
      const spot = await res.json();
      dispatch(addSpot(spot));
      return spot
    }
}

const initialState = { spots: [] };

const spotReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SPOTS:
      return { ...state, ...action.spots };
    case GET_ONE_SPOT:
      return { ...state, ...action.spot };
    case ADD_SPOT:
      return {...state, spots: [...state.spots, action.spot]};
    default:
      return state;
  }
};

export default spotReducer;
