//setup constants
const GET_MEDIA = "media/getMedia";
const GET_ONE_MEDIUM = "media/getOneMedium";

//action creators
export const getMedia = (media) => {
  return { type: GET_MEDIA, media };
};

export const getOneMedium = (medium) => {
  return { type: GET_ONE_MEDIUM, medium };
};

//thunk creator
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
  const res = await fetch("/api/media");

  if (res.ok) {
    const media = await res.json();
    dispatch(getMedia(media));
  }
};

//initialState
const initialState = { media: [] };

const mediaReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MEDIA:
      return { ...state, ...action.media };
    case GET_ONE_MEDIUM:
      return { ...state, ...action.medium };
    default:
      return state;
  }
};

export default mediaReducer;
