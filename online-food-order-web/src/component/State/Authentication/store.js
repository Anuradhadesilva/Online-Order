import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./Reducer";
import { thunk } from "redux-thunk";
import { restaurantReducer } from "../Restaurant/Reducer";

const rooteReducer = combineReducers({
    auth: authReducer,
    reastaurat: restaurantReducer
});
export const store = legacy_createStore(rooteReducer, applyMiddleware(thunk))