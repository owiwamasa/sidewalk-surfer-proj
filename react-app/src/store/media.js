import {setErrors} from './errors' 
//setup constants
const GET_MEDIA = "media/getMedia";
const GET_ONE_MEDIUM = "media/getOneMedium";
const ADD_MEDIA = "media/addMedia";
const EDIT_MEDIA = "media/editMedia";
const DELETE_MEDIA = "media/deleteMedia";
const GET_ALL_MEDIA = "media/getallmedia";

//action creators
const getMedia = (media) => {
  return { type: GET_MEDIA, media };
};
const deleteMedia = (mediaId) => {
  return { type: DELETE_MEDIA, mediaId };
};
const getOneMedium = (medium) => {
  return { type: GET_ONE_MEDIUM, medium };
};
const addMedia = (medium) => {
  return { type: ADD_MEDIA, medium };
};
const editMedia = (medium) => {
  return { type: EDIT_MEDIA, medium };
};
const getAllMedia = (media) => {
  return { type: GET_ALL_MEDIA, media };
};

//thunk creator
export const fetchAllMedia = () => async (dispatch) => {
  const res = await fetch(`/api/media/`);

  if (res.ok) {
    const media = await res.json();
    dispatch(getAllMedia(media));
  }
};

export const fetchMedia = (id) => async (dispatch) => {
  const res = await fetch(`/api/media/spots/${id}`);

  if (res.ok) {
    const media = await res.json();
    dispatch(getMedia(media));
  }
};
export const fetchOneMedium = (id) => async (dispatch) => {
  const res = await fetch(`/api/media/${id}`);

  if (res.ok) {
    const medium = await res.json();
    dispatch(getOneMedium(medium));
  }
};

export const fetchHomeMedia = () => async (dispatch) => {
  const res = await fetch("/api/media/");

  if (res.ok) {
    const media = await res.json();
    dispatch(getMedia(media));
  }
};

export const addMedium = (medium, id) => async (dispatch) => {
  const res = await fetch(`/api/media/spots/${id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(medium),
  });

  // const medium = await res.json();
  
  if (res.ok) {
    const medium = await res.json();
    dispatch(addMedia(medium));
    dispatch(setErrors([]))
    return medium;
  } else {
    const medium = await res.json();
    dispatch(setErrors(medium))
  }
};

export const editMedium = (medium, id) => async (dispatch) => {
  const res = await fetch(`/api/media/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(medium),
  });

  if (res.ok) {
    const medium = await res.json();
    dispatch(editMedia(medium));
    return medium;
  }
};

export const deleteMedium = (id) => async (dispatch) => {
  const res = await fetch(`/api/media/${id}`, {
    method: "DELETE",
  });
  if (res.ok) {
    dispatch(deleteMedia(id));
  }
};

//initialState
const initialState = { media: [] };

const mediaReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MEDIA:
      return { ...state, ...action.media };
    case GET_MEDIA:
      return { ...state, ...action.media };
    case GET_ONE_MEDIUM:
      return { ...state, ...action.medium };
    case ADD_MEDIA:
      return { ...state, media: [action.medium, ...state.media] };
    case EDIT_MEDIA:
      return { ...state, ...action.medium };
    case DELETE_MEDIA:
      return {
        ...state,
        media: [
          ...state.media.filter((medium) => medium.id !== action.mediaId),
        ],
      };
    default:
      return state;
  }
};

export default mediaReducer;
