import { ToolKey, TOOLS } from "../types/types";

export const ToolBoxIcon = ({ tool }: { tool: ToolKey }) => {
  const toolData = TOOLS[tool];

  if (!toolData) {
    return null;
  }

  return (
    <div className="flex flex-col items-center">
      <div
        title={toolData.name}
        className="border border-leiDevBlue rounded-md w-20 h-20 p-2 bg-leiDevBlue"
      >
        <div className="shadow-inner shadow-leiDevBlue border border-leiDevBlue bg-gray-50 w-full h-full flex items-center justify-center rounded-md">
          <img src={toolData.src} alt={toolData.name} className="w-6 h-6" />
        </div>
      </div>
      <p className="text-center">{toolData.name}</p>
    </div>
  );
};
