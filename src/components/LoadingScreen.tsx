import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Activity, Zap } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
    >
      <div className="text-center">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-8 relative"
        >
          <div className="w-24 h-24 mx-auto relative">
            <Brain className="w-24 h-24 text-neon-cyan animate-pulse" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <Activity className="w-6 h-6 text-neon-pink absolute top-0 left-1/2 transform -translate-x-1/2" />
              <Zap className="w-6 h-6 text-neon-green absolute bottom-0 left-1/2 transform -translate-x-1/2" />
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-4xl font-orbitron font-bold mb-4 glitch"
          data-text="NeuralVision"
        >
          NeuralVision
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-xl text-gray-400 mb-8 font-rajdhani"
        >
          Initializing AI Systems<span className="loading-dots"></span>
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="w-64 h-1 bg-gradient-to-r from-neon-cyan via-neon-pink to-neon-green rounded-full mx-auto"
        >
          <motion.div
            animate={{ x: [-20, 284, -20] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-8 h-1 bg-white rounded-full shadow-lg shadow-neon-cyan"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;