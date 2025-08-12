import React from 'react';
import { motion } from 'framer-motion';
import { Activity, CheckCircle, AlertTriangle, Clock, User, FileImage } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'diagnosis',
    title: 'Chest X-ray Analysis Completed',
    description: 'Patient ID: #12847 - Normal findings detected',
    time: '2 minutes ago',
    status: 'success',
    icon: CheckCircle,
    user: 'Dr. Sarah Chen'
  },
  {
    id: 2,
    type: 'alert',
    title: 'Potential Pneumonia Detected',
    description: 'Patient ID: #12848 - Requires immediate attention',
    time: '5 minutes ago',
    status: 'warning',
    icon: AlertTriangle,
    user: 'Dr. Michael Rodriguez'
  },
  {
    id: 3,
    type: 'processing',
    title: 'Batch Processing Started',
    description: '127 images queued for analysis',
    time: '12 minutes ago',
    status: 'processing',
    icon: Clock,
    user: 'System'
  },
  {
    id: 4,
    type: 'diagnosis',
    title: 'COVID-19 Screening Complete',
    description: 'Patient ID: #12849 - Negative result',
    time: '18 minutes ago',
    status: 'success',
    icon: CheckCircle,
    user: 'Dr. Emily Watson'
  },
  {
    id: 5,
    type: 'upload',
    title: 'New Images Uploaded',
    description: '45 chest X-rays added to processing queue',
    time: '25 minutes ago',
    status: 'info',
    icon: FileImage,
    user: 'Radiology Dept.'
  }
];

const RecentActivity: React.FC = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'warning': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'processing': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'info': return 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="bg-gray-900/50 backdrop-blur-md rounded-xl p-6 border border-gray-800/50 hover:border-neon-purple/50 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-orbitron font-bold text-neon-purple">
          Recent Activity
        </h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-sm text-gray-400 hover:text-neon-purple transition-colors duration-300 font-rajdhani"
        >
          View All
        </motion.button>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 + index * 0.1 }}
            className="flex items-start space-x-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group"
          >
            <div className={`p-2 rounded-lg border ${getStatusColor(activity.status)}`}>
              <activity.icon className="w-5 h-5" />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-rajdhani font-semibold text-white group-hover:text-neon-purple transition-colors duration-300">
                  {activity.title}
                </h4>
                <span className="text-xs text-gray-500 flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {activity.time}
                </span>
              </div>
              
              <p className="text-sm text-gray-400 mb-2">
                {activity.description}
              </p>
              
              <div className="flex items-center text-xs text-gray-500">
                <User className="w-3 h-3 mr-1" />
                {activity.user}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="mt-6 p-4 bg-gradient-to-r from-neon-purple/10 to-neon-cyan/10 rounded-lg border border-neon-purple/20"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Activity className="w-5 h-5 text-neon-purple" />
            <div>
              <h4 className="font-orbitron font-semibold text-white">
                System Status
              </h4>
              <p className="text-sm text-gray-400">
                All systems operational
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-green-400 font-rajdhani">Online</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RecentActivity;