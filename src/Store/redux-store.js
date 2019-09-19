import {combineReducers,createStore,applyMiddleware} from "redux";
import thunkMiddleWare from "redux-thunk";
import weatherReducer from "./weatherReducer";
let rootReducer = combineReducers({
    weather:weatherReducer
});
let store = createStore(rootReducer,applyMiddleware(thunkMiddleWare))
export default store;