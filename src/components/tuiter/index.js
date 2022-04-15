import React from "react";
import {Outlet} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList";
import "../../tuiter.css";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

const reducer = combineReducers({tuits: tuitsReducer, who:whoReducer});
const store = createStore(reducer);

const Tuiter = () => {
    return (
        <Provider store={store}>
            <div className="row mt-2">
                {/*<div className="col-2 col-lg-1 col-xl-2">*/}
                {/*    <NavigationSidebar/>*/}
                {/*</div>*/}
                <div>
                    <Outlet/>
                </div>
                {/*<div className="d-none d-lg-block col-lg-4 col-xl-4">*/}
                {/*    /!*<h2>who to follow</h2>*!/*/}
                {/*    <WhoToFollowList/>*/}
                {/*</div>*/}
            </div>
        </Provider>
    );
};
export default Tuiter;
