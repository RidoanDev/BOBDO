import React from 'react';
import { Link } from 'react-router-dom';
import {
  Droplet,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  Youtube,
  Users,
  Globe,
  Home,
  Droplet as DonateBloodIcon,
  HeartHandshake as GetBloodIcon,
  Info as AboutUsIcon,
  Contact as ContactIcon,
  HandHeart as VolunteerIcon,
  Wallet as DonateIcon,
  Stethoscope as MedicalIcon,
  ClipboardList as NoticeIcon,
  Building2 as HospitalIcon,
} from 'lucide-react';

const Footer = () => {
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
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Droplet className="h-6 w-6 text-blood-500" />
              <span className="text-xl font-bold">BOBDO</span>
            </div>
            <p className="text-gray-400">
              বগুড়া অনলাইন রক্তদান সংগঠন (BOBDO) স্বেচ্ছায় রক্তদানের মাধ্যমে
              জীবন বাঁচাতে নিবেদিত। প্রয়োজনে রক্তের প্রাপ্যতা নিশ্চিত করতে
              আমাদের মিশনে যোগ দিন।
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/bobdo.official"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/groups/BOBO.BD"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook Group"
              >
                <Users className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/@BograOnlineBloodDonationOrgani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">দ্রুত লিংক</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Home className="h-4 w-4 text-gray-400" />
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  হোম
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <DonateBloodIcon className="h-4 w-4 text-gray-400" />
                <Link
                  to="/donate-blood"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  রক্ত দিন
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <GetBloodIcon className="h-4 w-4 text-gray-400" />
                <Link
                  to="/get-blood"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  রক্ত নিন
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <HospitalIcon className="h-4 w-4 text-gray-400" />
                <Link
                  to="/hospitals"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  হাসপাতাল
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <AboutUsIcon className="h-4 w-4 text-gray-400" />
                <Link
                  to="/about-us"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  আমাদের সম্পর্কে
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <ContactIcon className="h-4 w-4 text-gray-400" />
                <Link
                  to="/contacts"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  যোগাযোগ
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-lg font-semibold mb-4">জড়িত হোন</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <VolunteerIcon className="h-4 w-4 text-gray-400" />
                <Link
                  to="/be-a-volunteer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  স্বেচ্ছাসেবক হোন
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <DonateIcon className="h-4 w-4 text-gray-400" />
                <Link
                  to="/donate"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  আর্থিক অনুদান
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <MedicalIcon className="h-4 w-4 text-gray-400" />
                <Link
                  to="/medical-knowledge"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  চিকিৎসা জ্ঞান
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <NoticeIcon className="h-4 w-4 text-gray-400" />
                <Link
                  to="/notice"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  নোটিশ বোর্ড
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">যোগাযোগ করুন</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-gray-400">জরুরি হটলাইন:</p>
                  <a
                    href="tel:01722528164"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    ০১৭২২-৫২৮১৬৪
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-gray-400">ইমেইল:</p>
                  <a
                    href={getEmailLink()}
                    className="text-gray-400 hover:text-white transition-colors"
                    target={window.innerWidth < 768 ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                  >
                    bobdo5800@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Globe className="h-5 w-5 text-gray-400 mt-1" />
                <div className="text-gray-400">
                  <p className="font-semibold mb-1">ঠিকানা:</p>
                  <p>বিআরটিসি শপিং কমপ্লক্স ৩য় তলা, সাতমাথা, বগুড়া।</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="text-center md:text-left text-gray-400">
              <p>&copy; 2016 BOBDO. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;