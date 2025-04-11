
import React from 'react';
import { Users, Calendar, MessageSquare, Helping, Star } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import FormCard from '@/components/FormCard';

const BeAVolunteer = () => {
  return (
    <div>
      <PageHeader 
        title="Be a Volunteer" 
        description="Join our team of dedicated volunteers and help make a difference in your community through blood donation advocacy."
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6">Why Volunteer with BOBDO?</h2>
          <p className="text-gray-700 mb-4">
            Volunteers are the heart of our organization. Without dedicated volunteers, we couldn't fulfill our mission of ensuring a safe and adequate blood supply for our community. By volunteering with BOBDO, you become part of a team that's literally saving lives.
          </p>
          <p className="text-gray-700 mb-4">
            Whether you have a few hours a month or want to get involved on a regular basis, we have volunteer opportunities that can work with your schedule and interests.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Volunteer Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <Calendar className="h-8 w-8 text-blood-600 mr-3" />
                <h3 className="font-bold text-lg">Blood Drive Assistant</h3>
              </div>
              <p className="text-gray-600">
                Help at blood drives by welcoming donors, assisting with registration, or serving refreshments to donors after they give blood.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <MessageSquare className="h-8 w-8 text-blood-600 mr-3" />
                <h3 className="font-bold text-lg">Community Outreach</h3>
              </div>
              <p className="text-gray-600">
                Spread awareness about blood donation in your community by speaking at events, distributing materials, or staffing information booths.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-blood-600 mr-3" />
                <h3 className="font-bold text-lg">Donor Recruitment</h3>
              </div>
              <p className="text-gray-600">
                Help recruit new donors through phone calls, social media campaigns, or organizing blood drives in your workplace, school, or community.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <Star className="h-8 w-8 text-blood-600 mr-3" />
                <h3 className="font-bold text-lg">Special Events</h3>
              </div>
              <p className="text-gray-600">
                Assist with planning and executing special events, fundraisers, and donor recognition ceremonies.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <MessageCircle className="h-8 w-8 text-blood-600 mr-3" />
                <h3 className="font-bold text-lg">Administrative Support</h3>
              </div>
              <p className="text-gray-600">
                Help with office tasks, such as data entry, making phone calls, or preparing mailings to support our blood donation programs.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <Heart className="h-8 w-8 text-blood-600 mr-3" />
                <h3 className="font-bold text-lg">Blood Donation Advocate</h3>
              </div>
              <p className="text-gray-600">
                Share your own blood donation story and inspire others to donate by becoming an advocate in your social and professional circles.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Benefits of Volunteering</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="bg-blood-100 rounded-full p-2 mr-4 flex-shrink-0">
                <CheckCircle className="h-5 w-5 text-blood-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Make a Real Difference</h3>
                <p className="text-gray-600">Directly contribute to saving lives in your community.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blood-100 rounded-full p-2 mr-4 flex-shrink-0">
                <CheckCircle className="h-5 w-5 text-blood-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Develop New Skills</h3>
                <p className="text-gray-600">Gain valuable experience and skills that can benefit your career.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blood-100 rounded-full p-2 mr-4 flex-shrink-0">
                <CheckCircle className="h-5 w-5 text-blood-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Meet New People</h3>
                <p className="text-gray-600">Connect with others who share your passion for helping others.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blood-100 rounded-full p-2 mr-4 flex-shrink-0">
                <CheckCircle className="h-5 w-5 text-blood-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Community Recognition</h3>
                <p className="text-gray-600">Receive recognition for your volunteer service and contributions.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Become a Volunteer</h2>
          <div className="max-w-lg mx-auto">
            <FormCard
              title="Volunteer Application"
              description="Fill out this form to apply as a volunteer with BOBDO. We'll contact you to discuss how you can get involved based on your interests and availability."
              formLink="https://docs.google.com/forms/d/1r6AHUr2biiREYTnF-Bqb0eK9YINEyPbAk52dqmMcLvc/edit?usp=drivesdk" 
              buttonText="Apply Now"
              icon={<Users className="h-8 w-8" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Define components that might not exist in the lucide-react package
const MessageCircle = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const Heart = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const CheckCircle = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export default BeAVolunteer;
