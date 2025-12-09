import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div className="text-Beige font-primary flex justify-center flex-col items-center ">
      <Outlet />
    </div>
  );
};
