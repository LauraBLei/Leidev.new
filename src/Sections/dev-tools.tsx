import { OnMyRadarTools } from "../components/onMyRadarTools";
import { WorkedWithTools } from "../components/workedWithTools";

export const DevToolsSection = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full p-2 md:p-5 mb-5 md:mb-12 bg-leiDevBlue text-MatteBlack">
        <h1 className="text-base md:text-2xl">Dev-Tools</h1>
      </div>
      <div className="mb-10">
        <h2 className="px-2 text-base md:text-xl text-leiDevBlue py-2 border-b-[1px] mb-5">
          Tools i have worked with:
        </h2>
        <WorkedWithTools />
      </div>
      <div className="mb-5">
        <h2 className=" px-2 text-base md:text-xl text-leiDevBlue py-2 border-b-[1px] mb-5">
          On My Radar:
        </h2>
        <OnMyRadarTools />
      </div>
    </div>
  );
};
