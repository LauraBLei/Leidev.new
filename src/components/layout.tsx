import { Outlet } from "react-router";
import { Header } from "./header";

export const Layout = () => {
  return (
    <div className="bg-MatteBlack h-screen flex justify-center">
      <Header />
      <Outlet />
    </div>
  );
};
