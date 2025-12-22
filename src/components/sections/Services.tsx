// @ts-ignore
import CircularGallery from "../ui/CircularGallery.js";

const Services: React.FC = () => {
  const items = [
    {
      image: "/images/services/Dia.webp",
      text: "Diagnostics",
    },
    {
      image: "/images/services/cardd.webp",
      text: "Cardiology",
    },
    {
      image: "/images/services/Ped.webp",
      text: "Pediatrics",
    },
    {
      image: "/images/services/Diaa.webp",
      text: "Laboratory",
    },
  ];

  return (
    <section className="relative md:py-16 bg-[#273f23] text-yellow-400 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-yellow-400" />
            <p className="text-xs uppercase tracking-widest text-yellow-400">
              Our Specialties
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-light leading-tight">
                Expert Care Across
                <br />
                <span className="font-medium">Every Discipline</span>
              </h2>
            </div>

            <div>
              <p className="text-white/70 text-sm md:text-base leading-relaxed mb-4 max-w-xl">
                From precise diagnostics to comprehensive treatment, our
                integrated departments work together for your complete health
                journey.
              </p>
              <button className="text-sm font-medium text-yellow-400 hover:text-yellow-300 transition-colors inline-flex items-center gap-2 group">
                <span>View all services</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

  
      <div className="relative">
        <div className="h-[280px] md:h-[340px]">
          <CircularGallery
            items={items}
            bend={1.2}
              textColor="#f8f3e6"
            borderRadius={0.08}
            font="500 18px Figtree"
            scrollSpeed={1.6}
            scrollEase={0.06}
          />
        </div>

        {/* Mobile indicator */}
        <div className="block md:hidden mt-8 text-center">
          <p className="text-xs text-white/50">← Swipe to explore services →</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 mt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10">
          {[
            { value: "24/7", label: "Emergency Care" },
            { value: "50+", label: "Specialists" },
            { value: "≤15min", label: "Avg. Wait Time" },
            { value: "98%", label: "Patient Satisfaction" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl font-light text-yellow-400 mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-yellow-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
