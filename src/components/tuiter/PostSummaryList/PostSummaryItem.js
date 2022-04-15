import React from "react";

const PostSummaryItem = (
    {
        post={
            "topic":"Web Development",
            "userName":"ReactJS",
            "time":"2h",
            "title":"React.js is a component based front end library " +
                "that makes it very easy to build Single Page Applications " +
                "or SPAs",
            "image":"../../../tuiter/images/react.jpeg"
        }
    }) => {
    return(
        <li className="list-group-item">
            <img className="wd-thumbnail" src={post.image}/>
                <div style={{"color":"darkgray"}}>{post.topic}</div>
                <div>
                    <span>
                    <b>{post.userName}</b>
                        <i className="fa fa-check-circle"></i>
                    </span>
                    <span style={{"color":"darkgray"}}>
                         - {post.time}<br/>
                    </span>
                    <b>{post.title}</b><br/>
                    {post.tuit} Tuits
                </div>
        </li>
);
}
export default PostSummaryItem;