import React from "react";
import {useDispatch} from "react-redux";
import {updateTuit, deleteTuit} from "../../actions/tuits-actions";

const TuitListItem   = ({tuit}) => {
    const dispatch = useDispatch();
    console.log("in the tuitlist item");

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="wd-profile-img" src={tuit.avatarIcon}/>
                </div>
                <div className="col-10">
                    <b>{tuit.userName}</b> <i className="fas fa-check-circle"/>
                    <span style={{"color":"darkgray"}}> - {tuit.handle}</span>
                    <i onClick={() => deleteTuit(dispatch, tuit)}
                       className="fas fa-times fa-pull-right"/><br/>
                    {tuit.tuit}
                    <div className = "wd-font-white">
                        Likes: {tuit.likes}
                        <i onClick={()=> updateTuit(dispatch, {
                            ...tuit,
                            likes: tuit.likes + 1
                        })} className="far fa-thumbs-up ms-2"/>
                    </div>

                    <div className = "wd-font-white">
                        Dislikes: {tuit.dislikes}
                        <i onClick={()=> updateTuit(dispatch, {
                            ...tuit,
                            dislikes: tuit.dislikes + 1
                        })} className="far fa-thumbs-down ms-2"/>
                    </div>
                    <div><i className="fas fa-share-square"></i> </div>
                </div>
            </div>


        </li>
    );
}
export default TuitListItem;