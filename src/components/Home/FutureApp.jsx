// FutureApp.jsx
import React from "react";
import { FiPenTool, FiEdit3, FiAward } from "react-icons/fi";
import { TbVector } from "react-icons/tb";

const features = [
  {
    title: "Unlimited Customization",
    desc:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
    Icon: FiPenTool,
    gradient: "from-yellow-300 to-yellow-400",
    tint: "bg-yellow-50",
  },
  {
    title: "Vector shape & resizable",
    desc:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
    Icon: TbVector,
    gradient: "from-cyan-400 to-blue-400",
    tint: "bg-cyan-50",
  },
  {
    title: "Editing freedom",
    desc:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
    Icon: FiEdit3,
    gradient: "from-blue-400 to-indigo-400",
    tint: "bg-blue-50",
  },
  {
    title: "Best Award history",
    desc:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
    Icon: FiAward,
    gradient: "from-orange-300 to-rose-300",
    tint: "bg-orange-50",
  },
];

export default function FutureApp() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 mx-auto 2xl:max-w-10/12 md:w-11/12 px-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-purple-500">Quality Features</p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Meet exciting feature of app
          </h2>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, desc, Icon, gradient, tint }, i) => (
            <article key={i} className="group flex flex-col items-center text-center">
              {/* Icon tile */}
              <div className="rounded-2xl p-0.5 shadow-sm transition-transform group-hover:-translate-y-0.5">
                <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${gradient} p-1`}>
                  <div className={`flex h-full w-full items-center justify-center rounded-2xl ${tint}`}>
                    <Icon className="h-7 w-7 text-slate-700/90" aria-hidden="true" />
                  </div>
                </div>
              </div>

              {/* Text */}
              <h3 className="mt-5 text-base font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500 max-w-xs">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
