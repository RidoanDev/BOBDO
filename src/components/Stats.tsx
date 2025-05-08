import React from 'react';
import { Droplet, Heart, Users, Award } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label }) => {
  return (
    <div className="flex flex-col items-center p-6 text-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-3 text-blood-600 p-3 bg-blood-50 rounded-full">
        {icon}
      </div>
      <div className="text-3xl font-bold mb-1 text-gray-800">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blood-700">
          আমাদের অর্জন
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatItem
            icon={<Droplet className="h-8 w-8" />}
            value="১০,০০০+"
            label="রক্তদান"
          />
          <StatItem
            icon={<Heart className="h-8 w-8" />}
            value="৫,০০০+"
            label="সংরক্ষিত জীবন"
          />
          <StatItem
            icon={<Users className="h-8 w-8" />}
            value="২,৫০০+"
            label="নিবন্ধিত দাতা"
          />
          <StatItem
            icon={<Award className="h-8 w-8" />}
            value="৫০০+"
            label="স্বেচ্ছাসেবক সদস্য"
          />
        </div>
      </div>
    </div>
  );
};

export default Stats;
