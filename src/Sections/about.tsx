import { AboutOnPhone } from "../components/aboutOnPhone";
import { AboutOnDesktop } from "../components/aboutTabletAndDesktop";

export const AboutSection = () => {
  return (
    <div className="font-primary flex flex-col max-w-[1400px]">
      <div className="w-full p-3 bg-leiDevBlue  text-MatteBlack flex justify-between">
        <h1 className="headline">About Me</h1>
      </div>

      <div className="block lg:hidden">
        <AboutOnPhone />
      </div>
      <div className="lg:block hidden">
        <AboutOnDesktop />
      </div>
    </div>
  );
};

// <div className="font-primary flex flex-col max-w-[1400px]">
//       <div className="w-full p-3 bg-leiDevBlue  text-MatteBlack flex justify-between">
//         <h1 className="text-lg md:text-3xl">About Me</h1>
//       </div>
//       <div className="text-sm md:text-2xl text-Beige mt-10 mb-5 flex flex-col px-5 gap-3.5 md:gap-5">
//         <p>My name is Laura, and i am based in Bergen, Norway. </p>
//         <p>
//           Although I have only been coding for about two years, I am a quick
//           learner with a genuine love for this field.{" "}
//         </p>
//         <p>
//           I thrive working in a team or by myself, i love to debate and brain
//           storm with other people, and have also learned a lot from helping my
//           fellow students, debugging their code! For me helping others can be
//           just as educational if not more, than working alone.{" "}
//         </p>
//       </div>
//       <div>
//         <div className="bg-Onyx shadow-md py-2 md:py-3">
//           <p className="text-lg md:text-xl text-center text-Beige">
//             “The will to want, creates the ability to act”
//           </p>
//         </div>
//         <p className="text-base text-Beige px-5 mt-2 hidden md:block">
//           My late father always said, "The will to want creates the ability to
//           act." This philosophy has guided my career, driving me to master new
//           skills, lead projects, and overcome challenges with determination. My
//           strong work ethic and commitment to achieving goals make me a valuable
//           asset, ready to contribute passionately to your team.
//         </p>
//       </div>
//     </div>
