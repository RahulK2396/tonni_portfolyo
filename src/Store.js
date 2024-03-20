import { combineReducers, createStore } from "redux";
import PortfolioReducer from "./PortfolioReducer";


const rootReducer = combineReducers({
    PortfolioDetails: PortfolioReducer, // Make sure the key matches the reducer
    // other reducers...
  });
const store = createStore(rootReducer);

export default store;