import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }) => {
    return(
        <div>
            <div className="d-none d-xl-block">
                <div className="list-group">
                    <a href="/" className="list-group-item">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="../home.html" className={`list-group-item list-group-item-action 
                    ${active === 'home' ? 'active' : ''}`} aria-current="true">
                        <i className="fas fa-home"></i> Home
                    </a>
                    <a href="explore.html" className={`list-group-item list-group-item-action 
                    ${active === 'explore' ? 'active' : ''}`} aria-current="true">
                        <i className="fa fa-hashtag"></i> Explore
                    </a>
                    <a href="#" className={`list-group-item list-group-item-action 
                    ${active === 'notifications' ? 'active' : ''}`} aria-current="true">
                        <i className="fas fa-bell"></i> Notifications
                    </a>
                    <a href="#" className={`list-group-item list-group-item-action 
                    ${active === 'messages' ? 'active' : ''}`} aria-current="true">
                        <i className="fas fa-envelope"></i> Messages
                    </a>
                    <a href="../bookmarks.html" className={`list-group-item list-group-item-action 
                    ${active === 'bookmarks' ? 'active' : ''}`} aria-current="true">
                        <i className="fas fa-bookmark"></i> Bookmarks
                    </a>
                    <a href="#" className={`list-group-item list-group-item-action 
                    ${active === 'lists' ? 'active' : ''}`} aria-current="true">
                        <i className="fas fa-list"></i> Lists
                    </a>
                    <a href="../profile.html" className={`list-group-item list-group-item-action 
                    ${active === 'profile' ? 'active' : ''}`} aria-current="true">
                        <i className="fas fa-user"></i> Profile
                    </a>
                    <a href="#" className={`list-group-item list-group-item-action 
                    ${active === 'more' ? 'active' : ''}`} aria-current="true">
                        <span className="fa-stack" style={{"fontSize": "8px"}}>
                            <i className="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-ellipsis-h fa-stack-1x" style={{"color": "dimgray"}}></i>
                        </span> More
                    </a>
                </div>
                <div className="d-grid mt-2">
                    <a href="../tuit.html"className="btn btn-primary btn-block rounded-pill">Tweet</a>
                </div>
            </div>
            <div className="d-none d-sm-block d-md-block d-lg-block d-xl-none">
                <div className="list-group">
                    <a href="/" className="list-group-item">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="../home.html" className={`list-group-item list-group-item-action 
                    ${active === 'home' ? 'active' : ''}`} aria-current="true">
                        <i className="fas fa-home"></i>
                    </a>
                    <a href="explore.html" className={`list-group-item list-group-item-action 
                    ${active === 'explore' ? 'active' : ''}`} aria-current="true">
                        <i className="fa fa-hashtag"></i>
                    </a>
                    <a href="#" className={`list-group-item list-group-item-action 
                    ${active === 'notifications' ? 'active' : ''}`} aria-current="true">
                        <i className="fas fa-bell"></i>
                    </a>
                    <a href="#" className={`list-group-item list-group-item-action 
                    ${active === 'messages' ? 'active' : ''}`} aria-current="true">
                        <i className="fas fa-envelope"></i>
                    </a>
                    <a href="../bookmarks.html" className={`list-group-item list-group-item-action 
                    ${active === 'bookmarks' ? 'active' : ''}`} aria-current="true">
                        <i className="fas fa-bookmark"></i>
                    </a>
                    <a href="#" className={`list-group-item list-group-item-action 
                    ${active === 'lists' ? 'active' : ''}`} aria-current="true">
                        <i className="fas fa-list"></i>
                    </a>
                    <a href="../profile.html" className={`list-group-item list-group-item-action 
                    ${active === 'profile' ? 'active' : ''}`} aria-current="true">
                        <i className="fas fa-user"></i>
                    </a>
                    <a href="#" className={`list-group-item list-group-item-action 
                    ${active === 'more' ? 'active' : ''}`} aria-current="true">
                        <span className="fa-stack" style={{"fontSize": "8px"}}>
                            <i className="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-ellipsis-h fa-stack-1x" style={{"color": "dimgray"}}></i>
                        </span>
                    </a>
                </div>
                <div className="d-grid mt-2">
                    <a href="../tuit.html"className="btn btn-primary btn-block rounded-pill">Tweet</a>
                </div>
            </div>
        </div>
    );
}
export default NavigationSidebar;
