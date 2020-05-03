/** @format */
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "@redux";

const middleware = [
    thunk,
];

const store = createStore(reducers, {}, applyMiddleware(...middleware));

export default store