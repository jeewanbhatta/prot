import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
      <MotionLink
        href='/'
        className='w-12 h-12 bg-dark text-light flex items-center justify-center rounded-full font-bold'
        whileHover={{
          background: [
            "#121212",
            "rgba(131,58,1180,1)",
            "rgba(253, 29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}>
        UK
      </MotionLink>
    </div>
  );
};

export default logo;