import { GET_RESTAURANTS_ORDER_FAILURE, GET_RESTAURANTS_ORDER_REQUEST, GET_RESTAURANTS_ORDER_SUCCESS, UPDATE_ORDER_STATUS_FAILURE, UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS } from "./ActionType";


const initialState = {
    loading: false,
    orders: [],
    error: null,
};

export const restaurantsOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RESTAURANTS_ORDER_REQUEST:
        case UPDATE_ORDER_STATUS_REQUEST:
            return { ...state, error: null, loading: true };
        case GET_RESTAURANTS_ORDER_SUCCESS:
            return { ...state, loading: false, orders: action.payload };
        case UPDATE_ORDER_STATUS_SUCCESS:
            const updateOrders = state.orders.map((order) =>
                order.id === action.payload.id ? action.payload : order
            );
            return { ...state, loading: false, orders: updateOrders };
        case GET_RESTAURANTS_ORDER_FAILURE:
        case UPDATE_ORDER_STATUS_FAILURE:
            return { ...state, loading: false, orders: updateOrders };

        default:
            return state;
    }
};

