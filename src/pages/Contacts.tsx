import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Copy,
  Check,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import FormCard from '@/components/FormCard';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const Contacts = () => {
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  const handleCopyNumber = (number: string) => {
    navigator.clipboard.writeText(number.replace(/-/g, '')).then(() => {
      setCopiedNumber(number);
      toast({
        title: 'নম্বর কপি হয়েছে',
        description: 'নম্বরটি আপনার ক্লিপবোর্ডে কপি করা হয়েছে।',
      });
      setTimeout(() => setCopiedNumber(null), 2000);
    });
  };

  // Function to get appropriate email link based on screen width
  const getEmailLink = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768
        ? 'mailto:bobdo5800@gmail.com'
        : 'https://mail.google.com/mail/?view=cm&fs=1&to=bobdo5800@gmail.com';
    }
    return 'mailto:bobdo5800@gmail.com'; // Default fallback
  };

  return (
    <div>
      <PageHeader
        title="যোগাযোগ করুন"
        description="রক্তদান সম্পর্কে আপনার কোন প্রশ্ন আছে বা সহায়তা প্রয়োজন? আমরা আপনাকে সাহায্য করতে এখানে আছি।"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">যোগাযোগ করুন</h2>
            <p className="text-gray-700 mb-8">
              রক্তদান সম্পর্কিত প্রশ্ন, রক্তদান শিবির আয়োজন বা আমাদের সেবা
              সম্পর্কে তথ্যের জন্য আমাদের টিম উপলব্ধ। নিচের যে কোন মাধ্যম
              ব্যবহার করে আমাদের সাথে যোগাযোগ করতে পারেন।
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-blood-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">ফোন</h3>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-700">পরিচালক: 01722-528164</p>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleCopyNumber('01722-528164')}
                      className="h-6 w-6"
                    >
                      {copiedNumber === '01722-528164' ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      asChild
                    >
                      <a href="tel:01722528164">
                        <Phone className="h-4 w-4 text-blood-600" />
                      </a>
                    </Button>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-gray-700">
                      জরুরি হটলাইন: 01722-528164 (২৪/৭)
                    </p>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleCopyNumber('01722-528164')}
                      className="h-6 w-6"
                    >
                      {copiedNumber === '01722-528164' ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      asChild
                    >
                      <a href="tel:01722528164">
                        <Phone className="h-4 w-4 text-blood-600" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-5 w-5 text-blood-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">ইমেইল</h3>
                  <p className="text-gray-700">
                    সাধারণ জিজ্ঞাসা:{' '}
                    <a
                      href={getEmailLink()}
                      className="text-blood-600 hover:text-blood-700"
                      target={window.innerWidth < 768 ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                    >
                      bobdo5800@gmail.com
                    </a>
                  </p>
                  <p className="text-gray-700">
                    ডেভেলপার সহায়তা:{' '}
                    <a
                      href={
                        window.innerWidth < 768
                          ? 'mailto:ridoan.zisan@gmail.com'
                          : 'https://mail.google.com/mail/?view=cm&fs=1&to=ridoan.zisan@gmail.com'
                      }
                      className="text-blood-600 hover:text-blood-700"
                      target={window.innerWidth < 768 ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                    >
                      ridoan.zisan@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blood-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">ঠিকানা</h3>
                  <p className="text-gray-700">বগুড়া, বাংলাদেশ</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-5 w-5 text-blood-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">কর্মঘণ্টা</h3>
                  <p className="text-gray-700 mt-2">জরুরি সেবা ২৪/৭ উপলব্ধ</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">আমাদেরকে বার্তা পাঠান</h2>
            <FormCard
              title="যোগাযোগ ফর্ম"
              description="আপনার প্রশ্ন বা উদ্বেগ সহ এই ফর্মটি পূরণ করুন এবং আমরা যত দ্রুত সম্ভব আপনার সাথে যোগাযোগ করব।"
              formLink={getEmailLink()}
              buttonText="বার্তা পাঠান"
              icon={<MessageSquare className="h-8 w-8" />}
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">
            আমাদের রক্তদান কেন্দ্রসমূহ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold text-lg mb-3">প্রধান কেন্দ্র</h3>
              <p className="text-gray-600 mb-4">সাতমাথা, বগুড়া</p>
              <p className="text-gray-600">
                <span className="font-semibold">ফোন:</span> 01722-528164
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">সময়:</span> ২৪/৭
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">
            আমাদের অবস্থান
          </h2>
          <div className="text-center">
            <MapPin className="h-12 w-12 text-blood-600 mx-auto mb-4" />
            <div className="w-full aspect-video rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.454787351233!2d89.36973922442924!3d24.848312245745298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc5588105b94a3%3A0x5502254b1806651f!2sBogra%20Online%20Blood%20Donation%20Organization%20(BOBDO)!5e0!3m2!1sen!2sbd!4v1744263007774!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BOBDO-এর অবস্থান গুগল ম্যাপে"
              ></iframe>
            </div>
            <p className="text-gray-600 mt-2">বগুড়া, বাংলাদেশ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
