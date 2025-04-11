
import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet, ArrowRight, Heart, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Stats from '@/components/Stats';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-blood-700 leading-tight mb-4">
                Every Drop Counts, Every Life Matters
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Join BOBDO in our mission to save lives through blood donation. 
                Your donation can make a difference in someone's life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-blood-600 hover:bg-blood-700">
                  <Link to="/donate-blood" className="flex items-center gap-2">
                    <Droplet className="h-5 w-5" />
                    Donate Blood
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-blood-600 text-blood-600 hover:bg-blood-50">
                  <Link to="/get-blood" className="flex items-center gap-2">
                    Get Blood
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-blood-100 animate-pulse-slow"></div>
                <Droplet className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blood-600 h-32 w-32 md:h-40 md:w-40 blood-drop-shadow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Quick Access Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How You Can Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <Droplet className="h-12 w-12 mx-auto text-blood-600 mb-4" />
                <CardTitle>Donate Blood</CardTitle>
                <CardDescription>Give the gift of life by donating blood</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Your blood donation can save up to three lives. It's a simple process that takes less than an hour.
                </p>
                <Button asChild className="w-full">
                  <Link to="/donate-blood">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <Heart className="h-12 w-12 mx-auto text-blood-600 mb-4" />
                <CardTitle>Be a Donor</CardTitle>
                <CardDescription>Register as a regular blood donor</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Join our donor database and help ensure that blood is available whenever and wherever it is needed.
                </p>
                <Button asChild className="w-full">
                  <Link to="/be-a-donor">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 mx-auto text-blood-600 mb-4" />
                <CardTitle>Be a Volunteer</CardTitle>
                <CardDescription>Support our mission with your time</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  There are many ways to volunteer with BOBDO, from helping at blood drives to community outreach.
                </p>
                <Button asChild className="w-full">
                  <Link to="/be-a-volunteer">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blood-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <BookOpen className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Learn About Blood Donation</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Expand your knowledge about blood types, donation process, and how your contribution helps save lives.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/medical-knowledge">Explore Medical Knowledge</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
