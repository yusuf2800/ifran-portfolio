import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const contacts = [
    { icon: <Mail />, title: "Email", ref: "mohmedirfan79@gmail.com" },
    { icon: <Phone />, title: "Phone", ref: "07578 950197" },
    {
      icon: <MapPin />,
      title: "Location",
      ref: "Leicester, UK",
    },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-x-85 px-10 md:flex-row">
      <motion.div
        className="flex max-w-lg flex-col gap-y-3 text-center md:max-w-2xl md:text-left"
        initial={{ x: "-50%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <p className="font-bold">Connect</p>
        <h1 className="text-5xl leading-13 font-extrabold md:text-shadow-sm">
          Get In Touch.
        </h1>
        <p className="">
          Ready to discuss professional opportunities in warehouse and logistics
          management.
        </p>
      </motion.div>

      <motion.div
        className="mt-15 flex flex-col gap-5 md:mt-0"
        initial={{ x: "50%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        {contacts.map((contact, i) => (
          <div className="flex items-center gap-3" key={i}>
            {contact.icon}
            <div>
              <h1 className="font-extrabold">{contact.title}</h1>
              <p className="underline underline-offset-3">{contact.ref}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Contact;
