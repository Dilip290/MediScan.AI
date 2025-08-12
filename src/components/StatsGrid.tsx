import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Brain, TrendingUp, Users, Zap, Shield } from 'lucide-react';

const stats = [
  {
    title: 'Active Models',
    value: '12',
    change: '+2.5%',
    icon: Brain,
    color: 'neon-cyan',
    description: 'Neural networks deployed'
  },
  {
    title: 'Accuracy Rate',
    value: '94.7%',
    change: '+1.2%',
    icon: TrendingUp,
    color: 'neon-green',
    description: 'Average model accuracy'
  },
  {
    title: 'Images Processed',
    value: '15.2K',
    change: '+8.3%',
    icon: Activity,
    color: 'neon-pink',
    description: 'This month'
  },
  {
    title: 'Active Users',
    value: '847',
    change: '+12.1%',
    icon: Users,
    color: 'neon-purple',
    description: 'Medical professionals'
  },
  {
    title: 'Processing Speed',
    value: '2.3s',
    change: '-15.2%',
    icon: Zap,
    color: 'neon-blue',
    description: 'Average analysis time'
  },
  {
    title: 'System Health',
    value: '99.8%',
    change: '+0.1%',
    icon: Shield,
    color: 'neon-green',
    description: 'Uptime this month'
  }
];

const StatsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: `0 10px 30px rgba(0, 255, 255, 0.2)`
          }}
          className="bg-gray-900/50 backdrop-blur-md rounded-xl p-6 border border-gray-800/50 hover:border-neon-cyan/50 transition-all duration-300 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg bg-${stat.color}/10 border border-${stat.color}/20`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}`} />
              </div>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className={`text-sm font-medium px-2 py-1 rounded-full ${
                  stat.change.startsWith('+') 
                    ? 'text-green-400 bg-green-400/10' 
                    : 'text-red-400 bg-red-400/10'
                }`}
              >
                {stat.change}
              </motion.span>
            </div>
            
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="text-2xl font-orbitron font-bold mb-1"
            >
              {stat.value}
            </motion.h3>
            
            <p className="text-gray-400 font-rajdhani font-medium mb-1">
              {stat.title}
            </p>
            
            <p className="text-sm text-gray-500">
              {stat.description}
            </p>
          </div>
          
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default StatsGrid;