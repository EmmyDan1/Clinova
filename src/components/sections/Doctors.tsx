
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { doctors } from '../../data/doctors';
import { Link } from 'react-router-dom';

const Doctors: React.FC = () => {
  const featuredDoctors = doctors.slice(0, 3);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Specialists
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Board-certified physicians dedicated to providing exceptional care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredDoctors.map((doctor) => (
            <Card key={doctor.id} hover className="text-center">
              <div className="mb-6">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {doctor.name}
              </h3>
              <Badge className="mb-4">
                {doctor.specialty}
              </Badge>
              {doctor.subSpecialty && (
                <p className="text-blue-600 font-medium mb-4">
                  {doctor.subSpecialty}
                </p>
              )}
              <p className="text-gray-600 mb-4">
                {doctor.bio}
              </p>
              <div className="space-y-2 mt-6">
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {doctor.experience} years experience
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {doctor.languages.map((lang) => (
                    <span
                      key={lang}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/doctors"
            className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700"
          >
            View All Doctors
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
