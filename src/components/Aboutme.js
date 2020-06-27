import React from "react";

function Aboutme(){
    return(<div id="aboutme" className="content">
<div className="card mb-3">
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src="/picture/portfolio.jpg" width ="200" height ="350" className="card-img" alt="My picture"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">About Me</h5>
        <p className="card-text">My name is Xiaolu Sun and I have been a digital producer for 8 years. I am responsible for content creation for our website and social media platforms at CGTN America. We analyze data and create models to improve our views and engagement. I am also responsible to direct, film and edit videos independently.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>

    </div>)
}

export default Aboutme;