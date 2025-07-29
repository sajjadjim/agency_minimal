
import React from "react";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
export default function BostDeveloper({
  title = "Boost your agencies by choosing Ninja Developers",
  subtitle = "Create custom landing pages with Shades that convert more visitors than any website, no coding required.",
  bullets = [
    "Unlimited design possibility",
    "Completely responsive features",
    "Easy to customize plugins",
  ],
  imageSrc = "/shutterstock_1361520500 1@2x.png", // replace with your actual image path
  ctaText = "Learn more",
  onCta,
}) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 mx-auto 2xl:max-w-10/12 md:w-11/12 px-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Framed container */}
        <div className="relative  rounded-none">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left: Illustration with circular backdrop */}
            <div className="relative order-2 lg:order-1">
              {/* circle backdrop */}
              <div
                aria-hidden
                className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full "
              />
              <div className="px-6 pt-10 pb-0 sm:px-10">
                <img
                  src={imageSrc}
                  alt="Man boosting on a rocket"
                  className="mx-auto block max-h-[420px] w-auto select-none"
                  draggable="false"
                />
              </div>
            </div>

            {/* Right: Copy */}
            <div className="order-1 lg:order-2 px-6 pb-10 pt-10 sm:px-10">
              <h1 className="md:text-3xl 2xl:text-5xl font-extrabold leading-tight text-slate-900 text-4xl ">
                {title}
              </h1>

              <p className="mt-4 max-w-prose text-slate-500">
                {subtitle}
              </p>

              {/* Bullets */}
              <ul className="mt-6 space-y-3">
                {bullets.map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FiCheckCircle
                      className="mt-1 h-5 w-5 shrink-0 text-sky-500"
                      aria-hidden="true"
                    />
                    <span className="text-slate-700">{text}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-6">
                <button
                  type="button"
                  onClick={onCta}
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-300"
                >
                  {ctaText}
                  <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          </div>

          {/* decorative bottom line to mimic framed edges */}
        </div>
      </div>
    </section>
  );
}
