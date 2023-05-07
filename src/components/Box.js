import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Box() {
    const meshRef = useRef();

    useFrame(() => {
        meshRef.current.rotation.y += 0.002;
        meshRef.current.rotation.y += 0.01;
    });

    return (
        <mesh ref={meshRef} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
            <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
            <meshLambertMaterial attach="material" color="aquamarine" />
            <meshNormalMaterial attach="material" />
        </mesh>
    );
}