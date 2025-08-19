import { useState } from "react";

export const ContactSection = () => {
  const [message, setMessage] = useState("");
  const maxChars = 500;

  return (
    <div className="flex flex-col  font-primary items-center w-full  text-MatteBlack gap-10">
      <h1 className="headline">Contact</h1>

      <div className="w-[120px]  h-[120px] md:w-[200px] md:h-[200px] mx-auto flex items-center justify-center">
        <img
          className="w-full h-full object-cover rounded-full border-2 border-leiDevBlue shadow-lg"
          src="/profileImage.jpg"
          alt="Profile"
        />
      </div>
      <div className="px-2 text-center max-w-2xl mx-auto flex flex-col gap-2">
        <p>
          I'd love to hear from you! Whether you have a question, want to
          collaborate, or just want to say hi, feel free to reach out using the
          form below.
        </p>
        <p className="text-sm text-leiDevBlue">
          I usually respond within 1-2 business days.
        </p>
        <p className="text-xs text-MatteBlack">
          Your information will only be used to respond to your inquiry and will
          not be shared.
        </p>
        <p className="text-sm mt-2">
          Prefer email? You can also reach me directly at
          <a
            href="mailto:lei.dev@outlook.com"
            className="text-leiDevBlue underline ml-1"
          >
            lei.dev@outlook.com
          </a>
        </p>
      </div>
      <form
        className="flex flex-col max-w-[800px] px-2 w-full gap-5"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <input
          type="hidden"
          name="access_key"
          value={"0d9cb849-6542-43b7-a859-edc07eefe6f5"}
        />
        <div className="flex flex-col w-full">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" maxLength={150} required />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" maxLength={150} required />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="message">How can I help you?</label>
          <textarea
            name="message"
            required
            maxLength={maxChars}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <span className="text-xs text-right mt-1">
            {message.length}/{maxChars}
          </span>
        </div>

        <button
          type="submit"
          className="py-2 px-6  rounded-md bg-leiDevBlue hover-effect text-Beige font-semibold text-lg"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};
