import { useNavigate } from "react-router";
export const WelcomeSection = () => {
  const navigate = useNavigate();
  return (
    <section className="max-h-screen w-full bg-green-300 ">
      <div className="w-full bg-black">
        <div className="overflow-hidden z-0 absolute w-full h-full">
          <img
            src="/images/mountain.jpg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="overflow-hidden z-0 absolute w-full h-full">
          <img
            src="/images/window.png"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen gap-8">
        <h1 className="text-5xl font-bold text-white drop-shadow-lg">
          Home Page
        </h1>
        <button
          onClick={() => navigate("/3d")}
          className="px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 transition drop-shadow-lg"
        >
          View 3D Scene
        </button>
      </div>
    </section>
  );
};
