import CircularGallery from "../ui/CircularGallery";

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
    <section className="relative py-24 bg-[#273f23] text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Minimal header */}
        <div className="mb-8 max-w-md">
          <p className="text-xs uppercase tracking-widest text-yellow-400">
            Services
          </p>
          <p className="mt-2 text-sm text-white/70">
            Carefully selected medical services, delivered with precision.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div className="relative h-[260px] md:h-[300px]">
        <CircularGallery
          items={items}
          bend={1.2}               // VERY important: keep this low
          textColor="#ffffff"
          borderRadius={0.08}
          font="500 18px Figtree"
          scrollSpeed={1.6}
          scrollEase={0.06}
        />
      </div>
    </section>
  );
};

export default Services;
