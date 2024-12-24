import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
// import { authReducer } from "./Reducer";
import { thunk } from "redux-thunk";
import { authReducer } from "./Authentication/Reducer";
import { menuItemReducer } from "./Menu/Reducer";
import { restaurantReducer } from "./Restaurant/Reducer";

// import { menuItemReducer } from "../Menu/Reducer";

const rooteReducer = combineReducers({
    auth: authReducer,
    reastaurat: restaurantReducer,
    menu: menuItemReducer
});
export const store = legacy_createStore(rooteReducer, applyMiddleware(thunk))