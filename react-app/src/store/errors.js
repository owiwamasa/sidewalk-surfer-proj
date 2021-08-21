const SET_ERRORS = 'errors/set_errors'

export const setErrors = (errors) => {
    return {type: SET_ERRORS, errors};
}

// no need for thunk

const intialstate=[]

const errorsReducer = (_state, action) => {
    switch(action.type){
        case SET_ERRORS:
            return action.errors
        default:
            return intialstate
    }
}

export default errorsReducer;
