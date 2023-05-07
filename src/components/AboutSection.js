import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AboutPhoto from './images/About.jpg';
import "./AboutSection.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import BulletInferno from './BulletInferno';

function AboutSection () {

    {/* Scroll Animation */ }
    useEffect(() => {
        AOS.init({ duration: 200 });
    })
    
    return (
        <section className="about-section" id="about">
            <div className="about-heading" data-aos="zoom-in">
                <h2>01. About</h2>
            </div>
            <div className="about-content" data-aos="zoom-in">
                <img src={AboutPhoto} alt="Your Photo" className="about-photo" data-aos="zoom-in" />

                <p className="about-text">I am a Software Developer from Gauteng, South Africa, I studied at CTU Training Solutions 
                    where I obtained my IT Database and Systems Development qualifications. 
                    I'm currently pursuing a certification in IT Project Management at UNISA.
                    I believe in the value of lifelong learning, and strive to continuously 
                    improve my skills and knowledge in the tech industry. Whether it's learning a new 
                    programming language or exploring the latest gaming trends, there's always something new to discover and master.
                 </p>
            </div>

            <div class="skills-section" data-aos="zoom-in">
                <p className='skills-section-text'>Some technologies I am proficient in:</p>
                <ul>
                    <li>Unity Engine</li>
                    <li>SQL Server Management Studio</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>.Net Framework</li>
                    <li>Amazon Web Service</li>
                    <li>Microsoft Azure</li>
                    <li>Docker</li>
                    <li>API Integration</li>
                </ul>
            </div>
        </section>
    )
}

export default AboutSection;