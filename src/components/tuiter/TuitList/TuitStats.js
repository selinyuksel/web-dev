import {useDispatch} from "react-redux";
import React from "react";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };
    return (
        <div className="d-flex flex-row justify-content-between align-items-end pt-2 w-75">
            <div><i className="fas fa-comment pe-1"></i>{tuit.stats.comments}</div>
            <div><i className="fas fa-retweet pe-1"></i>{tuit.stats.retuits}</div>
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
            <div><i className="fas fa-share-square"></i> </div>

        </div>
    );
}
export default TuitStats;