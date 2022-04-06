import React, {useState} from "react";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
            tuit: whatsHappening
        })};
    return (
        <div>
            <div className="row">
                <div className="col-2">
                    <img src='../../../tuiter/images/pic.JPG'
                         className="wd-profile-img"/>
                </div>
                <div className="col-10">
                <textarea style={{color:"white", backgroundColor: "black"}}
                          value={whatsHappening}
                          onChange={(event) => setWhatsHappening(event.target.value)}
                          className="form-control"
                          placeholder="What's happening?">

                </textarea>
                    <br/>
                </div>
            </div>
            <div className="row">
                <span className="col-10 ms-5">
                    <a href="#"><i className="fas fa-image ms-3"></i>  </a>
                    <a href="#"><i className="fas fa-chart-bar ms-3"></i>  </a>
                    <a href="#"><i className="fas fa-smile ms-3"></i>  </a>
                    <a href="#"><i className="fas fa-calendar ms-3"></i>  </a>
                </span>
                <button onClick={tuitClickHandler} className="col-2 btn btn-primary rounded-pill">
                    Tuit
                </button>
            </div>
        </div>

    );
};
export default WhatsHappening;