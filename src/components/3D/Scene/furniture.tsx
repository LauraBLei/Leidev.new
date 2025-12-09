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

export const Lamps = () => {
  return (
    <group>
      <group position={[3.2, 0.32, 0.2]}>
        <BlenderObject src="/models/lamps/TableLamp.glb" position={[0, 0, 0]} />
        <pointLight position={[0, 0.4, 0]} />
      </group>
      <group
        position={[-3.85, 2, 2.1]}
        rotation={[Math.PI / 2, 0, Math.PI / -2]}
      >
        <BlenderObject src="/models/lamps/WallLamp.glb" scale={1.5} />
        <spotLight
          position={[0, 0.345, 0]}
          target-position={[2, 0.5, 0.1]}
          angle={Math.PI / 3}
          penumbra={0.5}
          intensity={3}
        />
      </group>
      <group
        position={[-3.85, 2, 3.9]}
        rotation={[Math.PI / 2, 0, Math.PI / -2]}
      >
        <BlenderObject src="/models/lamps/WallLamp.glb" scale={1.5} />
        <spotLight
          position={[0, 0.35, 0]}
          target-position={[2, 0.3, 0.1]}
          angle={Math.PI / 3}
          penumbra={0.5}
          intensity={3}
        />
      </group>
      <group position={[0, 3.01, 1.2]}>
        <BlenderObject src="/models/lamps/Spotlight.glb" />
        <pointLight position={[0, -0.3, 0]} />
      </group>
      <group position={[-2, 3.01, 1.2]}>
        <BlenderObject src="/models/lamps/Spotlight.glb" />
        <pointLight position={[0, -0.3, 0]} />
      </group>
      <group position={[2, 3.01, 1.2]}>
        <BlenderObject src="/models/lamps/Spotlight.glb" />
        <pointLight position={[0, -0.3, 0]} />
      </group>
    </group>
  );
};

export const Decorations = () => {
  return (
    <group>
      <BlenderObject
        src="/models/decorations/plantTest.glb"
        position={[2, -1, 1]}
      />
      <BlenderObject
        src="/models/decorations/bigPlant.glb"
        position={[1.6, -1, 0.4]}
      />
      <BlenderObject
        src="/models/decorations/bowl.glb"
        position={[2.5, 0.3, 0.2]}
        scale={1.5}
      />
      <BlenderObject
        src="/models/decorations/basket.glb"
        position={[-1.56, -1, 0.4]}
        scale={2.5}
      />
      <BlenderObject
        src="/models/decorations/carpet.glb"
        position={[0, -1, 3.2]}
        scale={1.7}
      />
    </group>
  );
};
