import {SET_ITEMS} from '../actions';

const initialState = [];

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_ITEMS:
            return action.payload.items;

        default:
            return state;
    }
};