import React from 'react';
import { Phone, MapPin, Clock, ExternalLink } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const hospitals = [
  {
    id: 1,
    name: 'শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল',
    type: 'সরকারি',
    address: 'শহীদ জিয়া সড়ক, বগুড়া',
    phone: ['051-69965', '051-69966'],
    emergency: '01769-401737',
    hours: '24/7',
    services: ['জরুরি বিভাগ', 'ব্লাড ব্যাংক', 'আইসিইউ', 'ডায়ালাইসিস'],
    mapLink: 'https://maps.app.goo.gl/HLGvQPGHBGZGHNqb7'
  },
  {
    id: 2,
    name: 'মহাস্থানগড় রেড ক্রিসেন্ট ব্লাড সেন্টার',
    type: 'বেসরকারি',
    address: 'সাতমাথা, বগুড়া',
    phone: ['051-66225'],
    emergency: '01711-937602',
    hours: 'সকাল ৯টা - রাত ৯টা',
    services: ['ব্লাড ব্যাংক', 'রক্ত পরীক্ষা', 'প্লাটিলেট'],
    mapLink: 'https://maps.app.goo.gl/sSQPZLmFGHBGHNqb7'
  },
  {
    id: 3,
    name: 'বগুড়া মেডিকেল সেন্টার',
    type: 'বেসরকারি',
    address: 'ধুনট রোড, বগুড়া',
    phone: ['051-69001'],
    emergency: '01711-001234',
    hours: '24/7',
    services: ['জরুরি বিভাগ', 'ব্লাড ব্যাংক', 'আইসিইউ'],
    mapLink: 'https://maps.app.goo.gl/uHLGvQPGHBGZGHNqb7'
  },
  {
    id: 4,
    name: 'ইবনে সিনা হাসপাতাল',
    type: 'বেসরকারি',
    address: 'নওদাপাড়া, বগুড়া',
    phone: ['051-67722'],
    emergency: '01711-889977',
    hours: '24/7',
    services: ['জরুরি বিভাগ', 'ব্লাড ব্যাংক', 'আইসিইউ', 'ডায়ালাইসিস'],
    mapLink: 'https://maps.app.goo.gl/kHLGvQPGHBGZGHNqb7'
  },
  {
    id: 5,
    name: 'পপুলার মেডিকেল সেন্টার',
    type: 'বেসরকারি',
    address: 'ঠনঠনিয়া, বগুড়া',
    phone: ['051-66001'],
    emergency: '01711-223344',
    hours: '24/7',
    services: ['জরুরি বিভাগ', 'ব্লাড ব্যাংক', 'আইসিইউ'],
    mapLink: 'https://maps.app.goo.gl/pHLGvQPGHBGZGHNqb7'
  },
  {
    id: 6,
    name: 'আল-মারকাজুল ইসলামি হাসপাতাল',
    type: 'বেসরকারি',
    address: 'কালেক্টরেট রোড, বগুড়া',
    phone: ['051-69900'],
    emergency: '01711-445566',
    hours: '24/7',
    services: ['জরুরি বিভাগ', 'ব্লাড ব্যাংক'],
    mapLink: 'https://maps.app.goo.gl/qHLGvQPGHBGZGHNqb7'
  },
  {
    id: 7,
    name: 'রফাতুল্লাহ কমিউনিটি হাসপাতাল',
    type: 'বেসরকারি',
    address: 'শেরপুর রোড, বগুড়া',
    phone: ['051-61122'],
    emergency: '01711-667788',
    hours: '24/7',
    services: ['জরুরি বিভাগ', 'ব্লাড ব্যাংক'],
    mapLink: 'https://maps.app.goo.gl/rHLGvQPGHBGZGHNqb7'
  },
  {
    id: 8,
    name: 'ডিজিটাল হাসপাতাল',
    type: 'বেসরকারি',
    address: 'শিবগঞ্জ রোড, বগুড়া',
    phone: ['051-68800'],
    emergency: '01711-998877',
    hours: '24/7',
    services: ['জরুরি বিভাগ', 'ব্লাড ব্যাংক', 'আইসিইউ'],
    mapLink: 'https://maps.app.goo.gl/sHLGvQPGHBGZGHNqb7'
  },
  {
    id: 9,
    name: 'লাইফ লাইন হাসপাতাল',
    type: 'বেসরকারি',
    address: 'নওদাপাড়া, বগুড়া',
    phone: ['051-67733'],
    emergency: '01711-112233',
    hours: '24/7',
    services: ['জরুরি বিভাগ', 'ব্লাড ব্যাংক'],
    mapLink: 'https://maps.app.goo.gl/tHLGvQPGHBGZGHNqb7'
  },
  {
    id: 10,
    name: 'আদর্শ হাসপাতাল',
    type: 'বেসরকারি',
    address: 'সাতমাথা, বগুড়া',
    phone: ['051-66633'],
    emergency: '01711-445566',
    hours: '24/7',
    services: ['জরুরি বিভাগ', 'ব্লাড ব্যাংক'],
    mapLink: 'https://maps.app.goo.gl/vHLGvQPGHBGZGHNqb7'
  }
];

const Hospitals = () => {
  return (
    <div>
      <PageHeader
        title="হাসপাতাল তথ্য"
        description="বগুড়া জেলার প্রধান হাসপাতাল এবং ব্লাড ব্যাংকের তালিকা"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hospitals.map((hospital) => (
            <Card key={hospital.id} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{hospital.name}</CardTitle>
                  <span className="inline-block px-3 py-1 rounded-full text-sm bg-blood-50 text-blood-600">
                    {hospital.type}
                  </span>
                </div>
                <CardDescription>{hospital.services.join(' • ')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blood-600 mt-1" />
                    <div>
                      <p className="text-gray-700">{hospital.address}</p>
                      <Button variant="link" className="h-auto p-0" asChild>
                        <a
                          href={hospital.mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blood-600"
                        >
                          গুগল ম্যাপে দেখুন
                          <ExternalLink className="h-4 w-4 ml-1" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-blood-600 mt-1" />
                    <div>
                      <div className="space-y-1">
                        {hospital.phone.map((num) => (
                          <p key={num} className="text-gray-700">
                            {num}
                          </p>
                        ))}
                        <p className="text-blood-600 font-medium">
                          জরুরি: {hospital.emergency}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-blood-600 mt-1" />
                    <div>
                      <p className="text-gray-700">সেবার সময়: {hospital.hours}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">জরুরি প্রয়োজনে</h2>
          <p className="text-gray-700 mb-6">
            রক্তের জরুরি প্রয়োজনে যোগাযোগ করুন:
          </p>
          <div className="flex justify-center space-x-8">
            <div>
              <p className="font-bold text-blood-600">BOBDO হটলাইন</p>
              <p className="text-lg">01722-528164</p>
            </div>
            <div>
              <p className="font-bold text-blood-600">ইমেইল</p>
              <p className="text-lg">bobdo5800@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hospitals;