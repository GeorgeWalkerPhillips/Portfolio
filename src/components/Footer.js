import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Footer.css';

function FooterSection () {

    {/* Scroll Animation */ }
    useEffect(() => {
        AOS.init({ duration: 200 });
    })
    
    return (
            <footer class="site-footer">
            <div class="container">
                <div class="row">
                <div class="col-md-8 col-sm-6 col-xs-12">
                    <p class="copyright-text">
                        Built by George Phillips 
                    </p>
                </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterSection;