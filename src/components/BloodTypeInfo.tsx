import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface BloodTypeCardProps {
  type: string;
  canDonateTo: string[];
  canReceiveFrom: string[];
}

const BloodTypeCard: React.FC<BloodTypeCardProps> = ({
  type,
  canDonateTo,
  canReceiveFrom,
}) => {
  return (
    <Card className="h-full shadow hover:shadow-md transition-shadow">
      <CardHeader className="bg-blood-50 border-b">
        <CardTitle className="text-center text-3xl font-bold text-blood-600">
          {type}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-700">দান করতে পারবে:</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {canDonateTo.map((bloodType) => (
                <span
                  key={bloodType}
                  className="bg-blood-100 text-blood-700 px-2 py-1 rounded text-sm"
                >
                  {bloodType}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">গ্রহণ করতে পারবে:</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {canReceiveFrom.map((bloodType) => (
                <span
                  key={bloodType}
                  className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                >
                  {bloodType}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const BloodTypeInfo = () => {
  const bloodTypes = [
    {
      type: 'A+',
      canDonateTo: ['A+', 'AB+'],
      canReceiveFrom: ['A+', 'A-', 'O+', 'O-'],
    },
    {
      type: 'A-',
      canDonateTo: ['A+', 'A-', 'AB+', 'AB-'],
      canReceiveFrom: ['A-', 'O-'],
    },
    {
      type: 'B+',
      canDonateTo: ['B+', 'AB+'],
      canReceiveFrom: ['B+', 'B-', 'O+', 'O-'],
    },
    {
      type: 'B-',
      canDonateTo: ['B+', 'B-', 'AB+', 'AB-'],
      canReceiveFrom: ['B-', 'O-'],
    },
    {
      type: 'AB+',
      canDonateTo: ['AB+'],
      canReceiveFrom: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    {
      type: 'AB-',
      canDonateTo: ['AB+', 'AB-'],
      canReceiveFrom: ['A-', 'B-', 'AB-', 'O-'],
    },
    {
      type: 'O+',
      canDonateTo: ['A+', 'B+', 'AB+', 'O+'],
      canReceiveFrom: ['O+', 'O-'],
    },
    {
      type: 'O-',
      canDonateTo: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      canReceiveFrom: ['O-'],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-center mb-8">
        রক্তের গ্রুপ সামঞ্জস্যতা চার্ট
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {bloodTypes.map((bloodType) => (
          <BloodTypeCard
            key={bloodType.type}
            type={bloodType.type}
            canDonateTo={bloodType.canDonateTo}
            canReceiveFrom={bloodType.canReceiveFrom}
          />
        ))}
      </div>
    </div>
  );
};

export default BloodTypeInfo;
