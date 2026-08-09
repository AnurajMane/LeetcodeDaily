import { motion } from "motion/react";

function Stats({ stats }) {
  const items = [
    {
      label: "Problems Solved",
      value: stats.total,
    },
    {
      label: "Easy",
      value: stats.easy,
    },
    {
      label: "Medium",
      value: stats.medium,
    },
    {
      label: "Hard",
      value: stats.hard,
    },
  ];

  return (
    <section className="theme-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">

        <div className="theme-border grid grid-cols-2 divide-x divide-y border-y sm:grid-cols-4 sm:divide-y-0">
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              className="px-5 py-7 text-center sm:px-6"
            >
              <p className="theme-text-primary text-3xl font-bold tracking-tight">
                {item.value}
              </p>

              <p className="theme-text-muted mt-2 text-xs uppercase tracking-[0.15em]">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Stats;