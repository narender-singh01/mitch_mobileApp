import {ADD_TO_FAVORITES} from './ActionTypes';

export const addToFavorites = data => ({
  type: ADD_TO_FAVORITES,
  payload: data,
});
