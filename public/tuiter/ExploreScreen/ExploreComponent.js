import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
        <div class="col-12 col-sm-10 col-md-10 col-lg-6 col-xl-6 col-xxl-6">
            <!-- search field and cog -->
            <div class="row wd-bottom-break">
                <div class="col-11">
                    <i class="fas fa-search position-absolute mt-2 ms-3" style="color:gray"></i>
                    <form>
                        <label for="search"></label>
                        <input class="wd-search" id="search" placeholder="        Search Tuiter"/>
                    </form>
                </div>
                <div class="col-1 mt-2">
                        <a href="explore-settings.html"><i class="fa fa-cog fa-lg" style="color: dodgerblue"></i></a>
                </div>
            </div>
            
            <!-- tabs -->
            <ul class="nav mb-2 nav-tabs">
                <li class="nav-item"><a class="nav-link active" href="for-you.html">For You</a></li>
                <li class="nav-item"><a class="nav-link" href="trending.html">Trending</a></li>
                <li class="nav-item"><a class="nav-link" href="news.html">News</a></li>
                <li class="nav-item"><a class="nav-link" href="sports.html">Sports</a></li>
                <li class="nav-item"><a class="nav-link" href="entertainment.html">Entertainment</a></li>
            </ul>
            <!-- image with overlaid text -->
            <div class="card text-white">
                <img src="../images/ship.jpeg" class="card-img" alt="...">
                <div class="card-img-overlay">
                    <h5 style="font-size: 30px"
                        class="card-title position-absolute bottom-0">SpaceX's Starship</h5>
                </div>
            </div>
            ${PostSummaryList()}
        </div>
    `);
}
export default ExploreComponent;

