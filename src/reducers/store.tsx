import { combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { cartItemReducer } from "./cartReducers";

const allReducers = combineReducers({
  cartItem: cartItemReducer,
});
const persistConfig = {
  key: "ecommerce",
  storage,
};
const persistedReducer = persistReducer(persistConfig, allReducers);
const store = createStore(persistedReducer);
export const persistor = persistStore(store);

export default store;
