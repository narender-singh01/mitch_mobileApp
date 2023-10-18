const { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } = require('../actions/ActionTypes');
import Toast from 'react-native-simple-toast';

const initialState = {
    favoriteItems: [],
    isLoading: false,
    isFavorite:false
};

const FavoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITES: {
            const itemInFavorite = state.favoriteItems.find(
                item => item.id == action.payload.id,
            );
            if (itemInFavorite) {
                itemInFavorite.quantity++;
                if (itemInFavorite.quantity) {
                    Toast.show(`Already ${action.payload.name} is added in Favorites`);
                }
            } else {
                state.favoriteItems.push({ ...action.payload, quantity: 1 ,isFavorite:true});

                Toast.show(`${action.payload.name} Added to favoriteList`);
            }
            return { ...state };
        }
        case REMOVE_FROM_FAVORITES: {
            const updatedItems = state.favoriteItems.filter((item) => item.id !== action.payload)
            Toast.show("Item Removed")
            return {
                ...state,
                favoriteItems: updatedItems
            }

        }
        default:
            return state;
    }
};

export default FavoriteReducer;
