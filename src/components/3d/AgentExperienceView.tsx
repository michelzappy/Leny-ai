
import { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Text, Html, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { Agent } from '../agents/types/agentTypes';
import AgentChatInterface from './AgentChatInterface';

interface AgentExperienceViewProps {
  agent: Agent;
  onClose: () => void;
}

const AgentExperienceView = ({ agent, onClose }: AgentExperienceViewProps) => {
  const { camera } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  const [isFullyOpened, setIsFullyOpened] = useState(false);
  const [openAnimation, setOpenAnimation] = useState(true);
  const [scale, setScale] = useState(0);
  
  // Move the camera to focus on the experience
  useEffect(() => {
    const originalPosition = camera.position.clone();
    
    camera.position.set(0, 0, 10);
    
    return () => {
      // Reset camera position when component unmounts
      camera.position.copy(originalPosition);
    };
  }, [camera]);

  // Control the opening animation
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (openAnimation) {
      timeout = setTimeout(() => {
        setIsFullyOpened(true);
      }, 1500);
    }
    
    return () => clearTimeout(timeout);
  }, [openAnimation]);

  // Handle the opening animation
  useFrame(() => {
    if (openAnimation && scale < 1) {
      setScale(prev => Math.min(prev + 0.04, 1));
    }
    
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Environment sphere */}
      <mesh scale={[scale * 8, scale * 8, scale * 8]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial 
          color="#0a192f" 
          side={THREE.BackSide}
          transparent
          opacity={0.9}
        />
      </mesh>
      
      {/* Agent representation */}
      <group position={[0, 0.5, -2]} scale={[scale, scale, scale]}>
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial 
            color="#4287f5" 
            emissive="#2c5aa0"
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        
        <Text
          position={[0, -1.5, 0]}
          fontSize={0.4}
          color="white"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.05}
          outlineColor="#000000"
        >
          {agent.name}
        </Text>
        
        <Text
          position={[0, -2, 0]}
          fontSize={0.25}
          color="#a0a0a0"
          anchorX="center"
          anchorY="middle"
        >
          {agent.specialty}
        </Text>
      </group>
      
      {/* Chat interface */}
      {isFullyOpened && (
        <Html
          position={[0, 0, 3]}
          transform
          distanceFactor={10}
          style={{ width: '400px', height: '500px' }}
        >
          <AgentChatInterface agent={agent} onClose={onClose} />
        </Html>
      )}
    </group>
  );
};

export default AgentExperienceView;
