import { ContactSection } from "./contact";

export const WelcomeSection = () => {
  return (
    <div className="font-primary text-leiDevBlue h-screen flex flex-col justify-center gap-7 max-w-[1400x] p-5">
      <h1 className="text-2xl md:text-4xl">Welcome!</h1>
      <p className="text-Beige text-4xl md:text-8xl">I'm Laura Lei</p>
      <p className="text-base md:text-2xl">
        Thank you for visiting my portfolio, and I hope you enjoy exploring my
        work as much as I enjoy creating it!
      </p>
      <ContactSection />
    </div>
  );
};
