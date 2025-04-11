
import React from 'react';
import { Droplet, Heart, Users, Award } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label }) => {
  return (
    <div className="flex flex-col items-center p-6 text-center">
      <div className="mb-3 text-blood-600">
        {icon}
      </div>
      <div className="text-3xl font-bold mb-1">{value}</div>
      <div className="text-gray-500">{label}</div>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatItem 
            icon={<Droplet className="h-10 w-10" />} 
            value="10,000+" 
            label="Blood Donations" 
          />
          <StatItem 
            icon={<Heart className="h-10 w-10" />} 
            value="5,000+" 
            label="Lives Saved" 
          />
          <StatItem 
            icon={<Users className="h-10 w-10" />} 
            value="2,500+" 
            label="Registered Donors" 
          />
          <StatItem 
            icon={<Award className="h-10 w-10" />} 
            value="500+" 
            label="Volunteer Members" 
          />
        </div>
      </div>
    </div>
  );
};

export default Stats;
