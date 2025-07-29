import { useState } from "react";

export default function HomeHero({
  title = `Great software is built with amazing developers`,
  description = `We help build and manage a team of world-class developers to bring your vision to life`,
  imageSrc = "../../assets/Homepage/Mask Group.png",
  imageAlt = "Team working together at a desk",
  sponsors = [
    { name: "Acme", logoSrc: "https://dummyimage.com/120x40/eee/999&text=Acme" },
    { name: "Globex", logoSrc: "https://dummyimage.com/120x40/eee/999&text=Globex" },
    { name: "Initech", logoSrc: "https://dummyimage.com/120x40/eee/999&text=Initech" },
    { name: "Umbrella", logoSrc: "https://dummyimage.com/120x40/eee/999&text=Umbrella" },
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
    } catch (err) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="w-full ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 py-12 md:grid-cols-2 md:py-20">
          {/* Text side */}
          <div className="order-2 md:order-1">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              {title}
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
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img src={imageSrc} alt={imageAlt} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
