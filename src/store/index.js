import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "../reducers";
import thunkMiddleware from "redux-thunk";

export const createReduxStore = () => {
    const composeEnhancers =
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
            }) : compose;

    const enhancer = composeEnhancers(
        applyMiddleware(thunkMiddleware),
    );

    return createStore(
        rootReducer,
        enhancer
    );
}