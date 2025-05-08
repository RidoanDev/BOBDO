import React from 'react';
import { Droplet, Clock, CheckCircle, XCircle } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import FormCard from '@/components/FormCard';

const DonateBlood = () => {
  return (
    <div>
      <PageHeader
        title="রক্ত দিন"
        description="আপনার রক্তদান তিনটি জীবন বাঁচাতে পারে। আজই একজন জীবনদাতা হওয়ার প্রথম পদক্ষেপ নিন।"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6">কেন রক্ত দেবেন?</h2>
          <p className="text-gray-700 mb-4">
            রক্ত কৃত্রিমভাবে তৈরি করা যায় না - এটি শুধুমাত্র উদার দাতাদের কাছ
            থেকেই আসে। প্রতিদিন, রক্তদান দুর্ঘটনায় পড়া লোকদের, অস্ত্রোপচার
            করানো রোগীদের, ক্যান্সার ও অন্যান্য রোগের চিকিৎসা নেওয়া ব্যক্তিদের
            জীবন বাঁচাতে সাহায্য করে।
          </p>
          <p className="text-gray-700 mb-4">
            একটি মাত্র গাড়ি দুর্ঘটনার শিকার ব্যক্তির ১০০ ইউনিট পর্যন্ত রক্তের
            প্রয়োজন হতে পারে। আপনার দান নিশ্চিত করতে পারে যে প্রয়োজন হলে রক্ত
            পাওয়া যাবে।
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">দাতার যোগ্যতা</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg flex items-center mb-4">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                সাধারণ প্রয়োজনীয়তা
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    অন্তত ১৭ বছর বয়সী হতে হবে (কিছু এলাকায় পিতামাতার সম্মতিতে
                    ১৬)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>ওজন কমপক্ষে ১১০ পাউন্ড (৫০ কেজি) হতে হবে</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>সাধারণভাবে সুস্থ থাকতে হবে</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    স্বাভাবিক রক্তচাপ, নাড়ি, তাপমাত্রা এবং হিমোগ্লোবিন লেভেল
                    থাকতে হবে
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg flex items-center mb-4">
                <XCircle className="h-5 w-5 text-red-500 mr-2" />
                বিধিনিষেধ
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>সাম্প্রতিক অসুস্থতা বা সংক্রমণ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>গত এক বছরে নির্দিষ্ট কিছু দেশে ভ্রমণ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>নির্দিষ্ট কিছু ওষুধ সেবন</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>নিম্ন হিমোগ্লোবিন লেভেল</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-gray-600 text-center">
            যোগ্যতার প্রয়োজনীয়তা এবং বিধিনিষেধের সম্পূর্ণ তালিকার জন্য, দয়া
            করে আমাদের মেডিকেল স্টাফের সাথে পরামর্শ করুন।
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">
            রক্তদান প্রক্রিয়া
          </h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-shrink-0 flex items-start">
                <div className="bg-blood-100 rounded-full p-3">
                  <span className="text-blood-600 font-bold">১</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">নিবন্ধন</h3>
                <p className="text-gray-600">
                  আপনার ব্যক্তিগত তথ্য এবং চিকিৎসা ইতিহাস সহ দাতা নিবন্ধন ফর্ম
                  পূরণ করুন।
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-shrink-0 flex items-start">
                <div className="bg-blood-100 rounded-full p-3">
                  <span className="text-blood-600 font-bold">২</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  স্বাস্থ্য পরীক্ষা
                </h3>
                <p className="text-gray-600">
                  একজন চিকিৎসা পেশাদার আপনার তাপমাত্রা, রক্তচাপ, নাড়ি এবং
                  হিমোগ্লোবিনের মাত্রা পরীক্ষা করবেন।
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-shrink-0 flex items-start">
                <div className="bg-blood-100 rounded-full p-3">
                  <span className="text-blood-600 font-bold">৩</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">রক্তদান</h3>
                <p className="text-gray-600">
                  প্রকৃত রক্তদান প্রক্রিয়ায় সময় লাগে মাত্র ৮-১০ মিনিট। আপনি
                  আরামে বসে থাকবেন যখন এক পিন্ট রক্ত নেওয়া হবে।
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-shrink-0 flex items-start">
                <div className="bg-blood-100 rounded-full p-3">
                  <span className="text-blood-600 font-bold">৪</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">পুনরুদ্ধার</h3>
                <p className="text-gray-600">
                  দান করার পর, আপনাকে তরল এবং শক্তি পুনরুদ্ধারে সাহায্য করার
                  জন্য হালকা খাবার দেওয়া হবে। চলে যাওয়ার আগে ১০-১৫ মিনিট
                  বিশ্রাম নিন।
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-shrink-0 flex items-start">
                <div className="bg-blood-100 rounded-full p-3">
                  <span className="text-blood-600 font-bold">৫</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  রক্তদানের ফ্রিকোয়েন্সি
                </h3>
                <p className="text-gray-600">
                  আপনি প্রতি ৫৬ দিনে (৮ সপ্তাহ) সম্পূর্ণ রক্ত দান করতে পারেন।
                  পাওয়ার রেড দান প্রতি ১১২ দিনে করা যেতে পারে।
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            রক্ত দিতে প্রস্তুত?
          </h2>
          <div className="max-w-lg mx-auto">
            <FormCard
              title=" রক্তদাতা নিবন্ধন"
              description="এই ফর্মটি পূরণ করে একজন রক্তদাতা হিসেবে নিবন্ধন করুন। আপনার সাথে যোগাযোগ করব।"
              formLink="https://docs.google.com/forms/d/1FDey9PL2Lr0ScHXB1zwXgIzdHSSjpGQQsL24kwQxWqQ/viewform"
              buttonText="রেজিস্ট্রেশন করুন"
              icon={<Droplet className="h-8 w-8" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateBlood;
