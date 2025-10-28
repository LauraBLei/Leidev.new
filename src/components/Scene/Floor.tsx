import { BlenderObject } from "../model";

export const Floor = ({ FloorHeight }: { FloorHeight: number }) => {
  return (
    <group>
      <BlenderObject src="/models/FLOOR.glb" position={[-4, FloorHeight, 0]} />
      <BlenderObject src="/models/FLOOR.glb" position={[-2, FloorHeight, 0]} />
      <BlenderObject src="/models/FLOOR.glb" position={[0, FloorHeight, 0]} />
      <BlenderObject src="/models/FLOOR.glb" position={[2, FloorHeight, 0]} />
      <BlenderObject src="/models/FLOOR.glb" position={[4, FloorHeight, 0]} />
      <BlenderObject src="/models/FLOOR.glb" position={[-4, FloorHeight, 2]} />
      <BlenderObject src="/models/FLOOR.glb" position={[-2, FloorHeight, 2]} />
      <BlenderObject src="/models/FLOOR.glb" position={[0, FloorHeight, 2]} />
      <BlenderObject src="/models/FLOOR.glb" position={[2, FloorHeight, 2]} />
      <BlenderObject src="/models/FLOOR.glb" position={[4, FloorHeight, 2]} />
      <BlenderObject src="/models/FLOOR.glb" position={[-4, FloorHeight, 4]} />
      <BlenderObject src="/models/FLOOR.glb" position={[-2, FloorHeight, 4]} />
      <BlenderObject src="/models/FLOOR.glb" position={[0, FloorHeight, 4]} />
      <BlenderObject src="/models/FLOOR.glb" position={[2, FloorHeight, 4]} />
      <BlenderObject src="/models/FLOOR.glb" position={[4, FloorHeight, 4]} />
    </group>
  );
};
