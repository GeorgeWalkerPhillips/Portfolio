import React, { useState, useEffect } from 'react';
import './Cursor.css';
import { motion } from 'framer-motion';

function Cursor() {

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });
    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {
        const mouseMove = e => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }
        window.addEventListener("mousemove", mouseMove);
        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }
    }, []);

    
    useEffect(() => {
        const h1Element = document.querySelector('h1');
        if (h1Element) {
            h1Element.addEventListener('mouseenter', () => {
                setCursorVariant('text');
            });
            h1Element.addEventListener('mouseleave', () => {
                setCursorVariant('default');
            });
        }
    }, []);

    useEffect(() => {
        const liElements = document.querySelectorAll('li');
        if (liElements) {
            liElements.forEach((li) => {
                li.addEventListener('mouseenter', () => {
                    setCursorVariant('lists');
                });
                li.addEventListener('mouseleave', () => {
                    setCursorVariant('default');
                });
            });
        }
    }, []);

    useEffect(() => {
        const buttonElements = document.querySelectorAll('button');
        if (buttonElements) {
            buttonElements.forEach((button) => {
                button.addEventListener('mouseenter', () => {
                    setCursorVariant('button');
                });
                button.addEventListener('mouseleave', () => {
                    setCursorVariant('default');
                });
            });
        }
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            borderRadius: '50%',
            border: '2px solid #ccd6f6',
            backgroundColor: 'transparent',
            height: 32,
            width: 32,
            position: 'fixed',
            top: 0,
            left: 0,
            pointerEvents: 'none',
        },
        text: {
            height: 120,
            width: 120,
            x: mousePosition.x - 60,
            y: mousePosition.y - 60,
            backgroundColor: "aqua",
            mixBlendMode: "difference"
        },
        lists: {
            height: 40,
            width: 40,
            x: mousePosition.x - 20,
            y: mousePosition.y - 20,
            backgroundColor: "aquamarine",
            mixBlendMode: "difference"
        },
        button: {
            height: 70,
            width: 70,
            x: mousePosition.x - 35,
            y: mousePosition.y - 35,
            backgroundColor: "aqua",
            mixBlendMode: "difference"
        }
    }

    return (
        <>
            <motion.div
                className='cursor'
                variants={variants}
                animate={cursorVariant}
            />
        </>
    );
}

export default Cursor;