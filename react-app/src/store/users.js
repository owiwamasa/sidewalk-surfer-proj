const ALL_USERS = '/users/ALL_USERS'

export const allUsers = (users) => {
    return { type: ALL_USERS, users };
  };


export const getAllUsers = () => async (dispatch) => {
    const res = await fetch('/api/users/')

    if (res.ok) {
        const users = await res.json()
        dispatch(allUsers(users))
    }
    }


const initialState = { users: [] }

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_USERS:
            return { ...state, ...action.users }
        default:
            return state
    }
}

export default usersReducer;
