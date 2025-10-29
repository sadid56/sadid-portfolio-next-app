import Link from "next/link";

const BlogPage = () => {
  return (
    <div className='min-h-screen bg-black flex items-center justify-center'>
      <div className='text-center px-6'>
        {/* Neon heading */}
        <h1 className='text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#03e8f4] via-[#6a5acd] to-[#03e8f4] animate-pulse'>
          Coming Soon
        </h1>

        {/* Subtext */}
        <p className='mt-4 text-lg md:text-xl text-gray-400'>My blogs are on their way! Stay tuned for exciting content.</p>

        {/* Optional CTA button */}
        <Link href={"/"}>
          <button className='mt-6 relative inline-block px-6 py-3 font-medium text-white uppercase tracking-wider rounded-2xl bg-gray-900 overflow-hidden group hover:scale-105 transition-transform duration-300'>
            <span className='relative z-10'>Back Home</span>
            <span className='absolute inset-0 bg-gradient-to-r from-[#03e8f4]/40 via-[#6a5acd]/40 to-[#03e8f4]/40 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-2xl'></span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogPage;
