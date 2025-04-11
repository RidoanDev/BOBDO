import React, { useState } from 'react';
import { Wallet, CreditCard, AlertCircle, Copy, Check } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const paymentMethods = [
  {
    id: 'bkash',
    name: 'bKash',
    number: '01722-528164',
    logo: 'https://www.logo.wine/a/logo/BKash/BKash-Icon-Logo.wine.svg'
  },
  {
    id: 'nagad',
    name: 'Nagad',
    number: '01722-528164',
    logo: 'https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png'
  },
  {
    id: 'rocket',
    name: 'Rocket',
    number: '01722-528164',
    logo: 'https://seeklogo.com/images/D/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo.com.png'
  }
];

export default function Donate() {
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  const handleCopyNumber = (number: string) => {
    navigator.clipboard.writeText(number.replace(/-/g, '')).then(() => {
      setCopiedNumber(number);
      toast({
        title: "Number Copied",
        description: "The number has been copied to your clipboard.",
      });
      setTimeout(() => setCopiedNumber(null), 2000);
    });
  };

  return (
    <div>
      <PageHeader 
        title="Financial Donation" 
        description="Support our mission by making a financial contribution"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Wallet className="h-6 w-6 text-blood-600" />
                <CardTitle>How to Donate</CardTitle>
              </div>
              <CardDescription>
                Follow these steps to make your donation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {paymentMethods.map((method) => (
                    <div key={method.id} className="bg-gray-50 rounded-lg p-4 text-center">
                      <img
                        src={method.logo}
                        alt={method.name}
                        className="h-12 mx-auto mb-4 object-contain"
                      />
                      <h3 className="font-semibold text-lg mb-2">{method.name}</h3>
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
                      <h4 className="font-medium text-blue-900">Payment Instructions:</h4>
                      <ol className="mt-2 text-sm text-blue-800 space-y-2">
                        <li>1. Choose your preferred payment method from above</li>
                        <li>2. Send your donation amount to the provided number</li>
                        <li>3. Keep your Transaction ID from the payment confirmation</li>
                        <li>4. Fill out the donation form with your details and Transaction ID</li>
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
                <CardTitle>Submit Donation Details</CardTitle>
              </div>
              <CardDescription>
                Please fill out the form to complete your donation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full"
                asChild
              >
                <a 
                  href="https://docs.google.com/forms/d/1r6AHUr2biiREYTnF-Bqb0eK9YINEyPbAk52dqmMcLvc/edit?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Donation Form
                </a>
              </Button>
            </CardContent>
          </Card>

          <div className="text-center text-gray-600">
            <p>For any questions about donations, please contact:</p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <p className="font-medium">Phone: 01722-528164</p>
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
            <p className="font-medium mt-2">Email: bobdo5800@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}