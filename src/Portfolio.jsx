import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./styles/Portfolio.css";
import ghostImage from "./assets/ghost.png";



const portfolioImages = [
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740233/colorful.court_6_kxoqcz_xgahnc.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740233/colorful.court_4_e0po4t_xrp6lx.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740247/colorful.court_18_l9qnq0_dnbnrc.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740234/colorful.court_8_gh0con_oxccfk.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740240/colorful.court_gvhity_ezpukt.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740240/colorful.court_2_ggggbc_xxkifw.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740236/colorful.court_39_wmsmvr_wfbch3.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740234/colorful.court_7_i8zifl_sgzze8.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740240/colorful.court_2_wm646o_jfht9j.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740240/colorful.court_45_ovarbk_satbmm.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740234/colorful.court_36_dymhdr_whvzie.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740250/colorful.court_30_ivhv3r_ieqedv.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740237/colorful.court_9_mgjcyr_z1zdyg.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740237/colorful.court_46_h80xyd_xqjspd.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740237/colorful.court_cgli9d_lumzm3.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740235/colorful.court_35_cmwfsg_c0cm3g.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740240/colorful.court_1_ijczjn_eq5fes.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740236/colorful.court_38_msqbn7_gf1qlb.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740236/colorful.court_37_ysppjm_hrtcib.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740237/colorful.court_5_bejhsl_idfbim.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740240/colorful.court_1_xo1itj_vnsix3.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740242/colorful.court_3_ew9a75_n3ydct.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740242/colorful.court_10_d5kvmy_bxcxzt.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740242/colorful.court_13_bwevfl_yu3uyv.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740244/colorful.court_16_e1vrbi_p8flhm.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740244/colorful.court_14_l9pkuv_dz7v81.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740244/colorful.court_15_zozyny_yv53dv.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740244/colorful.court_11_a62isr_iehntr.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740244/colorful.court_12_g1ur1j_pzql7z.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740244/colorful.court_17_utzmi1_sjdql3.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740246/colorful.court_20_ir4foa_hezfdp.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740246/colorful.court_19_flima4_rvrmv0.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740247/colorful.court_23_aldvj2_bvzuq9.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740247/colorful.court_24_afe8c7_nsjtzy.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740247/colorful.court_22_avdn5m_v9yqzb.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740248/colorful.court_25_bmrxk7_jb21z1.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740249/colorful.court_26_jmwiie_paeojv.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740249/colorful.court_21_vk78ex_drg2xh.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740249/colorful.court_27_e3ah6m_rjzrsi.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740249/colorful.court_28_ckaosv_ule8pe.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740251/colorful.court_31_iot22c_x6mhvg.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740251/colorful.court_33_rhbw7n_blk7q9.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740251/colorful.court_34_afifmu_cjffij.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740252/colorful.court_32_oyggcs_tcyeo8.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740292/colorful.court_58_i6kewl_lk2e6g.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740294/colorful.court_47_zuzmvj_pxx9y8.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740294/colorful.court_49_bhuwsy_zbtpzd.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740294/colorful.court_50_rdglix_drkrqs.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740295/colorful.court_48_xxgfeb_solh1p.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740295/colorful.court_51_sgl1jr_odnzul.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740296/colorful.court_54_ibyfaw_ta1cbn.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740296/colorful.court_53_ycnslz_yy5kii.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740296/colorful.court_57_si8qcu_yo0iqt.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740297/colorful.court_55_gkclqm_rplen4.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740297/colorful.court_52_v1m8ey_i98wxf.png",
"https://res.cloudinary.com/dzreztg8a/image/upload/v1749740298/colorful.court_56_dktljm_d7w5vp.png",
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

const shakeVariant = {
  idle: { rotate: 0 },
  shake: {
    rotate: [0, 2, -2, 2, -2, 0],
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const Portfolio = () => {

   const [shakingIndex, setShakingIndex] = useState(null);
   const controls = useAnimation();

  const handleImageClick = async (index) => {
    if (shakingIndex !== null) return; 
    setShakingIndex(index);
    await controls.start("shake");  
    setShakingIndex(null);
    controls.start("idle");          
  };


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
           <motion.img
  src={src}
  alt={`Portfolio image ${i + 1}`}
  className="portfolio-image"
  onClick={() => handleImageClick(i)}
  animate={shakingIndex === i ? controls : "idle"}
  variants={shakeVariant}
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