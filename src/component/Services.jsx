import React from "react";
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "../../public/css/services.css";
import "../assets/css/style.css";
import Service from "./Service";
import { responsive, servicesData } from "./dataService";
/* import "../assets/css/cardServices.css"; */
const Services = () => {
 
  const service =servicesData.map((item)=> (
    <Service name={item.name} url={item.imageurl}/>
  ))
  return (
<section id="services" className="team sections4">
<div className="container text-center">
<div className="heading-content text-center">
          <Link to="services.html">
            <h1
              id="services-title"
              className="lang"
              data-lang-en="paragraph6"
              data-lang-es="paragraph6"
              data-lang-fr="paragraph6"
              data-lang-ar="paragraph6"
              data-lang-pt="paragraph6"
            >
              Services
            </h1>
          </Link>
        </div>
<Carousel showDots={true} swipeable={true} draggable={true} responsive={responsive} containerClass="carousel-container" dotListClass="custom-dot-list-style"  >
{service}
</Carousel>
</div>
</section>


  );
};

export default Services;
