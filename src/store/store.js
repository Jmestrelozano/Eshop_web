import { createStore,combineReducers ,applyMiddleware, compose } from "redux";
import { authReducer } from "../reducers/authReducer";
import thunk from 'redux-thunk';
import { uiReducer } from "../reducers/uiReducer";
import { infoReducer } from "../reducers/InfoReducer";
import { infoDataReducer } from "../reducers/InfoDataReducer";
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers =combineReducers({
    auth:authReducer,
    ui:uiReducer,
    info:infoReducer,
    categoy:infoDataReducer
})

export const store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)))