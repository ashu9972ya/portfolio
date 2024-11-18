import React from "react";

import DevImg from "@/components/hero/DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

interface QualificationItem {
  university?: string;
  qualification?: string;
  years: string;
  company?: string;
  designation?: string;
}

interface Qualification {
  title: string;
  data: QualificationItem[];
}

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Ashutosh Yadav",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+91 7355596996",
  },
  {
    icon: <MailIcon size={20} />,
    text: "ashu9972ya@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 20 May, 1998",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "B.Tech on Computer Science",
  },
  {
    icon: <Briefcase size={20} />,
    text: "Zestgeek Solutions",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "92 Kishundaspur, Pratapgarh, UP",
  },
];

const qualificationData: Qualification[] = [
  {
    title: "education",
    data: [
      {
        university: "Lovely Professional University",
        qualification: "Bachelor of Technology",
        years: "2017-2021",
      },
    ],
  },

  {
    title: "experience",
    data: [
      {
        company: "ZestGeek Solutions",
        designation: "Frontend Engineer",
        years: "2023-Present",
      },
      {
        company: "Engenia Technologies Private Limited",
        designation: "React.js Developer",
        years: "2022-2023",
      },
    ],
  },
];

interface SkillsItem {
  name: string;
}

interface ToolsItem {
  imgPath: string;
}

interface Skills {
  title: string;
  data: (SkillsItem | ToolsItem)[];
}

const skillData: Skills[] = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "Front-end Development",
      },
      {
        name: "JavaScript, TypeScript",
      },
      {
        name: "Tailwind CSS, Shadcn, Redux, React-router",
      },
    ],
  },

  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
    ],
  },
];

const getData = <T extends { title: string }>(
  arr: T[],
  title: string
): T | undefined => {
  return arr.find((item) => item.title === title);
};
const About = () => {
  const experienceData = getData(qualificationData, "experience");

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Passionate Front-End Web Developer with 2 year of
                      experience
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      Building and maintaining responsive websites in the
                      technology and service industry. Highly skilled in HTML,
                      CSS, JavaScript, React.js and Next.js alongside modern
                      frameworks and libraries.
                    </p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>English, Hindi</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    <div className="grid md:grid-cols-2 gap-y-8">
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {experienceData?.title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience")?.data.map(
                            (item, index) => {
                              const { company, designation, years } = item;
                              return (
                                <div key={index} className="flex gap-x-8 group">
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {designation}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education")?.title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education")?.data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div key={index} className="flex gap-x-8 group">
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">What I use Everyday</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      <div>
                        {getData(skillData, "skills")?.data.map(
                          (item, index) => {
                            if ("name" in item) {
                              return (
                                <div
                                  className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                                  key={index}
                                >
                                  <div className="font-medium">{item.name}</div>
                                </div>
                              );
                            }
                            return null;
                          }
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "tools")?.data.map(
                          (item, index) => {
                            if ("imgPath" in item) {
                              return (
                                <div key={index}>
                                  <Image
                                    src={item.imgPath}
                                    alt=""
                                    width={48}
                                    height={48}
                                  />
                                </div>
                              );
                            }
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
