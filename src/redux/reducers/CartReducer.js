const {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_ITEM,
  DECREASE_ITEM,
  ADD_TO_PRODUCTDETAIL,
  INCREASE_PRODUCTDETAIL,
  DECREASE_PRODUCTDETAIL,
} = require('../actions/ActionTypes');
import Toast from 'react-native-simple-toast';
const initialState = {
  cart: [],
  isLoading: false,
  productDetail: null,
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const itemInCart = state.cart.find(item => item.id === action.payload.id);
      if (itemInCart) {
        if (itemInCart?.quantity === 2) {
        }
        itemInCart.quantity++;
        if (itemInCart?.quantity) {
          Toast.show(`Quantity of ${action.payload.name} Increased`);
        }
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
          ...state.productDetail,
        });
        Toast.show(`${action.payload.name} Added to Cart`);
      }
      return {...state};

    case REMOVE_FROM_CART:
      const updatedItems = state.cart.filter(
        item => item.id !== action.payload,
      );
      Toast.show(`item is removed`);
      return {
        ...state,
        cart: updatedItems,
      };

    case INCREASE_ITEM:
      {
        const item = state.cart.find(item => item.id == action.payload);
        if (item) {
          item.quantity++;
        }
      }
      return {
        ...state,
      };
    case DECREASE_ITEM:
      {
        const item = state.cart.find(item => item.id == action.payload);
        if (item.quantity === 1) {
          item.quantity = 1;
        } else {
          item.quantity--;
        }
      }
      return {
        ...state,
      };

    case ADD_TO_PRODUCTDETAIL:
      return {
        ...state,
        productDetail: {
          ...action.payload,
          quantity: 1,
        },
      };
    case INCREASE_PRODUCTDETAIL:
      if (state.productDetail) {
        const updatedProductDetail = {
          ...state.productDetail,
          quantity: state.productDetail.quantity + 1,
        };
        return {
          ...state,
          productDetail: updatedProductDetail,
        };
      }
      return state;
      case DECREASE_PRODUCTDETAIL:
        if (state.productDetail) {
          const updatedProductDetail = {
            ...state.productDetail,
            quantity: state.productDetail.quantity - 1,
          };
          return {
            ...state,
            productDetail: updatedProductDetail,
          };
        }
        return state;

    default:
      return state;
  }
};
export default CartReducer;
