import { motion } from "framer-motion";
import "./styles/Portfolio.css";



const portfolioImages = [
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748630454/colorful.court_1_ijczjn.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748630455/colorful.court_2_ggggbc.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748630456/colorful.court_gvhity.png"
];


const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};


const Portfolio = () => {
  return (
    <div className="portfolio">
      <motion.div
        className="portfolio-grid"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {portfolioImages.map((src, i) => (
          <motion.div key={i} variants={imageVariants}>
            <img
              src={src}
              alt={`Portfolio image ${i + 1}`}
              className="portfolio-image"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Portfolio;