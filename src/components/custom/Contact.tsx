import { Button } from "../ui/button";

export const ContactUs = () => {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mt-10 px-4">
        <div className="flex flex-col space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name*"
              className="border rounded-lg p-3 w-full outline-none border-none  focus:border-red-500 shadow-md"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="border rounded-lg p-3 w-full outline-none border-none  focus:border-red-500 shadow-md"
            />
          </div>
          <input
            type="email"
            placeholder="Email*"
            className="border rounded-lg p-3 w-full outline-none border-none focus:border-red-500 shadow-md  "
          />
          <select className="border rounded-lg p-3 w-full outline-none border-none  focus:border-red-500 shadow-md">
            <option>Select Subject*</option>
            <option>General Inquiry</option>
            <option>Support</option>
            <option>Business</option>
          </select>
          <textarea
            placeholder="Message"
            className="border rounded-lg p-3 w-full h-32 outline-none border-none  focus:border-red-500 shadow-md"
          ></textarea>
          <Button className="bg-red-700 hover:bg-red-800 text-white p-3 rounded-lg w-24 lg:w-32 md:w-30 sm:w-28 h-12 lg:h-12 md:h-12 sm:h-12 shadow-black">
            SEND
          </Button>
        </div>
        <div>
          <iframe
            className="w-full h-80 rounded-lg shadow-lg "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.509838711155!2d88.35082617605383!3d22.485046736172258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270e5f37f4235%3A0xe10737b8d6c7b61f!2sAFX%20Animation!5e0!3m2!1sen!2sin!4v1743660162553!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
