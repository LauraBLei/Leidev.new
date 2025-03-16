import { Link } from "react-router";

export const IntroPage = () => {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <h1 className="text-white">Intro</h1>
      <Link className="text-white" to="/Home">
        To nav
      </Link>
    </div>
  );
};
