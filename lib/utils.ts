import { Horse, SearchFilters } from '@/types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(price);
}

export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 3959; // Radius of Earth in miles
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Sample coordinates for Manhasset, NY
export const DEFAULT_LOCATION = {
  lat: 40.7982,
  lng: -73.6993,
  name: 'Manhasset, NY',
};

export function filterHorses(horses: Horse[], filters: SearchFilters): Horse[] {
  return horses.filter((horse) => {
    // Discipline filter
    if (filters.discipline && !horse.discipline.includes(filters.discipline)) {
      return false;
    }

    // Skill level filter
    if (filters.skillLevel) {
      const skillOrder = ['beginner', 'intermediate', 'advanced'];
      const horseSkillIndex = skillOrder.indexOf(horse.skillLevelRequired);
      const filterSkillIndex = skillOrder.indexOf(filters.skillLevel);
      if (horseSkillIndex > filterSkillIndex) {
        return false;
      }
    }

    // Lease type filter
    if (filters.leaseType && !horse.leaseTypes.includes(filters.leaseType)) {
      return false;
    }

    // Price filter
    if (filters.maxPrice) {
      const prices = Object.values(horse.price).filter((p) => p !== undefined);
      const minPrice = Math.min(...(prices as number[]));
      if (minPrice > filters.maxPrice) {
        return false;
      }
    }

    // Height filters
    if (filters.minHeight && horse.height < filters.minHeight) {
      return false;
    }
    if (filters.maxHeight && horse.height > filters.maxHeight) {
      return false;
    }

    // Onsite only filter
    if (filters.onsiteOnly !== undefined && filters.onsiteOnly !== horse.onsiteOnly) {
      return false;
    }

    // Distance filter
    if (filters.maxDistance && horse.coordinates) {
      const distance = calculateDistance(
        DEFAULT_LOCATION.lat,
        DEFAULT_LOCATION.lng,
        horse.coordinates.lat,
        horse.coordinates.lng
      );
      if (distance > filters.maxDistance) {
        return false;
      }
    }

    return true;
  });
}

export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
