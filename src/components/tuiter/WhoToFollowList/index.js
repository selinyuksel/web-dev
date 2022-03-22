import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json"


const WhoToFollowList = () => {
    return (
<ul className="d-none d-sm-none d-md-none d-lg-block list-group">
    <li className="list-group-item"><b>Who to Follow</b></li>
    {
        who.map(who => {
            return(
                <WhoToFollowListItem who={who}/>
            );
        })
    }
</ul>
); }
export default WhoToFollowList;