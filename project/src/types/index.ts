export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Appointment {
  patientName: ReactNode;
  status: string;
  id: string;
  date: Date;
  time: string;
  department: string;
  location: string;
  description: string;
}

export interface Hospital {
  id: string;
  name: string;
  address: string;
  departments: string[];
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  requiresPrescription: boolean;
  inStock: boolean;
  dosage: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Hospital {
  id: string;
  name: string;
  image: string;
  specializations: string[];
  address: string;
  rating: number;
}

export interface Medicine {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  inStock: boolean;
}

export interface Review {
  id: string;
  userId: string;
  entityId: string; // Can be hospital or doctor id
  entityType: 'hospital' | 'doctor';
  rating: number;
  comment: string;
  createdAt: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  phone?: string;
  medicalHistory?: string[];
  appointments?: string[];
  prescriptions?: string[];
}
