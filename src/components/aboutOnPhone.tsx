import { useState } from "react";

export const AboutOnPhone = () => {
  const [text, setText] = useState<string>("textOne");
  const isTextOne = text === "textOne";
  const isTextTwo = text === "textTwo";
  return (
    <div className="flex flex-col justify-between">
      <div className="overflow-hidden w-full max-h-[200px] md:max-h-[500px] flex items-center ">
        <img
          className="w-full h-full"
          src="./profileImage.jpg"
          alt="Image of me Laura Lei"
        />
      </div>
      <div className="relative flex rounded-full  justify-between  w-full">
        <div
          id="movingSlider"
          className={`absolute top-0 left-0 w-1/2 h-full rounded-md  bg-leiDevBlue shadow-md transition ${
            isTextTwo ? "translate-x-full" : ""
          }`}
        ></div>
        <button
          className={` py-2 flex-1 cursor-pointer hover-effect ${
            isTextOne ? " text-MatteBlack font-semibold" : "text-white"
          }`}
          onClick={() => setText("textOne")}
        >
          Hi I'm Laura
        </button>
        <button
          className={` py-2 flex-1 cursor-pointer hover-effect ${
            isTextTwo ? " text-MatteBlack font-semibold" : "text-white"
          }`}
          onClick={() => setText("textTwo")}
        >
          What He Taught Me
        </button>
      </div>
      <div>
        {isTextOne ? (
          <div className="text-sm md:text-base text-white p-2 flex flex-col gap-2">
            <p>My name is Laura, and i am based in Bergen, Norway.</p>
            <p>
              I thrive working in a team or by myself, i love to debate and
              brain storm with other people, and have also learned a lot from
              helping my fellow students, debugging their code! For me helping
              others can be just as educational if not more, than working alone.
            </p>
          </div>
        ) : isTextTwo ? (
          <div className="text-sm text-white p-2">
            <div className="bg-Onyx border-l-4 border-leiDevBlue shadow-md px-3 py-2 md:py-3 my-2">
              <p className="text-base md:text-lg italic text-center">
                “The will to want creates the ability to act”
              </p>
            </div>
            <p>
              My father lived by this mindset. It’s shaped how I learn, grow,
              and take on challenges. His quiet strength drives my dedication
              and the way I approach every project—with purpose and heart.
            </p>
          </div>
        ) : (
          <div className="text-sm text-white p-2">
            <p>No text found</p>
          </div>
        )}
      </div>
    </div>
  );
};
