import React, { useState } from 'react';
import { Wallet, CreditCard, AlertCircle, Copy, Check } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const paymentMethods = [
  {
    id: 'bkash',
    name: 'bKash',
    number: '01722-528164',
    logo: 'https://www.logo.wine/a/logo/BKash/BKash-Icon-Logo.wine.svg',
  },
  {
    id: 'nagad',
    name: 'Nagad',
    number: '01722-528164',
    logo: 'https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png',
  },
  {
    id: 'rocket',
    name: 'Rocket',
    number: '01722-528164',
    logo: 'https://seeklogo.com/images/D/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo.com.png',
  },
];

export default function Donate() {
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

  return (
    <div>
      <PageHeader
        title="আর্থিক অনুদান"
        description="আর্থিক সহায়তা প্রদানের মাধ্যমে আমাদের মিশনকে সমর্থন করুন"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Wallet className="h-6 w-6 text-blood-600" />
                <CardTitle>কিভাবে অনুদান দেবেন</CardTitle>
              </div>
              <CardDescription>
                অনুদান প্রদানের জন্য এই ধাপগুলি অনুসরণ করুন
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      className="bg-gray-50 rounded-lg p-4 text-center"
                    >
                      <img
                        src={method.logo}
                        alt={method.name}
                        className="h-12 mx-auto mb-4 object-contain"
                      />
                      <h3 className="font-semibold text-lg mb-2">
                        {method.name}
                      </h3>
                      <div className="flex items-center justify-center gap-2">
                        <p className="text-gray-600">{method.number}</p>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleCopyNumber(method.number)}
                          className="h-6 w-6"
                        >
                          {copiedNumber === method.number ? (
                            <Check className="h-4 w-4 text-green-600" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-900">
                        পেমেন্ট নির্দেশাবলী:
                      </h4>
                      <ol className="mt-2 text-sm text-blue-800 space-y-2">
                        <li>
                          ১. উপরের থেকে আপনার পছন্দের পেমেন্ট পদ্ধতি নির্বাচন
                          করুন
                        </li>
                        <li>২. প্রদত্ত নম্বরে আপনার অনুদানের পরিমাণ পাঠান</li>
                        <li>
                          ৩. পেমেন্ট কনফার্মেশন থেকে আপনার লেনদেন আইডি সংরক্ষণ
                          করুন
                        </li>
                        <li>
                          ৪. অনুদান ফর্মটি আপনার বিবরণ এবং লেনদেন আইডি সহ পূরণ
                          করুন
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-2">
                <CreditCard className="h-6 w-6 text-blood-600" />
                <CardTitle>অনুদানের বিবৃতি জমা দিন</CardTitle>
              </div>
              <CardDescription>
                অনুদান সম্পূর্ণ করতে দয়া করে ফর্মটি পূরণ করুন
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" asChild>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeRg5unKNOp5OAalKuoPS0FZ2y1W7TUEt5MXvhUKIv-lnt7NA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  অনুদান ফর্ম খুলুন
                </a>
              </Button>
            </CardContent>
          </Card>

          <div className="text-center text-gray-600">
            <p>অনুদান সম্পর্কিত কোন প্রশ্ন থাকলে, দয়া করে যোগাযোগ করুন:</p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <p className="font-medium">ফোন: 01722-528164</p>
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
            </div>
            <p className="font-medium mt-2">ইমেইল: bobdo5800@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
