'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Filter, MapPin, Award } from 'lucide-react';
import { mockHorses } from '@/lib/mockData';
import { filterHorses, formatPrice } from '@/lib/utils';
import { SearchFilters, Discipline, SkillLevel, LeaseType } from '@/types';

export default function BrowsePage() {
  const [filters, setFilters] = useState<SearchFilters>({});
  const [showFilters, setShowFilters] = useState(false);

  const filteredHorses = filterHorses(mockHorses, filters);

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
                className="text-green-700 hover:text-green-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                Browse Horses
              </Link>
              <Link
                href="/how-it-works"
                className="text-gray-700 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium"
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

      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Browse Horses</h1>
          <div className="flex gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, breed, or location..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <Filter className="w-5 h-5" />
              Filters
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-64 flex-shrink-0">
              <div className="bg-white rounded-lg shadow p-6 space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Discipline</h3>
                  <select
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    value={filters.discipline || ''}
                    onChange={(e) =>
                      setFilters({ ...filters, discipline: e.target.value as Discipline || undefined })
                    }
                  >
                    <option value="">All</option>
                    <option value="hunter">Hunter</option>
                    <option value="jumper">Jumper</option>
                    <option value="equitation">Equitation</option>
                    <option value="dressage">Dressage</option>
                    <option value="western">Western</option>
                    <option value="eventing">Eventing</option>
                  </select>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Skill Level</h3>
                  <select
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    value={filters.skillLevel || ''}
                    onChange={(e) =>
                      setFilters({ ...filters, skillLevel: e.target.value as SkillLevel || undefined })
                    }
                  >
                    <option value="">All</option>
                    <option value="beginner">Beginner Safe</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Lease Type</h3>
                  <select
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    value={filters.leaseType || ''}
                    onChange={(e) =>
                      setFilters({ ...filters, leaseType: e.target.value as LeaseType || undefined })
                    }
                  >
                    <option value="">All</option>
                    <option value="full">Full Lease</option>
                    <option value="half">Half Lease</option>
                    <option value="quarter">Quarter Lease</option>
                  </select>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Max Price</h3>
                  <input
                    type="number"
                    placeholder="Monthly budget"
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    value={filters.maxPrice || ''}
                    onChange={(e) =>
                      setFilters({ ...filters, maxPrice: e.target.value ? Number(e.target.value) : undefined })
                    }
                  />
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Height (Hands)</h3>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      step="0.1"
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      value={filters.minHeight || ''}
                      onChange={(e) =>
                        setFilters({ ...filters, minHeight: e.target.value ? Number(e.target.value) : undefined })
                      }
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      step="0.1"
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      value={filters.maxHeight || ''}
                      onChange={(e) =>
                        setFilters({ ...filters, maxHeight: e.target.value ? Number(e.target.value) : undefined })
                      }
                    />
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Distance</h3>
                  <select
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    value={filters.maxDistance || ''}
                    onChange={(e) =>
                      setFilters({ ...filters, maxDistance: e.target.value ? Number(e.target.value) : undefined })
                    }
                  >
                    <option value="">Any</option>
                    <option value="10">Within 10 miles</option>
                    <option value="25">Within 25 miles</option>
                    <option value="50">Within 50 miles</option>
                    <option value="100">Within 100 miles</option>
                  </select>
                </div>

                <button
                  onClick={() => setFilters({})}
                  className="w-full text-sm text-green-700 hover:text-green-800"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          )}

          {/* Horse Grid */}
          <div className="flex-1">
            <div className="mb-4 text-gray-600">
              {filteredHorses.length} horses available
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredHorses.map((horse) => (
                <Link
                  key={horse.id}
                  href={`/horses/${horse.id}`}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="relative h-48">
                    <Image
                      src={horse.images[0]}
                      alt={horse.name}
                      fill
                      className="object-cover"
                    />
                    {horse.isVerified && (
                      <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        Verified
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{horse.name}</h3>
                    <div className="flex items-center text-gray-600 text-sm mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      {horse.location}
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      {horse.age} yr • {horse.height} hands • {horse.breed}
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {horse.discipline.slice(0, 2).map((d) => (
                        <span
                          key={d}
                          className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs"
                        >
                          {d.charAt(0).toUpperCase() + d.slice(1)}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t">
                      <span className="text-sm text-gray-500">
                        {horse.skillLevelRequired === 'beginner'
                          ? 'Beginner Safe'
                          : horse.skillLevelRequired.charAt(0).toUpperCase() +
                            horse.skillLevelRequired.slice(1)}
                      </span>
                      <span className="font-semibold text-green-700">
                        {formatPrice(Math.min(...(Object.values(horse.price).filter(p => p !== undefined) as number[])))}
                        /mo
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredHorses.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No horses found matching your criteria.</p>
                <button
                  onClick={() => setFilters({})}
                  className="mt-4 text-green-700 hover:text-green-800"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
