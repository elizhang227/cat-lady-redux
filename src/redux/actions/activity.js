import { ACTION_ADD_CAT, ACTION_SET_ACTIVITY, ACTION_SET_NAME} from './actionTypes';

export const setActivity = (activity) => {
    return {
        type: ACTION_SET_ACTIVITY,
        payload: {
            activity: activity
        }
    }
}

export const setName = (name) => {
    return {
        type: ACTION_SET_NAME,
        payload: {
            name: name
        }
    }
}

export const addCat = (cat) => {
    return {
        type: ACTION_ADD_CAT,
        payload: {
            cat: cat
        }
    }
}