import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "./TuitStats";

const TuitListItem   = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitClickHandler = () => {
        dispatch({type: 'delete-tuit', tuit})
    }
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="wd-profile-img" src={tuit.avatarIcon}/>
                </div>
                <div className="col-10">
                    <b>{tuit.userName}</b> <i className="fas fa-check-circle"/>
                    <span style={{"color":"darkgray"}}> - {tuit.handle}</span>
                    <i onClick={deleteTuitClickHandler}
                       className="fas fa-times fa-pull-right"/><br/>
                    {tuit.tuit}
                </div>
            </div>
            <div className="row col-10 float-right">
                <TuitStats tuit={tuit}/>
            </div>

        </li>
    );
}
export default TuitListItem;