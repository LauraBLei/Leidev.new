import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div className="text-Beige  flex justify-center flex-col items-center ">
      <Outlet />
    </div>
  );
};
