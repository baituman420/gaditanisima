import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface InteriorLayoutProps {
  children: React.ReactNode;
  bgVariant?: 'carta' | 'esencia' | 'local' | 'visitanos' | 'none';
}

export const InteriorLayout: React.FC<InteriorLayoutProps> = ({
  children,
  bgVariant = 'esencia',
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Map each page to its dedicated horizontal background illustration
  const bgMap: Record<string, string> = {
    carta: './assets/backgrounds/bg-carta.jpg',
    esencia: './assets/backgrounds/bg-esencia.jpg',
    local: './assets/backgrounds/bg-local.jpg',
    visitanos: './assets/backgrounds/bg-visitanos.jpg',
  };

  const bgImage = bgVariant !== 'none' ? bgMap[bgVariant] : null;

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#241B1A] relative selection:bg-pergamino selection:text-borgoña-profundo">
      {/* Dedicated Subtle Watercolor & Engraving Background with Softened Burgundy Contrast */}
      {bgImage && (
        <div
          className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
          aria-hidden="true"
        >
          {/* Main illustration layer: balanced opacity (42-50%) and soft natural contrast */}
          <div
            className="absolute inset-0 bg-cover bg-no-repeat bg-top opacity-42 sm:opacity-50 mix-blend-multiply transition-opacity duration-700"
            style={{
              backgroundImage: `url(${bgImage})`,
              filter: 'contrast(1.09) saturate(1.08) brightness(0.99)',
            }}
          />
          {/* Subtle burgundy tone infusion layer cut in half (opacity: 6%) */}
          <div
            className="absolute inset-0 opacity-[0.06] mix-blend-color pointer-events-none"
            style={{ backgroundColor: '#4A121A' }}
          />
        </div>
      )}

      {/* Persistent Navigation */}
      <Navbar />

      {/* Main Content Area (100% opaque, readable typography) */}
      <main className="flex-1 w-full pt-20 relative z-10">
        {children}
      </main>

      {/* Editorial Burgundy Footer */}
      <Footer />
    </div>
  );
};
