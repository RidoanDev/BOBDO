
import React from 'react';
import { Heart, Award, CheckCircle, XCircle } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import FormCard from '@/components/FormCard';

const BeADonor = () => {
  return (
    <div>
      <PageHeader 
        title="Be a Donor" 
        description="Join our community of regular blood donors and help save lives throughout the year."
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6">Why Become a Regular Donor?</h2>
          <p className="text-gray-700 mb-4">
            Becoming a regular blood donor is one of the most impactful ways to give back to your community. Regular donors ensure a stable blood supply for patients in need, from accident victims to those battling chronic illnesses.
          </p>
          <p className="text-gray-700 mb-4">
            When you register as a regular donor with BOBDO, you'll receive notifications when your blood type is needed, information about upcoming blood drives, and the satisfaction of knowing you're helping save lives.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Benefits of Regular Donation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="bg-blood-50 p-4 rounded-full inline-block mb-4">
                <Heart className="h-10 w-10 text-blood-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Save Lives</h3>
              <p className="text-gray-600">
                Each donation can save up to three lives. As a regular donor, you could save dozens of lives every year.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="bg-blood-50 p-4 rounded-full inline-block mb-4">
                <CheckCircle className="h-10 w-10 text-blood-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Free Health Check</h3>
              <p className="text-gray-600">
                Before each donation, you receive a mini health check-up, including blood pressure, pulse, and hemoglobin level tests.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="bg-blood-50 p-4 rounded-full inline-block mb-4">
                <Award className="h-10 w-10 text-blood-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Recognition</h3>
              <p className="text-gray-600">
                Regular donors receive recognition for their contributions and become part of our honored donor community.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Donor Eligibility</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg flex items-center mb-4">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                General Requirements
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Be at least 17 years old (16 with parental consent in some areas)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Weigh at least 110 pounds (50 kg)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Be in good general health</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Have normal blood pressure, pulse, temperature, and hemoglobin level</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg flex items-center mb-4">
                <XCircle className="h-5 w-5 text-red-500 mr-2" />
                Restrictions
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Recent illness or infection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Travel to certain countries within the past year</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Certain medications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Low hemoglobin levels</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-gray-600 text-center">
            For a complete list of eligibility requirements and restrictions, please consult with our medical staff.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Register as a Donor</h2>
          <div className="max-w-lg mx-auto">
            <FormCard
              title="Donor Registration"
              description="Fill out this form to register as a regular blood donor. We'll add you to our donor database and contact you when your blood type is needed."
              formLink="https://forms.google.com" 
              buttonText="Register Now"
              icon={<Heart className="h-8 w-8" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeADonor;
