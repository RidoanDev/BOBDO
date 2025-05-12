import React from 'react';
import { Bell, Calendar, AlertTriangle, Info } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Notice = () => {
  // Sample notices data - in a real application, this would come from an API
  const notices = [
    {
      id: 1,
      title: 'রক্তের সংকট',
      category: 'urgent',
      content:
        'বর্তমানে আমরা রক্তের গুরুতর সংকটে আছি। রক্তদাতাদের অবিলম্বে প্রয়োজন। আপনি যদি রক্তদানের জন্য উপযুক্ত হন তবে দয়া করে আমাদের যে কোন দান কেন্দ্রে যত দ্রুত সম্ভব আসুন।',
    },
    {
      id: 2,
      title: ' আরো স্বেচ্ছাসেবক প্রয়োজন',
      category: 'announcement',
      content:
        ' আমাদের এই মিশনে কাজ করতে আরও বেশি স্বেচ্ছাসেবক এর প্রয়োজন। যারা আগ্রহী আছেন তারা দয়া করে আমাদের সাথে যোগাযোগ করুন ধন্যবাদ।',
    },
    {
      id: 3,
      title: '  মাসিক মিটিংয়ে উপস্থিত হওয়ার জন্য অনুরোধ',
      category: 'important',
      content:
        '  স্বেচ্ছাসেবকগণ আপনাদের জন্য প্রতি মাসে যে মাসিক মিটিং এর ব্যবস্থা করা হয় তাতে দয়া করে উপস্থিত থাকবেন এবং মাসিক ভাতা প্রদান করবেন',
    },

    {
      id: 5,
      title: 'আমাদের দাতাদের ধন্যবাদ',
      date: '১৫ মার্চ, ২০২৫',
      category: 'announcement',
      content:
        'আমরা আমাদের বসন্তকালীন রক্তদান শিবিরে অংশগ্রহণকারী সকল দাতাদের আন্তরিক ধন্যবাদ জানাতে চাই। আপনার উদারতার জন্য আমরা ৫০০ ইউনিটেরও বেশি রক্ত সংগ্রহ করতে পেরেছি যা প্রায় ১,৫০০ জীবন বাঁচাতে সাহায্য করবে!',
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'urgent':
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'important':
        return <Info className="h-5 w-5 text-amber-500" />;
      case 'event':
        return <Calendar className="h-5 w-5 text-blue-500" />;
      default:
        return <Bell className="h-5 w-5 text-green-500" />;
    }
  };

  const getCategoryClass = (category: string) => {
    switch (category) {
      case 'urgent':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'important':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'event':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      default:
        return 'bg-green-50 text-green-700 border-green-200';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'urgent':
        return 'জরুরি';
      case 'important':
        return 'গুরুত্বপূর্ণ';
      case 'event':
        return 'ইভেন্ট';
      default:
        return 'ঘোষণা';
    }
  };

  return (
    <div>
      <PageHeader
        title="নোটিশ ও ঘোষণা"
        description="গুরুত্বপূর্ণ রক্তদান সংবাদ, ইভেন্ট এবং জরুরি আবেদন সম্পর্কে আপডেট থাকুন।"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-center mb-8">
            <Bell className="h-8 w-8 text-blood-600 mr-3" />
            <h2 className="text-2xl font-bold">সর্বশেষ নোটিশ</h2>
          </div>

          <div className="space-y-6">
            {notices.map((notice) => (
              <Card
                key={notice.id}
                className="shadow-md hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      {getCategoryIcon(notice.category)}
                      <CardTitle className="ml-2">{notice.title}</CardTitle>
                    </div>
                    <span
                      className={`text-sm px-3 py-1 rounded-full border ${getCategoryClass(
                        notice.category
                      )}`}
                    >
                      {getCategoryLabel(notice.category)}
                    </span>
                  </div>
                  <CardDescription>
                    {notice.date} তারিখে প্রকাশিত
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{notice.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-blood-50 rounded-lg p-8 mb-12">
          <h2 className="text-xl font-bold mb-4 text-center">
            নোটিফিকেশন সাবস্ক্রাইব করুন
          </h2>
          <p className="text-center text-gray-700 mb-6">
            সর্বশেষ সংবাদ, জরুরি আবেদন এবং রক্তদান শিবির সম্পর্কে আপডেট পেতে
            আমাদের নোটিফিকেশন সার্ভিস সাবস্ক্রাইব করুন।
          </p>
          <div className="flex justify-center">
            <a
              href="https://youtube.com/@BograOnlineBloodDonationOrgani"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blood-600 hover:bg-blood-700 text-white px-6 py-3 rounded-md transition-colors flex items-center"
            >
              <Bell className="h-5 w-5 mr-2" />
              এখনই সাবস্ক্রাইব করুন
            </a>
          </div>
        </div>

        <div className="text-center">
          <h3 className="font-semibold text-lg mb-3">
            আরও তথ্যের জন্য যোগাযোগ করুন
          </h3>
          <p className="text-gray-700">
            এই নোটিশ সম্পর্কে আরও বিস্তারিত জানতে আমাদের তথ্য ডেস্কে যোগাযোগ
            করুন:
          </p>
          <p className="text-gray-700 mt-2">
            <span className="font-medium">ফোন:</span> 01722-528164
          </p>
          <p className="text-gray-700">
            <span className="font-medium">ইমেইল:</span> bobdo5800@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notice;
