import { doctors } from '../data/doctors';
import { Calendar, ChevronRight } from 'lucide-react';

const DoctorsPage: React.FC = () => {
  const specialties = Array.from(new Set(doctors.map(d => d.specialty)));

  return (
    <div className="py-20 bg-[#273f23]">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Modern header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-yellow-400" />
            <span className="text-xs font-medium tracking-widest text-yellow-400 uppercase">
              Specialists
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-end">
            <div>
              <h1 className="text-4xl font-light text-white mb-4">
                Our <span className="font-medium">Medical Team</span>
              </h1>

            </div>
            
            {/* Clean filter */}
            <div className="flex flex-wrap gap-2 justify-end">
              <button className="px-4 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/15 rounded-full transition-colors backdrop-blur-sm">
                All
              </button>
              {specialties.map((specialty) => (
                <button
                  key={specialty}
                  className="px-4 py-2 text-sm text-yellow-100/30 hover:text-yellow-400 hover:bg-white/5 rounded-full transition-colors"
                >
                  {specialty}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Clean grid - no cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <div 
              key={doctor.id}
              className="group overflow-hidden"
            >
              {/* Image container */}
              <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Specialty */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 text-xs font-medium text-white bg-black/40 backdrop-blur-sm rounded-full">
                    {doctor.specialty}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="px-2">
                <div className="mb-4">
                  <h3 className="text-lg font-medium text-white mb-1">
                    {doctor.name}
                  </h3>
                  {doctor.subSpecialty && (
                    <p className="text-sm text-yellow-100/30">
                      {doctor.subSpecialty}
                    </p>
                  )}
                </div>

                {/* Bio */}
                <p className="text-sm text-yellow-100/30 mb-6 line-clamp-2 leading-relaxed">
                  {doctor.bio}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm mb-6">
                  <div className="text-white">
                    <span className="font-medium">{doctor.experience}+</span> years
                  </div>
                  <div className="text-yellow-100/30">
                    <span className="font-medium text-white">98%</span> satisfaction
                  </div>
                </div>
                
                {/* Languages */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {doctor.languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-2.5 py-1 text-xs font-medium text-yellow-100/30 bg-white/5 rounded-full"
                    >
                      {lang}
                    </span>
                  ))}
                </div>

                {/* Action */}
                <button className="w-full py-3 text-sm font-medium text-white hover:text-yellow-400 hover:bg-white/5 rounded-xl transition-colors flex items-center justify-center gap-2 group/btn border border-white/10">
                  <Calendar className="w-4 h-4" />
                  <span>Schedule consultation</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal stats */}
        <div className="mt-24 pt-20 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '24/7', label: 'Consultation' },
                { value: '≤48h', label: 'Appointment' },
                { value: '98%', label: 'Satisfaction' },
                { value: '50+', label: 'Specialists' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl font-light text-white mb-1.5">
                    {stat.value}
                  </div>
                  <div className="text-sm text-yellow-100/30">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsPage;