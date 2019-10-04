import React, { Component } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Landing.css";
import Slider from 'react-slick';

class CarouselComponent extends Component {
  createItems() {
    return {
      first: {
        spanish: '¡Tutores disponibles las 24 horas!',
        src: 'https://business.stthomas.edu/_media-library/centers-institutes/schulze-school/images/opus-college-business-professor-johnson.jpg',
        alt: 'Un profesor dando asesoría a un alumno.',
      },
      second: {
        spanish: '¡Seguimiento de tus estudios!',
        src: 'https://www.hillsdale.edu/wp-content/uploads/2016/02/Carrington.jpg',
        alt: 'Un profesor sonríendo en su trabajo.',
      },
      third: {
        spanish: '¡Garantiza tus calificaciones altas!',
        src: 'https://www.smu.edu/-/media/Images/News/2019/Fall/JoGuldi-2-1920x1080p.jpg?la=en',
        alt: 'Una profesora señalando al pizarrón.',
      },
    }
  }
  
  createStyles() {
    return {
      carousel: {
        margin: '0 auto 50px 0',
      },
      caption: {
        fontSize: '36px', 
        textAlign: 'center',
        border: '2px dashed #12413',
        verticalAlign: 'middle',
      }
    };
  }

  createSettings() {
    return {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidestoScroll: 2,
      autoplay: true,
      autoplaySpeed: 3000,
      centerMode: true,
      adaptiveHeight: true,
      arrows: false,
      responsive: [
        {
          settings: {
              mobileFirst: true,
              infinite: true,
              speed: 300,
              slidesToShow: 1,
              centerMode: false,
              variableWidth: true,
              focusOnSelect: true

          }
        }
      ]
    };
  }

  render() {
    const items = this.createItems();
    const styles = this.createStyles();
    const settings = this.createSettings();

    return (
      <div style={styles.carousel}>
        <Slider {...settings}>
          <div>
            <img src={items.first.src} alt={items.first.alt} /><br/>
            <div style={styles.caption}>{items.first.spanish}</div>
          </div>
          <div>
            <img src={items.second.src} alt={items.second.alt} /><br/>
            <div style={styles.caption}>{items.second.spanish}</div>
          </div>
          <div>
            <img src={items.third.src} alt={items.third.alt} /><br/>
            <div style={styles.caption}>{items.third.spanish}</div>
          </div>
        </Slider>
      </div>
    );
  }
}
  
export default CarouselComponent;