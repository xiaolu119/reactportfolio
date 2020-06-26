import React from 'react';
import data from './Project.json'
class Portfolio extends React.Component{
    state = {
    // project : [
    //     {
    //         "id" : 1,
    //         "name" : "Password Generator",
    //         "github":"https://github.com/xiaolu119/homework3",
    //         "live": "https://xiaolu119.github.io/homework3/",
    //         "image": ""
    //     },
    
    //      {
    //         "id" : 2,
    //         "name" : "Responsive Portfolio",
    //         "github":"https://github.com/xiaolu119/homework2",
    //         "live": "https://xiaolu119.github.io/homework2/",
    //         "image": ""
    //     },
    
    //      {
    //         "id" : 3,
    //         "name" : "Day Planner",
    //         "github":"https://github.com/xiaolu119/WorkDayScheduler.io",
    //         "live": "https://xiaolu119.github.io/WorkDayScheduler.io/",
    //         "image": ""
    //     }
    // ]
    }
    render(){
        var project = data

        return(<div id="portfolio" className="content">
            <div className="bd-example">
  <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">

        {project.map((item,key) => (
                    <div className="carousel-item active">
                    <img src={item.image} className="d-block w-100" alt={item.id}></img>
                    <div className="carousel-caption d-none d-md-block">
                    <h5>{item.name}</h5>
                    <a href={item.github} >Github Link</a>
                    <a herf ={item.live} >live</a>
                    </div>
                </div>
                
            ))        }
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
        )
    }

}

export default Portfolio;