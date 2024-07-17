"use client"
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

export const ServicesParallax = ({
  products,
}: {
  products: {
    service_name: string;
    description: string;
    icon: string;
  }[];
}) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-550,-50]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="overflow-hidden  antialiased relative  self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div  className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {products.map((product, i: number) => (
            <ProductCard product={product} translate={translateX} key={i} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        The Ultimate <br /> development studio
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing products.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
}: {
  product: {
    service_name: string;
    description: string;
    icon: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      key={product.service_name}
      className=" h-80  relative bg-red-800 max-w-7xl mx-auto"
    >
      <p>
        {product?.description}
      </p>
    </motion.div>
  );
};
