import React, { useEffect } from 'react';
import { Button } from './Button';
import "./ContactSection.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function ContactSection () {

    function handleButtonClick() {
        const emailAddress = 'georgewalkerphillips5@gmail.com';
        const subject = 'Contact Request from My Website';
        const body = 'Dear [Your Name],\n\nI am interested in learning more about your work and would like to connect with you regarding potential collaboration opportunities.\n\nBest regards,\n[Your Name]';
        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
      }

    {/* Scroll Animation */ }
    useEffect(() => {
        AOS.init({ duration: 200 });
    })
    
    return (
        <section className="contact-section" id="contact">

            <div className="about-heading" data-aos="zoom-in">
                <h2>04. Contact</h2>
            </div>

        <br></br>
        <h1 className='contact-section h1' data-aos="zoom-in">Don't hesitate to get in touch</h1>
        <p className='contact-section p' data-aos="zoom-in">
            Thank you for visiting my website. If you have any questions, 
            inquiries, or just want to say hi, please don't hesitate to contact me. 
            I'm always open to new opportunities and collaborations, 
            and I would love to hear from you! Whether you want to discuss potential projects, 
            I'm here to listen and help in any way I can. So feel free to send me an email, connect with me on LinkedIn, or follow me on Instagram. 
            I look forward to hearing from you
        </p>

        <div className='contact-section-links' data-aos="zoom-in">
            <div className='social-icon'>
                <a  href="https://www.instagram.com/pleasedonteatmynachos" target="_blank">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/george-phillips-532355211" target="_blank">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://george-walker.itch.io" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-itch-io"></i>
                </a>
                
            </div>
        </div>

        <div className='hero-btns' data-aos="zoom-in">
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    onClick={handleButtonClick}
                >
                    Email Me
                </Button>
            </div>

        <br></br>
        <br></br>

            

        </section>
    )
}

export default ContactSection;