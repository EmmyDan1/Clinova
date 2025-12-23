import { Doctor } from '../types';

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    specialty: 'Cardiology',
    subSpecialty: 'Interventional Cardiology',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
    bio: 'Board-certified cardiologist with 15+ years experience in preventive cardiology and heart disease management.',
    experience: 15,
    education: ['Johns Hopkins University', 'Mayo Clinic Fellowship'],
    languages: ['English', 'Mandarin', 'Spanish']
  },
  {
    id: '2',
    name: 'Dr. Michael Rodriguez',
    specialty: 'Orthopedics',
    subSpecialty: 'Sports Medicine',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
    bio: 'Specializes in minimally invasive joint surgery and sports injury rehabilitation.',
    experience: 12,
    education: ['Harvard Medical School', 'Stanford Orthopedic Residency'],
    languages: ['English', 'Spanish']
  },
  {
    id: '3',
    name: 'Dr. Priya Sharma',
    specialty: 'Pediatrics',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
    bio: 'Dedicated to providing compassionate care for children from infancy through adolescence.',
    experience: 10,
    education: ['University of California, San Francisco', 'Boston Children\'s Hospital'],
    languages: ['English', 'Hindi', 'Gujarati']
  },
  {
    id: '4',
    name: 'Dr. James Wilson',
    specialty: 'Neurology',
    subSpecialty: 'Movement Disorders',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
    bio: 'Expert in neurodegenerative diseases with research focus on Parkinson\'s disease treatments.',
    experience: 20,
    education: ['Yale School of Medicine', 'Cleveland Clinic Fellowship'],
    languages: ['English', 'French']
  },
  {
    id: '5',
    name: 'Dr. Elena Martinez',
    specialty: 'Dermatology',
    image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&h=400&fit=crop',
    bio: 'Specializes in medical and cosmetic dermatology with focus on skin cancer prevention.',
    experience: 8,
    education: ['University of Michigan', 'NYU Dermatology Residency'],
    languages: ['English', 'Spanish', 'Italian']
  },
  {
    id: '6',
    name: 'Dr. Robert Kim',
    specialty: 'General Surgery',
    subSpecialty: 'Laparoscopic Surgery',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
    bio: 'Performs advanced minimally invasive surgeries with focus on patient recovery and comfort.',
    experience: 14,
    education: ['Duke University School of Medicine', 'Mass General Surgical Residency'],
    languages: ['English', 'Korean']
  }
];