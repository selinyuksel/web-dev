import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuit} from "../../actions/tuits-actions";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    // const tuitClickHandler = () => {
    const [newTuit, setNewTuit] = useState({tuit: 'New tuit'});
    const dispatch = useDispatch();
    //     dispatch({type: 'create-tuit',
    //         tuit: whatsHappening
    //     })};

    return (
        <div>
            <div className="row">
                <div className="col-2">
                    <img src='../../../tuiter/images/pic.JPG'
                         className="wd-profile-img"/>
                </div>
                <div className ="mt-0">
                 <textarea className = "form-control"
                           placeholder = "What's happening?"
                           onChange={(e) =>
                               setNewTuit({...newTuit,
                                   tuit: e.target.value})}>
                  </textarea>
                </div>

            </div>
            <div className="row">
                <span className="col-10 ms-5">
                    <a href="#"><i className="fas fa-image ms-3"/>  </a>
                    <a href="#"><i className="fas fa-chart-bar ms-3"/>  </a>
                    <a href="#"><i className="fas fa-smile ms-3"/>  </a>
                    <a href="#"><i className="fas fa-calendar ms-3"/>  </a>
                </span>
                <button onClick= {() =>
                    createTuit(dispatch, newTuit)}
                        className = "btn btn-primary float-end">
                    Tuit
                </button>
            </div>
        </div>

    );
};
export default WhatsHappening;