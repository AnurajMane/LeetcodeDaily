function SpotlightBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Main spotlight */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-[600px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-violet-500/10
          blur-3xl
        "
      />

      {/* Secondary glow */}
      <div
        className="
          absolute
          left-1/2
          top-32
          h-[300px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-purple-500/10
          blur-3xl
        "
      />

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.035]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:64px_64px]
        "
      />

      {/* Fade */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-transparent
          via-[var(--background)]/20
          to-[var(--background)]
        "
      />
    </div>
  );
}

export default SpotlightBackground;