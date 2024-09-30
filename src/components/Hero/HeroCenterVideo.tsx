import {
  useMotionTemplate,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import heroVideo1 from "../../assets/video/itachi-uchiha.1920x1080.mp4";

export const CenterVideo = () => {
  const { scrollY } = useScroll();
  const clip1 = useTransform(scrollY, [0, 1000], [15, 0]);
  const clip2 = useTransform(scrollY, [0, 1000], [85, 100]);
  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  return (
    <motion.div className="sticky top-0 w-full h-screen">
      <motion.video
        muted
        autoPlay
        loop
        style={{ clipPath }}
        className="w-full h-full object-cover"
      >
        <motion.source src={heroVideo1} />
      </motion.video>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
    </motion.div>
  );
};

// import { useScroll, useTransform, motion } from "framer-motion";
// import heroVideo1 from "../../assets/video/itachi-uchiha.1920x1080.mp4";

// export const CenterVideo = () => {
//   const { scrollY } = useScroll();

//   // Transform the scale based on scroll position
//   const scale = useTransform(scrollY, [0, 1000], [0.5, 1]);

//   return (
//     <motion.div className="sticky top-0 w-full h-screen overflow-hidden">
//       {/* Video Container */}
//       <motion.video
//         muted
//         autoPlay
//         loop
//         style={{ scale }}
//         className="w-full h-full object-cover"
//       >
//         <motion.source src={heroVideo1} />
//       </motion.video>
//       <div className="absolute inset-0 bg-black bg-opacity-60" />

//       {/* SVG Mask for Hexagon Shape */}
//       <svg
//         className="absolute top-0 left-0 w-full h-full"
//         viewBox="0 0 100 100"
//         preserveAspectRatio="none"
//       >
//         <defs>
//           <mask id="mask">
//             <rect width="100%" height="100%" fill="white" />
//             {/* Define the hexagonal shape */}
//             <polygon
//               points="50,0 100,25 100,75 50,100 0,75 0,25"
//               fill="black"
//             />
//           </mask>
//         </defs>
//         <rect width="100%" height="100%" mask="url(#mask)" fill="transparent" />
//       </svg>
//     </motion.div>
//   );
// };
