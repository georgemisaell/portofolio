import React from "react";

const Contact = () => {
  return (
    <div className="mt-32 sm:p-10 p-0" id="contact">
      <h1
        className="text-4xl mb-2 font-bold text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-once="true"
      >
        Contact
      </h1>
      <p
        className="text-base/loose text-center mb-10 opacity-50"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-once="true"
      >
        Let's Connect
      </p>
      <form
        action="https://formsubmit.co/georgemisaelgantume@gmail.com"
        method="POST"
        className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md "
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
        autoComplete="off"
        data-aos-once="true"
      >
        <div className="flex flex-col gap-6 ">
          <div
            className="flex flex-col gap-2
          "
          >
            <label className="font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Input name..."
              className="border border-zinc-500 p-2 rounded-md"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Input email..."
              className="border border-zinc-500 p-2 rounded-md"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-semibold">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="40"
              rows="7"
              placeholder="Input message..."
              className="border border-zinc-500 p-2 rounded-md"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border-zinc-600 hover:bg-violet-600"
            >
              Send message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
