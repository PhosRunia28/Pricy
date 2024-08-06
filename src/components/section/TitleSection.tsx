import { motion } from "framer-motion";

export default function TitleSection() {
  return (
    <motion.div
      initial={{ scale: 0.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="container mx-auto mb-16 mt-20 w-full max-w-xl space-y-4 text-center"
    >
      <h3
        className="font-dmSans text-[2.2rem] font-medium"
        style={{ lineHeight: 1.3 }}
      >
        Select the Best Web Hosting Plan for Your Website
      </h3>
      <p className="font-inter text-sm leading-[1.8] text-black/60">
        From basic to advanced, we have a web hosting plan that's right for you.
        Compare our options and select the one that meets your needs.
      </p>
    </motion.div>
  );
}
