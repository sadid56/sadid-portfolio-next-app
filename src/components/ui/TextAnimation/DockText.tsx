import React from "react";
const DockText = ({ text }: { text: string }) => {
  return (
    <h1 className="text-3xl md:text-6xl font-bold pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text leading-none text-transparent dark:from-white dark:to-slate-900/10 text-center font-outfit">
      {text}
    </h1>
  );
};

export default DockText;
