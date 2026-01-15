# 🐴 Stride - Horse Leasing Marketplace

**Stride** is a modern marketplace platform that connects passionate riders with quality horses through secure, transparent leasing. Think "Turo for Horses" - democratizing access to equestrian sports by making horse leasing accessible, safe, and standardized.

## 🎯 Project Overview

Stride addresses a major gap in the equestrian market: finding and leasing horses is currently fragmented across word-of-mouth, physical bulletin boards, and messy Facebook groups. Our platform provides:

- **For Riders/Parents**: Easy access to quality horses without the capital commitment of buying
- **For Owners**: Offset boarding costs ($1,500-$3,000+/month) while ensuring their horses get proper exercise
- **For Trainers**: Streamlined management and automatic commission handling

## ✨ Key Features

### Core Functionality (MVP)
- **Horse Listings**: Detailed profiles with breed, age, height, discipline, photos, videos, and medical records
- **Advanced Search & Filtering**: By location, discipline, skill level, price, height, and more
- **Lease Options**: Full lease, half lease, and quarter lease with clear pricing
- **Trial Ride Booking**: Schedule and manage trial rides with automatic approvals
- **Trainer Verification**: Safety-first approach with trainer approval requirements
- **Verified Horses**: Vet check uploads and medical history documentation

### Trust & Safety Features
- Verified horse badges (vet records within 6 months)
- Trainer verification for rider skill levels
- Digital lease contracts (coming soon)
- Insurance integration options (coming soon)

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Data**: Mock data (ready for database integration)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tyliu-adk-1
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
tyliu-adk-1/
├── app/
│   ├── page.tsx                    # Home page
│   ├── browse/
│   │   └── page.tsx               # Browse horses with filters
│   ├── horses/
│   │   └── [id]/
│   │       ├── page.tsx           # Horse detail page
│   │       └── book/
│   │           └── page.tsx       # Trial ride booking
│   └── how-it-works/
│       └── page.tsx               # How it works page
├── lib/
│   ├── mockData.ts                # Sample data for demo
│   └── utils.ts                   # Utility functions
├── types/
│   └── index.ts                   # TypeScript type definitions
└── README.md
```

## 🎨 Key Pages

### Home Page (`/`)
- Hero section with value proposition
- Feature highlights
- Call-to-action buttons
- Stats showcase

### Browse Horses (`/browse`)
- Grid view of all available horses
- Advanced filtering sidebar
- Real-time filter updates
- Verified horse badges

### Horse Detail (`/horses/[id]`)
- Complete horse information
- Image gallery with video support
- Lease pricing options
- Owner information
- Trial ride booking CTA

### Book Trial Ride (`/horses/[id]/book`)
- Date and time selection
- Trainer verification requirement
- Rider information form
- Booking confirmation flow

### How It Works (`/how-it-works`)
- Step-by-step guide for riders
- Information for horse owners
- Trust & safety features
- Insurance and legal protection

## 📊 Mock Data

The prototype uses mock data located in `lib/mockData.ts`:
- 5 sample horses with diverse disciplines and skill levels
- 3 sample users (owner, rider, trainer)
- Sample booking data

This data structure is ready for database integration with minimal changes.

## 🔒 Type System

Full TypeScript support with comprehensive types in `types/index.ts`:
- `Horse`: Complete horse profile information
- `User`: User accounts with role-based access
- `Booking`: Trial ride booking management
- `LeaseAgreement`: Lease contract details (future feature)
- `SearchFilters`: Search and filter parameters

## 🚧 Roadmap

### Phase 1: MVP (Current)
- [x] Home page with marketing content
- [x] Browse horses with filtering
- [x] Horse detail pages
- [x] Trial ride booking flow
- [x] How it works page

### Phase 2: Core Features
- [ ] User authentication (riders, owners, trainers)
- [ ] Database integration (PostgreSQL/Supabase)
- [ ] Real booking system with notifications
- [ ] Digital lease contracts
- [ ] Payment processing (Stripe)

### Phase 3: Advanced Features
- [ ] Trainer commission automation
- [ ] Insurance integration
- [ ] Messaging system
- [ ] Calendar management
- [ ] Mobile app (React Native)

### Phase 4: Growth Features
- [ ] Rating and review system
- [ ] Advanced analytics for owners
- [ ] Trainer dashboard with student management
- [ ] Location-based recommendations
- [ ] Social features and community

## 💼 Business Model

- **Transaction Fee**: 5-10% on monthly lease payments
- **Listing Fee**: Free basic listings, premium featured listings available
- **Trainer Pro**: SaaS tools for trainers (free to start)
- **Insurance**: Partnership commissions

## 🎯 Target Market

1. **Lessees**: Parents of junior riders (8-17) or adult amateurs
2. **Lessors**: Private owners or breeding barns
3. **Trainers**: Key gatekeepers requiring approval tools and commission handling

## 🔐 Trust & Safety

- Verified horse badges requiring recent vet checks
- Trainer verification for rider skill matching
- Digital contracts protecting both parties
- Optional insurance coverage
- Dispute resolution support

## 🤝 Contributing

This is a prototype/MVP. Future contributions welcome for:
- Database schema design
- Authentication implementation
- Payment integration
- Mobile app development
- UX/UI improvements

## 📝 License

Private project - All rights reserved

## 📧 Contact

For questions about this prototype or the Stride concept, please reach out to the project maintainers.

---

Built with ❤️ for the equestrian community
