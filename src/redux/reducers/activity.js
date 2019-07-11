import { ACTION_ADD_CAT, ACTION_SET_ACTIVITY, ACTION_SET_NAME } from '../actions/actionTypes';

const initialState = {
    cats: {
        1001: {
            name: 'Beans',
            activity: 'meowing'
        },
        1002: {
            name: 'Bandit',
            activity: 'playing'
        }
    }
}

const activityReducer = (state = initialState, action) => {
    console.log('this is state', state)
    console.log('this is action', action.payload)
    switch (action.type) {
        case ACTION_SET_ACTIVITY: {
            return {
                ...state,
                activity: action.payload.activity
            }
        }
        case ACTION_SET_NAME: {
            return {
                ...state,
                name: action.payload.name
            }
        }
        // case ACTION_ADD_CAT: {
        //     return {

        //     }
        // }
        default: {
            return state;
        }
    }
}

export default activityReducer;