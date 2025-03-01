import { type } from "@testing-library/user-event/dist/type";
import { api, API_URL } from "../../Config/api";
import {
    GET_RESTAURANTS_ORDER_REQUEST,
  GET_RESTAURANTS_ORDER_SUCCESS,
  UPDATE_ORDER_STATUS_FAILURE,
  UPDATE_ORDER_STATUS_REQUEST,
  UPDATE_ORDER_STATUS_SUCCESS,
} from "./Reducer";
export const updateOrderStatus = ({ orderId, orderStatus, jwt }) => {
  return async (dispatch) => {
    try {
      dispatch({ type: UPDATE_ORDER_STATUS_REQUEST });
      const response = await api.put(
        `/api/admin/orders/${orderId}/${orderStatus}`,
        {},
        {
          headers: {
            Authorization: `bearer${jwt}`,
          },
        }
      );
      const updateOrder = response.data;
      console.log("updated order", updateOrder);
      dispatch({
        type: UPDATE_ORDER_STATUS_SUCCESS,
        payload: updateOrder,
      });
    } catch (error) {
      console.log("Catch error", error);
      dispatch({
        type: UPDATE_ORDER_STATUS_FAILURE,
        error,
      });
    }
  };
};

export const fetchRestaurantsOrder = ({ restaurantId, orderStatus, jwt }) => {
    return async (dispatch) => {
      try {
        dispatch({ type: GET_RESTAURANTS_ORDER_REQUEST });
        const response = await api.put(
          `/api/admin/orders/${orderId}/${orderStatus}`,
          {},
          {
            headers: {
              Authorization: `bearer${jwt}`,
            },
          }
        );
        const updateOrder = response.data;
        console.log("updated order", updateOrder);
        dispatch({
          type: GET_RESTAURANTS_ORDER_SUCCESS,
          payload: updateOrder,
        });
      } catch (error) {
        console.log("Catch error", error);
        dispatch({
          type: UPDATE_ORDER_STATUS_FAILURE,
          error,
        });
      }
    };
  };
