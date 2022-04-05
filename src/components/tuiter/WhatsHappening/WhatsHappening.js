import React, {useState} from "react";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        console.log(whatsHappening);
        dispatch({type: 'create-tuit',
            tuit: whatsHappening
        })};
    return (
        <div>
            <span>
                <img src='../../../tuiter/images/nasa.png'
                     className="wd-profile-img"/>
                <textarea style={{color:"white", backgroundColor: "black"}}
                          value={whatsHappening}
                          onChange={(event) => setWhatsHappening(event.target.value)}
                          className="form-control"
                          placeholder="What's happening?">

                </textarea>
                <br/>
            </span>
            <div>
                <span>
                    <a href="#"><i className="fa fa-image ms-3"></i></a>
                    <a href="#"><i className="fa fa-line-chart ms-3"></i></a>
                    <a href="#"><i className="fa fa-smile ms-3"></i></a>
                    <a href="#"><i className="fa fa-calendar ms-3"></i></a>
                </span>
                <button onClick={tuitClickHandler} className="btn btn-primary float-right rounded-pill">
                    Tuit
                </button>
            </div>

        </div>
    );
};
export default WhatsHappening;