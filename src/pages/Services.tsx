import { services } from '../data/services';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const ServicesPage: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="py-20 bg-[#273f23]">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Minimal header */}
        <div className="flex items-end justify-between mb-16">
          <div className='text-yellow-400/50'>
            <span className=" text-sm font-medium tracking-wider uppercase">
              Our Services
            </span>
            <h1 className="text-4xl font-light  mt-2">
              Specialized <span className="font-normal">Medical</span> Care
            </h1>
          </div>
          
          {/* Subtle scroll controls */}
          <div className="flex items-center gap-2">
            <button 
              onClick={() => scroll('left')}
              className="p-2.5 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronRight className="w-4 h-4 rotate-180 text-white/60" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-2.5 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 text-white/60" />
            </button>
          </div>
        </div>

        {/* Modern horizontal layout - no cards */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex gap-8 pb-8 overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="flex-shrink-0 w-[280px] group"
              >
                {/* Image with subtle overlay */}
                <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                  <img 
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-medium text-white/90 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Content - minimal, clean */}
                <div className="px-1">
                  <h3 className="text-lg font-medium text-white mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-yellow-100/30 text-sm mb-5 line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Minimal tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.departments.slice(0, 2).map((dept) => (
                      <span 
                        key={dept}
                        className="px-3 py-1.5 text-xs font-medium text-white/80 bg-white/10 rounded-full backdrop-blur-sm"
                      >
                        {dept}
                      </span>
                    ))}
                    {service.departments.length > 2 && (
                      <span className="px-3 py-1.5 text-xs text-yellow-100/30">
                        +{service.departments.length - 2}
                      </span>
                    )}
                  </div>
                  
                  {/* Subtle action */}
                  <button className="inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white transition-colors group/btn">
                    <span>View details</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#273f23] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#273f23] to-transparent pointer-events-none" />
        </div>

        {/* Modern stats - integrated style */}
        <div className="mt-24 pt-20 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: '24/7', label: 'Emergency Response', color: 'text-white' },
              { value: '50+', label: 'Specialist Teams', color: 'text-white' },
              { value: '98.7%', label: 'Success Rate', color: 'text-white' },
              { value: '15min', label: 'Avg. Wait Time', color: 'text-white' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className={`text-3xl font-light ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-yellow-100/30 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;