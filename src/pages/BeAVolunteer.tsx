import React from 'react';
import { Users, Calendar, MessageSquare, Helping, Star } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import FormCard from '@/components/FormCard';

const BeAVolunteer = () => {
  return (
    <div>
      <PageHeader
        title="স্বেচ্ছাসেবক হোন"
        description="রক্তদান প্রচারে আমাদের নিবেদিত স্বেচ্ছাসেবক দলের সাথে যুক্ত হয়ে আপনার সম্প্রদায়ের পরিবর্তনে সহায়তা করুন।"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6">
            কেন বগুড়া অনলাইন রক্তদান সংগঠন (BOBDO) এর সাথে কাজ করবেন ?
          </h2>
          <p className="text-gray-700 mb-4">
            স্বেচ্ছাসেবকরা আমাদের সংস্থার হৃদয়। নিবেদিত স্বেচ্ছাসেবক ছাড়া আমরা
            আমাদের সম্প্রদায়ের জন্য নিরাপদ ও পর্যাপ্ত রক্ত সরবরাহ নিশ্চিত করার
            আমাদের মিশন পূরণ করতে পারতাম না। বিওবিডিওর সাথে স্বেচ্ছাসেবক হিসেবে
            আপনি এমন একটি দলের অংশ হবেন যারা আক্ষরিক অর্থেই জীবন বাঁচাচ্ছে।
          </p>
          <p className="text-gray-700 mb-4">
            আপনি মাসে কয়েক ঘন্টা সময় দিতে চান নাকি নিয়মিতভাবে জড়িত হতে চান,
            আমরা আপনার সময়সূচী এবং আগ্রহের সাথে মিল রেখে স্বেচ্ছাসেবক সুযোগ
            প্রদান করি।
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            স্বেচ্ছাসেবক সুযোগ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <Calendar className="h-8 w-8 text-blood-600 mr-3" />
                <h3 className="font-bold text-lg">রক্তদান শিবির সহকারী</h3>
              </div>
              <p className="text-gray-600">
                রক্তদান শিবিরে দাতাদের স্বাগত জানিয়ে, নিবন্ধনে সহায়তা করে অথবা
                রক্তদানের পর দাতাদের জন্য হালকা খাবার পরিবেশন করে সহায়তা করুন।
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <MessageSquare className="h-8 w-8 text-blood-600 mr-3" />
                <h3 className="font-bold text-lg">সম্প্রদায় সম্প্রসারণ</h3>
              </div>
              <p className="text-gray-600">
                ইভেন্টে কথা বলে, উপকরণ বিতরণ করে অথবা তথ্য বুথ পরিচালনা করে
                আপনার সম্প্রদায়ে রক্তদান সম্পর্কে সচেতনতা ছড়িয়ে দিন।
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-blood-600 mr-3" />
                <h3 className="font-bold text-lg">দাতা সংগ্রহ</h3>
              </div>
              <p className="text-gray-600">
                ফোন কল, সোশ্যাল মিডিয়া প্রচারণা অথবা আপনার কর্মস্থল, স্কুল বা
                সম্প্রদায়ে রক্তদান শিবির আয়োজন করে নতুন দাতা সংগ্রহে সহায়তা
                করুন।
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <Star className="h-8 w-8 text-blood-600 mr-3" />
                <h3 className="font-bold text-lg">বিশেষ অনুষ্ঠান</h3>
              </div>
              <p className="text-gray-600">
                বিশেষ ইভেন্ট, তহবিল সংগ্রহ এবং দাতা স্বীকৃতি অনুষ্ঠান পরিকল্পনা
                ও বাস্তবায়নে সহায়তা করুন।
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <MessageCircle className="h-8 w-8 text-blood-600 mr-3" />
                <h3 className="font-bold text-lg">প্রশাসনিক সহায়তা</h3>
              </div>
              <p className="text-gray-600">
                অফিসের কাজে সহায়তা করুন, যেমন ডেটা এন্ট্রি, ফোন কল করা অথবা
                আমাদের রক্তদান কর্মসূচী সমর্থনের জন্য মেইল প্রস্তুত করা।
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <Heart className="h-8 w-8 text-blood-600 mr-3" />
                <h3 className="font-bold text-lg">রক্তদান প্রচারক</h3>
              </div>
              <p className="text-gray-600">
                আপনার নিজের রক্তদানের গল্প শেয়ার করুন এবং আপনার সামাজিক ও
                পেশাদার মহলে একজন প্রচারক হয়ে অন্যদের রক্তদানে অনুপ্রাণিত করুন।
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">
            স্বেচ্ছাসেবক হওয়ার সুবিধা
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="bg-blood-100 rounded-full p-2 mr-4 flex-shrink-0">
                <CheckCircle className="h-5 w-5 text-blood-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">প্রকৃত পরিবর্তন আনুন</h3>
                <p className="text-gray-600">
                  সরাসরি আপনার সম্প্রদায়ে জীবন বাঁচাতে অবদান রাখুন।
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blood-100 rounded-full p-2 mr-4 flex-shrink-0">
                <CheckCircle className="h-5 w-5 text-blood-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">নতুন দক্ষতা অর্জন করুন</h3>
                <p className="text-gray-600">
                  আপনার ক্যারিয়ারের জন্য উপযোগী মূল্যবান অভিজ্ঞতা ও দক্ষতা
                  অর্জন করুন।
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blood-100 rounded-full p-2 mr-4 flex-shrink-0">
                <CheckCircle className="h-5 w-5 text-blood-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">
                  নতুন মানুষদের সাথে পরিচিত হোন
                </h3>
                <p className="text-gray-600">
                  অন্যদের সাহায্য করার আপনার আবেগ শেয়ার করেন এমন অন্যান্যদের
                  সাথে সংযুক্ত হোন।
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blood-100 rounded-full p-2 mr-4 flex-shrink-0">
                <CheckCircle className="h-5 w-5 text-blood-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">সম্প্রদায় স্বীকৃতি</h3>
                <p className="text-gray-600">
                  আপনার স্বেচ্ছাসেবক সেবা ও অবদানের জন্য স্বীকৃতি পান।
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            স্বেচ্ছাসেবক হোন
          </h2>
          <div className="max-w-lg mx-auto">
            <FormCard
              title="স্বেচ্ছাসেবক আবেদন"
              description="বগুড়া অনলাইন রক্তদান সংগঠন (BOBDO) এর সাথে স্বেচ্ছাসেবক হিসেবে আবেদন করতে এই ফর্মটি পূরণ করুন। আমরা আপনার আগ্রহ এবং উপলব্ধতার ভিত্তিতে আপনি কীভাবে জড়িত হতে পারেন তা নিয়ে আলোচনা করতে আপনার সাথে যোগাযোগ করব।"
              formLink="https://docs.google.com/forms/d/1r6AHUr2biiREYTnF-Bqb0eK9YINEyPbAk52dqmMcLvc/edit?usp=drivesdk"
              buttonText="এখনই আবেদন করুন"
              icon={<Users className="h-8 w-8" />}
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6">
            স্বেচ্ছাসেবকদের জন্য সাধারণ নিয়মাবলীঃ
          </h2>
          <p className="text-gray-700 mb-4">
            ১।যেহেতু সংগঠনটি অলাভজনক তাই সদস্য দের প্রদত্ত সকল প্রকার চাঁদা
            অফেরতযোগ্য এবং তা দান বলিয়া গণ্য হবে।
          </p>
          <p className="text-gray-700 mb-4">
            ২।সংগঠনের প্রত্যেক মিটিংয়ে আন্তরিকতার সাতে উপস্তিত থাকতে হবে। পর পর
            ৩টি মিটিং এ পরিচালক বা দায়িত্বরত ব্যক্তির অনুমিত ব্যতীত অনুপস্থিত
            থাকলে সদস্য পদ বাতিল বলে গণ্য হবে তবে ব্যাবসা, চাকরি,পারিবারিক
            সমস্যা থাকলে দায়িত্বরত কাওকে যানাবেন ।
          </p>
          <p className="text-gray-700 mb-4">
            ৩। নিয়মিত মাসিক চাদা পরিশোধ করতে হবে । কোন সদস্যের পর পর চার মাসের
            চাঁদা বাকি থাকলে উক্ত সদস্যের সদস্য বাতিল করা হবে ।
          </p>
          <p className="text-gray-700 mb-4">
            ৪।রাষ্ট্র, সমাজ,সংগঠন ও নৈতিকতা বিরোধী কাজের সাথে কোন সদস্য জড়িত
            থাকলে তাকে সংগঠন হতে অব্যাহতি প্রদান করা হবে।
          </p>
          <p className="text-gray-700 mb-4">
            ৫।সংগঠনকে সকলপ্রকার রাজনৈতিক প্রভাব হতে মুক্ত রাখতে সদস্যদের সংঘবদ্ধ
            থাকতে হবে।
          </p>
          <p className="text-gray-700 mb-4">
            ৬।সদস্যকে সংগঠনের সকল নিয়ম মেনে চলতে হবে কোন নিয়ম ভঙ্গ করলে নিয়ম
            ভঙ্গকারীর সদস্যপদ বাতিল বলে গণ্য হবে।
          </p>
          <p className="text-gray-700 mb-4">
            ৭। আমাদের কাজ যেহেতু অনলাইন ভিত্তিক তাই প্রতিটা সদস্যা কে আমাদের
            গ্রুপে প্রতি মাসে কমপক্ষে ৩টি পোস্ট করতে হবে ।
          </p>
          <p className="text-gray-700 mb-4">
            ৮। কোন সদস্য সংগঠনের অব্যন্তরীন ব্যাক্তিগত সম্পর্কে লিপ্ত হতে পারবে
            না । যদি কেও ব্যাক্তিগত সম্পর্কে লিপ্ত হলে সংগঠন তার বিরূদ্ধে যথাযথ
            ব্যবস্থা গ্রহণ করবে।
          </p>
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
    <path d="M21 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
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
