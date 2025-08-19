import { Outlet } from "react-router";
import { Header } from "./header";
import { ProjectModal } from "./project";

export const Layout = () => {
  return (
    <div className="bg-Beige  flex justify-center flex-col items-center ">
      <ProjectModal />
      <Header />
      <Outlet />
    </div>
  );
};
