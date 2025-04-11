import React from 'react';
import { Users, Target, Award, Droplet } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Stats from '@/components/Stats';

const AboutUs = () => {
  return (
    <div>
      <PageHeader
        title="About Us"
        description="Learn more about BOBDO's mission, vision, and the impact we're making in the community."
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex justify-center mb-12">
            <div className="flex items-center justify-center w-20 h-20 bg-blood-100 rounded-full">
              <Droplet className="h-10 w-10 text-blood-600" />
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-center">Our Story</h2>
          <p className="text-gray-700 mb-4">
            BOBDO (Bogura Online Blood Donation Organisation) was founded in
            2016 with a simple mission: to ensure that no one dies due to lack
            of access to safe blood. What started as a small group of volunteers
            organizing local blood drives has grown into a comprehensive blood
            management organization serving thousands of people each year.
          </p>
          <p className="text-gray-700 mb-4">
            Our founder, Md Shohel Miaea, brought together medical
            professionals, community leaders, and dedicated volunteers to
            establish BOBDO.
          </p>
          <p className="text-gray-700">
            Today, BOBDO operates multiple blood donation centers, conducts
            regular mobile blood drives, maintains a database of willing donors,
            and provides educational resources about blood donation. We continue
            to grow and adapt to meet the evolving needs of our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-blood-50 p-3 rounded-full">
                <Target className="h-8 w-8 text-blood-600" />
              </div>
            </div>
            <h3 className="font-bold text-lg mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To ensure a safe, adequate blood supply for our community through
              voluntary donations and to promote awareness about the importance
              of blood donation.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-blood-50 p-3 rounded-full">
                <Award className="h-8 w-8 text-blood-600" />
              </div>
            </div>
            <h3 className="font-bold text-lg mb-3">Our Vision</h3>
            <p className="text-gray-600">
              A world where everyone has access to safe blood when needed, and
              where regular blood donation is embraced as a normal part of a
              healthy lifestyle.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-blood-50 p-3 rounded-full">
                <Users className="h-8 w-8 text-blood-600" />
              </div>
            </div>
            <h3 className="font-bold text-lg mb-3">Our Values</h3>
            <p className="text-gray-600">
              Compassion, integrity, excellence, education, and community
              service guide all our efforts to save lives through blood
              donation.
            </p>
          </div>
        </div>

        <Stats />

import React from 'react';
import { Users, Target, Award, Droplet } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Stats from '@/components/Stats';

const AboutUs = () => {
  return (
    <div>
      <PageHeader
        title="About Us"
        description="Learn more about BOBDO's mission, vision, and the impact we're making in the community."
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex justify-center mb-12">
            <div className="flex items-center justify-center w-20 h-20 bg-blood-100 rounded-full">
              <Droplet className="h-10 w-10 text-blood-600" />
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-center">Our Story</h2>
          <p className="text-gray-700 mb-4">
            BOBDO (Bogura Online Blood Donation Organisation) was founded in
            2016 with a simple mission: to ensure that no one dies due to lack
            of access to safe blood. What started as a small group of volunteers
            organizing local blood drives has grown into a comprehensive blood
            management organization serving thousands of people each year.
          </p>
          <p className="text-gray-700 mb-4">
            Our founder, Md Shohel Miaea, brought together medical
            professionals, community leaders, and dedicated volunteers to
            establish BOBDO.
          </p>
          <p className="text-gray-700">
            Today, BOBDO operates multiple blood donation centers, conducts
            regular mobile blood drives, maintains a database of willing donors,
            and provides educational resources about blood donation. We continue
            to grow and adapt to meet the evolving needs of our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-blood-50 p-3 rounded-full">
                <Target className="h-8 w-8 text-blood-600" />
              </div>
            </div>
            <h3 className="font-bold text-lg mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To ensure a safe, adequate blood supply for our community through
              voluntary donations and to promote awareness about the importance
              of blood donation.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-blood-50 p-3 rounded-full">
                <Award className="h-8 w-8 text-blood-600" />
              </div>
            </div>
            <h3 className="font-bold text-lg mb-3">Our Vision</h3>
            <p className="text-gray-600">
              A world where everyone has access to safe blood when needed, and
              where regular blood donation is embraced as a normal part of a
              healthy lifestyle.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-blood-50 p-3 rounded-full">
                <Users className="h-8 w-8 text-blood-600" />
              </div>
            </div>
            <h3 className="font-bold text-lg mb-3">Our Values</h3>
            <p className="text-gray-600">
              Compassion, integrity, excellence, education, and community
              service guide all our efforts to save lives through blood
              donation.
            </p>
          </div>
        </div>

        <Stats />

        <div className="max-w-4xl mx-auto my-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4">
                <h3 className="font-bold text-lg">Md Shohel Miaea</h3>
                <p className="text-blood-600 mb-2">Founder & Director</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4">
                <h3 className="font-bold text-lg">Saibal Khalif Choton</h3>
                <p className="text-blood-600 mb-2">Chief Coordinator</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4">
                <h3 className="font-bold text-lg">Rahid Hassan</h3>
                <p className="text-blood-600 mb-2">Head of Admin & HR</p>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4">
                <h3 className="font-bold text-lg">Md Abdul Aziz</h3>
                <p className="text-blood-600 mb-2">Accountant</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto my-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Co-ordinators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4">
                <h3 className="font-bold text-lg">Zoya</h3>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4">
                <h3 className="font-bold text-lg">Shoshi</h3>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4">
                <h3 className="font-bold text-lg">Sultan</h3>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4">
                <h3 className="font-bold text-lg">Mahi</h3>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4">
                <h3 className="font-bold text-lg">Nayem</h3>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4">
                <h3 className="font-bold text-lg">Sabbir</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto my-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Team member names would go here */}
            <div className="bg-white rounded-lg p-4 shadow flex items-center justify-center h-24">
              <span className="text-gray-400 font-semibold">মতিউর-Zoya</span>
            </div>
            <div className="bg-white rounded-lg p-4 shadow flex items-center justify-center h-24">
              <span className="text-gray-400 font-semibold">
                লাল সবুজ-Sabbir
              </span>
            </div>
            <div className="bg-white rounded-lg p-4 shadow flex items-center justify-center h-24">
              <span className="text-gray-400 font-semibold">অকুতোভয়-Mahi</span>
            </div>
            <div className="bg-white rounded-lg p-4 shadow flex items-center justify-center h-24">
              <span className="text-gray-400 font-semibold">
                {' '}
                জাগ্রত-Sultan
              </span>
            </div>
            <div className="bg-white rounded-lg p-4 shadow flex items-center justify-center h-24">
              <span className="text-gray-400 font-semibold">বিজয়-Nayem</span>
            </div>
            <div className="bg-white rounded-lg p-4 shadow flex items-center justify-center h-24">
              <span className="text-gray-400 font-semibold">
                {' '}
                বীর সেনা-Zerin
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;


        <div className="max-w-4xl mx-auto my-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Team member names would go here */}
            <div className="bg-white rounded-lg p-4 shadow flex items-center justify-center h-24">
              <span className="text-gray-400 font-semibold">Team 1</span>
            </div>
            <div className="bg-white rounded-lg p-4 shadow flex items-center justify-center h-24">
              <span className="text-gray-400 font-semibold">Team 2</span>
            </div>
            <div className="bg-white rounded-lg p-4 shadow flex items-center justify-center h-24">
              <span className="text-gray-400 font-semibold">Team 3</span>
            </div>
            <div className="bg-white rounded-lg p-4 shadow flex items-center justify-center h-24">
              <span className="text-gray-400 font-semibold">Team 4</span>
            </div>
            <div className="bg-white rounded-lg p-4 shadow flex items-center justify-center h-24">
              <span className="text-gray-400 font-semibold">Team 5</span>
            </div>
            <div className="bg-white rounded-lg p-4 shadow flex items-center justify-center h-24">
              <span className="text-gray-400 font-semibold">Team 6</span>
            </div>
            <div className="bg-white rounded-lg p-4 shadow flex items-center justify-center h-24">
              <span className="text-gray-400 font-semibold">Team 7</span>
            </div>
            <div className="bg-white rounded-lg p-4 shadow flex items-center justify-center h-24">
              <span className="text-gray-400 font-semibold">Team 8</span>
            </div>
            <div className="bg-white rounded-lg p-4 shadow flex items-center justify-center h-24">
              <span className="text-gray-400 font-semibold">Team 9</span>
            </div>
            <div className="bg-white rounded-lg p-4 shadow flex items-center justify-center h-24">
              <span className="text-gray-400 font-semibold">Team 10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
