
import React from 'react';
import { Calendar, AlertCircle, CheckSquare } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import FormCard from '@/components/FormCard';
import BloodTypeInfo from '@/components/BloodTypeInfo';

const GetBlood = () => {
  return (
    <div>
      <PageHeader 
        title="Get Blood" 
        description="Need blood for yourself or a loved one? We're here to help connect you with the right blood type quickly and efficiently."
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6">How to Request Blood</h2>
          <p className="text-gray-700 mb-4">
            If you or someone you know needs blood, BOBDO is here to help. We work with hospitals and blood banks to ensure that patients receive the blood they need when they need it.
          </p>
          <p className="text-gray-700 mb-4">
            Please note that all blood requests should be made with as much advance notice as possible. For emergency situations, please contact your local hospital directly.
          </p>
        </div>

        <div className="bg-blood-50 rounded-lg p-8 mb-16">
          <div className="flex items-center mb-4 text-blood-600">
            <AlertCircle className="h-6 w-6 mr-2" />
            <h3 className="font-bold text-lg">Emergency Need?</h3>
          </div>
          <p className="text-gray-700 mb-4">
            If you need blood urgently, please contact:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Emergency Hotline: <strong>01722-528164</strong> (Available 24/7)</li>
            <li>Email: <strong>bobdo5800@gmail.com</strong></li>
          </ul>
          <p className="text-gray-700">
            For immediate life-threatening situations, please go directly to the nearest hospital emergency room.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Request Blood</h2>
          <div className="max-w-lg mx-auto">
            <FormCard
              title="Blood Request Form"
              description="Fill out this form with details about the patient and blood type needed. We'll process your request as quickly as possible."
              formLink="https://forms.google.com" 
              buttonText="Request Blood"
              icon={<Calendar className="h-8 w-8" />}
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Requirements for Blood Request</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold text-lg mb-4">Required Information</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckSquare className="h-5 w-5 text-blood-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Patient's full name and age</span>
                </li>
                <li className="flex items-start">
                  <CheckSquare className="h-5 w-5 text-blood-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Blood type and quantity needed</span>
                </li>
                <li className="flex items-start">
                  <CheckSquare className="h-5 w-5 text-blood-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Hospital name and location</span>
                </li>
                <li className="flex items-start">
                  <CheckSquare className="h-5 w-5 text-blood-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Doctor's name and contact information</span>
                </li>
                <li className="flex items-start">
                  <CheckSquare className="h-5 w-5 text-blood-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Date by which blood is needed</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold text-lg mb-4">Required Documents</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckSquare className="h-5 w-5 text-blood-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Doctor's prescription or blood requisition form</span>
                </li>
                <li className="flex items-start">
                  <CheckSquare className="h-5 w-5 text-blood-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Patient's ID proof (or family member's ID)</span>
                </li>
                <li className="flex items-start">
                  <CheckSquare className="h-5 w-5 text-blood-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Hospital admission letter (if applicable)</span>
                </li>
                <li className="flex items-start">
                  <CheckSquare className="h-5 w-5 text-blood-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Blood group report (if available)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Blood Type Compatibility Chart */}
        <BloodTypeInfo />
      </div>
    </div>
  );
};

export default GetBlood;
