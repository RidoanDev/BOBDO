import React from 'react';
import { BookOpen, Droplet, Heart, ThumbsUp, AlertCircle, Bandage, HeartPulse } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import BloodTypeInfo from '@/components/BloodTypeInfo';

const MedicalKnowledge = () => {
  return (
    <div>
      <PageHeader 
        title="Medical Knowledge" 
        description="Learn about blood donation, first aid, CPR, and how your knowledge can help save lives."
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex items-center justify-center mb-8">
            <BookOpen className="h-8 w-8 text-blood-600 mr-3" />
            <h2 className="text-2xl font-bold">Blood Donation Basics</h2>
          </div>
          
          <div className="prose max-w-none text-gray-700">
            <p>
              Blood donation is a vital process that helps save millions of lives every year. Donated blood is used for various medical treatments, surgeries, and emergencies. Understanding the basics of blood donation can help ease concerns and encourage more people to donate.
            </p>
            
            <h3 className="font-bold text-xl mt-8 mb-4">What is Blood Made Of?</h3>
            <p>
              Blood is composed of several components, each serving a specific function:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Red Blood Cells:</strong> Carry oxygen from the lungs to the rest of the body</li>
              <li><strong>White Blood Cells:</strong> Help fight infections and diseases</li>
              <li><strong>Platelets:</strong> Help blood clot to prevent excessive bleeding</li>
              <li><strong>Plasma:</strong> The liquid portion of blood that carries cells and nutrients</li>
            </ul>
            
            <h3 className="font-bold text-xl mt-8 mb-4">Types of Blood Donation</h3>
            <p>
              There are several types of blood donation, each collecting different components:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Whole Blood Donation:</strong> The most common type, collecting all components of blood</li>
              <li><strong>Platelet Donation:</strong> Collects only platelets, which are essential for clotting</li>
              <li><strong>Plasma Donation:</strong> Collects plasma, which is used for treatments of various conditions</li>
              <li><strong>Double Red Cell Donation:</strong> Collects only red blood cells in a double quantity</li>
            </ul>
          </div>
        </div>
        
        {/* First Aid Knowledge Section */}
        <div className="max-w-4xl mx-auto my-16">
          <div className="flex items-center justify-center mb-8">
            <Bandage className="h-8 w-8 text-blood-600 mr-3" />
            <h2 className="text-2xl font-bold">First Aid Knowledge</h2>
          </div>
          
          <div className="prose max-w-none text-gray-700">
            <p>
              First aid is the immediate care given to someone who is injured or suddenly becomes ill. Basic first aid knowledge can help stabilize a person until professional medical help arrives.
            </p>
            
            <h3 className="font-bold text-xl mt-8 mb-4">Basic First Aid Procedures</h3>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h4 className="font-bold text-lg mb-3">1. Cuts and Scrapes</h4>
              <ol className="list-decimal ml-6 space-y-2">
                <li>Wash your hands and wear gloves if available</li>
                <li>Clean the wound with mild soap and water</li>
                <li>Apply gentle pressure with a clean cloth to stop bleeding</li>
                <li>Apply antibiotic ointment</li>
                <li>Cover with a sterile bandage or dressing</li>
                <li>Change dressing daily and watch for signs of infection</li>
              </ol>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h4 className="font-bold text-lg mb-3">2. Burns</h4>
              <ol className="list-decimal ml-6 space-y-2">
                <li>Cool the burn under cool (not cold) running water for 10-15 minutes</li>
                <li>Remove jewelry or tight clothing near the burned area</li>
                <li>Do not break blisters</li>
                <li>Apply aloe vera or moisturizer for minor burns</li>
                <li>Cover with a sterile, non-adhesive bandage or clean cloth</li>
                <li>Seek medical help for severe burns (large area, deep, or on face/hands)</li>
              </ol>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h4 className="font-bold text-lg mb-3">3. Choking (Heimlich Maneuver)</h4>
              <ol className="list-decimal ml-6 space-y-2">
                <li>Ask "Are you choking?" If they can cough or speak, don't intervene</li>
                <li>Stand behind the person and wrap your arms around their waist</li>
                <li>Make a fist with one hand and place it just above their navel</li>
                <li>Grasp your fist with your other hand and give quick upward thrusts</li>
                <li>Continue until the object is expelled or the person becomes unconscious</li>
                <li>For unconscious victims, begin CPR</li>
              </ol>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-lg mb-3">4. Fractures and Sprains</h4>
              <ol className="list-decimal ml-6 space-y-2">
                <li>Immobilize the injured area</li>
                <li>Apply ice wrapped in a cloth to reduce swelling (20 minutes on, 20 minutes off)</li>
                <li>Elevate the injured limb if possible</li>
                <li>Use a splint for fractures if professional help is delayed</li>
                <li>Seek medical attention for suspected fractures</li>
              </ol>
            </div>
          </div>
        </div>
        
        {/* CPR Knowledge Section */}
        <div className="max-w-4xl mx-auto my-16">
          <div className="flex items-center justify-center mb-8">
            <HeartPulse className="h-8 w-8 text-blood-600 mr-3" />
            <h2 className="text-2xl font-bold">CPR Knowledge</h2>
          </div>
          
          <div className="prose max-w-none text-gray-700">
            <p>
              Cardiopulmonary Resuscitation (CPR) is a lifesaving technique used when someone's breathing or heartbeat has stopped. Immediate CPR can double or triple chances of survival after cardiac arrest.
            </p>
            
            <h3 className="font-bold text-xl mt-8 mb-4">Adult CPR Steps (CAB Sequence)</h3>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h4 className="font-bold text-lg mb-3">1. Check the Scene and the Person</h4>
              <ul className="list-disc ml-6 space-y-2">
                <li>Ensure the scene is safe for you to approach</li>
                <li>Tap the person's shoulder and shout "Are you okay?"</li>
                <li>Check for normal breathing (look, listen, feel)</li>
                <li>If unresponsive and not breathing normally, call emergency services</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h4 className="font-bold text-lg mb-3">2. Begin Chest Compressions (C)</h4>
              <ol className="list-decimal ml-6 space-y-2">
                <li>Place the heel of one hand on the center of the chest (between nipples)</li>
                <li>Place your other hand on top and interlock fingers</li>
                <li>Position your shoulders directly over your hands</li>
                <li>Push hard and fast (at least 2 inches deep, 100-120 compressions per minute)</li>
                <li>Allow complete chest recoil between compressions</li>
                <li>Minimize interruptions in compressions</li>
              </ol>
              <p className="mt-3 italic">Tip: Compress to the beat of "Stayin' Alive" by the Bee Gees</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h4 className="font-bold text-lg mb-3">3. Open the Airway (A)</h4>
              <ol className="list-decimal ml-6 space-y-2">
                <li>After 30 compressions, open the airway using the head-tilt/chin-lift maneuver</li>
                <li>Place your palm on the forehead and tilt the head back</li>
                <li>With your other hand, lift the chin forward to open the airway</li>
              </ol>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-lg mb-3">4. Give Rescue Breaths (B)</h4>
              <ol className="list-decimal ml-6 space-y-2">
                <li>Pinch the nose shut</li>
                <li>Take a normal breath and cover the person's mouth with yours</li>
                <li>Give 2 breaths (1 second each) while watching for chest rise</li>
                <li>If chest doesn't rise, reposition the airway and try again</li>
                <li>Continue cycles of 30 compressions to 2 breaths</li>
                <li>Use an AED if available and follow its instructions</li>
              </ol>
            </div>
            
            <h3 className="font-bold text-xl mt-8 mb-4">Child and Infant CPR Differences</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-lg mb-3">Child CPR (1 year to puberty)</h4>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Use one or two hands for compressions (about 2 inches deep)</li>
                  <li>Compression to breath ratio: 30:2 for single rescuer, 15:2 for two rescuers</li>
                  <li>For breaths, cover both mouth and nose of small children</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-lg mb-3">Infant CPR (Under 1 year)</h4>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Use two fingers (index and middle) for compressions (about 1.5 inches deep)</li>
                  <li>Compression to breath ratio: 30:2 for single rescuer, 15:2 for two rescuers</li>
                  <li>For breaths, cover both mouth and nose with your mouth</li>
                  <li>Support the head in neutral position during compressions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

                <BloodTypeInfo />

        <div className="max-w-4xl mx-auto my-16">
          <div className="flex items-center justify-center mb-8">
            <ThumbsUp className="h-8 w-8 text-blood-600 mr-3" />
            <h2 className="text-2xl font-bold">Health Benefits of Donating Blood</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-3">Physical Benefits</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <div className="text-green-500 mr-2">✓</div>
                  <div>
                    <strong>Free Health Check-up:</strong> Blood donation includes a mini health screening.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-2">✓</div>
                  <div>
                    <strong>Reduced Risk of Heart Disease:</strong> Regular blood donation may help reduce iron stores, which could lower heart disease risk.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-2">✓</div>
                  <div>
                    <strong>Blood Cell Production:</strong> Donating blood stimulates the production of new blood cells.
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-3">Psychological Benefits</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <div className="text-green-500 mr-2">✓</div>
                  <div>
                    <strong>Sense of Contribution:</strong> Knowing you've helped save lives can boost self-esteem.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-2">✓</div>
                  <div>
                    <strong>Community Connection:</strong> Being part of a community of donors creates a sense of belonging.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-2">✓</div>
                  <div>
                    <strong>Positive Impact:</strong> Making a positive impact on others' lives can improve mental well-being.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto my-16">
          <div className="flex items-center justify-center mb-8">
            <AlertCircle className="h-8 w-8 text-blood-600 mr-3" />
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          </div>
          
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-md">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-6">How often can I donate blood?</AccordionTrigger>
              <AccordionContent className="px-6">
                <p className="text-gray-700">
                  Most people can donate whole blood every 56 days (8 weeks). For platelet donations, you can donate every 7 days, up to 24 times per year. Plasma donations can be made every 28 days, and double red cell donations every 112 days.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="px-6">Does blood donation hurt?</AccordionTrigger>
              <AccordionContent className="px-6">
                <p className="text-gray-700">
                  Most donors report feeling only a slight pinch when the needle is inserted. The actual blood donation process is relatively painless. Our staff is trained to make the experience as comfortable as possible.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="px-6">How long does the donation process take?</AccordionTrigger>
              <AccordionContent className="px-6">
                <p className="text-gray-700">
                  The entire process, from registration to refreshments, typically takes about an hour. The actual blood donation usually takes only 8-10 minutes. Platelet donations take longer, approximately 1.5 to 2.5 hours.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="px-6">Is it safe to donate blood?</AccordionTrigger>
              <AccordionContent className="px-6">
                <p className="text-gray-700">
                  Yes, blood donation is very safe. All equipment used is sterile and disposed of after a single use. There is no risk of contracting any disease by donating blood. Staff members are trained to ensure your safety throughout the process.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="px-6">How much blood is taken during a donation?</AccordionTrigger>
              <AccordionContent className="px-6">
                <p className="text-gray-700">
                  For a whole blood donation, approximately one pint (about 470 ml) of blood is collected. This is only about 10% of the total blood in your body. Your body replaces the fluid within 24 hours and the red blood cells within a few weeks.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger className="px-6">Can I donate if I'm taking medication?</AccordionTrigger>
              <AccordionContent className="px-6">
                <p className="text-gray-700">
                  Many medications are acceptable for blood donation. However, some medications may require a waiting period after your last dose. It's best to inform the staff about any medications you're taking during the pre-donation screening.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7">
              <AccordionTrigger className="px-6">What should I do before and after donating blood?</AccordionTrigger>
              <AccordionContent className="px-6">
                <p className="text-gray-700">
                  Before donating: Eat a healthy meal, stay hydrated, get a good night's sleep, and avoid fatty foods. After donating: Rest for a few minutes, have a snack and drink provided at the donation center, stay hydrated, avoid strenuous activities for the rest of the day, and keep the bandage on for at least 4 hours.
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
