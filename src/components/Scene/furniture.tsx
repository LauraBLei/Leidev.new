import { BlenderObject } from "../model";
import { Board, FrameOne, FrameTwo } from "./Frames/Models";

export const Furniture = ({ FloorHeight }: { FloorHeight: number }) => {
  return (
    <>
      <BlenderObject
        src="/models/CONSOLE-TABLE.glb"
        position={[2.7, FloorHeight, 0.2]}
        scale={0.7}
      />
      <BlenderObject
        src="/models/CARPET.glb"
        position={[0, FloorHeight, 3]}
        scale={0.7}
      />
      <BlenderObject
        src="/models/CHAIR.glb"
        position={[-2.5, FloorHeight, 1]}
        scale={0.7}
        rotation={[0, Math.PI / 10, 0]}
      />
    </>
  );
};

export const WallArt = () => {
  return (
    <group>
      <FrameOne />
      <FrameTwo />
      <Board />
    </group>
  );
};
