const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item">
            <img class="wd-thumbnail" src=${post.image}/>
                <div style="color: darkgray">${post.topic}</div>
                <div>
                    <b>${post.userName}</b>
                    <span>
                        <i class="fa fa-check-circle"></i>
                    </span>
                    <span style="color: darkgray">
                        - ${post.time}<br>                    
                    </span>
                    <b>${post.title}</b><br>
                    ${post.tweets} Tuits
                </div>
        </li>
`);
}
export default PostSummaryItem;