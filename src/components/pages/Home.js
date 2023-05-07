import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import AboutSection from '../AboutSection';
import EducationSection from '../EducationSection';
import ProjectSection from '../ProjectsSection';
import ContactSection from '../ContactSection';
import Music from '../Music';
import FooterSection from '../Footer';
import BulletInferno from '../BulletInferno';
import Game from './Game';


function Home() {
    console.log("Home component rendering...");
    return (
        <>
            <HeroSection />
            <AboutSection />
            <EducationSection />
            <ProjectSection />
            <ContactSection />
            <FooterSection />
        </>
        
    );
}

export default Home;