export type UserRole = 'rider' | 'owner' | 'trainer';

export type LeaseType = 'full' | 'half' | 'quarter';

export type Discipline = 'hunter' | 'jumper' | 'equitation' | 'dressage' | 'western' | 'eventing';

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  phone?: string;
  location: string;
  verifiedBy?: string; // Trainer ID for riders
  createdAt: Date;
}

export interface Horse {
  id: string;
  name: string;
  breed: string;
  age: number;
  height: number; // in hands
  color: string;
  gender: 'mare' | 'gelding' | 'stallion';
  discipline: Discipline[];
  skillLevelRequired: SkillLevel;
  leaseTypes: LeaseType[];
  onsiteOnly: boolean;
  location: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  price: {
    full?: number;
    half?: number;
    quarter?: number;
  };
  description: string;
  features: string[];
  images: string[];
  videoUrl?: string;
  ownerId: string;
  ownerName: string;
  showRecord?: string;
  medicalHistory?: string;
  vetCheckDate?: Date;
  isVerified: boolean;
  availableDays: string[];
  createdAt: Date;
}

export interface Booking {
  id: string;
  horseId: string;
  riderId: string;
  trainerId?: string;
  date: Date;
  status: 'pending' | 'approved' | 'rejected' | 'completed';
  notes?: string;
  trialRideFee: number;
  createdAt: Date;
}

export interface LeaseAgreement {
  id: string;
  horseId: string;
  lessorId: string;
  lesseeId: string;
  trainerId?: string;
  leaseType: LeaseType;
  startDate: Date;
  endDate: Date;
  monthlyPayment: number;
  trainerCommission?: number;
  terms: string;
  signed: boolean;
  createdAt: Date;
}

export interface SearchFilters {
  discipline?: Discipline;
  skillLevel?: SkillLevel;
  leaseType?: LeaseType;
  maxPrice?: number;
  maxDistance?: number;
  location?: string;
  minHeight?: number;
  maxHeight?: number;
  onsiteOnly?: boolean;
}
