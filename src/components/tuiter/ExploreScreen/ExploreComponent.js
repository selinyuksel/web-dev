import React from "react";
import {Link} from "react-router-dom";
import PostSummaryList from "../PostSummaryList/index";

const ExploreComponent = () => {
    return (
        <>
            <div className="row wd-bottom-break">
                <div className="col-11">
                    <i className="fas fa-search position-absolute mt-2 ms-3" style={{"color":"gray"}}></i>
                    <form>
                        <label htmlFor="search"></label>
                        <input className="wd-search" id="search" placeholder="        Search Tuiter"/>
                    </form>
                </div>
                <div className="col-1 mt-2">
                    <a href="explore-settings.html"><i className="fa fa-cog fa-lg"
                                                       style={{"color":"dodgerblue"}}></i></a>
                </div>
            </div>
            <ul className="nav mb-2 nav-tabs">
                <li className="nav-item">
                    <Link className="nav-link active" to="#">For You</Link></li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Trending</Link></li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">News</Link></li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Sports</Link></li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Entertainment</Link></li>
            </ul>
            <div className="card text-white">
                <img src="../../../tuiter/images/ship.jpeg" className="card-img" alt="..."/>
                <div className="card-img-overlay">
                    <h5 style={{"fontSize": "30px"}}
                        className="card-title position-absolute bottom-0">SpaceX's Starship</h5>
                </div>
            </div>
            <PostSummaryList/>
        </>
    );
}
export default ExploreComponent;

