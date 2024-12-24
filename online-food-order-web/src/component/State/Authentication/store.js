import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
// import { authReducer } from "./Reducer";
import { thunk } from "redux-thunk";
<<<<<<< HEAD:online-food-order-web/src/component/State/store.js
import { authReducer } from "./Authentication/Reducer";
import { menuItemReducer } from "./Menu/Reducer";
import { restaurantReducer } from "./Restaurant/Reducer";

// import { menuItemReducer } from "../Menu/Reducer";
=======
import { restaurantReducer } from "../Restaurant/Reducer";
>>>>>>> parent of 0595187 (state manage of cart):online-food-order-web/src/component/State/Authentication/store.js

const rooteReducer = combineReducers({
    auth: authReducer,
    reastaurat: restaurantReducer
});
export const store = legacy_createStore(rooteReducer, applyMiddleware(thunk))