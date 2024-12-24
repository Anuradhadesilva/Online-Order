import { dark } from "@mui/material/styles/createPalette";
import { api, API_URL } from "../../Config/api";
import {
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  CLEAR_CART_FAILURE,
  CLEAR_CART_REQUEST,
  CLEAR_CART_SUCCESS,
  FIND_CART_FAILURE,
  FIND_CART_REQUEST,
  FIND_CART_SUCCESS,
  GET_ALL_CART_ITEM_FAILURE,
  GET_ALL_CART_ITEM_REQUEST,
  GET_ALL_CART_ITEM_SUCCESS,
  REMOVE_CARTITEM_FAILURE,
  REMOVE_CARTITEM_REQUEST,
  REMOVE_CARTITEM_SUCCESS,
  UPDATE_CARTITEM_FAILURE,
  UPDATE_CARTITEM_REQUEST,
  UPDATE_CARTITEM_SUCCESS,
} from "./ActionType";

export const findCart = (token) => {
  return async (dispatch) => {
    dispatch({ type: FIND_CART_REQUEST });
    try {
      const response = await api.get(`/api/cart/`, {
        headers: {
          Authrization: `Bearer ${token}`,
        },
      });
      dispatch({ type: FIND_CART_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FIND_CART_FAILURE, payload: error });
    }
  };
};

export const getAllCartItems = (reqData) => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_CART_ITEM_REQUEST });
    try {
      const response = await api.get(`/api/carts/${reqData.cartId}/items`, {
        headers: {
          Authrization: `Bearer ${reqData.token}`,
        },
      });
      dispatch({ type: GET_ALL_CART_ITEM_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_ALL_CART_ITEM_FAILURE, payload: error });
    }
  };
};

export const addItemToCart = (reqData) => {
  return async (dispatch) => {
    dispatch({ type: ADD_ITEM_TO_CART_REQUEST });
    try {
      const data = await api.get(`/api/cart/add`, reqData.cartItem, {
        headers: {
          Authrization: `Bearer ${reqData.token}`,
        },
      });
      dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data });
      console.log("Add Item to cart", data);
    } catch (error) {
      console.log("catch error", error);
      dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: error.message });
    }
  };
};

export const updateCartItem = (reqData) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_CARTITEM_REQUEST });
    try {
      const { data } = await api.get(`/api/cart-item/update`, reqData.data, {
        headers: {
          Authrization: `Bearer ${reqData.jwt}`,
        },
      });
      dispatch({ type: UPDATE_CARTITEM_SUCCESS, payload: data });
      console.log("Update cart item", data);
    } catch (error) {
      console.log("catch error", error);
      dispatch({ type: UPDATE_CARTITEM_FAILURE, payload: error.message });
    }
  };
};

export const removeCartItem = ({ cartItemId, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: REMOVE_CARTITEM_REQUEST });
    try {
      const { data } = await api.get(`/api/cart-item/${cartItemId}/remove`, {
        headers: {
          Authrization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: REMOVE_CARTITEM_SUCCESS, payload: cartItemId });
      console.log("remove cartItem", data);
    } catch (error) {
      console.log("catch error", error);
      dispatch({ type: REMOVE_CARTITEM_FAILURE, payload: error.message });
    }
  };
};

export const clearCartAction = ({ cartItemId, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: CLEAR_CART_REQUEST });
    try {
      const { data } = await api.get(
        `/api/cart/clear`,
        {},
        {
          headers: {
            Authrization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );
      dispatch({ type: CLEAR_CART_SUCCESS, payload: data });
      console.log("clear cart", data);
    } catch (error) {
      console.log("catch error", error);
      dispatch({ type: CLEAR_CART_FAILURE, payload: error.message });
    }
  };
};
