 // Define animation variants as a function to access isEven and isMobile
 export const getTimelineVariants = (isEven: boolean, isMobile: boolean) => ({
  hidden: {
    opacity: 0,
    x: isEven ? (isMobile ? 100 : -100) : 100, // Move left for even, right for odd
    scale: 0.8,  // Start smaller
    rotate: isEven ? (isMobile ? 0 : -10) : isMobile ? 0 : 10,  // Slight rotation to add complexity
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,  // Back to normal size
    rotate: 0,  // No rotation on visible
    transition: {
      type: "spring",  // Use a spring animation for a natural feel
      stiffness: 50,
      damping: 20,
      duration: 0.8,
      ease: "easeInOut",
    },
  },
});