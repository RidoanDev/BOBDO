import React from 'react';
import { Calendar, AlertCircle, CheckSquare } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import FormCard from '@/components/FormCard';
import BloodTypeInfo from '@/components/BloodTypeInfo';

const GetBlood = () => {
  return (
    <div>
      <PageHeader
        title="রক্তের জন্য আবেদন করুন"
        description="আপনার বা আপনার প্রিয়জনের রক্ত প্রয়োজন? আমরা আপনাকে দ্রুত এবং দক্ষতার সাথে সঠিক রক্তের গ্রুপের সাথে সংযোগ স্থাপনে সহায়তা করি।"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6">
            কিভাবে রক্তের জন্য আবেদন করবেন
          </h2>
          <p className="text-gray-700 mb-4">
            যদি আপনার বা আপনার পরিচিত কারো রক্তের প্রয়োজন হয়, বিওবিডিও
            সাহায্যের জন্য এখানে রয়েছে। আমরা হাসপাতাল এবং ব্লাড ব্যাংকগুলির
            সাথে কাজ করি যাতে রোগীরা প্রয়োজন অনুযায়ী রক্ত পেতে পারেন।
          </p>
          <p className="text-gray-700 mb-4">
            দয়া করে মনে রাখবেন যে সমস্ত রক্তের অনুরোধ যতটা সম্ভব আগে থেকে করা
            উচিত। জরুরি অবস্থার জন্য, সরাসরি আপনার স্থানীয় হাসপাতালে যোগাযোগ
            করুন।
          </p>
        </div>

        <div className="bg-blood-50 rounded-lg p-8 mb-16">
          <div className="flex items-center mb-4 text-blood-600">
            <AlertCircle className="h-6 w-6 mr-2" />
            <h3 className="font-bold text-lg">জরুরি প্রয়োজন?</h3>
          </div>
          <p className="text-gray-700 mb-4">
            যদি আপনার জরুরি ভিত্তিতে রক্তের প্রয়োজন হয়, দয়া করে যোগাযোগ করুন:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              জরুরি হটলাইন: <strong>01722-528164</strong> (২৪/৭ উপলব্ধ)
            </li>
            <li>
              ইমেইল: <strong>bobdo5800@gmail.com</strong>
            </li>
          </ul>
          <p className="text-gray-700">
            জীবন-হুমকির জরুরি অবস্থার জন্য, দয়া করে সরাসরি নিকটতম হাসপাতালের
            জরুরি বিভাগে যান।
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            রক্তের জন্য আবেদন করুন
          </h2>
          <div className="max-w-lg mx-auto">
            <FormCard
              title="রক্তের জন্য আবেদন ফর্ম"
              description="রোগী এবং প্রয়োজনীয় তথ্যসহ নিচের দেওয়া গ্রুপটিতে পোস্ট করুন। ইনশাল্লাহ আপনার রক্তের ব্যবস্থা হয়ে যাবে।"
              formLink="https://www.facebook.com/groups/BOBO.BD/?ref=share&mibextid=NSMWBT"
              buttonText="গ্রুপে পোস্ট করুন"
              icon={<Calendar className="h-8 w-8" />}
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            রক্তের জন্য আবেদনের প্রয়োজনীয় শর্তাবলী
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold text-lg mb-4">প্রয়োজনীয় তথ্য</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckSquare className="h-5 w-5 text-blood-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>রোগীর পূর্ণ নাম এবং বয়স</span>
                </li>
                <li className="flex items-start">
                  <CheckSquare className="h-5 w-5 text-blood-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>রক্তের গ্রুপ এবং প্রয়োজনীয় পরিমাণ</span>
                </li>
                <li className="flex items-start">
                  <CheckSquare className="h-5 w-5 text-blood-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>হাসপাতালের নাম এবং অবস্থান</span>
                </li>
                <li className="flex items-start">
                  <CheckSquare className="h-5 w-5 text-blood-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>ডাক্তারের নাম এবং যোগাযোগের তথ্য</span>
                </li>
                <li className="flex items-start">
                  <CheckSquare className="h-5 w-5 text-blood-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>কোন তারিখের মধ্যে রক্ত প্রয়োজন</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold text-lg mb-4">প্রয়োজনীয় নথিপত্র</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckSquare className="h-5 w-5 text-blood-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>ডাক্তারের প্রেসক্রিপশন বা রক্তের জন্য আবেদন ফর্ম</span>
                </li>
                <li className="flex items-start">
                  <CheckSquare className="h-5 w-5 text-blood-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    রোগীর পরিচয় প্রমাণ (বা পরিবারের সদস্যের পরিচয়পত্র)
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckSquare className="h-5 w-5 text-blood-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>হাসপাতালে ভর্তির চিঠি (যদি প্রযোজ্য)</span>
                </li>
                <li className="flex items-start">
                  <CheckSquare className="h-5 w-5 text-blood-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>রক্তের গ্রুপ রিপোর্ট (যদি থাকে)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* রক্তের গ্রুপ সামঞ্জস্যতা চার্ট */}
        <BloodTypeInfo />
      </div>
    </div>
  );
};

export default GetBlood;
