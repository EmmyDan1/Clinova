import CircularText from "../ui/CircularText";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full bg-[#273f23] px-4 pt-20 pb-12">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl shadow">
          {/* MOBILE IMAGE */}
          <img
            src="/images/HeroMobile.webp"
            alt="Professional nurse in a calm clinical environment"
            loading="eager"
            decoding="async"
            className="
              block lg:hidden
              h-[460px] w-full
              object-cover
            "
          />

          {/* DESKTOP IMAGE (UNCHANGED) */}
          <img
            src="/images/hero.webp"
            alt="Professional nurse in a calm clinical environment"
            loading="eager"
            decoding="async"
            className="
              hidden lg:block
              h-[700px] w-full
              object-cover
            "
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 lg:bg-black/15" />
          <div className="absolute inset-0 flex justify-center mt-4">
            <span className="lg:hidden text-[11px] tracking-[0.25em] uppercase text-[#C9B68A]">
              Trusted Healthcare
            </span>
          </div>

          {/* CONTENT (UNCHANGED STRUCTURE) */}
          <div className="absolute inset-0 flex items-end justify-center px-4 pb-8 lg:-translate-y-16 lg:items-center lg:justify-start lg:pb-0">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="
                w-full max-w-[92%]
                rounded-2xl
                bg-white/10 backdrop-blur-md
                px-6 py-7
                text-center space-y-4
                lg:ml-12 lg:max-w-xl
                lg:bg-transparent lg:backdrop-blur-0
                lg:text-left
              "
            >
              <span className="hidden lg:text-[11px] tracking-[0.25em] uppercase text-[#C9B68A]">
                Trusted Healthcare
              </span>

              <CircularText
                text="*TRUSTED**HEALTHCARE*"
                onHover="speedUp"
                spinDuration={20}
                className="custom-class"
              />

              <h1 className="text-2xl lg:w-[450px]  font-semibold leading-snug text-[#F5F3EE] sm:text-3xl lg:text-5xl">
                Care that feels human.
              </h1>

              <p className="text-sm lg:w-[350px] leading-relaxed text-[#E2E6DF]/90 sm:text-base">
                Timely access to specialists, coordinated care teams, and
                attention to every detail.
              </p>

              <Link to="/appointment">
                <button className="mx-auto mt-2 inline-flex rounded-full bg-[#F5F3EE] px-6 py-2 text-sm font-medium text-[#273f23] lg:mx-0">
                  Book an Appointment
                </button>
              </Link>
              <button className="mx-auto mt-2 inline-flex rounded-full  border px-6 py-2 text-sm font-normal text-[#fbedc0] lg:mx-0 lg:ml-2">
                See Doctors
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
