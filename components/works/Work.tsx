"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination , Navigation} from "swiper/modules";
import ProjectCard from "../projectcard/ProjectCard";

const projectData = [
  {
    image: "/work/1.png",
    category: "next js",
    name: "copyin2clicks",
    description:
      "Developed a copy-paste browser extension integrated with a web application to streamline text management across platforms",
    link: "https://www.copyin2clicks.com/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "Project Landscape",
    description: "Developed and optimized a high-performance website using server-side rendering (SSR) and Incremental Static Regeneration (ISR) with Next.js.",
    link: "https://www.projectlandscape.ca/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "Next Website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "next js",
    name: "Next Website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "next js",
    name: "Next Website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "next js",
    name: "Next Website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "next js",
    name: "Next Website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "next js",
    name: "Next Website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "Next Website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    link: "/",
    github: "/",
  },
];
const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <Link href="projects">
            <Button>All projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            // className="h-[500px] mySwiper"
            className="mySwiper"
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 2 } }}
            spaceBetween={30}
            modules={[Pagination, Navigation]}
            navigation= {true}
            pagination={{ clickable: true }}
          >
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
