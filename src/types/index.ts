export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  subSpecialty?: string;
  image: string;
  bio: string;
  experience: number;
  education: string[];
  languages: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  departments: string[];
}

export interface Testimonial {
  id: string;
  patientName: string;
  condition: string;
  content: string;
  rating: number;
  date: string;
}

export interface AppointmentFormData {
  department: string;
  doctorId: string;
  date: string;
  time: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  reason: string;
}

export type AppointmentStep = 'department' | 'doctor' | 'datetime' | 'patient' | 'confirmation';