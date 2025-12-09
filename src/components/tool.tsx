import { ToolKey, TOOLS } from "../types/types";

export const ToolBoxIcon = ({ tool }: { tool: ToolKey }) => {
  const toolData = TOOLS[tool];

  if (!toolData) {
    return null;
  }

  return (
    <div title={toolData.name}>
      <img src={toolData.src} alt={toolData.name} className="w-6 h-6" />
    </div>
  );
};
