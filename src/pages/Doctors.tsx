
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { doctors } from '../data/doctors';

const DoctorsPage: React.FC = () => {
  const specialties = Array.from(new Set(doctors.map(d => d.specialty)));

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Medical Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our team of board-certified physicians dedicated to providing 
            exceptional care with compassion and expertise.
          </p>
        </div>

        {/* Specialty Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            <button className="px-4 py-2 bg-teal-600 text-white rounded-lg">
              All Specialties
            </button>
            {specialties.map((specialty) => (
              <button
                key={specialty}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
              >
                {specialty}
              </button>
            ))}
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <Card key={doctor.id} hover className="overflow-hidden">
              <div className="relative">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 right-4">
                  {doctor.specialty}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {doctor.name}
                </h3>
                {doctor.subSpecialty && (
                  <p className="text-blue-600 font-medium mb-4">
                    {doctor.subSpecialty}
                  </p>
                )}
                <p className="text-gray-600 mb-6">
                  {doctor.bio}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{doctor.experience} years experience</span>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                    <ul className="space-y-1">
                      {doctor.education.map((edu, index) => (
                        <li key={index} className="text-sm text-gray-600">
                          • {edu}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {doctor.languages.map((lang) => (
                        <span
                          key={lang}
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <button className="w-full mt-6 py-3 bg-teal-50 text-teal-700 hover:bg-teal-100 rounded-lg font-semibold transition-colors">
                  Book Appointment
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorsPage;
