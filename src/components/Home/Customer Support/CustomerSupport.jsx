import React from "react";

const CustomerSupport = () => {
  return (
    <div id="support" className="py-16  md:px-12 lg:px-24 bg-white flex flex-col-reverse md:flex-row items-center justify-between gap-12 mx-auto 2xl:max-w-8/12 md:w-9/12 px-4">
      
      {/* Left Content */}
      <div className="text-center md:text-left max-w-xl">
        <h2 className="text-3xl 2xl:text-4xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
          Free Customer Support <br />
          to ensure what you like <br />
          to expect
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          We offer a risk-free trial period of up to two weeks. You will only
          have to pay if you are happy with the developer and wish to continue.
          If you are unsatisfied, we’ll refund payment or fix issues on our
          dime period customers.
        </p>
        <p className="text-sm text-gray-500 mb-6">
          If you are happy with the developer and wish to continue. If you are
          unsatisfied, we’ll refund payment or fix issues.
        </p>
        <a href="#" className="text-purple-600 font-medium hover:underline">
          Learn more →
        </a>
      </div>

      <div className="w-full max-w-md">
        <img
          src="/customer_support.png"
          alt="Customer Support"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default CustomerSupport;
