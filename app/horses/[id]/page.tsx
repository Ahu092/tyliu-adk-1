'use client';

import { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin,
  Award,
  Calendar,
  Clock,
  CheckCircle,
  FileText,
  Video,
} from 'lucide-react';
import { mockHorses, mockUsers } from '@/lib/mockData';
import { formatPrice, formatDate } from '@/lib/utils';

export default function HorseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const horse = mockHorses.find((h) => h.id === id);
  const owner = mockUsers.find((u) => u.id === horse?.ownerId);

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
              <div className="relative h-96">
                <Image
                  src={horse.images[0]}
                  alt={horse.name}
                  fill
                  className="object-cover"
                />
                {horse.isVerified && (
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-2 rounded-lg font-medium flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Verified Horse
                  </div>
                )}
              </div>
              <div className="grid grid-cols-3 gap-2 p-4">
                {horse.images.slice(1).map((img, idx) => (
                  <div key={idx} className="relative h-24">
                    <Image
                      src={img}
                      alt={`${horse.name} ${idx + 2}`}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                ))}
                {horse.videoUrl && (
                  <div className="relative h-24 bg-gray-900 rounded flex items-center justify-center">
                    <Video className="w-8 h-8 text-white" />
                  </div>
                )}
              </div>
            </div>

            {/* Details */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h1 className="text-3xl font-bold mb-2">{horse.name}</h1>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                {horse.location}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="border rounded-lg p-3">
                  <div className="text-sm text-gray-500">Breed</div>
                  <div className="font-semibold">{horse.breed}</div>
                </div>
                <div className="border rounded-lg p-3">
                  <div className="text-sm text-gray-500">Age</div>
                  <div className="font-semibold">{horse.age} years</div>
                </div>
                <div className="border rounded-lg p-3">
                  <div className="text-sm text-gray-500">Height</div>
                  <div className="font-semibold">{horse.height} hands</div>
                </div>
                <div className="border rounded-lg p-3">
                  <div className="text-sm text-gray-500">Gender</div>
                  <div className="font-semibold capitalize">{horse.gender}</div>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">About</h2>
                <p className="text-gray-700 leading-relaxed">{horse.description}</p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Disciplines</h2>
                <div className="flex flex-wrap gap-2">
                  {horse.discipline.map((d) => (
                    <span
                      key={d}
                      className="bg-green-100 text-green-800 px-3 py-1 rounded-full"
                    >
                      {d.charAt(0).toUpperCase() + d.slice(1)}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Features</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {horse.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {horse.showRecord && (
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Show Record
                  </h2>
                  <p className="text-gray-700">{horse.showRecord}</p>
                </div>
              )}

              {horse.vetCheckDate && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-5 h-5 text-green-700" />
                    <span className="font-semibold text-green-900">
                      Recent Vet Check
                    </span>
                  </div>
                  <p className="text-sm text-green-800">
                    Last veterinary examination: {formatDate(horse.vetCheckDate)}
                  </p>
                </div>
              )}
            </div>

            {/* Availability */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Availability
              </h2>
              <div className="flex flex-wrap gap-2">
                {horse.availableDays.map((day) => (
                  <span
                    key={day}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
                  >
                    {day}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Pricing */}
            <div className="bg-white rounded-lg shadow p-6 mb-6 sticky top-4">
              <h2 className="text-xl font-semibold mb-4">Lease Options</h2>
              <div className="space-y-4">
                {horse.price.full && horse.leaseTypes.includes('full') && (
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-semibold">Full Lease</div>
                        <div className="text-sm text-gray-600">6 days/week</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-700">
                          {formatPrice(horse.price.full)}
                        </div>
                        <div className="text-sm text-gray-500">/month</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Includes all board, vet, and farrier costs
                    </p>
                  </div>
                )}

                {horse.price.half && horse.leaseTypes.includes('half') && (
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-semibold">Half Lease</div>
                        <div className="text-sm text-gray-600">3 days/week</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-700">
                          {formatPrice(horse.price.half)}
                        </div>
                        <div className="text-sm text-gray-500">/month</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">Fixed monthly fee</p>
                  </div>
                )}

                {horse.price.quarter && horse.leaseTypes.includes('quarter') && (
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-semibold">Quarter Lease</div>
                        <div className="text-sm text-gray-600">1-2 days/week</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-700">
                          {formatPrice(horse.price.quarter)}
                        </div>
                        <div className="text-sm text-gray-500">/month</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">Limited riding schedule</p>
                  </div>
                )}
              </div>

              <div className="mt-6 space-y-3">
                <Link
                  href={`/horses/${horse.id}/book`}
                  className="block w-full bg-green-700 text-white text-center px-6 py-3 rounded-lg font-medium hover:bg-green-800 transition-colors"
                >
                  Book Trial Ride
                </Link>
                <button className="w-full border-2 border-green-700 text-green-700 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors">
                  Contact Owner
                </button>
              </div>

              <div className="mt-6 pt-6 border-t">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">Trial rides: $75</span>
                </div>
                <div className="text-sm text-gray-500">
                  {horse.onsiteOnly ? 'On-site only' : 'Can move to your barn'}
                </div>
              </div>
            </div>

            {/* Owner Info */}
            {owner && (
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-semibold mb-3">Listed by</h3>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center text-green-800 font-semibold">
                    {owner.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium">{owner.name}</div>
                    <div className="text-sm text-gray-500">{owner.location}</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  Member since {formatDate(owner.createdAt)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
