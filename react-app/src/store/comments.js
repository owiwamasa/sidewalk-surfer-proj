//setup constants
const GET_COMMENTS = 'comments/getComments';
const GET_ONE_COMMENT = 'comments/getOneComment';

//action creators
export const getComments = (comments) => {
	return { type: GET_COMMENTS, comments }
}

export const getOneComment = (comment) => {
  return { type: GET_ONE_COMMENT, comment }
}

//thunk creator
export const fetchComments = (id) => async (dispatch) => {
  const res = await fetch(`/api/media/${id}/comments`);

  if (res.ok) {
    const comments = await res.json();
    dispatch(getComments(comments));
  }
}

export const fetchOneComment = (id) => async (dispatch) => {
  const res = await fetch(`/api/media/${id}/comments/${id}`);

  if (res.ok) {
    const comment = await res.json();
    dispatch(getOneComment(comment));
  }
}

//initialize state
const initialState = { comments: [] };

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {...state, ...action.comments};
    case GET_ONE_COMMENT:
      return {...state, ...action.comment};
    default:
      return state;
  }
};

//export
export default commentReducer
