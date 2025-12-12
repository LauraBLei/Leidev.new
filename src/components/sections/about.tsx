export const AboutSection = () => {
  return (
    <section id="about" className="flex w-full justify-center">
      <div className="section">
        <h1 className="headline">About me</h1>
        <div className="flex gap-10 flex-col md:flex-row">
          <div className="flex-1 shadow-md">
            <img src="/profileImage.jpg" alt="" />
          </div>
          <div className="flex-1 flex flex-col gap-5 shadow-inner p-5">
            <p className="text">
              My name is Laura, and i'm based in Bergen, Norway.
            </p>
            <p className="text">
              Although I have only been coding for about two years, I am a quick
              learner with a genuine love for this field.
            </p>
            <p className="text">
              I thrive working in a team or by myself, i love to debate and
              brain storm with other people, and have also learned a lot from
              helping my fellow students, debugging their code! For me helping
              others can be just as educational if not more, than working alone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
