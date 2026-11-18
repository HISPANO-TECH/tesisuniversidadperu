"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

const CYAN = "#04c3d9";
const CYAN_DARK = "#0b7b91";
const INK = "#0d1422";
const GOLD = "#d4af37";

/** Birrete: tabla cuadrada + casquete + borla dorada. */
function GraduationCap(props: React.JSX.IntrinsicElements["group"]) {
  const tassel = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (tassel.current) tassel.current.rotation.z = Math.sin(clock.elapsedTime * 1.6) * 0.18;
  });
  return (
    <group {...props}>
      <RoundedBox args={[2.4, 0.09, 2.4]} radius={0.03} smoothness={2}>
        <meshStandardMaterial color={INK} roughness={0.45} metalness={0.15} />
      </RoundedBox>
      <mesh position={[0, -0.36, 0]}>
        <cylinderGeometry args={[0.78, 0.86, 0.66, 32]} />
        <meshStandardMaterial color="#1a2233" roughness={0.55} />
      </mesh>
      <mesh position={[0, 0.08, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.08, 24]} />
        <meshStandardMaterial color={GOLD} metalness={0.8} roughness={0.25} />
      </mesh>
      <group ref={tassel} position={[0, 0.08, 0]}>
        <mesh position={[0.6, 0, 0.6]} rotation={[0, Math.PI / 4, 0]}>
          <boxGeometry args={[1.7, 0.03, 0.03]} />
          <meshStandardMaterial color={GOLD} metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[1.2, -0.35, 1.2]}>
          <cylinderGeometry args={[0.06, 0.12, 0.6, 16]} />
          <meshStandardMaterial color={GOLD} metalness={0.7} roughness={0.3} />
        </mesh>
      </group>
    </group>
  );
}

/** Pila de libros (tesis encuadernadas). */
function Books(props: React.JSX.IntrinsicElements["group"]) {
  const books = [
    { c: CYAN_DARK, w: 2.2, y: 0, r: 0.05 },
    { c: INK, w: 2.0, y: 0.34, r: -0.12 },
    { c: CYAN, w: 1.9, y: 0.66, r: 0.18 },
  ];
  return (
    <group {...props}>
      {books.map((b, i) => (
        <group key={i} position={[0, b.y, 0]} rotation={[0, b.r, 0]}>
          <RoundedBox args={[b.w, 0.3, 1.45]} radius={0.05} smoothness={2}>
            <meshStandardMaterial color={b.c} roughness={0.5} />
          </RoundedBox>
          {/* páginas */}
          <mesh position={[0.06, 0, 0]}>
            <boxGeometry args={[b.w - 0.06, 0.22, 1.36]} />
            <meshStandardMaterial color="#f6f8fb" roughness={0.9} />
          </mesh>
          {/* franja dorada del lomo */}
          <mesh position={[-b.w / 2 - 0.001, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
            <planeGeometry args={[0.9, 0.06]} />
            <meshStandardMaterial color={GOLD} metalness={0.6} roughness={0.3} side={THREE.DoubleSide} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

/** Diploma enrollado con cinta. */
function Diploma(props: React.JSX.IntrinsicElements["group"]) {
  return (
    <group {...props}>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.22, 0.22, 2.2, 32]} />
        <meshStandardMaterial color="#fbf7ea" roughness={0.8} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.235, 0.05, 12, 32]} />
        <meshStandardMaterial color={CYAN} roughness={0.35} />
      </mesh>
      <mesh position={[0, -0.3, 0.12]} rotation={[0.3, 0, 0]}>
        <boxGeometry args={[0.14, 0.5, 0.02]} />
        <meshStandardMaterial color={CYAN} roughness={0.35} />
      </mesh>
    </group>
  );
}

/** Partículas orbitando (el "conocimiento" alrededor de la tesis). */
function Orbit() {
  const ref = useRef<THREE.Points>(null);
  const geometry = useMemo(() => {
    const n = 140;
    const pos = new Float32Array(n * 3);
    // Pseudoaleatorio determinista (mulberry32) para mantener el render puro.
    let seed = 20260518;
    const rand = () => {
      seed = (seed + 0x6d2b79f5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    for (let i = 0; i < n; i++) {
      const a = rand() * Math.PI * 2;
      const r = 3.2 + rand() * 1.6;
      pos[i * 3] = Math.cos(a) * r;
      pos[i * 3 + 1] = (rand() - 0.5) * 3.2;
      pos[i * 3 + 2] = Math.sin(a) * r;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return g;
  }, []);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.08;
  });
  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial color={CYAN} size={0.05} sizeAttenuation transparent opacity={0.85} />
    </points>
  );
}

/** Grupo principal que sigue suavemente al puntero. */
function Rig({ children }: { children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ pointer }, dt) => {
    if (!ref.current) return;
    ref.current.rotation.y = THREE.MathUtils.damp(ref.current.rotation.y, pointer.x * 0.35, 3, dt);
    ref.current.rotation.x = THREE.MathUtils.damp(ref.current.rotation.x, -pointer.y * 0.15, 3, dt);
  });
  return <group ref={ref}>{children}</group>;
}

type Props = {
  /** false = la escena está fuera de pantalla: no se renderiza ningún frame. */
  active?: boolean;
  onReady?: () => void;
};

export default function HeroScene({ active = true, onReady }: Props) {
  return (
    <Canvas
      frameloop={active ? "always" : "never"}
      dpr={[1, 1.5]}
      camera={{ position: [0, 1.2, 8.8], fov: 38 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance", stencil: false }}
      onCreated={() => requestAnimationFrame(() => onReady?.())}
      aria-label="Escena 3D: birrete, tesis encuadernadas y diploma"
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 6, 5]} intensity={1.6} />
      <pointLight position={[-4, 2, 3]} intensity={18} color={CYAN} />
      <pointLight position={[3, -2, 2]} intensity={10} color={GOLD} />

      <Rig>
        <Float speed={1.6} rotationIntensity={0.5} floatIntensity={0.9}>
          <GraduationCap position={[0.2, 1.35, 0]} rotation={[0.35, 0.6, -0.12]} />
        </Float>
        <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.5}>
          <Books position={[-0.5, -1.25, 0]} rotation={[0.1, -0.5, 0]} />
        </Float>
        <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
          <Diploma position={[1.55, -0.2, 0.6]} rotation={[0.2, -0.4, 0.5]} scale={0.85} />
        </Float>
        <Orbit />
      </Rig>
    </Canvas>
  );
}
