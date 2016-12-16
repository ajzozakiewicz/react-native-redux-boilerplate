import ActionTypes from './../actions/actiontypes';
import _ from 'lodash';

import {
    AsyncStorage
} from 'react-native';

const initialState = {
    movies: []
};


export default function mainReducer(state = initialState, { type, payload }) {
    switch(type){
        case ActionTypes.API_SUCCESS:
            return _.assign({}, state, payload);

        default:
            return state;
    }
}
