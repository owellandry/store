import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Slideshow = () => {
  useEffect(() => {
    const slideshow = document.getElementById('slideshow');
    const carousel = new window.bootstrap.Carousel(slideshow, {
      interval: 5000,
    });
  }, []);

  return (
    <div id="slideshow" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            alt="First Slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <h1>SlideShow 1</h1>
          </div>
        </div>
        {/* ... Otros elementos del carrusel */}
      </div>
      <div className="controlsBlock">
        <button className="carousel-control-prev" type="button" data-bs-target="#slideshow" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#slideshow" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#slideshow" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#slideshow" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#slideshow" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
