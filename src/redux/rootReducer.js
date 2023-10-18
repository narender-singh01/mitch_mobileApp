import { combineReducers } from 'redux';
import CartReducer from './reducers/CartReducer';
import FavoriteReducer from './reducers/FavoriteReducer';

const rootReducer = combineReducers({
    cart:CartReducer,
    favorites:FavoriteReducer
});

export default rootReducer;