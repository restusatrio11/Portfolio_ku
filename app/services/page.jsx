"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Create dynamic and responsive websites using the latest technologies to enhance user experience and functionality.",
    href: "https://wa.me/6282133985486?text=Hai%20Restu%20Satrio%20Saya%20tertarik%20untuk%20menggunakan%20layanan%20Web%20Development",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Design intuitive and aesthetically pleasing user interfaces while focusing on delivering the best user experience for your product.",
    href: "https://wa.me/6282133985486?text=Hai%20Restu%20Satrio,%20Saya%20tertarik%20untuk%20menggunakan%20layanan%20UI/UX%20Design",
  },
  {
    num: "03",
    title: "Analyst Data",
    description:
      "Leverage data analysis techniques to extract valuable insights, support decision-making, and improve business strategies.",
    href: "https://wa.me/6282133985486?text=Hai%20Restu%20Satrio,%20Saya%20tertarik%20untuk%20menggunakan%20layanan%20Analyst%20Data",
  },
  {
    num: "04",
    title: "Design Graphic",
    description:
      "Create visually appealing graphics and illustrations for marketing, branding, and communication purposes.",
    href: "https://wa.me/6282133985486?text=Hai%20Restu%20Satrio,%20Saya%20tertarik%20untuk%20menggunakan%20layanan%20Design%20graphic",
  },
];

const Services = () => {
  return (
    <section className="min-h-[88vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none tet-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;