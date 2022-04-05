import React from 'react';

const WhoToFollowListItem = (
    {
        who = {
        avatarIcon: '../../../tuiter/images/nasa.png',
        userName: 'NASA',
        handle: 'NASA',
        }
    }) => {
    console.log(who);
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img src={who.avatarIcon} className="wd-profile-img position-relative me-2"/>
                </div>
                <div className="col-6">
                    <span>
                        <b>{who.userName}</b>
                        <span>
                            <i className="fa fa-check-circle"></i>
                        </span><br/>
                        @{who.handle}
                    </span>
                </div>
                <div className="col-4">
                    <button className="btn btn-primary rounded-pill">Follow</button>
                </div>         
            </div>
        </li>
    );
}
export default WhoToFollowListItem;
