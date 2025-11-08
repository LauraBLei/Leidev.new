import { BlenderObject } from "../model";

export const Walls = ({ FloorHeight }: { FloorHeight: number }) => {
  return (
    <group>
      <BlenderObject
        src="/models/WALL.glb"
        position={[0, FloorHeight, -0.7]}
        scale={2}
      />
      <BlenderObject
        src="/models/WALL.glb"
        position={[0, FloorHeight, -0.7]}
        scale={2}
      />
      <BlenderObject
        src="/models/WALL.glb"
        position={[4, FloorHeight, 3]}
        scale={2}
        rotation={[0, Math.PI / -2, 0]}
      />
      <BlenderObject
        src="/models/WALL.glb"
        position={[-4, FloorHeight, 3]}
        scale={2}
        rotation={[0, Math.PI / 2, 0]}
      />

      <BlenderObject
        src="/models/CORNER.glb"
        position={[4, FloorHeight, -0.7]}
        scale={2}
        rotation={[0, 0, 0]}
      />

      <BlenderObject
        src="/models/CORNER.glb"
        position={[-4, FloorHeight, -0.7]}
        scale={2}
        rotation={[0, Math.PI / 2, 0]}
      />
      <BlenderObject
        src="/models/roof.glb"
        scale={2}
        position={[0, -1.05, 1]}
      />
    </group>
  );
};
