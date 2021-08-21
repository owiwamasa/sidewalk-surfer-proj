import { setErrors } from "./errors";

const GET_SPOTS = "spots/getSpots";
const GET_ONE_SPOT = "spots/getOneSpot";
const ADD_SPOT = "spots/addSpot";
const EDIT_SPOT = "spots/editSpot";

const getSpots = (spots) => {
  return { type: GET_SPOTS, spots };
};

const getOneSpot = (spot) => {
  return { type: GET_ONE_SPOT, spot };
};

const addSpot = (spot) => {
  return { type: ADD_SPOT, spot };
};

const editSpot = (spot) => {
  return { type: EDIT_SPOT, spot };
};

export const fetchSpots = () => async (dispatch) => {
  const res = await fetch("/api/spots/");
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
  const res = await fetch(`/api/spots/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(spot),
  });
  if (res.ok) {
    const spot = await res.json();
    dispatch(addSpot(spot));
    return spot;
  } else {
    const spot = await res.json();
    dispatch(setErrors(spot));
  }
};

export const editOneSpot = (payload, spotId) => async (dispatch) => {
  const res = await fetch(`/api/spots/${spotId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (res.ok) {
    const spot = await res.json();
    dispatch(editSpot(spot));
    return spot;
  } else {
    const spot = await res.json();
    dispatch(setErrors(spot));
  }
};

const initialState = { spots: [], curSpot: {} };

const spotReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SPOTS:
      return { ...state, ...action.spots, curSpot: {} };
    case GET_ONE_SPOT:
      return { ...state, curSpot: action.spot };
    case ADD_SPOT:
      return { ...state, spots: [...state.spots, action.spot] };
    case EDIT_SPOT:
      return {
        ...state,
        spots: [
          ...state.spots.filter((spot) => spot.id !== action.spot.id),
          action.spot,
        ],
        curSpot: action.spot,
      };
    default:
      return state;
  }
};

export default spotReducer;
