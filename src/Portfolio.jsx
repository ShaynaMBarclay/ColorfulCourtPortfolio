import { motion } from "framer-motion";
import "./styles/Portfolio.css";
import ghostImage from "./assets/ghost.png";



const portfolioImages = [
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748630454/colorful.court_1_ijczjn.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748630455/colorful.court_2_ggggbc.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748630456/colorful.court_gvhity.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882552/colorful.court_46_h80xyd.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882553/colorful.court_43_e4yzod.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882553/colorful.court_45_ovarbk.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882552/colorful.court_50_rdglix.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882553/colorful.court_44_dawtzi.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882559/colorful.court_4_e0po4t.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882559/colorful.court_6_kxoqcz.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882553/colorful.court_42_zt14kl.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882553/colorful.court_41_py90qz.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882558/colorful.court_8_gh0con.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882553/colorful.court_40_drr8ds.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882559/colorful.court_4_e0po4t.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882553/colorful.court_38_msqbn7.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882554/colorful.court_39_wmsmvr.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882554/colorful.court_37_ysppjm.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882554/colorful.court_35_cmwfsg.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882554/colorful.court_36_dymhdr.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882554/colorful.court_34_afifmu.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882554/colorful.court_33_rhbw7n.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882554/colorful.court_32_oyggcs.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882555/colorful.court_31_iot22c.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882559/colorful.court_7_i8zifl.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882555/colorful.court_29_xlr7ay.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882555/colorful.court_27_e3ah6m.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882555/colorful.court_28_ckaosv.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882555/colorful.court_26_jmwiie.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882556/colorful.court_30_ivhv3r.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882556/colorful.court_30_ivhv3r.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882556/colorful.court_24_afe8c7.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882550/colorful.court_53_ycnslz.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882556/colorful.court_23_aldvj2.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882556/colorful.court_22_avdn5m.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882556/colorful.court_21_vk78ex.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882559/colorful.court_4_e0po4t.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882556/colorful.court_20_ir4foa.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882557/colorful.court_19_flima4.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882557/colorful.court_16_e1vrbi.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882557/colorful.court_18_l9qnq0.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882557/colorful.court_14_l9pkuv.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882557/colorful.court_15_zozyny.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882557/colorful.court_17_utzmi1.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882557/colorful.court_13_bwevfl.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882558/colorful.court_12_g1ur1j.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882558/colorful.court_11_a62isr.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882558/colorful.court_10_d5kvmy.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882558/colorful.court_9_mgjcyr.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882559/colorful.court_5_bejhsl.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882560/colorful.court_cgli9d.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882560/colorful.court_1_xo1itj.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882552/colorful.court_49_bhuwsy.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882552/colorful.court_48_xxgfeb.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882552/colorful.court_47_zuzmvj.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882551/colorful.court_52_v1m8ey.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882551/colorful.court_51_sgl1jr.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882550/colorful.court_55_gkclqm.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882550/colorful.court_57_si8qcu.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882550/colorful.court_58_i6kewl.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1748882550/colorful.court_54_ibyfaw.png",
]


const imageVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const generateGhosts = (count) => {
  return Array.from({ length: count }, () => ({
    top: Math.random() * 100 + "vh",
    left: Math.random() * 100 + "vw",
  }));
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
      <motion.img
  src={ghostImage}
  alt="Ghost"
  className="floating-ghost"
  animate={{
    y: [0, -10, 0],
    rotate: [0, 5, -5, 0],
  }}
  transition={{
    repeat: Infinity,
    duration: 4,
    ease: "easeInOut",
  }}
/>
    </div>
  );
};

export default Portfolio;