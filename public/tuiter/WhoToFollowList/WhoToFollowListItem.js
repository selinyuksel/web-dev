const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-2">
                    <img src=${who.avatarIcon} class="wd-profile-img position-relative me-2">
                </div>
                <div class="col-6">
                    <span>
                        <b>${who.userName}</b>
                        <span>
                            <i class="fa fa-check-circle"></i>
                        </span><br>
                        @${who.handle}
                    </span>
                </div>
                <div class="col-4">
                    <button class="btn btn-primary rounded-pill">Follow</button>
                </div>         
            </div>
        </li>
    `);
}
export default WhoToFollowListItem;
