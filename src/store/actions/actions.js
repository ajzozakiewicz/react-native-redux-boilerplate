import ActionTypes from './actiontypes';
import * as helpers from './helpers';
import config from 'react-native-configs';

export function fetchMovies() {
    return (dispatch) => {
        return fetch(config.movies).then((response) => {
            if(response.status !== 200){
                throw new Error('error', response.statusText);
            }
            return response.json();
        })
        .then((json) => {
            return dispatch(helpers.successAction(ActionTypes.API_SUCCESS, json))
        })
        .catch((error) => {
            console.log(error);
            dispatch(helpers.failureAction('ERROR', error))
        });
    };
}

export function fetchInitialState() {
    return (dispatch) => {
        dispatch(fetchMovies());
    };
}
