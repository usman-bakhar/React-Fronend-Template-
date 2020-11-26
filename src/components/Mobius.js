import React from 'react';
import DiscoverMore from './DiscoverMore';
import Footer from './Footer';
import FreshNews from './FreshNews';
import Header from './Header';
import Info from './Info';
import LatestWorks from './LatestWorks';
import Services from './Services';
import Stepper from './Stepper';
import ThemeoneParallax from './ThemeoneParallax';
import ProjectsAndTags from './ProjectsAndTags';
import Container from './Container';
import Statistics from './Statistics';

function Mobius(props) {
    return (
        <div>
            <Header />
            <Container />
            <Info />
            <ThemeoneParallax />
            <LatestWorks />
            <Services />
            <Statistics />
            <DiscoverMore />
            <FreshNews />
            <Stepper />
            <ProjectsAndTags />
            <Footer />
           
        </div>
    );
}

export default Mobius;