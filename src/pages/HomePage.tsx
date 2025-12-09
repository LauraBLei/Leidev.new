import { Header } from "../components/header";
import { WelcomeSection } from "../components/sections/welcome";

export const HomePage = () => {
  return (
    <div className="relative w-full">
      <Header />
      <WelcomeSection />
    </div>
  );
};
