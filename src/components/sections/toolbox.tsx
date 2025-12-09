import { ToolKey } from "../../types/types";
import { ToolBoxIcon } from "../tool";

export const ToolBoxSection = () => {
  const toolKeys: ToolKey[] = [
    "react",
    "tailwind",
    "typescript",
    "vercel",
    "github",
    "git",
    "nextjs",
    "vite",
    "nodejs",
    "javascript",
    "html",
    "css",
    "three",
    "blender",
    "supabase",
  ];

  return (
    <section id="toolbox" className="w-full py-20 flex justify-center">
      <div className="section">
        <h2 className="headline mb-10">ToolBox</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {toolKeys.map((tool) => (
            <ToolBoxIcon key={tool} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
};
