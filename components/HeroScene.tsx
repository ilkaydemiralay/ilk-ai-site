"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import type { Group } from "three";

/* Sinematik 3D hero sahnesi — koyu zeminde yavaşça yüzen, yumuşak renkli ışık blobları.
   Fresnel tabanlı özel shader: merkez dolu, kenara doğru saydamlaşıp eriyor
   (keskin daire silüeti yok, gradyan geçişli kenarlar). Dış bağımlılık yok. */

const VERT = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vView;
  void main() {
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vNormal = normalize(mat3(modelMatrix) * normal);
    vView = normalize(cameraPosition - worldPos.xyz);
    gl_Position = projectionMatrix * viewMatrix * worldPos;
  }
`;

const FRAG = /* glsl */ `
  uniform vec3 uCore;
  uniform vec3 uEdge;
  uniform float uOpacity;
  uniform float uFalloff;
  varying vec3 vNormal;
  varying vec3 vView;
  void main() {
    // f: merkezde ~1 (kameraya bakan), silüet kenarında ~0
    float f = clamp(dot(normalize(vNormal), normalize(vView)), 0.0, 1.0);
    float alpha = pow(f, uFalloff) * uOpacity;          // kenara doğru yumuşak erime
    vec3 col = mix(uEdge, uCore, smoothstep(0.0, 1.0, f)); // iç gradyan
    gl_FragColor = vec4(col, alpha);
  }
`;

type Orb = {
  pos: [number, number, number];
  scale: number;
  core: string;   // merkez rengi
  edge: string;   // kenara doğru ton
  speed: number;
};

const ORBS: Orb[] = [
  { pos: [-2.7, 0.5, 0], scale: 1.9, core: "#818cf8", edge: "#c7d2fe", speed: 1.1 },    // indigo pastel
  { pos: [2.5, -0.5, -1], scale: 1.5, core: "#a78bfa", edge: "#ddd6fe", speed: 0.9 },   // violet pastel
  { pos: [0.6, 1.5, -2], scale: 1.1, core: "#7dd3fc", edge: "#bae6fd", speed: 1.4 },    // sky pastel
  { pos: [-0.8, -1.6, -1.4], scale: 1.3, core: "#f9a8d4", edge: "#fbcfe8", speed: 1.0 }, // pembe pastel
  { pos: [3.2, 1.3, -3], scale: 0.9, core: "#c4b5fd", edge: "#ede9fe", speed: 1.6 },    // açık mor pastel
];

function SoftOrb({ orb }: { orb: Orb }) {
  const uniforms = useMemo(
    () => ({
      uCore: { value: new THREE.Color(orb.core) },
      uEdge: { value: new THREE.Color(orb.edge) },
      uOpacity: { value: 0.7 },
      uFalloff: { value: 1.9 },
    }),
    [orb]
  );
  return (
    <Float speed={orb.speed * 1.7} rotationIntensity={0.6} floatIntensity={2.2} floatingRange={[-0.4, 0.4]}>
      <mesh position={orb.pos} scale={orb.scale}>
        <sphereGeometry args={[1, 48, 48]} />
        <shaderMaterial
          vertexShader={VERT}
          fragmentShader={FRAG}
          uniforms={uniforms}
          transparent
          depthWrite={false}
          blending={THREE.NormalBlending}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  const group = useRef<Group>(null);
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.09; // belirgin ama yumuşak sinematik dönüş
  });
  const orbs = useMemo(() => ORBS, []);
  return (
    <group ref={group}>
      {orbs.map((o, i) => (
        <SoftOrb key={i} orb={o} />
      ))}
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
    >
      <Scene />
    </Canvas>
  );
}
