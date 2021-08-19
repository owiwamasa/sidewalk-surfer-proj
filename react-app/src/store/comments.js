//setup constants
const GET_COMMENTS = "comments/getComments";
const GET_ONE_COMMENT = "comments/getOneComment";
const POST_ONE_COMMENT = "comments/postOneComment";
const EDIT_COMMENT = "comments/editComment"
const DELETE_COMMENT = "comments/deleteComment"

//action creators
export const getComments = (comments) => {
  return { type: GET_COMMENTS, comments };
};

export const getOneComment = (comment) => {
  return { type: GET_ONE_COMMENT, comment };
};

export const postOneComment = (comment) => {
  return { type: POST_ONE_COMMENT, comment };
}

const editComment = (comment) =>{
  return {type: EDIT_COMMENT, comment};
}

const deleteComment = (commentId) => {
  return { type: DELETE_COMMENT, commentId };
}

//thunk creator
export const postComment = (comment) => async (dispatch) => {
  const res = await fetch (`/api/comments`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(comment)
  })
  if (res.ok) {
    const comment = await res.json();
    dispatch(postOneComment(comment));
  }
  return comment;
}

export const fetchComments = () => async (dispatch) => {
  const res = await fetch(`/api/comments`);

  if (res.ok) {
    const comments = await res.json();
    dispatch(getComments(comments));
  }
};

export const fetchOneComment = (id) => async (dispatch) => {
  const res = await fetch(`/api/media/${id}/comments/${id}`);

  if (res.ok) {
    const comment = await res.json();
    dispatch(getOneComment(comment));
  }
};

export const editOneComment = (comment,id) => async (dispatch) => {
  const res = await fetch(`/api/comments/${id}`, {
    method: "PUT",
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(comment)
  })

  if (res.ok) {
    const comment = await res.json()
    dispatch(editComment(comment));
  }
}

export const deleteOneComment = (id) => async (dispatch) => {
  const res = await fetch(`/api/comments/${id}`, {
    method: 'DELETE'
  });

  if (res.ok) {
    dispatch(deleteComment(id));
  }
}

//initialize state
const initialState = { comments: [] };

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return { ...state, ...action.comments };
    case GET_ONE_COMMENT:
      return { ...state, ...action.comment };
    case POST_ONE_COMMENT:
      return { ...state, comments: [action.comment, ...state.comments] };
    case EDIT_COMMENT:
      // return {...state, comments:[action.comment, ...state.comments]}
      return { ...state, ...action.comment }
    case DELETE_COMMENT:
      return {
        ...state,
        comments: [
          ...state.comments.filter((comment) => comment.id !== action.commentId),
        ],
      }
    default:
      return state;
  }
};

//export
export default commentReducer;
