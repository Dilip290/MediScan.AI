import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Database, Zap } from 'lucide-react';

const models = [
  {
    name: 'ResNet18',
    accuracy: 94.7,
    speed: '2.1s',
    status: 'active',
    icon: Brain,
    color: 'neon-cyan'
  },
  {
    name: 'AlexNet',
    accuracy: 89.3,
    speed: '1.8s',
    status: 'active',
    icon: Cpu,
    color: 'neon-green'
  },
  {
    name: 'InceptionV3',
    accuracy: 96.2,
    speed: '3.4s',
    status: 'training',
    icon: Database,
    color: 'neon-pink'
  },
  {
    name: 'Custom CNN',
    accuracy: 91.8,
    speed: '2.7s',
    status: 'idle',
    icon: Zap,
    color: 'neon-purple'
  }
];

const ModelPerformance: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="bg-gray-900/50 backdrop-blur-md rounded-xl p-6 border border-gray-800/50 hover:border-neon-green/50 transition-all duration-300"
    >
      <h3 className="text-xl font-orbitron font-bold mb-6 text-neon-green">
        Model Performance
      </h3>
      
      <div className="space-y-4">
        {models.map((model, index) => (
          <motion.div
            key={model.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg bg-${model.color}/10 border border-${model.color}/20`}>
                  <model.icon className={`w-5 h-5 text-${model.color}`} />
                </div>
                <div>
                  <h4 className="font-orbitron font-semibold text-white">
                    {model.name}
                  </h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    model.status === 'active' 
                      ? 'text-green-400 bg-green-400/10' 
                      : model.status === 'training'
                      ? 'text-yellow-400 bg-yellow-400/10'
                      : 'text-gray-400 bg-gray-400/10'
                  }`}>
                    {model.status}
                  </span>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-lg font-orbitron font-bold text-white">
                  {model.accuracy}%
                </div>
                <div className="text-sm text-gray-400">
                  {model.speed}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full bg-gray-700/50 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${model.accuracy}%` }}
                  transition={{ delay: 1 + index * 0.1, duration: 1 }}
                  className={`h-2 rounded-full bg-gradient-to-r from-${model.color} to-${model.color}/60`}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>0%</span>
                <span>100%</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="mt-6 p-4 bg-gradient-to-r from-neon-cyan/10 to-neon-pink/10 rounded-lg border border-neon-cyan/20"
      >
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-orbitron font-semibold text-white mb-1">
              System Overview
            </h4>
            <p className="text-sm text-gray-400">
              All models operational • GPU utilization: 78%
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-orbitron font-bold text-neon-cyan">
              92.8%
            </div>
            <div className="text-sm text-gray-400">
              Avg. Accuracy
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ModelPerformance;