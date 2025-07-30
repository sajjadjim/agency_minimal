import { useState } from "react";
import FutureApp from "./FutureApp";
import BostDeveloper from "./BostDeveloper";
import Software from "./Software/Software";
import CustomerComment from "./Customer Comment/CustomerComments";
import CustomerSupport from "./Customer Support/CustomerSupport";
import QualityFeature from "./Quality Feature/QualityFeature";
import ContactPage from "../Contact/Contact";

export default function HomeHero({
  description = `We help build and manage a team of world-class developers to bring your vision to life`,
  imageSrc = "https://github.com/sajjadjim/agency_minimal/blob/main/src/assets/Homepage/Mask%20Group.png?raw=true",
  imageAlt = "Team working together at a desk",
  sponsors = [
    { name: "Google", logoSrc: "/logo/google.png" },
    { name: "PayPal", logoSrc: "/logo/paypal.png" },

  ],
  onSubscribe,
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); 
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValid) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      setStatus("loading");
      if (onSubscribe) {
        await onSubscribe(email);
      } else {
        // Demo fallback: mimic an async call
        await new Promise((r) => setTimeout(r, 800));
      }
      setStatus("success");
      setMessage("Thanks for subscribing! Please check your inbox.");
      setEmail("");
    } catch (error) {
      setStatus("error",error);
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
  <section>
      <section className="w-full ">
      <div id="hero_part" className="mx-auto 2xl:max-w-10/12 md:w-11/12 px-4 ">
        <div className="grid items-center gap-10 py-12 md:grid-cols-2 md:py-20">
          {/* Text side */}
          <div className="order-2 md:order-1">
            <h1 className="2xl:text-7xl md:text-4xl font-extrabold tracking-tight text-5xl">
             Great software is <br className="md:block hidden" /> built with amazing <br className="md:block hidden" /> developers
            </h1>
            <p className="mt-4 text-lg text-gray-600">{description}</p>

            {/* Subscribe form */}
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row"
              aria-label="Subscribe to our newsletter"
            >
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                inputMode="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-4 focus:ring-indigo-200"
                required
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium text-white bg-[#8D448B] hover:bg-[#8D448B focus:outline-none focus:ring-4 disabled:opacity-60 cursor-pointer transition duration-200"
              >
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </button>
            </form>

            {/* Status message */}
            {message && (
              <p
                className={`mt-3 text-sm ${
                  status === "error" ? "text-red-600" : "text-green-700"
                }`}
                role={status === "error" ? "alert" : "status"}
              >
                {message}
              </p>
            )}

            {/* Sponsors */}
            {sponsors?.length > 0 && (
              <div className="mt-10">
                <p className="text-sm uppercase tracking-wider text-gray-500">
                  Sponsored by
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-4">
                  {sponsors.map((s) => (
                    <img
                      key={s.name}
                      src={s.logoSrc}
                      alt={`${s.name} logo`}
                      className="h-8 w-auto opacity-80 transition hover:opacity-100"
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Image side */}
          <div className="order-1 md:order-2">
            <div className="relative overflow-hidden rounded-2xl ">
              <img src={imageSrc} alt={imageAlt} className="h-full w-full bg-[#F6F8FB] object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <FutureApp></FutureApp>
    <BostDeveloper></BostDeveloper>
    <Software></Software>
    <CustomerComment></CustomerComment>
    <CustomerSupport></CustomerSupport>
    <QualityFeature></QualityFeature>
    <ContactPage></ContactPage>
  </section>
  );
}
