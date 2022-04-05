import React from "react";
import HelloReduxExampleComponent from "./hello-redux-example-component";
import hello from "./reducers/hello";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import todosReducer from "./reducers/todos-reducer";
import Todos from "./todos-component"
const reducers = combineReducers({hello, todosReducer});
const store = createStore(reducers);

const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <div>
                <h3>Redux Examples</h3>
                <Todos/>
                <HelloReduxExampleComponent/>
            </div>
        </Provider>
    );
};
export default ReduxExamples;