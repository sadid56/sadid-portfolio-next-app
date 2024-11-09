"use client"

import { useFollowPointer } from '@/utils/useFollowPointer';
import React, { useRef } from 'react';
import { motion } from "framer-motion";

const GlowCursor = () => {
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);
    return (
        <motion.div ref={ref} className="cursor" style={{ x, y }} />
    );
};

export default GlowCursor;