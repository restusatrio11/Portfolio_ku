"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaLaravel,
  FaFigma,
  FaJava,
  FaBootstrap,
  FaAndroid,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "About me",
  description:
    "I am passionate about creating websites and data analysis. I enjoy building dynamic web applications that help businesses and individuals make informed decisions through data insights. My goal is to not only provide functional and aesthetically pleasing websites but also contribute to society. InshaAllah, a portion of my work will be donated to various causes, helping to make a positive impact in the community.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Restu Satrio Pinanggih",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+62) 82133985486",
    },
    {
      fieldName: "Email",
      fieldValue: "restuilham212@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indonesia",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ years",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "Indonesia & English",
    },
  ],
};

const experience = {
  icon: "/Assets/resume/badge.svg",
  title: "My Experience",
  description:
    "With extensive experience in coding, web development, and data analysis, I have honed my skills in creating functional and responsive applications. I specialize in full stack development, ensuring seamless integration from front-end interfaces to back-end systems. My work combines technical expertise with a keen eye for detail, allowing me to deliver impactful solutions that meet both user and business needs",
  items: [
    {
      company: "PKL STIS 62",
      position: "Staff IT",
      duration: "Aug 2022 - Jun 2023",
    },
    {
      company: "BPS Kabupaten Klaten",
      position: "Magang Staff IPDS",
      duration: "Aug 2023 - Oct 2023",
    },
  ],
};

const education = {
  icon: "/Assets/resume/cap.svg",
  title: "My Education",
  description:
    "I have a strong academic foundation in fields relevant to web development and data analysis, where I acquired essential skills in programming, database management, and software engineering principles. Through my education, I learned to solve complex problems and develop efficient solutions, which has been instrumental in advancing my career and expertise in technology.",
  items: [
    {
      Institution: "Politeknik Statistika STIS",
      Degree: "System Information Statistics",
      duration: "2020-2024",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "I am a full stack developer with extensive experience in various programming languages and data analysis, complemented by strong editing skills. I specialize in building web and mobile applications using technologies such as Java, PHP, Laravel, and React. My expertise extends to database management, ensuring robust and scalable solutions.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaLaravel />,
      name: "Php Laravel",
    },
    {
      icon: <FaFigma />,
      name: "Figma Application",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaBootstrap />,
      name: "Framework Bootstrap",
    },
    {
      icon: <FaAndroid />,
      name: "Android",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0 text-justify">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0 text-justify">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.Degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.Institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-Bold">{skills.title}</h3>
                <p className="max-w-[850px] text-white/60 mx-auto xl:mx-0 text-justify pb-10">
                  {skills.description}
                </p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                {skills.skillList.map((skill, index) => {
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  );
                })}
              </ul>
            </TabsContent>

            {/* About */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col fap-[30px]">
                <h3 className="text-4xl font-bold pb-5">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 pb-10 text-justify">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
