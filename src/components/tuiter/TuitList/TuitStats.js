import {useDispatch} from "react-redux";
import React from "react";
import { updateTuit } from "../../actions/tuits-actions";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        console.log("tuit:" + tuit);
        dispatch({type: 'like-tuit', tuit});
    };
    return (
        <span onClick={likeTuit}>
            {
                tuit.liked &&
                <i className="fas fa-heart me-1"
                   style={{color: 'red'}}></i>
            }
            {
                !tuit.liked &&
                <i className="far fa-heart me-1"></i>
            }
            {tuit.stats && tuit.stats.likes}
        </span>
    );
}
export default TuitStats;