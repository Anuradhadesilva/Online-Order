import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
// import { authReducer } from "./Reducer";
import { thunk } from "redux-thunk";
import { authReducer } from "./Authentication/Reducer";
import { restaurantReducer } from "./Restaurant/Reducer";
import { cartReducer } from "./Cart/Reducer";
import { menuItemReducer } from "./Menu/Reducer";
import { orderReducer } from "./Order/Reducer";
import { restaurantsOrderReducer } from "./Restaurant Order/Reducer";
import { ingredientReducer } from "./Ingredients/Reducer";

const rooteReducer = combineReducers({
  auth: authReducer,
  restaurant: restaurantReducer,
  menu: menuItemReducer,
  cart: cartReducer,
  order: orderReducer,
  restaurantOrder: restaurantsOrderReducer,
  ingredients: ingredientReducer
});
export const store = legacy_createStore(rooteReducer, applyMiddleware(thunk));
