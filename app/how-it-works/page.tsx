import Link from 'next/link';
import { Search, Calendar, FileCheck, Shield, DollarSign, Award } from 'lucide-react';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="text-2xl">🐴</div>
              <span className="text-xl font-bold text-green-800">Stride</span>
            </Link>
            <div className="flex gap-4">
              <Link
                href="/browse"
                className="text-gray-700 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Browse Horses
              </Link>
              <Link
                href="/how-it-works"
                className="text-green-700 hover:text-green-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                How It Works
              </Link>
              <button className="bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-800">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="bg-gradient-to-b from-green-100 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">How Stride Works</h1>
          <p className="text-xl text-gray-600">
            A simple, secure process for finding and leasing the perfect horse
          </p>
        </div>
      </div>

      {/* For Riders */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">For Riders & Parents</h2>
          <div className="space-y-12">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Search className="w-8 h-8 text-green-700" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">1. Search & Filter</h3>
                <p className="text-gray-600 mb-3">
                  Browse available horses using our advanced search. Filter by location, discipline,
                  skill level, price range, and more. Each listing includes detailed information,
                  photos, videos, and verified vet records.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 ml-4">
                  <li>• View complete medical history and show records</li>
                  <li>• See availability calendar for trial rides</li>
                  <li>• Compare full, half, and quarter lease options</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-green-700" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">2. Trainer Verification</h3>
                <p className="text-gray-600 mb-3">
                  Safety first! Your trainer must verify your skill level matches the horse's
                  requirements. This protects both you and the horse, ensuring a safe and successful
                  partnership.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 ml-4">
                  <li>• Trainer receives commission automatically (10-15%)</li>
                  <li>• Trainer approves trial ride bookings</li>
                  <li>• Ongoing support from your training team</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Calendar className="w-8 h-8 text-green-700" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">3. Book a Trial Ride</h3>
                <p className="text-gray-600 mb-3">
                  Schedule a trial ride to meet the horse in person. Trial rides cost $75 and last
                  approximately one hour. Meet the owner, assess the horse's temperament, and
                  determine if it's the right fit.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 ml-4">
                  <li>• Easy online scheduling</li>
                  <li>• Owner approval within 24-48 hours</li>
                  <li>• Bring your trainer for their evaluation</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <FileCheck className="w-8 h-8 text-green-700" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">4. Sign Digital Contract</h3>
                <p className="text-gray-600 mb-3">
                  Once you've found your match, complete our standardized digital lease agreement.
                  Our contracts are compliant with state liability laws and protect both parties.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 ml-4">
                  <li>• Clear terms for full, half, or quarter leases</li>
                  <li>• Automatic payment processing</li>
                  <li>• Optional insurance coverage available</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-green-700" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">5. Start Riding!</h3>
                <p className="text-gray-600 mb-3">
                  Begin your lease period and start achieving your equestrian goals. Track your
                  progress, schedule rides, and communicate with the owner through our platform.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 ml-4">
                  <li>• Access to scheduling calendar</li>
                  <li>• Direct messaging with owner</li>
                  <li>• Support from Stride team if needed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* For Owners */}
        <div className="border-t pt-16">
          <h2 className="text-3xl font-bold text-center mb-12">For Horse Owners</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Create Your Listing</h3>
              <p className="text-gray-600">
                Upload photos, videos, and detailed information about your horse. Include vet
                records, show history, and lease terms. Free basic listings, premium options
                available.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Vet Qualified Riders</h3>
              <p className="text-gray-600">
                Review trial ride requests from verified riders. See trainer recommendations and
                skill levels. Approve or decline based on your horse's needs and temperament.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Paid Automatically</h3>
              <p className="text-gray-600">
                Set your lease price and receive automatic monthly payments. Trainer commissions
                are handled automatically. We take a small 5-10% transaction fee.
              </p>
            </div>
          </div>
        </div>

        {/* Trust & Safety */}
        <div className="border-t pt-16 mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Trust & Safety</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Verified Horses</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Recent vet check required (within 6 months)</li>
                <li>• Complete medical history documentation</li>
                <li>• Show records and competition history</li>
                <li>• Owner identity verification</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Verified Riders</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Trainer verification required</li>
                <li>• Skill level assessment</li>
                <li>• Background checks available</li>
                <li>• Rating and review system</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Insurance Options</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Equine accident insurance available</li>
                <li>• Liability coverage for riders</li>
                <li>• Partnership with leading equine insurers</li>
                <li>• Flexible coverage options</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Legal Protection</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• State-compliant lease agreements</li>
                <li>• Digital contract signing</li>
                <li>• Dispute resolution support</li>
                <li>• Legal documentation storage</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Join the modern marketplace for horse leasing
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/browse"
              className="bg-green-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-800"
            >
              Browse Horses
            </Link>
            <Link
              href="/list-horse"
              className="border-2 border-green-700 text-green-700 px-8 py-3 rounded-lg font-medium hover:bg-green-50"
            >
              List Your Horse
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
