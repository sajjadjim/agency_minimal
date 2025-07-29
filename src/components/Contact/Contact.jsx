import React from "react";

const ContactPage = () => {
  return (
   <section id="contact" className="bg-gray-100"l>
     <div id="contact" className=" text-center mx-auto 2xl:max-w-8/12 md:w-9/12  pt-10  pb-30">
      <div className="max-w-4xl mx-auto ">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Get in Touch
        </h2>

        <form className="bg-white shadow-md rounded-xl p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8D448B]"
                placeholder="Sajjad Hossain"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8D448B]"
                placeholder="Jim"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8D448B]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows="5"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8D448B]"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#8D448B] hover:bg-[#8D448B] cursor-pointer text-white font-medium py-3 px-6 rounded-md transition duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
   </section>
  );
};

export default ContactPage;
