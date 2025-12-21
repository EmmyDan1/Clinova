
import { Card } from '../components/ui/Card';
import { services } from '../data/services';

const ServicesPage: React.FC = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Healthcare Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive medical services delivered with state-of-the-art technology 
            and compassionate care by our expert medical teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} hover className="h-full">
              <div className="flex flex-col h-full">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {service.description}
                </p>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Departments
                  </h4>
                  <ul className="space-y-2">
                    {service.departments.map((dept) => (
                      <li key={dept} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {dept}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full mt-6 py-3 bg-teal-600 text-white hover:bg-teal-700 rounded-lg font-semibold transition-colors">
                  Learn More
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Quality Care You Can Trust
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-teal-600 mb-2">24/7</div>
                <p className="text-gray-700">Emergency Services</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal-600 mb-2">50+</div>
                <p className="text-gray-700">Medical Specialists</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal-600 mb-2">99%</div>
                <p className="text-gray-700">Patient Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
