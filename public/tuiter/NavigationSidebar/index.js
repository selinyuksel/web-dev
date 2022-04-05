const NavigationSidebar = () => {
    return(`
        <div class="d-none d-xl-block col-2">
            <div class="list-group">
                <a href="/" class="list-group-item">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="../home.html" class="list-group-item list-group-item-action">
                    <i class="fas fa-home"></i> Home
                </a>
                <a href="explore.html" class="list-group-item list-group-item-action active" aria-current="true">
                    <i class="fa fa-hashtag"></i> Explore
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <i class="fas fa-bell"></i> Notifications
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <i class="fas fa-envelope"></i> Messages
                </a>
                <a href="../bookmarks.html" class="list-group-item list-group-item-action">
                    <i class="fas fa-bookmark"></i> Bookmarks
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <i class="fas fa-list"></i> Lists
                </a>
                <a href="../profile.html" class="list-group-item list-group-item-action">
                    <i class="fas fa-user"></i> Profile
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <span class="fa-stack" style="font-size: 8px">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-ellipsis-h fa-stack-1x" style="color: dimgray"></i>
                    </span> More
                </a>
            </div>
            <div class="d-grid mt-2">
                <a href="../tuit.html"class="btn btn-primary btn-block rounded-pill">Tweet</a>
            </div>
        </div>
        <div class="d-none d-sm-block d-md-block d-lg-block d-xl-none col-2">
            <div class="list-group">
                <a href="/" class="list-group-item">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="../home.html" class="list-group-item list-group-item-action">
                    <i class="fas fa-home"></i>
                </a>
                <a href="explore.html" class="list-group-item list-group-item-action active" aria-current="true">
                    <i class="fa fa-hashtag"></i>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <i class="fas fa-bell"></i>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <i class="fas fa-envelope"></i>
                </a>
                <a href="../bookmarks.html" class="list-group-item list-group-item-action">
                    <i class="fas fa-bookmark"></i>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <i class="fas fa-list"></i>
                </a>
                <a href="../profile.html" class="list-group-item list-group-item-action">
                    <i class="fas fa-user"></i>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <span class="fa-stack" style="font-size: 8px">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-ellipsis-h fa-stack-1x" style="color: dimgray"></i>
                    </span>
                </a>
            </div>
            <div class="d-grid mt-2">
                <a href="../tuit.html"class="btn btn-primary btn-block rounded-pill">Tweet</a>
            </div>
        </div>
        
    `);
}
export default NavigationSidebar;
