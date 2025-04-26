'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function TestMotion() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-4 bg-blue-500 text-white rounded"
    >
      Testing framer-motion
    </motion.div>
  );
} 