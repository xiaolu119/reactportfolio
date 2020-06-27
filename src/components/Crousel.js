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
      <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="6"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="7"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="8"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="9"></li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="/picture/responsiveportfolio.jpg" className="d-block w-100" alt="Responsive Portfolio"></img>
        <div className="carousel-caption d-none d-md-block">
          <h5>Responsive Portfolio</h5>
          <p className="text-info">Use the Bootstrap CSS Framework to recreate my portfolio.</p>
          <a href="https://github.com/xiaolu119/homework2" >Github Link</a>
                    <a href ="https://xiaolu119.github.io/homework2/">live</a>
        </div>
      </div>
      <div className="carousel-item">
        <img src="/picture/dayplanner.jpg" width ="200" height ="350" className="d-block w-100" alt="Day Planner"></img>
        <div className="carousel-caption d-none d-md-block">
          <h5>Day Planner</h5>
          <p className="text-info">Create a simple calendar application that allows the user to save events for each hour of the day.</p>
          <a href="https://github.com/xiaolu119/WorkDayScheduler.io" >Github Link</a>
                    <a href ="https://xiaolu119.github.io/WorkDayScheduler.io/">live</a>
        </div>
      </div>
      <div className="carousel-item">
        <img src="/picture/weatherdashboard.jpg" width ="200" height ="350" className="d-block w-100" alt="Weather Dashboard"></img>
        <div className="carousel-caption d-none d-md-block">
          <h5>Weather Dashboard</h5>
          <p className="text-info">Build a weather dashboard that can run in the browser and feature dynamically updated HTML and CSS.</p>
          <a href="https://github.com/xiaolu119/" >Github Link</a>
                    <a href ="https://xiaolu119.github.io/WeatherDashboard.io/">live</a>
        </div>
      </div>
     
     
      <div className="carousel-item">
        <img src="/picture/project-1.jpg" width ="200" height ="350" className="d-block w-100" alt="project 1"></img>
        <div className="carousel-caption d-none d-md-block">
          <h5>Project 1</h5>
          <p className="text-info">Create a travel app with google GPI can track user’s location and showing nearby restaurants and weather report. </p>
          <a href="https://github.com/athomik79/WTF-app" >Github Link</a>
                    <a href ="https://athomik79.github.io/WTF-app/ ">live</a>
        </div>
      </div>

     
      <div className="carousel-item">
        <img src="/picture/expresshandlebars.jpg" width ="200" height ="350" className="d-block w-100" alt="Node Express Handlebars"></img>
        <div className="carousel-caption d-none d-md-block">
          <h5>Node Express Handlebars</h5>
          <p className="text-info">Create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM.</p>
          <a href="https://xiaolu119.github.io/ExpressHandlebars/" >Github Link</a>
                    <a href ="https://shielded-falls-41975.herokuapp.com/">live</a>
        </div>
      </div>



      <div className="carousel-item">
        <img src="/picture/responsiveportfolio.jpg" width ="200" height ="350" className="d-block w-100" alt="Project 2"></img>
        <div className="carousel-caption d-none d-md-block">
          <h5>Project 2</h5>
          <p className="text-info">Create a coffee review app can track user’s location and showing the nearly Starbucks location and coffee review. </p>
          <a href="https://github.com/javayporter/project_2" >Github Link</a>
                    <a href ="https://shrouded-ocean-64037.herokuapp.com/">live</a>
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