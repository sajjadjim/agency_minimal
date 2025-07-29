import React, { useState } from "react";

const customers = [
  {
    name: "Pierre Hackett",
    role: "VP of Engineering",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Natalia Sanz",
    role: "Head of Technology",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ece Akman",
    role: "Senior Marketer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const CustomerComment = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="py-16   text-center mx-auto 2xl:max-w-10/12 md:w-11/12 px-4 bg-white">
      <p className="text-[#8D448B] font-medium mb-2">Customer Comments</p>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
        Why customers love us
      </h2>

      <p className="text-xl md:text-2xl text-gray-800 max-w-3xl mx-auto mb-12 leading-relaxed font-serif">
        They are doing amazing job with hundred percent customer satisfaction,
        Love their work and would like to work with them again
      </p>

    
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-6">
        {customers.map((customer, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => setActiveIndex(index)}
          >
            <img
              src={customer.image}
              alt={customer.name}
              className={`w-16 h-16 rounded-full object-cover border-2 ${
                activeIndex === index
                  ? "border-[#8D448B]"
                  : "border-transparent"
              }`}
            />
            <p className="mt-3 font-semibold text-gray-900">{customer.name}</p>
            <p className="text-sm text-gray-500">{customer.role}</p>
            {activeIndex === index && (
              <div className="w-8 h-1 bg-[#8D448B] mt-3 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerComment;
