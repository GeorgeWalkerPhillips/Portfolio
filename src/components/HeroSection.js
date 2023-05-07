import React, { useState, useEffect } from 'react';
import Cursor from './Cursor.js';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Box from './Box.js';
import Sphere from './AnimatedSphere.js';
import myCV from './CV/GeorgePhillipsCV.pdf';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    })

    function openResume() {
        window.open(myCV);
    }

    return (
        <div className={loaded ? 'hero-container' : "hero-container-unloaded" } id='hero'>
            <Cursor></Cursor>

            <div class="vertical-line-left"></div>
            <div class="vertical-line-right"></div>
            <p>Hi, my name is</p>
            <h1
                className='App-name'
            >
                George Phillips
            </h1>
            <h2>I am a Software Developer</h2>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    onClick={openResume}
                >
                    Resume
                </Button>
            </div>
                <Canvas
                    className="hero-canvas"
                    style={{
                        position: "fixed",
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        zIndex: -1,
                    }}
                    >
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={[0.5]} />
                    <directionalLight position={[-2, 5, 2]} intensity={[1]} />
                    <Sphere></Sphere>
                </Canvas>
            </div>
    );
}

export default HeroSection;