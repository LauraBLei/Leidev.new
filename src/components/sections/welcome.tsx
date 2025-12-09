export const WelcomeSection = () => {
  return (
    <section id="welcome" className="relative w-full">
      <div className="relative w-full h-screen">
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
    </section>
  );
};
