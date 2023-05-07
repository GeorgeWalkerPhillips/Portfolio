import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NowPlaying from './SpotifyMusic.js';
import img1 from './images/projects/img1.jpg';
import img2 from './images/projects/img2.png';
import img3 from './images/projects/img3.png';
import { Button } from './Button';
import "./ProjectSection.css";
import BulletInferno from './BulletInferno.js';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Game from './pages/Game.js';



function ProjectSection () {

    function openItch1() {
        window.open("https://george-walker.itch.io/a-dark-but-not-so-scary-dungeon", "_blank");
      }

    function openItch2() {
        window.open("https://george-walker.itch.io/extremely-chaotic-chicken-run", "_blank");
    }

    const openGame = () => {
        
    };


    {/* Scroll Animation */ }
    useEffect(() => {
        AOS.init({ duration: 200 });
    })
    
    return (
        <section className="project-section" id="project">
            <div className="project-heading" data-aos="zoom-in">
                <h2>03. Projects</h2>
            </div>

            <div className='card-section'>

                <div class="project-row" data-aos="zoom-in">
                    <div class="project-column">
                        <div class="project-card">
                            <img src={img1} alt="Jane"/>
                            <div class="project-container">
                                    <h2>Bullet Hell Game Jam 2023</h2>
                                    <p class="project-title">Bullet Inferno</p>
                                    <p>A game were you need to survive waves of enemies.</p>
                                    <br></br>
                                    <ul className='project-ul'>
                                        <li>Unity Engine</li>
                                        <li>C#</li>
                                    </ul>
                                    <br></br>
                                    <p>
                                    <Link 
                                        to="/game"
                                        className="btns btn--outline btn--large"
                                        style={{ textDecoration: 'none' }}
                                        target="_blank"
                                        rel="noopener noreferrer">   
                                            More Info                                                                                           
                                    </Link>
                                    </p>
                                <br></br>
                                </div>
                        </div>
                    </div>

                    <div class="project-column">
                        <div class="project-card">
                            <img src={img2} alt="Jane" />
                            <div class="project-container">
                                <h2>3D Platformer</h2>
                                <p class="project-title">Extremely Chaotic Chicken Run</p>
                                <p>I created this 3D platformer game for student project. Utilizing Unity 3D.</p>
                                <br></br>
                                <ul className='project-ul'>
                                    <li>Unity 3D</li>
                                    <li>C#</li>
                                    <li>Animation</li>
                                </ul>

                                <p><Button 
                                     className='btns'
                                     buttonStyle='btn--outline'
                                     buttonSize='btn--large'
                                    onClick={openItch2}>
                                        More Info
                                    </Button></p>
                                <br></br>
                            </div>
                        </div>
                    </div>

                    <div class="project-column">
                        <div class="project-card">
                            <img src={img3} alt="Jane"/>
                            <div class="project-container">
                                    <h2>Rogue Like Game Jam</h2>
                                    <p class="project-title">A Dark But Not So Scary Dungeon</p>
                                    <p>I created this game for 0h Game Jam on itch.io</p>
                                    <br></br>
                                    <ul className='project-ul'>
                                        <li>Unity Engine</li>
                                        <li>C#</li>
                                        <li>AI Pathfinding</li>
                                        <li>Procedural Generation</li>
                                    </ul>

                                    <p><Button 
                                         className='btns'
                                         buttonStyle='btn--outline'
                                         buttonSize='btn--large'
                                        onClick={openItch1}>
                                        More Info
                                    </Button></p>
                                    <br></br>
                                </div>
                        </div>
                    </div>
                    
                </div>


                <div class="project-row" data-aos="zoom-in">
                    <div class="project-column">
                        <div class="project-card">
                            <img src={img1} alt="Jane"/>
                            <div class="project-container">
                                    <h2>Bullet Hell Game Jam 2023</h2>
                                    <p class="project-title">Bullet Inferno</p>
                                    <p>A game were you need to survive waves of enemies.</p>
                                    <br></br>
                                    <ul className='project-ul'>
                                        <li>Unity Engine</li>
                                        <li>C#</li>
                                    </ul>
                                    <br></br>
                                <p><Button class="project-button">More Info</Button></p>
                                <br></br>
                                </div>
                        </div>
                    </div>

                    <div class="project-column">
                        <div class="project-card">
                            <img src={img2} alt="Jane" />
                            <div class="project-container">
                                <h2>3D Platformer</h2>
                                <p class="project-title">Extremely Chaotic Chicken Run</p>
                                <p>I created this 3D platformer game for student project. Utilizing Unity 3D.</p>
                                <br></br>
                                <ul className='project-ul'>
                                    <li>Unity 3D</li>
                                    <li>C#</li>
                                    <li>Animation</li>
                                </ul>
                                <br></br>
                                <p><Button 
                                    class="project-button"
                                    onClick={openItch2}>
                                        More Info
                                    </Button></p>
                                <br></br>
                            </div>
                        </div>
                    </div>

                    <div class="project-column">
                        <div class="project-card">
                            <img src={img3} alt="Jane"/>
                            <div class="project-container">
                                    <h2>Rogue Like Game Jam</h2>
                                    <p class="project-title">A Dark But Not So Scary Dungeon</p>
                                    <p>I created this game for 0h Game Jam on itch.io</p>
                                    <br></br>
                                    <ul className='project-ul'>
                                        <li>Unity Engine</li>
                                        <li>C#</li>
                                        <li>AI Pathfinding</li>
                                        <li>Procedural Generation</li>
                                    </ul>
                                  
                                    <p><Button 
                                        class="project-button"
                                        onClick={openItch1}>
                                        More Info
                                    </Button></p>
                                    <br></br>
                                </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
            
        </section>
    )
}

export default ProjectSection