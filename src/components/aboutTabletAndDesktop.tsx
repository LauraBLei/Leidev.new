export const AboutOnDesktop = () => {
  return (
    <div className="flex ">
      <div className="overflow-hidden h-[464px] w-full min-w-[464px] flex items-center ">
        <img
          className="w-full h-full"
          src="./profileImage.jpg"
          alt="Image of me, Laura Lei"
        />
      </div>
      <div className="text-white  font-primary p-2 flex flex-col gap-2">
        <p className="text-xl">
          My name is Laura, and i'm based in Bergen, Norway.
        </p>
        <p className="text-lg">
          Although I have only been coding for about two years, I am a quick
          learner with a genuine love for this field.
        </p>
        <p className="text-lg">
          I thrive working in a team or by myself, i love to debate and brain
          storm with other people, and have also learned a lot from helping my
          fellow students, debugging their code! For me helping others can be
          just as educational if not more, than working alone.
        </p>
        <div className="text-lg text-white">
          <div className="bg-Onyx border-l-4 border-leiDevBlue shadow-md px-3 py-2 md:py-3 my-2">
            <p className="text-2xl italic text-center">
              “The will to want creates the ability to act”
            </p>
          </div>
          <p>
            My father lived by this mindset. It’s shaped how I learn, grow, and
            take on challenges. His quiet strength drives my dedication and the
            way I approach every project—with purpose and heart.
          </p>
        </div>
      </div>
    </div>
  );
};
