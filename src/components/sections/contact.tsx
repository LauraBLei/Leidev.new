import { useState } from "react";

export const ContactSection = () => {
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const maxChars = 500;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.currentTarget);

    // Submit to Web3Forms
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
      .then(() => {
        setIsSubmitted(true);
        // Reset form
        e.currentTarget.reset();
        setMessage("");
      })
      .catch((error) => console.error("Error:", error));
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="flex justify-center">
        <div className="flex flex-col font-primary items-center w-full text-MatteBlack gap-10 mb-20 section">
          <h1 className="headline">Contact</h1>
          <div className="flex flex-col items-center gap-6">
            <div className="w-24 h-24 rounded-full border-4 border-leiDevBlue flex items-center justify-center bg-leiDevBlue ">
              <svg
                className="w-12 h-12 text-Beige"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="text-center max-w-md">
              <h2 className="text-3xl font-bold text-leiDevBlue mb-2">
                Message Sent!
              </h2>
              <p className="text-MatteBlack">
                Thank you for reaching out. I'll get back to you within 1-2
                business days.
              </p>
            </div>
            <button onClick={() => setIsSubmitted(false)} className="button">
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="flex justify-center mb-20">
      <div className="flex flex-col  items-center section">
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
            collaborate, or just want to say hi, feel free to reach out using
            the form below.
          </p>
          <p className="text-sm text-leiDevBlue">
            I usually respond within 1-2 business days.
          </p>
          <p className="text-xs text-MatteBlack">
            Your information will only be used to respond to your inquiry and
            will not be shared.
          </p>
        </div>
        <form
          className="flex flex-col max-w-[800px] px-2 w-full gap-5"
          onSubmit={handleSubmit}
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

          <button type="submit" className="button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
