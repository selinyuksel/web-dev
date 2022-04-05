import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"


const WhoToFollowList = () => {
    return (`
<ul class="list-group">
    <li class="list-group-item"><b>Who to Follow</b></li>
    ${
        who.map(who => {
            return(WhoToFollowListItem(who));
        }).join('')
    }
</ul>
`); }
export default WhoToFollowList;