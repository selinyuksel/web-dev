import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
        active = 'explore'
    }) => {
    return(
        <>
            <div className="list-group">
                <Link to = "/labs" className ="list-group-item">
                    <i style={{"color":"white"}} className ="fab fa-twitter"></i>
                </Link>
                <Link to="/tuiter" className = {`list-group-item
                        ${active === 'home' ? 'active' : ""}`}>
                    <i style={{"color":"white"}} className="fa fa-home"></i>
                    <span style={{"color":"white"}} className="d-none d-xl-inline"> Home</span>
                </Link>

                <Link to="/tuiter/explore" className = {`list-group-item list-group-item-action
                            ${active === 'explore' ? 'active' : ""}`}>
                    <i style={{"color":"white"}} className="fa fa-hashtag"></i>
                    <span style={{"color":"white"}} className="d-none d-xl-inline"> Explore</span>
                </Link>

                <Link to="#" className = {`list-group-item
                        ${active === 'notifications' ? 'active' : ""}`}>
                    <i style={{"color":"white"}} className="fa fa-bell"></i>
                    <span style={{"color":"white"}} className="d-none d-xl-inline"> Notifications</span>
                </Link>

                <Link to="#" className = {`list-group-item
                        ${active === 'messages' ? 'active' : ""}`}>
                    <i style={{"color":"white"}} className="fa fa-envelope"></i>
                    <span style={{"color":"white"}} className="d-none d-xl-inline"> Messages</span>
                </Link>

                <Link to="#" className = {`list-group-item
                        ${active === 'bookmarks' ? 'active' : ""}`}>
                    <i style={{"color":"white"}} className="fas fa-bookmark"></i>
                    <span style={{"color":"white"}} className="d-none d-xl-inline"> Bookmarks</span>
                </Link>

                <Link to="#" className = {`list-group-item
                        ${active === 'lists' ? 'active' : ""}`}>
                    <i style={{"color":"white"}} className="fas fa-list"></i>
                    <span style={{"color":"white"}} className="d-none d-xl-inline"> Lists</span>
                </Link>

                <Link to="#" className = {`list-group-item
                        ${active === 'profile' ? 'active' : ""}`}>
                    <i style={{"color":"white"}} className="fas fa-user"></i>
                    <span style={{"color":"white"}} className="d-none d-xl-inline"> Profile</span>
                </Link>

                <Link to="#" className = {`list-group-item
                        ${active === 'more' ? 'active' : ""}`}>
                    <span className="fa-stack" style={{"fontSize": "8px"}}>
                            <i className="fa fa-circle fa-stack-2x" style={{"color": "white"}}></i>
                            <i className="fa fa-ellipsis-h fa-stack-1x" style={{"color": "dimgray"}}></i>
                    </span>
                    <span style={{"color":"white"}} className="d-none d-xl-inline"> More</span>
                </Link>
                <div className="d-grid mt-2">
                    <a href="#"className="btn btn-primary btn-block rounded-pill">Tuit</a>
                </div>
            </div>
        </>
    );
}
export default NavigationSidebar;
