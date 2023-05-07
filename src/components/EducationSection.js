import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Badge1 from './images/education/Badge1.png';
import Badge2 from './images/education/Badge2.png';
import Badge3 from './images/education/Badge3.png';
import Badge4 from './images/education/Badge4.png';
import "./EducationSection.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function EducationSection() {
    const [toggleState, setToggleState] = useState(1);
    
  
    const toggleTab = (index) => {
      setToggleState(index);
    };

    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (badgeInfo) => {
        setActiveButton(badgeInfo);
    };
  
    return (
        <section className="education-section" id="education">
            <div className="education-heading" data-aos="zoom-in">
                <h2>02. Education</h2>
            </div>
            
            <div className="container" data-aos="zoom-in">
                <div className="bloc-tabs" >
                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    2020
                </button>
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                    2021
                </button>
                <button
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                >
                    2022
                </button>
                <button
                    className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(4)}
                >
                    2023
                </button>
                </div>
        
                <div className="content-tabs">
                    <div
                        className={toggleState === 1 ? "content  active-content" : "content"}
                    >
                        <h2>CTU Training Solutions</h2>
                        <br></br>
                        <p>
                        In 2020, I studied Software and Application Development Foundation and gained a variety of new skills. 
                        These skills included basic programming, computer architecture, cybernetics, digital literacy, 
                        principles of program design, web development, and database development. As a recent high school graduate, 
                        I learned foundational concepts and tools necessary for creating software applications. 
                        This education prepared me for potential careers in the software development industry or for further education in the field.
                        </p>
                    </div>
            
                    <div
                        className={toggleState === 2 ? "content  active-content" : "content"}
                    >
                        <h2>CTU Training Solutions</h2>
                        <br></br>
                        <p>
                        In 2021, I continued my studies in Software and Application Development, now in my second year. During this year, 
                        I focused on strengthening my skills in Java, Python, and C# and specialized in Game Development. 
                        I delved deeper into the programming languages and tools required for game development. 
                        I also gained knowledge in advanced web development, Azure cloud fundamentals, game development, 
                        digital art and modeling, game theory, storytelling, and game design. At the end of the year, 
                        I obtained my national certificate in IT: Systems Development, 
                        which has equipped me with the necessary skills and knowledge for a career in software development.

                        </p>
                    </div>
            
                    <div
                        className={toggleState === 3 ? "content  active-content" : "content"}
                    >
                        <h2>CTU Training Solutions</h2>
                        <br></br>
                        <p>
                        In 2022, I made significant progress in my studies of Software and Application Development, 
                        with a focus on Advanced Game Development. I acquired a wide range of skills, including Game Scripting, 
                        Game Environment Design, VR/AR Gameplay and Interaction, Advanced Game Modeling, Mobile App Development, 
                        Advanced Design Patterns, and IT project management. Additionally, I obtained my Azure Data Administrator Associate Certification, 
                        which further enriched my understanding of cloud infrastructure and data management. By the end of the year, 
                        I had successfully graduated with an Advanced Certificate in IT: Database Development, 
                        which has paved the way for an exciting and fulfilling career in software development.
                        </p>
                    </div>

                    <div
                        className={toggleState === 4 ? "content  active-content" : "content"}
                    >
                        <h2>University of South Africa</h2>
                        <br></br>
                        <p>
                            In 2020, I studied Software and Application Development Foundation and gained a variety of new skills.
                            These skills included basic programming, computer architecture, cybernetics, digital literacy,
                            principles of program design, web development, and database development. As a recent high school graduate,
                            I learned foundational concepts and tools necessary for creating software applications.
                            This education prepared me for potential careers in the software development industry or for further education in the field.
                        </p>
                    </div>

                </div>
            </div>

            <div className='international-container' data-aos="zoom-in">
                <h2>International Qualifications</h2>
                <br />
                <div className="badge-container">
                    <button className={`button ${activeButton === 'badge1' ? 'active' : ''}`} onClick={() => handleButtonClick('badge1')}>
                        <img src={Badge1} alt="Badge 1" className={`badge ${activeButton === 'badge1' ? 'active-badge' : ''}`} />
                    </button>
                    <button className={`button ${activeButton === 'badge2' ? 'active' : ''}`} onClick={() => handleButtonClick('badge2')}>
                        <img src={Badge2} alt="Badge 2" className={`badge ${activeButton === 'badge2' ? 'active-badge' : ''}`} />
                    </button>
                    <button className={`button ${activeButton === 'badge3' ? 'active' : ''}`} onClick={() => handleButtonClick('badge3')}>
                        <img src={Badge3} alt="Badge 3" className={`badge ${activeButton === 'badge3' ? 'active-badge' : ''}`} />
                    </button>
                    <button className={`button ${activeButton === 'badge4' ? 'active' : ''}`} onClick={() => handleButtonClick('badge4')}>
                        <img src={Badge4} alt="Badge 4" className={`badge ${activeButton === 'badge4' ? 'active-badge' : ''}`} />
                    </button>
                </div>
                {activeButton && (
                    <div>
                        {activeButton === "badge1" && <p>
                            <div class="education-skills">
                                <h3>Programming in HTML5 with JavaScript and CSS3</h3>
                                <br></br>
                                <ul>
                                    <li>CSS3</li>
                                    <li>HTML5</li>
                                    <li>JavaScript</li>
                                    <li>Application Developer</li>
                                    <li>Data Security</li>
                                    <li>Data Validation</li>
                                    <li>Object-based Programming</li>
                                    <li>Visual Studio</li>
                                    <li>Web applications</li>
                                    <li>Web Developer</li>
                                </ul>
                            </div>    
                            </p>}
                        {activeButton === "badge2" && <p>
                            <div class="education-skills">
                                <h3>Querying Data with Transact-SQL</h3>
                                <br></br>
                                <ul>
                                    <li>Database Administration</li>
                                    <li>Database Development</li>
                                    <li>Database Query</li>
                                    <li>SQL</li>
                                    <li>SQL Server</li>
                                    <li>Transact SQL</li>
                                    <li>Writing Queries</li>
                                </ul>
                            </div>    
                            </p>}
                        {activeButton === "badge3" && <p>
                            <div class="education-skills">
                                <h3>Microsoft Certified: Azure Database Administrator Associate</h3>
                                <br></br>
                                <ul>
                                    <li>Azure Database Administrator</li>
                                    <li>Azure Data Service</li>
                                    <li>Database Performance</li>
                                    <li>Data Platform Solutions</li>
                                    <li>Data Security</li>
                                    <li>High Availability And Disaster Recovery</li>
                                    <li>Query Performance</li>
                                    <li>SQL Server</li>
                                    <li>T-SQL</li>
                                </ul>
                            </div>    
                            </p>}
                        {activeButton === "badge4" && <p>
                            <div class="education-skills">
                                <h3>Unity Certified User: Programmer</h3>
                                <br></br>
                                <ul>
                                    <li>Unity Engine</li>
                                    <li>C# Programming</li>
                                    <li>Interactivity</li>
                                    <li>Debugging</li>
                                    <li>Problem-Solving</li>
                                    <li>Interpreting The API</li>
                                    <li>Creating And Evaluating Code</li>
                                    <li>Navigating The Unity Interface</li>
                                </ul>
                            </div>    
                            </p>}
                    </div>
                )}
            </div>
            

        </section>
    );
  }

export default EducationSection
  