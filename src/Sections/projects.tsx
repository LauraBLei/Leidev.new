import { schoolProjects } from "../Data/schoolProject";

export const ProjectsSection = () => {
  const school = schoolProjects.projectData;
  return (
    <div className="h-screen flex flex-col  font-primary text-Beige gap-9 ">
      <div className="w-full p-5 bg-leiDevBlue text-MatteBlack">
        <h1 className="text-2xl">Projects</h1>
      </div>
      <div className="max-w-[1400px] px-5 flex flex-col gap-2">
        <h2 className="text-xl">School Projects</h2>
        <div className="flex gap-5">
          {school.map((project) => {
            return (
              <div id={project.id}>
                <div className="w-[162px] h-[119px] overflow-hidden flex items-center">
                  <img
                    className="object-cover"
                    src={
                      project.images.length
                        ? project.images[0]
                        : "./placeholder.jpg"
                    }
                    alt={project.name}
                  />
                </div>
                <p className="text-center">{project.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="max-w-[1400px] px-5 flex flex-col gap-2">
        <h2 className="text-xl">Other Projects</h2>
        <div className="flex gap-5">
          {school.map((project) => {
            return (
              <div id={project.id}>
                <div className="w-[162px] h-[119px] overflow-hidden flex items-center">
                  <img
                    className="object-cover"
                    src={
                      project.images.length
                        ? project.images[0]
                        : "./placeholder.jpg"
                    }
                    alt={project.name}
                  />
                </div>
                <p className="text-center">{project.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
