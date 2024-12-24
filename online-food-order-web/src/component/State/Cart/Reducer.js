import * as actionTypes from "./ActionType";

const initialState = {
  cart: null,
  cartItems: [],
  loading: false,
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_MENU_ITEM_REQUEST:
    case actionTypes.FIND_CART_REQUEST:
    case actionTypes.GET_ALL_CART_ITEM_REQUEST:
    case actionTypes.UPDATE_CARTITEM_REQUEST:
    case actionTypes.REMOVE_CARTITEM_REQUEST:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case actionTypes.FIND_CART_SUCCESS:
    case actionTypes.CLEAR_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: action.payload,
        cartItems: action.payload.items,
      };
    case actionTypes.UPDATE_CARTITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: state.cartItems.map(() =>
          item.id === action.payload.id ? action.payload : item
        ),
        // cartItems: state.cartItems.map(() =>
        //   item.id === action.payload.id ? action.payload : item
        // ),
      };
    case actionTypes.REMOVE_CARTITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: state.cartItems.filter(() =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case actionTypes.FIND_CART_FAILURE:
    case actionTypes.UPDATE_CARTITEM_FAILURE:
    case actionTypes.REMOVE_CARTITEM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
  }
};
