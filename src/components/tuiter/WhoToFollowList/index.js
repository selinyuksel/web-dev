import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const whos = useSelector((state) => state.who);
    return (
        // <div>
        //     <h1>Who to follow</h1>
        // </div>
        <ul className="list-group">
            <li className="list-group-item fw-bold">
                Who to follow
            </li>
            {
                whos.map(who => {
                    return(

                        <WhoToFollowListItem who={who}/>
                    );
                })
            }
        </ul>
    ); }
export default WhoToFollowList;