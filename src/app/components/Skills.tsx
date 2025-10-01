import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Skills = () => {
  const cardDetails = [
    {
      image: "/forklift.png",
      title: "Forklift Operation",
      description1: "Certified in safe and efficient forklift handling across ",
      description2: "various industrial environments.",
      style: "mb-2",
    },
    {
      image: "/warehouse.png",
      title: "Reach Truck Specialisation",
      description1: "Advanced skills in navigating narrow warehouse aisles",
      description2: "with precision and control.",
      style: "",
    },
    {
      image: "/warehouse.png",
      title: "Warehouse Management",
      description1: "Proven track record in inventory control, stock",
      description2: "management, and operational efficiency.",
      style: "",
    },
  ];

  return (
    <div className="mx-2 flex min-h-screen max-w-screen flex-col items-center justify-center text-center">
      <div className="">
        <TypeAnimation className="my-3 font-bold tracking-wide" sequence={['Skills']} wrapper="span" />

        <motion.div className="" viewport={{ once: true }} initial={{y: 55, opacity: 0, }} animate={{y:0, opacity: 1}}
        transition={{duration: 1.2}}>
          <h1 className="mt-5 text-4xl leading-11 font-extrabold lg:text-shadow-sm">
            Professional Warehouse And Logistics Expertise
          </h1>

          <p className="mt-5 text-sm md:text-lg">
            Comprehensive skill set developed through years of hands-on
            experience in warehouse <span className="flex md:hidden" />
            operations and material handling.
          </p>
        </motion.div>
      </div>

      <div className="mt-28 flex flex-col gap-16 lg:flex-row">
        {cardDetails.map((detail, index) => (
          <motion.div
            className={`${detail.style} flex flex-col items-center justify-center`}
            key={index}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: Math.random() + index + 1, ease: 'easeInOut' }}
            
          >
            <img src={detail.image} alt="" className="w-[70px]" />
            <label className="text-2xl font-bold">{detail.title}</label>
            <p className="mt-5">
              {detail.description1}
              <br />
              {detail.description2}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
