import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "./TuitStats";

const TuitListItem   = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitClickHandler = () => {
        dispatch({type: 'delete-tuit', tuit})
    }
    console.log(tuit);
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <i onClick={deleteTuitClickHandler}
                       className="fas fa-remove fa-2x fa-pull-right"/>
                    <div style={{"color":"darkgray"}}>
                        {tuit.topic}
                    </div>
                    <div>
                        <span>
                            <b>{tuit.userName}</b> <i className="fas fa-check-circle"/>
                        </span>
                        <span style={{"color":"darkgray"}}>
                            - {tuit.time}
                        </span>
                        <b>{tuit.title}</b>
                    </div>
                    <div className="col-2">
                        <img className="wd-thumbnail" src={tuit.image}/>
                    </div>
                    <div>
                        <TuitStats tuit={tuit}/>
                    </div>
                </div>
            </div>

        </li>
    );
}
export default TuitListItem;