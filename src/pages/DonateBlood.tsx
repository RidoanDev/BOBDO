
import React from 'react';
import { Droplet, Clock, CheckCircle } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import FormCard from '@/components/FormCard';

const DonateBlood = () => {
  return (
    <div>
      <PageHeader 
        title="Donate Blood" 
        description="Your blood donation can save up to three lives. Take the first step to becoming a lifesaver today."
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6">Why Donate Blood?</h2>
          <p className="text-gray-700 mb-4">
            Blood cannot be manufactured – it can only come from generous donors. Every day, blood donations help save the lives of people who are in accidents, undergoing surgery, receiving treatment for cancer and other diseases.
          </p>
          <p className="text-gray-700 mb-4">
            A single car accident victim can require as many as 100 units of blood. Your donation can help ensure that blood is available when and where it is needed.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Donation Process</h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-shrink-0 flex items-start">
                <div className="bg-blood-100 rounded-full p-3">
                  <span className="text-blood-600 font-bold">1</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Registration</h3>
                <p className="text-gray-600">
                  Fill out the donor registration form with your personal information and medical history.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-shrink-0 flex items-start">
                <div className="bg-blood-100 rounded-full p-3">
                  <span className="text-blood-600 font-bold">2</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Health Check</h3>
                <p className="text-gray-600">
                  A medical professional will check your temperature, blood pressure, pulse, and hemoglobin level.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-shrink-0 flex items-start">
                <div className="bg-blood-100 rounded-full p-3">
                  <span className="text-blood-600 font-bold">3</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Blood Donation</h3>
                <p className="text-gray-600">
                  The actual blood donation takes about 8-10 minutes. You'll be seated comfortably while a pint of blood is drawn.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-shrink-0 flex items-start">
                <div className="bg-blood-100 rounded-full p-3">
                  <span className="text-blood-600 font-bold">4</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Refreshment & Recovery</h3>
                <p className="text-gray-600">
                  After donating, you'll be given refreshments to help replenish your fluids and energy. Rest for 10-15 minutes before leaving.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Ready to Donate?</h2>
          <div className="max-w-lg mx-auto">
            <FormCard
              title="Blood Donation Appointment"
              description="Schedule your blood donation appointment by filling out this form. We'll contact you to confirm the date and time."
              formLink="https://forms.google.com" 
              buttonText="Schedule Appointment"
              icon={<Droplet className="h-8 w-8" />}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow p-6">
            <Clock className="h-10 w-10 text-blood-600 mb-4" />
            <h3 className="font-bold text-lg mb-2">Donation Time</h3>
            <p className="text-gray-600">
              The entire process takes about 1 hour, with the actual blood donation taking only 8-10 minutes.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <CheckCircle className="h-10 w-10 text-blood-600 mb-4" />
            <h3 className="font-bold text-lg mb-2">Eligibility</h3>
            <p className="text-gray-600">
              Most people aged 17 and older who weigh at least 110 pounds and are in good health can donate blood.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <Droplet className="h-10 w-10 text-blood-600 mb-4" />
            <h3 className="font-bold text-lg mb-2">Donation Frequency</h3>
            <p className="text-gray-600">
              You can donate whole blood every 56 days (8 weeks). Power Red donations can be made every 112 days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateBlood;
