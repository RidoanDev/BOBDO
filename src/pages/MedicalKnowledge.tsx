import React from 'react';
import {
  BookOpen,
  Droplet,
  Heart,
  ThumbsUp,
  AlertCircle,
  Bandage,
  HeartPulse,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import BloodTypeInfo from '@/components/BloodTypeInfo';

const MedicalKnowledge = () => {
  return (
    <div>
      <PageHeader
        title="চিকিৎসা জ্ঞান"
        description="রক্তদান, ফার্স্ট এইড, সিপিআর এবং আপনার জ্ঞান কিভাবে জীবন বাঁচাতে সাহায্য করতে পারে সে সম্পর্কে জানুন।"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex items-center justify-center mb-8">
            <BookOpen className="h-8 w-8 text-blood-600 mr-3" />
            <h2 className="text-2xl font-bold">রক্তদানের মৌলিক বিষয়</h2>
          </div>

          <div className="prose max-w-none text-gray-700">
            <p>
              রক্তদান একটি গুরুত্বপূর্ণ প্রক্রিয়া যা প্রতি বছর লক্ষাধিক জীবন
              বাঁচাতে সাহায্য করে। দান করা রক্ত বিভিন্ন চিকিৎসা, অস্ত্রোপচার এবং
              জরুরি অবস্থায় ব্যবহার করা হয়। রক্তদানের মৌলিক বিষয়গুলি বোঝা
              উদ্বেগ কমাতে এবং আরও বেশি মানুষকে রক্ত দিতে উৎসাহিত করতে পারে।
            </p>

            <h3 className="font-bold text-xl mt-8 mb-4">রক্ত কি দিয়ে তৈরি?</h3>
            <p>
              রক্ত বিভিন্ন উপাদান নিয়ে গঠিত, যার প্রতিটির একটি নির্দিষ্ট কাজ
              রয়েছে:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>লাল রক্ত কণিকা:</strong> ফুসফুস থেকে শরীরের বাকি অংশে
                অক্সিজেন বহন করে
              </li>
              <li>
                <strong>শ্বেত রক্ত কণিকা:</strong> সংক্রমণ এবং রোগের বিরুদ্ধে
                লড়াই করতে সাহায্য করে
              </li>
              <li>
                <strong>প্লেটলেট:</strong> রক্ত জমাট বাঁধতে সাহায্য করে যাতে
                অতিরিক্ত রক্তপাত প্রতিরোধ হয়
              </li>
              <li>
                <strong>প্লাজমা:</strong> রক্তের তরল অংশ যা কোষ এবং পুষ্টি বহন
                করে
              </li>
            </ul>

            <h3 className="font-bold text-xl mt-8 mb-4">রক্তদানের প্রকারভেদ</h3>
            <p>
              বিভিন্ন ধরনের রক্তদান রয়েছে, প্রতিটি ভিন্ন উপাদান সংগ্রহ করে:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>সম্পূর্ণ রক্তদান:</strong> সবচেয়ে সাধারণ ধরন, রক্তের
                সমস্ত উপাদান সংগ্রহ করে
              </li>
              <li>
                <strong>প্লেটলেট দান:</strong> শুধুমাত্র প্লেটলেট সংগ্রহ করে, যা
                রক্ত জমাট বাঁধার জন্য অপরিহার্য
              </li>
              <li>
                <strong>প্লাজমা দান:</strong> প্লাজমা সংগ্রহ করে, যা বিভিন্ন
                অবস্থার চিকিৎসায় ব্যবহৃত হয়
              </li>
              <li>
                <strong>ডাবল রেড সেল দান:</strong> শুধুমাত্র লাল রক্ত কণিকা
                দ্বিগুণ পরিমাণে সংগ্রহ করে
              </li>
            </ul>
          </div>
        </div>

        {/* ফার্স্ট এইড জ্ঞান সেকশন */}
        <div className="max-w-4xl mx-auto my-16">
          <div className="flex items-center justify-center mb-8">
            <Bandage className="h-8 w-8 text-blood-600 mr-3" />
            <h2 className="text-2xl font-bold">ফার্স্ট এইড জ্ঞান</h2>
          </div>

          <div className="prose max-w-none text-gray-700">
            <p>
              ফার্স্ট এইড হল আহত বা হঠাৎ অসুস্থ ব্যক্তিকে প্রদত্ত তাৎক্ষণিক
              যত্ন। বেসিক ফার্স্ট এইড জ্ঞান একজন ব্যক্তিকে স্থিতিশীল করতে
              সাহায্য করতে পারে যতক্ষণ না পেশাদার চিকিৎসা সহায়তা আসে।
            </p>

            <h3 className="font-bold text-xl mt-8 mb-4">
              বেসিক ফার্স্ট এইড পদ্ধতি
            </h3>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h4 className="font-bold text-lg mb-3">১. কাটা এবং ছড়াছড়ি</h4>
              <ol className="list-decimal ml-6 space-y-2">
                <li>হাত ধুয়ে নিন এবং সম্ভব হলে গ্লাভস পরুন</li>
                <li>হালকা সাবান এবং পানি দিয়ে ক্ষত পরিষ্কার করুন</li>
                <li>
                  রক্তপাত বন্ধ করতে একটি পরিষ্কার কাপড় দিয়ে আলতো করে চাপ দিন
                </li>
                <li>অ্যান্টিবায়োটিক মলম প্রয়োগ করুন</li>
                <li>একটি স্টেরাইল ব্যান্ডেজ বা ড্রেসিং দিয়ে ঢেকে দিন</li>
                <li>
                  ড্রেসিং প্রতিদিন পরিবর্তন করুন এবং সংক্রমণের লক্ষণ দেখুন
                </li>
              </ol>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h4 className="font-bold text-lg mb-3">২. পোড়া</h4>
              <ol className="list-decimal ml-6 space-y-2">
                <li>
                  ১০-১৫ মিনিটের জন্য ঠান্ডা (বরফ ঠান্ডা নয়) চলমান পানির নিচে
                  পোড়া অংশ ঠান্ডা করুন
                </li>
                <li>পোড়া অংশের কাছে গহনা বা টাইট পোশাক সরিয়ে ফেলুন</li>
                <li>ফোসকা ভাঙবেন না</li>
                <li>
                  ছোট পোড়ার জন্য অ্যালোভেরা বা ময়েশ্চারাইজার প্রয়োগ করুন
                </li>
                <li>
                  একটি স্টেরাইল, নন-অ্যাডহেসিভ ব্যান্ডেজ বা পরিষ্কার কাপড় দিয়ে
                  ঢেকে দিন
                </li>
                <li>
                  গুরুতর পোড়ার জন্য (বড় এলাকা, গভীর, বা মুখ/হাতে) চিকিৎসা
                  সহায়তা নিন
                </li>
              </ol>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h4 className="font-bold text-lg mb-3">
                ৩. শ্বাসরোধ (হেইমলিক ম্যানুভার)
              </h4>
              <ol className="list-decimal ml-6 space-y-2">
                <li>
                  জিজ্ঞাসা করুন "আপনি কি শ্বাসরোধ হচ্ছেন?" যদি তারা কাশি দিতে বা
                  কথা বলতে পারে, হস্তক্ষেপ করবেন না
                </li>
                <li>
                  ব্যক্তির পিছনে দাঁড়ান এবং আপনার বাহু দিয়ে তাদের কোমর জড়িয়ে
                  ধরুন
                </li>
                <li>এক হাতে মুষ্টি বানান এবং নাভির ঠিক উপরে রাখুন</li>
                <li>
                  আপনার অন্য হাত দিয়ে মুষ্টি ধরে দ্রুত উপরের দিকে ধাক্কা দিন
                </li>
                <li>
                  বস্তু বের না হওয়া বা ব্যক্তি অচেতন না হওয়া পর্যন্ত চালিয়ে
                  যান
                </li>
                <li>অচেতন রোগীদের জন্য, সিপিআর শুরু করুন</li>
              </ol>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-lg mb-3">
                ৪. হাড় ভাঙা এবং মচকানো
              </h4>
              <ol className="list-decimal ml-6 space-y-2">
                <li>আহত স্থানকে স্থির করুন</li>
                <li>
                  ফোলা কমাতে একটি কাপড়ে মোড়ানো বরফ প্রয়োগ করুন (২০ মিনিট
                  লাগান, ২০ মিনিট বন্ধ)
                </li>
                <li>সম্ভব হলে আহত অঙ্গটি উঁচু করুন</li>
                <li>
                  পেশাদার সহায়তা বিলম্বিত হলে ফ্র্যাকচারের জন্য স্প্লিন্ট
                  ব্যবহার করুন
                </li>
                <li>সন্দেহজনক ফ্র্যাকচারের জন্য চিকিৎসা সহায়তা নিন</li>
              </ol>
            </div>
          </div>
        </div>

        {/* সিপিআর জ্ঞান সেকশন */}
        <div className="max-w-4xl mx-auto my-16">
          <div className="flex items-center justify-center mb-8">
            <HeartPulse className="h-8 w-8 text-blood-600 mr-3" />
            <h2 className="text-2xl font-bold">সিপিআর জ্ঞান</h2>
          </div>

          <div className="prose max-w-none text-gray-700">
            <p>
              কার্ডিওপালমোনারি রিসাসিটেশন (সিপিআর) একটি জীবন রক্ষাকারী কৌশল যা
              কারও শ্বাস বা হৃদস্পন্দন বন্ধ হয়ে গেলে ব্যবহার করা হয়। তাৎক্ষণিক
              সিপিআর কার্ডিয়াক অ্যারেস্টের পর বেঁচে থাকার সম্ভাবনা দ্বিগুণ বা
              তিনগুণ করতে পারে।
            </p>

            <h3 className="font-bold text-xl mt-8 mb-4">
              প্রাপ্তবয়স্ক সিপিআর ধাপ (CAB সিকোয়েন্স)
            </h3>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h4 className="font-bold text-lg mb-3">
                ১. দৃশ্য এবং ব্যক্তিটি পরীক্ষা করুন
              </h4>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  আপনার কাছে যাওয়ার জন্য দৃশ্যটি নিরাপদ কিনা তা নিশ্চিত করুন
                </li>
                <li>
                  ব্যক্তির কাঁধে ট্যাপ করুন এবং জিজ্ঞাসা করুন "আপনি ঠিক আছেন?"
                </li>
                <li>
                  স্বাভাবিক শ্বাস-প্রশ্বাসের জন্য পরীক্ষা করুন (দেখুন, শুনুন,
                  অনুভব করুন)
                </li>
                <li>
                  যদি সাড়া না দেয় এবং স্বাভাবিকভাবে শ্বাস-প্রশ্বাস না নেয়,
                  জরুরি সেবা কল করুন
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h4 className="font-bold text-lg mb-3">
                ২. বুকে চাপ দেওয়া শুরু করুন (C)
              </h4>
              <ol className="list-decimal ml-6 space-y-2">
                <li>এক হাতের তালু বুকের মাঝখানে রাখুন (স্তনের মাঝখানে)</li>
                <li>অন্য হাতটি উপরে রাখুন এবং আঙ্গুলগুলি আটকান</li>
                <li>আপনার কাঁধ সরাসরি আপনার হাতের উপর রাখুন</li>
                <li>
                  শক্ত এবং দ্রুত চাপ দিন (কমপক্ষে ২ ইঞ্চি গভীর, প্রতি মিনিটে
                  ১০০-১২০ বার চাপ)
                </li>
                <li>প্রতিটি চাপের মধ্যে সম্পূর্ণ বুক ফিরে আসতে দিন</li>
                <li>চাপের মধ্যে বাধা কমিয়ে আনুন</li>
              </ol>
              <p className="mt-3 italic">
                টিপ: "Stayin' Alive" গানের তালে চাপ দিন
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h4 className="font-bold text-lg mb-3">৩. শ্বাসনালী খুলুন (A)</h4>
              <ol className="list-decimal ml-6 space-y-2">
                <li>
                  ৩০টি চাপ দেওয়ার পর, মাথা কাত/চিন লিফ্ট পদ্ধতি ব্যবহার করে
                  শ্বাসনালী খুলুন
                </li>
                <li>কপালে হাতের তালু রাখুন এবং মাথা পিছনের দিকে কাত করুন</li>
                <li>
                  অন্য হাত দিয়ে চিবুক সামনের দিকে তুলুন যাতে শ্বাসনালী খুলে
                  যায়
                </li>
              </ol>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-lg mb-3">
                ৪. রেসকিউ ব্রেথ দিন (B)
              </h4>
              <ol className="list-decimal ml-6 space-y-2">
                <li>নাক চিমটি দিয়ে বন্ধ করুন</li>
                <li>
                  একটি স্বাভাবিক শ্বাস নিন এবং আপনার মুখ দিয়ে ব্যক্তির মুখ ঢেকে
                  দিন
                </li>
                <li>
                  ২টি শ্বাস দিন (প্রতিটি ১ সেকেন্ড) যতক্ষণ না বুক উঠতে দেখা যায়
                </li>
                <li>
                  যদি বুক না ওঠে, শ্বাসনালী পুনরায় সাজিয়ে আবার চেষ্টা করুন
                </li>
                <li>৩০টি চাপ থেকে ২টি শ্বাসের চক্র চালিয়ে যান</li>
                <li>
                  একটি AED ব্যবহার করুন যদি উপলব্ধ থাকে এবং এর নির্দেশাবলী
                  অনুসরণ করুন
                </li>
              </ol>
            </div>

            <h3 className="font-bold text-xl mt-8 mb-4">
              শিশু এবং শিশুর সিপিআর পার্থক্য
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-lg mb-3">
                  শিশু সিপিআর (১ বছর থেকে বয়ঃসন্ধি পর্যন্ত)
                </h4>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    চাপ দেওয়ার জন্য এক বা দুই হাত ব্যবহার করুন (প্রায় ২ ইঞ্চি
                    গভীর)
                  </li>
                  <li>
                    চাপ থেকে শ্বাসের অনুপাত: একক উদ্ধারকারীর জন্য ৩০:২, দুই
                    উদ্ধারকারীর জন্য ১৫:২
                  </li>
                  <li>শ্বাসের জন্য, ছোট শিশুদের মুখ এবং নাক উভয়ই ঢেকে দিন</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-lg mb-3">
                  শিশুর সিপিআর (১ বছরের কম)
                </h4>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    চাপ দেওয়ার জন্য দুই আঙ্গুল (তর্জনী এবং মধ্যমা) ব্যবহার করুন
                    (প্রায় ১.৫ ইঞ্চি গভীর)
                  </li>
                  <li>
                    চাপ থেকে শ্বাসের অনুপাত: একক উদ্ধারকারীর জন্য ৩০:২, দুই
                    উদ্ধারকারীর জন্য ১৫:২
                  </li>
                  <li>
                    শ্বাসের জন্য, আপনার মুখ দিয়ে মুখ এবং নাক উভয়ই ঢেকে দিন
                  </li>
                  <li>চাপ দেওয়ার সময় মাথাটি নিরপেক্ষ অবস্থানে সমর্থন করুন</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <BloodTypeInfo />

        <div className="max-w-4xl mx-auto my-16">
          <div className="flex items-center justify-center mb-8">
            <ThumbsUp className="h-8 w-8 text-blood-600 mr-3" />
            <h2 className="text-2xl font-bold">রক্তদানের স্বাস্থ্য উপকারিতা</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-3">শারীরিক উপকারিতা</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <div className="text-green-500 mr-2">✓</div>
                  <div>
                    <strong>ফ্রি স্বাস্থ্য পরীক্ষা:</strong> রক্তদানের মধ্যে
                    একটি মিনি স্বাস্থ্য স্ক্রীনিং অন্তর্ভুক্ত।
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-2">✓</div>
                  <div>
                    <strong>হৃদরোগের ঝুঁকি হ্রাস:</strong> নিয়মিত রক্তদান
                    আয়রনের মাত্রা কমাতে সাহায্য করতে পারে, যা হৃদরোগের ঝুঁকি
                    কমাতে পারে।
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-2">✓</div>
                  <div>
                    <strong>রক্ত কণিকা উৎপাদন:</strong> রক্তদান নতুন রক্ত কণিকা
                    উৎপাদনকে উদ্দীপিত করে।
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-3">মানসিক উপকারিতা</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <div className="text-green-500 mr-2">✓</div>
                  <div>
                    <strong>অবদানের অনুভূতি:</strong> আপনি জীবন বাঁচাতে সাহায্য
                    করেছেন জানা আত্মসম্মান বাড়াতে পারে।
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-2">✓</div>
                  <div>
                    <strong>সম্প্রদায়ের সাথে সংযোগ:</strong> দাতাদের একটি
                    সম্প্রদায়ের অংশ হওয়া অন্তর্ভুক্তির অনুভূতি তৈরি করে।
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-2">✓</div>
                  <div>
                    <strong>ইতিবাচক প্রভাব:</strong> অন্যদের জীবনে ইতিবাচক
                    প্রভাব ফেলা মানসিক সুস্থতা উন্নত করতে পারে।
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto my-16">
          <div className="flex items-center justify-center mb-8">
            <AlertCircle className="h-8 w-8 text-blood-600 mr-3" />
            <h2 className="text-2xl font-bold">সচরাচর জিজ্ঞাসিত প্রশ্ন</h2>
          </div>

          <Accordion
            type="single"
            collapsible
            className="bg-white rounded-lg shadow-md"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-6">
                আমি কত ঘন ঘন রক্ত দান করতে পারি?
              </AccordionTrigger>
              <AccordionContent className="px-6">
                <p className="text-gray-700">
                  বেশিরভাগ মানুষ প্রতি ৫৬ দিনে (৮ সপ্তাহ) সম্পূর্ণ রক্ত দান করতে
                  পারেন। প্লেটলেট দানের জন্য, আপনি প্রতি ৭ দিনে দান করতে পারেন,
                  বছরে সর্বোচ্চ ২৪ বার। প্লাজমা দান প্রতি ২৮ দিনে করা যেতে পারে,
                  এবং ডাবল রেড সেল দান প্রতি ১১২ দিনে।
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="px-6">
                রক্তদান কি ব্যথা দেয়?
              </AccordionTrigger>
              <AccordionContent className="px-6">
                <p className="text-gray-700">
                  বেশিরভাগ দাতা রিপোর্ট করেন যে সুই প্রবেশ করানোর সময় শুধুমাত্র
                  একটি সামান্য চিমটি অনুভব করেন। প্রকৃত রক্তদান প্রক্রিয়া
                  তুলনামূলকভাবে ব্যথাহীন। আমাদের স্টাফ অভিজ্ঞতাটি যতটা সম্ভব
                  আরামদায়ক করতে প্রশিক্ষিত।
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="px-6">
                রক্তদান প্রক্রিয়াটি কতক্ষণ সময় নেয়?
              </AccordionTrigger>
              <AccordionContent className="px-6">
                <p className="text-gray-700">
                  নিবন্ধন থেকে রিফ্রেশমেন্ট পর্যন্ত সম্পূর্ণ প্রক্রিয়াটি
                  সাধারণত প্রায় এক ঘন্টা সময় নেয়। প্রকৃত রক্তদান সাধারণত
                  মাত্র ৮-১০ মিনিট সময় নেয়। প্লেটলেট দান বেশি সময় নেয়,
                  প্রায় ১.৫ থেকে ২.৫ ঘন্টা।
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="px-6">
                রক্তদান কি নিরাপদ?
              </AccordionTrigger>
              <AccordionContent className="px-6">
                <p className="text-gray-700">
                  হ্যাঁ, রক্তদান খুবই নিরাপদ। ব্যবহৃত সমস্ত সরঞ্জাম স্টেরাইল এবং
                  একবার ব্যবহারের পরে ফেলে দেওয়া হয়। রক্তদান করে কোন রোগে
                  আক্রান্ত হওয়ার কোন ঝুঁকি নেই। স্টাফ সদস্যরা পুরো প্রক্রিয়া
                  জুড়ে আপনার নিরাপত্তা নিশ্চিত করতে প্রশিক্ষিত।
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="px-6">
                একটি দানে কত রক্ত নেওয়া হয়?
              </AccordionTrigger>
              <AccordionContent className="px-6">
                <p className="text-gray-700">
                  সম্পূর্ণ রক্তদানের জন্য, প্রায় এক পিন্ট (প্রায় ৪৭০ মিলি)
                  রক্ত সংগ্রহ করা হয়। এটি আপনার শরীরের মোট রক্তের মাত্র প্রায়
                  ১০%। আপনার শরীর ২৪ ঘন্টার মধ্যে তরল এবং কয়েক সপ্তাহের মধ্যে
                  লাল রক্ত কণিকা প্রতিস্থাপন করে।
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="px-6">
                আমি কি ওষুধ খেলে দান করতে পারব?
              </AccordionTrigger>
              <AccordionContent className="px-6">
                <p className="text-gray-700">
                  অনেক ওষুধ রক্তদানের জন্য গ্রহণযোগ্য। তবে, কিছু ওষুধের জন্য
                  আপনার শেষ ডোজের পরে একটি অপেক্ষার সময় প্রয়োজন হতে পারে।
                  প্রি-ডোনেশন স্ক্রীনিংয়ের সময় আপনি যে কোন ওষুধ গ্রহণ করছেন তা
                  স্টাফকে জানানো ভাল।
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="px-6">
                রক্তদানের আগে এবং পরে আমার কি করা উচিত?
              </AccordionTrigger>
              <AccordionContent className="px-6">
                <p className="text-gray-700">
                  দানের আগে: একটি স্বাস্থ্যকর খাবার খান, হাইড্রেটেড থাকুন, একটি
                  ভাল রাতের ঘুম পান এবং চর্বিযুক্ত খাবার এড়িয়ে চলুন। দানের
                  পরে: কয়েক মিনিট বিশ্রাম নিন, দান কেন্দ্রে প্রদত্ত একটি
                  স্ন্যাক্স এবং পানীয় গ্রহণ করুন, হাইড্রেটেড থাকুন, দিনের বাকি
                  সময় কঠোর পরিশ্রমের কাজ এড়িয়ে চলুন এবং ব্যান্ডেজ কমপক্ষে ৪
                  ঘন্টা রাখুন।
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default MedicalKnowledge;
