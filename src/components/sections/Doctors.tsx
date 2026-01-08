import { doctors } from "../../data/doctors";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Doctors: React.FC = () => {
  const featuredDoctors = doctors.slice(0, 3);

  return (
    <section className="py-28 bg-white">
      <div className="mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 max-w-xl"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-[#273f23]/60">
            Specialists
          </span>
          <h2 className="mt-4 text-3xl font-medium text-[#1E1E1E] leading-snug">
            Expertise you can trust.
          </h2>
          <p className="mt-4 text-sm text-[#5A5A5A] leading-relaxed">
            A carefully selected group of professionals focused on precision,
            empathy, and long-term outcomes.
          </p>
        </motion.div>

        {/* List */}
        <div className="divide-y divide-neutral-200">
          {featuredDoctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              className="flex items-start gap-6 py-8"
            >
              {/* Image (small, subtle) */}
              <img
                src={doctor.image}
                alt={doctor.name}
                className="h-16 w-16 rounded-xl object-cover grayscale shrink-0"
              />

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="text-base font-medium text-[#1E1E1E]">
                    {doctor.name}
                  </h3>
                  <span className="text-xs text-[#6B6B6B]">
                    {doctor.specialty}
                  </span>
                </div>

                <p className="mt-2 text-sm text-[#4A4A4A] leading-relaxed max-w-lg">
                  {doctor.bio}
                </p>

                <div className="mt-3 text-xs text-[#6B6B6B]">
                  {doctor.experience}+ years experience ·{" "}
                  {doctor.languages.join(", ")}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-14"
        >
          <Link
            to="/doctors"
            className="inline-flex items-center text-sm font-medium text-[#273f23] hover:opacity-80 transition"
          >
            View all specialists
            <span className="ml-2">→</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Doctors;
