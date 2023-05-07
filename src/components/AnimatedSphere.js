import React from "react";
import { Sphere, MeshDistortMaterial, GradientTexture } from "@react-three/drei";

export default function AnimatedSphere() {
    return (
        <Sphere
            visible args={[1, 100, 200]} 
            scale={2}
        >
          <MeshDistortMaterial
          color="#5F4BB6"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={1}
          />  
        </Sphere>

    )
       
}