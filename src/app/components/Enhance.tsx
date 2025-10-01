import { motion } from "framer-motion";

const Enhance = () => {
  return (
    <motion.div
      className="flex min-h-screen flex-col items-center justify-center text-center mx-2"
      initial={{ y: 55, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <h1 className="text-4xl leading-12 font-extrabold md:text-shadow-sm">
        Ready To Enhance Your Warehouse <br />
        Team
      </h1>
      <p className="mx-2 mt-4 text-lg">
        Experienced professional available for immediate employment with proven
        track record of <span className="flex md:hidden" />
        safety and efficiency.
      </p>
    </motion.div>
  );
};

export default Enhance;
