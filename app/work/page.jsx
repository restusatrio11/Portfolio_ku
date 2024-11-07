"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Full-Stack",
    title: "Project 1",
    description:
      "A full stack performance management system development involves creating an integrated platform that tracks and evaluates employee performance using modern web technologies. This includes backend development for secure data handling and efficient performance tracking, and frontend development for user-friendly interfaces. The system aims to streamline goal setting, feedback, and progress reporting to enhance productivity and employee engagement",
    stack: [
      { name: "Html" },
      { name: "Css" },
      { name: "Javascript" },
      { name: "Laravel Php" },
      { name: "Bootstrap" },
    ],
    image: "/Assets/work/Work_SIMANJA.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Front-End",
    title: "Project 2",
    description:
      "A partner management system development focuses on building a comprehensive platform to oversee and coordinate relationships with business partners. This system ensures efficient management of partner data, communication, and performance tracking. It includes backend services for secure data processing and frontend interfaces for seamless user experiences. The goal is to streamline collaboration, enhance partner engagement, and optimize overall business relationships for mutual growth",
    stack: [
      { name: "Html" },
      { name: "Css" },
      { name: "Javascript" },
      { name: "Avro" },
    ],
    image: "/Assets/work/Work_SIMITRA.png",
    live: " ",
    github: "",
  },
  {
    num: "03",
    category: "Full-Stack",
    title: "Project 3",
    description:
      "An e-ticketing issue reporting system development involves creating a platform that allows users to submit and manage problem reports efficiently. This system facilitates real-time ticket submission, tracking, and resolution. It includes a robust backend for secure ticket management and a user-friendly frontend for easy access and updates. The objective is to streamline the issue resolution process, improve response times, and enhance user satisfaction by ensuring that problems are tracked and resolved in a structured manner",
    stack: [
      { name: "Html" },
      { name: "Css" },
      { name: "Javascript" },
      { name: "Symfony" },
    ],
    image: "/Assets/work/SIMPATI.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Testimonial",
    title: "Approved",
    description:
      "A customer testimonial system development focuses on creating a platform where clients can share their feedback and experiences with a product or service. This system includes backend functionalities for secure submission and storage of testimonials, as well as a visually appealing frontend interface for showcasing customer stories. The aim is to build trust with potential customers by displaying authentic user feedback, thereby enhancing credibility and supporting marketing efforts.",
    stack: [{ name: "" }],
    image: "/Assets/work/testimonial.jpg",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>

              {/* project description */}
              <p className="text-white/60 text-justify">
                {project.description}
              </p>

              {/* Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              {/* border */}
              <div className="border border-white/20"></div>

              {/* button */}
              <div className="flex items-center gap-4">
                {/* Live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/*github project button  */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[480px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* button */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "
                className="pt-2"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
