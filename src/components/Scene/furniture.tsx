import { BlenderObject } from "../model";

export const Furniture = ({ FloorHeight }: { FloorHeight: number }) => {
  return (
    <>
      <BlenderObject
        src="/models/CONSOLE-TABLE.glb"
        position={[2.5, FloorHeight, 0.2]}
        scale={0.7}
      />
      <BlenderObject
        src="models/CARPET.glb"
        position={[0, FloorHeight, 3]}
        scale={0.7}
      />
    </>
  );
};
