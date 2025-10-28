import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div className="bg-Beige h-screen flex justify-center flex-col items-center ">
      <Outlet />
    </div>
  );
};
