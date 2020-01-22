import React from 'react';
import ControlledCarousel from '../Components/Home/Carousel';
import Section1 from '../Components/Home/section1';
import Section2 from '../Components/Home/section2';
import Section3 from '../Components/Home/section3';

const home = () => {
    return (
        <div>
            <ControlledCarousel/>
            <Section1/>
            <Section2/>
            <Section3/>
        </div>
);
}

export default home;