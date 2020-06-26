import React from 'react';

function Crousel() {
    return(<div id="portfolio" className="content">
    <div className="bd-example">
  <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="/picture/responsiveportfolio.jpg" className="d-block w-100" alt="Responsive Portfolio"></img>
        <div className="carousel-caption d-none d-md-block">
          <h5>Responsive Portfolio</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <a href="https://github.com/xiaolu119/homework2" >Github Link</a>
                    <a href ="https://xiaolu119.github.io/homework2/">live</a>
        </div>
      </div>
      <div className="carousel-item">
        <img src="/picture/responsiveportfolio.jpg" className="d-block w-100" alt="Day Planner"></img>
        <div className="carousel-caption d-none d-md-block">
          <h5>Day Planner</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="https://github.com/xiaolu119/WorkDayScheduler.io" >Github Link</a>
                    <a href ="https://xiaolu119.github.io/WorkDayScheduler.io/">live</a>
        </div>
      </div>
      <div className="carousel-item">
        <img src="/picture/responsiveportfolio.jpg" className="d-block w-100" alt="Day Planner"></img>
        <div className="carousel-caption d-none d-md-block">
          <h5>Weather Dashboard</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="https://github.com/xiaolu119/" >Github Link</a>
                    <a href ="https://xiaolu119.github.io/WeatherDashboard.io/">live</a>
        </div>
      </div>
     
     
      <div className="carousel-item">
        <img src="/picture/responsiveportfolio.jpg" className="d-block w-100" alt="Day Planner"></img>
        <div className="carousel-caption d-none d-md-block">
          <h5>Weather Dashboard</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="https://github.com/xiaolu119/" >Github Link</a>
                    <a href ="https://xiaolu119.github.io/WeatherDashboard.io/">live</a>
        </div>
      </div>



    </div>
    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>
</div>
    )}
  
  export default Crousel;