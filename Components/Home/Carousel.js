import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function ControlledCarousel() {
        const [index, setIndex] = useState(0);

        const handleSelect = (selectedIndex, e) => {
            setIndex(selectedIndex);
        };

        return (
            <div class="slides">
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                    <img
                className="d-block w-100"
                src="http://www.newsmaster.be/wp-content/uploads/2014/11/img-7.jpg"
                alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://ejoy-english.com/blog/wp-content/uploads/2018/06/pexels-photo-196667-900x600.jpeg"
                alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://cdn.stocksnap.io/img-thumbs/960w/DNGPP99OP5.jpg"
                alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div>
    );
}

export default ControlledCarousel;
