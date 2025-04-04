import { useState } from "react";
import { motion } from "framer-motion";

export const StatCards = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 place-items-center ">
        <StatCard number={3000} label="Projects" />
        <StatCard number={1000} label="Clients" />
        <StatCard number={10} label="Years" />
        <StatCard number={20} label="Countries" />
      </div>
    </section>
  );
};

function StatCard({ number, label }: { number: number; label: string }) {
  const [count, setCount] = useState(number);

  return (
    <div>
      <motion.div
        className="flex flex-col items-center justify-center bg-gray-100 rounded-xl w-16 h-16 sm:w-40 sm:h-40 lg:w-32 lg:h-32"
        whileHover={{
          scale: 1.1, // Slight scale effect on hover
          transition: { duration: 0.3 },
        }}
        onHoverStart={() => {
          let start = 0;
          const end = number;
          const duration = 1000; // 1-second animation
          const increment = end / (duration / 10);

          const counter = setInterval(() => {
            start += increment;
            setCount(Math.floor(start));

            if (start >= end) {
              setCount(end);
              clearInterval(counter);
            }
          }, 10);
        }}
      >
        <h3 className="text-3xl font-bold text-gray-900">+{count}</h3>
      </motion.div>
      <p className="text-gray-800 text-center py-2 text-2xl">{label}</p>
    </div>
  );
}
