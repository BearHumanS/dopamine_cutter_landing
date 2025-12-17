"use client";

import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function Hero3D() {
    return (
        <div className="absolute inset-0 z-0 contrast-125 brightness-110">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <ParticleCloud />
                <ambientLight intensity={0.5} />
            </Canvas>
        </div>
    );
}

function ParticleCloud(props: any) {
    const ref = useRef<THREE.Points>(null!);
    const [sphere] = useState(() => randomInSphere(6000, 1.3));

    useFrame((state, delta) => {
        // Rotation
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;

        // Mouse Interaction (Subtle Parallax)
        const x = state.pointer.x * 0.1;
        const y = state.pointer.y * 0.1;
        ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, x, 0.05);
        ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, y, 0.05);
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#ccff00"
                    size={0.003}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
}

// Generate random points in a sphere shell
function randomInSphere(count: number, radius: number) {
    const data = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        // Uniform distribution in sphere
        const u = Math.random();
        const v = Math.random();
        const theta = 2 * Math.PI * u;
        const phi = Math.acos(2 * v - 1);
        const r = Math.cbrt(Math.random()) * radius;

        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);

        data[i * 3] = x;
        data[i * 3 + 1] = y;
        data[i * 3 + 2] = z;
    }
    return data;
}
