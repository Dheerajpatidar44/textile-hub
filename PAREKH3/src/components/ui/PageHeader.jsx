import React from 'react';

const PageHeader = ({ title }) => {
  return (
    <div
      className="relative overflow-hidden"
      style={{ paddingTop: '6rem', paddingBottom: '3.5rem', backgroundColor: '#0B1D40' }}
    >
      {/* === TEXTURE LAYERS === */}

      {/* Layer 1: Crosshatch fabric weave */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              rgba(212,168,83,0.04) 0px,
              rgba(212,168,83,0.04) 1px,
              transparent 1px,
              transparent 14px
            ),
            repeating-linear-gradient(
              -45deg,
              rgba(212,168,83,0.04) 0px,
              rgba(212,168,83,0.04) 1px,
              transparent 1px,
              transparent 14px
            )
          `,
        }}
      />

      {/* Layer 2: Fine horizontal ruled lines (like fabric grain) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 8px)',
        }}
      />

      {/* Layer 3: Large amber radial center-left glow */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -left-20 w-[500px] h-[500px]"
        style={{
          background: 'radial-gradient(ellipse, rgba(212,168,83,0.13) 0%, transparent 65%)',
        }}
      />

      {/* Layer 4: Smaller warm glow top-right */}
      <div
        className="absolute -top-8 right-10 w-72 h-48"
        style={{
          background: 'radial-gradient(ellipse, rgba(180,140,60,0.10) 0%, transparent 70%)',
        }}
      />

      {/* Layer 5: Edge vignette — darkens the sides */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, rgba(4,8,18,0.55) 0%, transparent 30%, transparent 70%, rgba(4,8,18,0.55) 100%)',
        }}
      />

      {/* Layer 6: Top-to-bottom gradient to separate from navbar */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(4,8,18,0.30) 0%, transparent 50%, rgba(4,8,18,0.15) 100%)',
        }}
      />

      {/* Amber left border */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#D4A853]/30 via-[#D4A853] to-[#D4A853]/30" />

      {/* === CONTENT === */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-12 text-center">

      

        {/* Title */}
        <h1 className="text-5xl md:text-[3.75rem] font-serif font-light text-white tracking-wide leading-tight">
          {title}
        </h1>

        {/* Amber ornament below */}
        <div className="flex items-center justify-center gap-3 mt-5">
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#D4A853]" />
          <div className="w-1 h-1 bg-[#D4A853] rotate-45" />
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#D4A853]" />
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
