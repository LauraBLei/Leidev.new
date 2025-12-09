import { BlenderObject } from "../model";

export const Floor = ({ FloorHeight }: { FloorHeight: number }) => {
  return (
    <group>
      <mesh position={[0, -1.12, 2]} rotation={[Math.PI / -2, 0, 0]}>
        <planeGeometry args={[8, 6]} />
        <meshBasicMaterial color="black" />
      </mesh>
      <BlenderObject src="/models/floor.glb" position={[-4, FloorHeight, 0]} />
      <BlenderObject src="/models/floor.glb" position={[-2, FloorHeight, 0]} />
      <BlenderObject src="/models/floor.glb" position={[0, FloorHeight, 0]} />
      <BlenderObject src="/models/floor.glb" position={[2, FloorHeight, 0]} />
      <BlenderObject src="/models/floor.glb" position={[4, FloorHeight, 0]} />
      <BlenderObject src="/models/floor.glb" position={[-4, FloorHeight, 2]} />
      <BlenderObject src="/models/floor.glb" position={[-2, FloorHeight, 2]} />
      <BlenderObject src="/models/floor.glb" position={[0, FloorHeight, 2]} />
      <BlenderObject src="/models/floor.glb" position={[2, FloorHeight, 2]} />
      <BlenderObject src="/models/floor.glb" position={[4, FloorHeight, 2]} />
      <BlenderObject src="/models/floor.glb" position={[-4, FloorHeight, 4]} />
      <BlenderObject src="/models/floor.glb" position={[-2, FloorHeight, 4]} />
      <BlenderObject src="/models/floor.glb" position={[0, FloorHeight, 4]} />
      <BlenderObject src="/models/floor.glb" position={[2, FloorHeight, 4]} />
      <BlenderObject src="/models/floor.glb" position={[4, FloorHeight, 4]} />
    </group>
  );
};
