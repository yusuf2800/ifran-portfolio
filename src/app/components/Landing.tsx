import { motion } from "framer-motion";

const Landing = ({ onNavClick }: { onNavClick: (label: string) => void }) => {

  return (
    <div className="absolute flex min-h-screen min-w-screen flex-col items-center justify-center px-10">
      <motion.h1
        className="mx-5 text-center text-4xl leading-12 font-extrabold md:text-6xl md:leading-19 md:text-shadow-sm"
        initial={{ y: 55, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        Experienced Forklift And Reach Truck Operator
      </motion.h1>
      <div className="">
        <motion.p
          className="mx-5 mt-6 text-center text-sm md:text-lg"
          initial={{ y: 55, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          Skilled warehouse professional with extensive experience in material
          handling and logistics.
          <br /> Committed to safety, efficiency, and precision in every task.
        </motion.p>
        <motion.div
          className="mt-8 flex items-center justify-center gap-4"
          initial={{ y: 55, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <button
            className="cursor-pointer rounded-sm bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            onClick={() => onNavClick("hire")}
          >
            Hire
          </button>
          <a href="/CV.pdf" className="" download={"irfanCV.pdf"}>
            <button className="cursor-pointer rounded-sm border border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-100">
              Download CV
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
