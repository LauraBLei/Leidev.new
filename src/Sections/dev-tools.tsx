import { devTools } from "../Data/devTools";

export const DevToolsSection = () => {
  return (
    <div>
      <div className="w-full p-5 mb-12 bg-leiDevBlue text-MatteBlack">
        <h1 className="text-2xl">Dev-Tools</h1>
      </div>
      <div className="px-5 flex flex-wrap max-w-[600px] gap-7 justify-center">
        {devTools.map((tool) => {
          return (
            <div className="flex text-lg text-Beige gap-2">
              <div className="w-[30px] h-[30px]">
                <img
                  className="object-cover"
                  src={tool.image ? tool.image : "./placeholder.jpg"}
                  alt={tool.tool}
                />
              </div>
              <p>{tool.tool}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
