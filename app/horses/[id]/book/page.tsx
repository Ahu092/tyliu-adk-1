'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, User, Shield, CheckCircle } from 'lucide-react';
import { mockHorses, mockUsers } from '@/lib/mockData';
import { formatPrice } from '@/lib/utils';

export default function BookingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const horse = mockHorses.find((h) => h.id === id);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [notes, setNotes] = useState('');
  const [trainerId, setTrainerId] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!horse) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Horse not found</h1>
          <Link href="/browse" className="text-green-700 hover:text-green-800">
            Back to browse
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <nav className="border-b bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex items-center gap-2">
                <div className="text-2xl">🐴</div>
                <span className="text-xl font-bold text-green-800">Stride</span>
              </Link>
            </div>
          </div>
        </nav>

        <div className="max-w-2xl mx-auto px-4 py-16">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Booking Request Submitted!</h1>
            <p className="text-gray-600 mb-6">
              Your trial ride request for <strong>{horse.name}</strong> has been sent to the owner.
              You'll receive a confirmation email once the owner approves your request.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h3 className="font-semibold mb-2">What happens next?</h3>
              <ol className="text-left text-sm text-gray-700 space-y-2">
                <li>1. The owner will review your request and trainer information</li>
                <li>2. Your trainer will be notified to verify your skill level</li>
                <li>3. Once approved, you'll receive booking details and payment instructions</li>
                <li>4. Meet at the barn for your trial ride!</li>
              </ol>
            </div>
            <div className="flex gap-4 justify-center">
              <Link
                href={`/horses/${horse.id}`}
                className="text-green-700 hover:text-green-800 font-medium"
              >
                Back to listing
              </Link>
              <Link
                href="/browse"
                className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800"
              >
                Browse more horses
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
              <button className="bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-800">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-600">
          <Link href="/browse" className="hover:text-green-700">
            Browse
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/horses/${horse.id}`} className="hover:text-green-700">
            {horse.name}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Book Trial Ride</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6">
              <h1 className="text-2xl font-bold mb-6">Book a Trial Ride</h1>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Date Selection */}
                <div>
                  <label className="block font-medium mb-2">
                    <Calendar className="w-5 h-5 inline mr-2" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <p className="text-sm text-gray-600 mt-1">
                    Available days: {horse.availableDays.join(', ')}
                  </p>
                </div>

                {/* Time Selection */}
                <div>
                  <label className="block font-medium mb-2">
                    <Clock className="w-5 h-5 inline mr-2" />
                    Preferred Time
                  </label>
                  <select
                    required
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select a time</option>
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="5:00 PM">5:00 PM</option>
                  </select>
                </div>

                {/* Trainer Information */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-2 mb-3">
                    <Shield className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-blue-900">Trainer Verification Required</h3>
                      <p className="text-sm text-blue-800">
                        For safety, all trial rides require trainer approval. Your trainer will verify
                        your skill level matches this horse's requirements.
                      </p>
                    </div>
                  </div>
                  <div>
                    <label className="block font-medium mb-2">
                      <User className="w-5 h-5 inline mr-2" />
                      Your Trainer
                    </label>
                    <select
                      required
                      value={trainerId}
                      onChange={(e) => setTrainerId(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select your trainer</option>
                      {mockUsers
                        .filter((u) => u.role === 'trainer')
                        .map((trainer) => (
                          <option key={trainer.id} value={trainer.id}>
                            {trainer.name} - {trainer.location}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>

                {/* Rider Information */}
                <div>
                  <label className="block font-medium mb-2">Your Information</label>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block font-medium mb-2">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={4}
                    placeholder="Tell the owner about your riding experience, goals, or any questions..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                {/* Submit */}
                <div className="flex gap-4">
                  <Link
                    href={`/horses/${horse.id}`}
                    className="flex-1 border-2 border-gray-300 text-gray-700 text-center px-6 py-3 rounded-lg font-medium hover:bg-gray-50"
                  >
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    className="flex-1 bg-green-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-800"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-4">
              <h3 className="font-semibold mb-4">Booking Summary</h3>

              <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={horse.images[0]}
                  alt={horse.name}
                  fill
                  className="object-cover"
                />
              </div>

              <h4 className="font-semibold text-lg mb-2">{horse.name}</h4>
              <p className="text-gray-600 text-sm mb-4">
                {horse.age} yr • {horse.height} hands • {horse.breed}
              </p>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Trial Ride Fee</span>
                  <span className="font-semibold">$75.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-semibold">1 hour</span>
                </div>
              </div>

              <div className="border-t mt-4 pt-4">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span className="text-green-700 text-xl">$75.00</span>
                </div>
              </div>

              <div className="mt-6 text-xs text-gray-500">
                <p>Payment will be collected after the owner approves your request.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
