import { Service } from '../types';

export const services: Service[] = [
  {
    id: '1',
    title: 'Cardiology & Heart Care',
    description: 'Comprehensive heart health services including diagnostics, treatment, and rehabilitation.',
    icon: '❤️',
    departments: ['Cardiology', 'Cardiac Surgery', 'Cardiac Rehabilitation']
  },
  {
    id: '2',
    title: 'Orthopedics & Sports Medicine',
    description: 'Advanced treatments for bone, joint, and muscle conditions with sports injury specialization.',
    icon: '🦴',
    departments: ['Orthopedics', 'Sports Medicine', 'Physical Therapy']
  },
  {
    id: '3',
    title: 'Pediatrics & Child Health',
    description: 'Specialized care for infants, children, and adolescents in a child-friendly environment.',
    icon: '👶',
    departments: ['Pediatrics', 'Neonatology', 'Pediatric Surgery']
  },
  {
    id: '4',
    title: 'Neurology & Neurosurgery',
    description: 'Expert diagnosis and treatment of brain, spine, and nervous system disorders.',
    icon: '🧠',
    departments: ['Neurology', 'Neurosurgery', 'Neurorehabilitation']
  },
  {
    id: '5',
    title: 'Dermatology & Skin Care',
    description: 'Medical and cosmetic skin treatments with advanced laser and surgical options.',
    icon: '🌟',
    departments: ['Medical Dermatology', 'Cosmetic Dermatology', 'Skin Cancer Center']
  },
  {
    id: '6',
    title: 'Emergency & Critical Care',
    description: '24/7 emergency services with state-of-the-art trauma and critical care facilities.',
    icon: '🚑',
    departments: ['Emergency Medicine', 'ICU', 'Trauma Center']
  }
];