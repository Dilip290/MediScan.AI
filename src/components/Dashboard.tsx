import React from 'react';
import { motion } from 'framer-motion';
import StatsGrid from './StatsGrid';
import ChartSection from './ChartSection';
import ModelPerformance from './ModelPerformance';
import RecentActivity from './RecentActivity';

const Dashboard: React.FC = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="container mx-auto px-6 py-8 relative z-10"
    >
      <div className="mb-8">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-orbitron font-bold mb-2"
        >
          Medical AI Dashboard
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 font-rajdhani text-lg"
        >
          Real-time monitoring of neural network performance and medical image analysis
        </motion.p>
      </div>

      <div className="space-y-8">
        <StatsGrid />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ChartSection />
          <ModelPerformance />
        </div>
        <RecentActivity />
      </div>
    </motion.main>
  );
};

export default Dashboard;