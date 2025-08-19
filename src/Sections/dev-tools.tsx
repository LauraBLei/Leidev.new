import { OnMyRadarTools } from "../components/onMyRadarTools";
import { WorkedWithTools } from "../components/workedWithTools";

export const DevToolsSection = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="headline mb-5">Dev-Tools</h1>

      <div className="mb-10">
        <h2 className="px-2 text-base md:text-xl text-MatteBlack py-2 border-b-[1px] mb-5">
          Tools i have worked with:
        </h2>
        <WorkedWithTools />
      </div>
      <div className="mb-5">
        <h2 className=" px-2 text-base md:text-xl text-MatteBlack py-2 border-b-[1px] mb-5">
          On My Radar:
        </h2>
        <OnMyRadarTools />
      </div>
    </div>
  );
};
