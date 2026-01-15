import Link from 'next/link';
import { Search, Shield, FileCheck, Award } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="text-2xl">🐴</div>
              <span className="text-xl font-bold text-green-800">Stride</span>
            </div>
            <div className="flex gap-4">
              <Link
                href="/browse"
                className="text-gray-700 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium"
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

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            The Modern Way to Lease a Horse
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Connecting passionate riders with quality horses through a secure, transparent
            marketplace. From lesson horses to competitive partners, find your perfect match.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/browse"
              className="bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-green-800 transition-colors"
            >
              Browse Horses
            </Link>
            <Link
              href="/list-horse"
              className="bg-white text-green-700 border-2 border-green-700 px-8 py-3 rounded-lg text-lg font-medium hover:bg-green-50 transition-colors"
            >
              List Your Horse
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 text-center">
          <div>
            <div className="text-4xl font-bold text-green-700">50+</div>
            <div className="text-gray-600 mt-2">Horses Available</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-700">100+</div>
            <div className="text-gray-600 mt-2">Happy Riders</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-700">25+</div>
            <div className="text-gray-600 mt-2">Partner Barns</div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Stride?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Discovery</h3>
              <p className="text-gray-600">
                Search by location, discipline, skill level, and price. Find your perfect match in minutes.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Horses</h3>
              <p className="text-gray-600">
                All horses include vet checks, show records, and detailed medical history.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Digital Contracts</h3>
              <p className="text-gray-600">
                Standardized lease agreements that protect both riders and owners.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trainer Network</h3>
              <p className="text-gray-600">
                Built-in trainer verification ensures safe matches and proper skill levels.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-green-700 mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Search & Filter</h3>
              <p className="text-gray-600">
                Browse horses by location, discipline, and your skill level. Use advanced filters
                to find exactly what you need.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-green-700 mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Book a Trial</h3>
              <p className="text-gray-600">
                Schedule a trial ride with trainer approval. Meet the horse and see if it's
                the right fit for your goals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-green-700 mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Sign & Ride</h3>
              <p className="text-gray-600">
                Complete the digital lease agreement and start riding. Automatic payments
                and trainer commissions included.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Match?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of riders and owners using Stride to make equestrian sports more accessible.
          </p>
          <Link
            href="/browse"
            className="bg-white text-green-700 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-2xl">🐴</div>
                <span className="text-xl font-bold">Stride</span>
              </div>
              <p className="text-gray-400">
                The modern marketplace for horse leasing.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Riders</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/browse">Browse Horses</Link></li>
                <li><Link href="/how-it-works">How It Works</Link></li>
                <li><Link href="/safety">Safety</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Owners</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/list-horse">List Your Horse</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/insurance">Insurance</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/terms">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Stride. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
