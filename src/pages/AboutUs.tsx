import React from 'react';
import { Users, Target, Award, Droplet } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Stats from '@/components/Stats';

const AboutUs = () => {
  return (
    <div>
      <PageHeader 
        title="আমাদের সম্পর্কে"
        description="বগুড়া অনলাইন রক্তদান সংগঠন (BOBDO) এর মিশন, ভিশন এবং সম্প্রদায়ের উপর আমাদের প্রভাব সম্পর্কে আরও জানুন।"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex justify-center mb-12">
            <div className="flex items-center justify-center w-20 h-20 bg-blood-100 rounded-full">
              <Droplet className="h-10 w-10 text-blood-600" />
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-center">আমাদের গল্প</h2>
          <p className="text-gray-700 mb-4">
            বগুড়া অনলাইন রক্তদান সংগঠন (BOBDO) ২০১৬ সালে একটি সহজ মিশন নিয়ে
            প্রতিষ্ঠিত হয়েছিল। আজ আমরা ৬৮ হাজার মানুষের পরিবার।
          </p>
          <p className="text-gray-700 mb-4">
            আমাদের প্রতিষ্ঠাতা, মোঃ সোহেল মিয়া, নিবেদিত স্বেচ্ছাসেবকদের একত্রিত
            করে বিওবিডিও প্রতিষ্ঠা করেন।
          </p>
          <p className="text-gray-700">
            আজ, বিওবিডিও একাধিক রক্তদান কেন্দ্র পরিচালনা করে, নিয়মিত মোবাইল
            ব্লাড ড্রাইভ পরিচালনা করে, ইচ্ছুক দাতাদের ডাটাবেস বজায় রাখে এবং
            রক্তদান সম্পর্কে শিক্ষামূলক সম্পদ প্রদান করে। আমরা আমাদের
            সম্প্রদায়ের পরিবর্তিত চাহিদা পূরণের জন্য ক্রমাগত বৃদ্ধি ও অভিযোজিত
            হচ্ছি।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-blood-50 p-3 rounded-full">
                <Target className="h-8 w-8 text-blood-600" />
              </div>
            </div>
            <h3 className="font-bold text-lg mb-3">আমাদের মিশন</h3>
            <p className="text-gray-600">
              স্বেচ্ছায় রক্তদানের মাধ্যমে আমাদের সম্প্রদায়ের জন্য নিরাপদ,
              পর্যাপ্ত রক্ত সরবরাহ নিশ্চিত করা এবং রক্তদানের গুরুত্ব সম্পর্কে
              সচেতনতা বৃদ্ধি করা।
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-blood-50 p-3 rounded-full">
                <Award className="h-8 w-8 text-blood-600" />
              </div>
            </div>
            <h3 className="font-bold text-lg mb-3">আমাদের ভিশন</h3>
            <p className="text-gray-600">
              এমন একটি বিশ্ব যেখানে প্রত্যেকের প্রয়োজন অনুযায়ী নিরাপদ রক্তে
              প্রবেশাধিকার রয়েছে এবং যেখানে নিয়মিত রক্তদান একটি স্বাস্থ্যকর
              জীবনধারার স্বাভাবিক অংশ হিসেবে গৃহীত হয়।
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-blood-50 p-3 rounded-full">
                <Users className="h-8 w-8 text-blood-600" />
              </div>
            </div>
            <h3 className="font-bold text-lg mb-3">আমাদের মূল্যবোধ</h3>
            <p className="text-gray-600">
              সহানুভূতি, সততা, উৎকর্ষ, শিক্ষা এবং সম্প্রদায় সেবা রক্তদানের
              মাধ্যমে জীবন বাঁচানোর আমাদের সকল প্রচেষ্টাকে পরিচালিত করে।
            </p>
          </div>
        </div>

        <Stats />

        <div className="max-w-4xl mx-auto my-16">
          <h2 className="text-2xl font-bold mb-8 text-center">নেতৃত্ব</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4">
                <h3 className="font-bold text-lg">মোঃ সোহেল মিয়া</h3>
                <p className="text-blood-600 mb-2">প্রতিষ্ঠাতা ও পরিচালক</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4">
                <h3 className="font-bold text-lg">শৈবাল খলিফ ছোটন</h3>
                <p className="text-blood-600 mb-2">প্রধান সমন্বয়ক</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4">
                <h3 className="font-bold text-lg">রাহিদ হাসান</h3>
                <p className="text-blood-600 mb-2">প্রশাসন ও এইচআর প্রধান</p>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4">
                <h3 className="font-bold text-lg">মোঃ আব্দুল আজিজ</h3>
                <p className="text-blood-600 mb-2">হিসাবরক্ষক</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto my-16">
          <h2 className="text-2xl font-bold mb-8 text-center">সমন্বয়কারী</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4">
                <h3 className="font-bold text-lg">জয়া</h3>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4">
                <h3 className="font-bold text-lg">শশী</h3>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4">
                <h3 className="font-bold text-lg">সুলতান</h3>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4">
                <h3 className="font-bold text-lg">মাহি</h3>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4">
                <h3 className="font-bold text-lg">নাঈম</h3>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4">
                <h3 className="font-bold text-lg">সাব্বির</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto my-16">
          <h2 className="text-2xl font-bold mb-8 text-center">আমাদের টিম</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Team member names would go here */}
            <div className="bg-white rounded-lg p-4 shadow flex items-center justify-center h-24">
              <span className="text-gray-400 font-semibold">মতিউর-জয়া</span>
            </div>
            <div className="bg-white rounded-lg p-4 shadow flex items-center justify-center h-24">
              <span className="text-gray-400 font-semibold">
                লাল সবুজ-সাব্বির
              </span>
            </div>
            <div className="bg-white rounded-lg p-4 shadow flex items-center justify-center h-24">
              <span className="text-gray-400 font-semibold">অকুতোভয়-মাহি</span>
            </div>
            <div className="bg-white rounded-lg p-4 shadow flex items-center justify-center h-24">
              <span className="text-gray-400 font-semibold">
                {' '}
                জাগ্রত-সুলতান
              </span>
            </div>
            <div className="bg-white rounded-lg p-4 shadow flex items-center justify-center h-24">
              <span className="text-gray-400 font-semibold">বিজয়-নাঈম</span>
            </div>
            <div className="bg-white rounded-lg p-4 shadow flex items-center justify-center h-24">
              <span className="text-gray-400 font-semibold">
                {' '}
                বীর সেনা-জেরিন
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
