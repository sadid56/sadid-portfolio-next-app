/* eslint-disable react/no-unescaped-entities */
"use client";
import heroVideo from "../../assets/video/Itachi.mp4";
import useVideoPlayer from "@/hooks/useAutoPlays";

const Hero = () => {
  const videoRef = useVideoPlayer(heroVideo);

  return (
    <header id="home" className="h-screen w-full">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>{" "}
      {/* Overlay */}
      <div className="max-w-7xl mx-auto h-full flex justify-center items-center relative z-10">
        <div className="space-y-5 text-center text-white">
          <h3 className="md:text-9xl font-semibold uppercase">
            I'm <span className="text-primary">Sadid</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
            culpa obcaecati, sunt dolores eos in sapiente a dolor magni eum?
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
