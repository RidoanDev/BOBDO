
import React from 'react';
import { Bell, Calendar, AlertTriangle, Info } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Notice = () => {
  // Sample notices data - in a real application, this would come from an API
  const notices = [
    {
      id: 1,
      title: "Urgent: Critical Shortage of O-Negative Blood",
      date: "April 10, 2025",
      category: "urgent",
      content: "We are currently experiencing a critical shortage of O-negative blood. O-negative donors are needed immediately. Please visit any of our donation centers as soon as possible if you are eligible to donate."
    },
    {
      id: 2,
      title: "New Mobile Blood Donation Unit",
      date: "April 5, 2025",
      category: "announcement",
      content: "We're excited to announce the launch of our new mobile blood donation unit, which will be visiting various communities starting next week. Check our schedule for locations and times near you."
    },
    {
      id: 3,
      title: "Updated Donor Eligibility Guidelines",
      date: "March 28, 2025",
      category: "important",
      content: "We have updated our donor eligibility guidelines based on recent medical recommendations. Please review the new guidelines before your next donation appointment."
    },
    {
      id: 4,
      title: "Blood Drive at Central University",
      date: "March 22, 2025",
      category: "event",
      content: "Join us for a special blood drive at Central University's Student Center on April 15, 2025, from 10 AM to 4 PM. Walk-ins welcome, but appointments are encouraged."
    },
    {
      id: 5,
      title: "Thank You to Our Donors",
      date: "March 15, 2025",
      category: "announcement",
      content: "We'd like to express our heartfelt thanks to all donors who participated in our Spring Blood Drive. Thanks to your generosity, we collected over 500 units of blood that will help save up to 1,500 lives!"
    }
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

  return (
    <div>
      <PageHeader 
        title="Notices & Announcements" 
        description="Stay informed about important blood donation news, events, and urgent appeals."
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-center mb-8">
            <Bell className="h-8 w-8 text-blood-600 mr-3" />
            <h2 className="text-2xl font-bold">Latest Notices</h2>
          </div>

          <div className="space-y-6">
            {notices.map((notice) => (
              <Card key={notice.id} className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      {getCategoryIcon(notice.category)}
                      <CardTitle className="ml-2">{notice.title}</CardTitle>
                    </div>
                    <span className={`text-sm px-3 py-1 rounded-full border ${getCategoryClass(notice.category)}`}>
                      {notice.category.charAt(0).toUpperCase() + notice.category.slice(1)}
                    </span>
                  </div>
                  <CardDescription>Posted on {notice.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{notice.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-blood-50 rounded-lg p-8 mb-12">
          <h2 className="text-xl font-bold mb-4 text-center">Subscribe to Notifications</h2>
          <p className="text-center text-gray-700 mb-6">
            Stay updated with the latest news, urgent appeals, and blood drive events by subscribing to our notification service.
          </p>
          <div className="flex justify-center">
            <a 
              href="https://youtube.com/@BograOnlineBloodDonationOrgani"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blood-600 hover:bg-blood-700 text-white px-6 py-3 rounded-md transition-colors flex items-center"
            >
              <Bell className="h-5 w-5 mr-2" />
              Subscribe Now
            </a>
          </div>
        </div>

        <div className="text-center">
          <h3 className="font-semibold text-lg mb-3">Contact for More Information</h3>
          <p className="text-gray-700">
            For more details about any of these notices, please contact our information desk:
          </p>
          <p className="text-gray-700 mt-2">
            <span className="font-medium">Phone:</span> 01722-528164
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Email:</span> bobdo5800@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notice;
