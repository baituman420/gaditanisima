import React from 'react';
import { InteriorLayout } from '../components/layout/InteriorLayout';
import { restaurantData } from '../data/restaurant';
import { Wine, UtensilsCrossed, Users, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ElLocal: React.FC = () => {
  return (
    <InteriorLayout bgVariant="local">
      {/* 1. ARCHITECTURAL HERO & MAIN DINING ROOM ESSAY */}
      <section className="relative w-full overflow-hidden pt-10 pb-16 lg:py-24 border-b border-[#D8C7B5]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          
          {/* Chapter Marker */}
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-8 border-b border-[#D8C7B5]/60 pb-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-oro-bronce"></span>
              <span className="font-label-caps text-xs tracking-[0.3em] text-oro-bronce uppercase font-semibold">
                Espacio · Luz de Cal · Egaña 3
              </span>
            </div>
            <span className="font-label-numeric text-xs text-tinta-suave tracking-widest uppercase font-medium">
              {restaurantData.address.full}
            </span>
          </div>

          {/* Monumental Headline */}
          <div className="max-w-3xl mb-12">
            <h1 className="font-display-hero text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-borgoña-profundo leading-none tracking-tight mb-4">
              El Espacio
            </h1>
            <p className="font-display-hero italic text-xl sm:text-2xl text-terracota-suave font-normal leading-relaxed">
              Madera, mimbre, azulejo andaluz y la claridad de una taberna viva abierta a la luz de mediodía.
            </p>
          </div>

          {/* Real Photo Hero Composition: The Great Dining Room with Hydraulic Tile */}
          <div className="relative w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            
            {/* Real Dining Room Image (9 cols) */}
            <div className="lg:col-span-9 relative">
              <div className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/10] overflow-hidden bg-pergamino border border-arena-calida/70 shadow-lg relative">
                <img
                  src="./assets/images/local-comedor-hidraulico.jpg"
                  alt="Comedor principal de Gaditanísima en Bilbao con baldosas hidráulicas tradicionales y lámparas de mimbre"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-borgoña-oscuro/40 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Architectural Plinth Caption */}
              <div className="mt-4 sm:mt-0 sm:absolute sm:bottom-6 sm:left-6 max-w-lg bg-[#FAF7F2]/95 backdrop-blur-sm p-5 sm:p-6 border-l-2 border-oro-bronce shadow-md">
                <span className="font-label-caps text-[10px] tracking-[0.25em] text-borgoña-profundo uppercase block mb-1 font-semibold">
                  Fotografía Real · Comedor Principal
                </span>
                <p className="font-body-sm text-xs sm:text-sm text-tinta-profunda leading-relaxed font-normal">
                  La trama floral del mosaico hidráulico sostiene mesas de madera noble bajo campanas trenzadas en mimbre.
                  Un refugio de luz cálida, blanco de cal y sosiego en el corazón de Indautxu.
                </p>
              </div>
            </div>

            {/* Asymmetric Side Spine (3 cols) */}
            <div className="lg:col-span-3 space-y-6">
              <div className="bg-[#FAF7F2] p-6 border border-arena-calida/60 shadow-sm space-y-4">
                <span className="font-label-numeric text-xs text-oro-bronce block font-semibold">
                  01 / ARQUITECTURA
                </span>
                <h2 className="font-headline-md text-xl sm:text-2xl text-borgoña-profundo leading-snug">
                  El patio andaluz arraigado en Bilbao
                </h2>
                <p className="font-body-sm text-xs sm:text-sm text-tinta-profunda leading-relaxed font-normal">
                  No buscamos la recreación teatral, sino la memoria sensorial. Las vigas vistas, las paredes encaladas
                  y las fibras naturales templan la tarde vizcaína convirtiéndola en sosiego gaditano.
                </p>
                <div className="pt-3 border-t border-arena-calida/50 flex items-center justify-between text-xs font-label-caps tracking-widest text-tinta-suave font-medium">
                  <span>Ambiente</span>
                  <span className="text-borgoña-profundo font-semibold">Acogedor & Luminoso</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. SENSIBILIDAD & OFICIO: VIDRIERA Y GRIFOS CERÁMICOS */}
      <section className="w-full bg-[#F4EFEB] py-16 lg:py-24 border-b border-[#D8C7B5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          
          <div className="flex items-center gap-4 mb-12">
            <span className="font-label-caps text-xs tracking-[0.25em] text-oro-bronce uppercase font-semibold">
              02 / Detalle & Oficio
            </span>
            <div className="h-[1px] flex-1 bg-arena-calida/60"></div>
            <span className="font-label-numeric text-xs text-tinta-suave uppercase font-medium">
              Artesanía de Taberna
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Vidriera Exterior Portrait (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-[#FAF7F2] p-2 border border-arena-calida/70 shadow-lg">
                <div className="aspect-[3/4] overflow-hidden bg-pergamino relative">
                  <img
                    src="./assets/images/detail-vidriera-emblema.jpg"
                    alt="Vidriera exterior en la fachada de Gaditanísima Taberna con el emblema original"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-borgoña-oscuro/50 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between bg-[#FAF7F2]/90 backdrop-blur-sm p-3 border-l-2 border-oro-bronce">
                    <div>
                      <span className="font-label-caps text-[10px] tracking-widest text-borgoña-profundo uppercase block font-semibold">
                        Vidriera Exterior
                      </span>
                      <span className="font-headline-md text-base text-tinta-profunda italic">
                        Identidad & Fachada Real
                      </span>
                    </div>
                    <span className="font-label-numeric text-xs text-tinta-profunda font-semibold">
                      Egaña 3
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative Column & Beer Taps Spread (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="font-label-caps text-xs tracking-[0.25em] text-oro-bronce uppercase font-semibold block mb-2">
                  Espíritu de Encuentro
                </span>
                <h3 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-borgoña-profundo leading-tight mb-4">
                  Entre vigas vistas, lámparas de mimbre y la calidez del mostrador.
                </h3>
                <p className="font-body-lg text-base sm:text-lg text-tinta-profunda font-normal leading-relaxed">
                  Cada rincón de nuestra casa en la calle Egaña está concebido para la conversación sosegada,
                  la tertulia espontánea y el compás pausado. El tintineo del catavinos se mezcla con el murmullo
                  de la cuadrilla que llega buscando una caña helada y una ración de fritura recién sacada del perol.
                </p>
              </div>

              {/* Ceramic Taps Detail Card */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center bg-[#FAF7F2] p-5 sm:p-6 border-l-2 border-borgoña-profundo shadow-sm">
                <div className="sm:col-span-5 aspect-[4/3] overflow-hidden bg-pergamino">
                  <img
                    src="./assets/images/detail-grifos-victoria.jpg"
                    alt="Grifos de cerveza Victoria Málaga de cerámica esmaltada sobre la barra"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="sm:col-span-7 space-y-2">
                  <span className="font-label-caps text-[10px] tracking-[0.2em] text-oro-bronce uppercase font-semibold">
                    Tirada de Precisión
                  </span>
                  <h4 className="font-headline-md text-lg text-borgoña-profundo">
                    Victoria Málaga & Grifo Cerámico
                  </h4>
                  <p className="font-body-sm text-xs sm:text-sm text-tinta-suave font-normal leading-relaxed">
                    Torres cerámicas esmaltadas, metal pulido y temperatura exacta a 2°C con espuma compacta que acaricia el paladar.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. LOS TRES TIEMPOS DEL ESPACIO (Barra, Comedor, Terraza Real) */}
      <section className="w-full px-4 sm:px-8 lg:px-16 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 pb-6 border-b border-[#D8C7B5]">
            <div>
              <span className="font-label-caps text-xs tracking-[0.25em] text-oro-bronce uppercase block mb-1 font-semibold">
                03 / Distribución Sensorial
              </span>
              <h2 className="font-headline-lg text-3xl sm:text-4xl text-borgoña-profundo">
                Los Tres Ritmos de Gaditanísima
              </h2>
            </div>
            <p className="font-body-sm text-xs sm:text-sm text-tinta-suave max-w-md font-normal">
              Tres atmósferas complementarias para vivir el rito tabernario según la ocasión y el momento del día.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* 01: La Barra */}
            <div className="space-y-4 p-6 bg-[#FAF7F2] border border-arena-calida/60">
              <div className="flex items-center justify-between pb-3 border-b border-arena-calida/40">
                <span className="font-label-numeric text-base text-oro-bronce font-semibold">01</span>
                <Wine className="w-5 h-5 text-borgoña-profundo" />
              </div>
              <h3 className="font-headline-md text-xl text-borgoña-profundo">
                La Barra de Mostrador
              </h3>
              <p className="font-body-sm text-sm text-tinta-suave leading-relaxed font-normal">
                El ritmo dinámico del aperitivo: catavinos de fino, vermut de grifo, aceitunas marinadas y la tapa rápida servida al instante.
              </p>
            </div>

            {/* 02: El Comedor Interior */}
            <div className="space-y-4 p-6 bg-[#FAF7F2] border border-arena-calida/60">
              <div className="flex items-center justify-between pb-3 border-b border-arena-calida/40">
                <span className="font-label-numeric text-base text-oro-bronce font-semibold">02</span>
                <UtensilsCrossed className="w-5 h-5 text-borgoña-profundo" />
              </div>
              <h3 className="font-headline-md text-xl text-borgoña-profundo">
                El Comedor Hidráulico
              </h3>
              <p className="font-body-sm text-sm text-tinta-suave leading-relaxed font-normal">
                La intimidad reposada: mesas de madera para compartir raciones de atún de almadraba, tortillitas y sobremesas sin prisa.
              </p>
            </div>

            {/* 03: La Terraza en Calle Egaña (con foto real) */}
            <div className="space-y-4 p-6 bg-[#FAF7F2] border border-arena-calida/60">
              <div className="flex items-center justify-between pb-3 border-b border-arena-calida/40">
                <span className="font-label-numeric text-base text-oro-bronce font-semibold">03</span>
                <Users className="w-5 h-5 text-borgoña-profundo" />
              </div>
              <h3 className="font-headline-md text-xl text-borgoña-profundo">
                La Terraza en Egaña
              </h3>
              <p className="font-body-sm text-sm text-tinta-suave leading-relaxed font-normal">
                La vibración de la calle peatonal: toldos, guirnaldas de bombillas y cuadrillas disfrutando del ambiente al anochecer.
              </p>
            </div>

          </div>

          {/* Real Photo Showcase: Terraza en Calle Egaña */}
          <div className="pt-6">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-pergamino border border-arena-calida/70 shadow-lg">
              <img
                src="./assets/images/local-terraza-egana.jpg"
                alt="Ambiente real de la terraza de Gaditanísima en la calle Egaña de Bilbao llena de gente disfrutando"
                className="w-full h-full object-cover object-[center_35%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-borgoña-oscuro/70 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row items-start sm:items-end justify-between text-[#FAF7F2] gap-2">
                <div>
                  <span className="font-label-caps text-xs tracking-widest text-oro-viejo uppercase font-semibold block">
                    Fotografía Real del Establecimiento
                  </span>
                  <span className="font-headline-md text-xl sm:text-2xl font-normal">
                    La Terraza de Egaña al Anochecer
                  </span>
                </div>
                <span className="font-label-numeric text-xs text-[#FAF7F2]/90 uppercase tracking-widest font-medium">
                  Calle Egaña, 3 · Indautxu
                </span>
              </div>
            </div>
            <p className="font-body-sm text-xs italic text-tinta-suave text-center mt-3 font-medium">
              Fotografía auténtica de la terraza exterior concurrida en la calle Egaña durante las noches de verano.
            </p>
          </div>

        </div>
      </section>

      {/* 4. CALL TO ACTION TO VISIT */}
      <section className="w-full bg-[#FAF7F2] py-14 px-4 sm:px-8 lg:px-16 border-t border-[#D8C7B5]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <span className="font-label-caps text-xs tracking-[0.25em] text-oro-bronce uppercase font-semibold">
              Te Esperamos en Bilbao
            </span>
            <h3 className="font-headline-lg text-2xl sm:text-3xl text-borgoña-profundo">
              Ven a conocer Gaditanísima en persona
            </h3>
            <p className="font-body-sm text-sm text-tinta-profunda font-normal">
              {restaurantData.address.full} · Metro Indautxu a 2 minutos
            </p>
          </div>
          <Link
            to="/visitanos"
            className="inline-flex items-center gap-2 px-6 py-3 bg-borgoña-profundo hover:bg-borgoña-oscuro text-[#FAF7F2] font-label-caps text-xs tracking-[0.2em] uppercase border border-oro-viejo/50 transition-colors shadow-sm shrink-0"
          >
            <span>Cómo Llegar & Reservas</span>
            <ArrowUpRight className="w-4 h-4 text-oro-viejo" />
          </Link>
        </div>
      </section>
    </InteriorLayout>
  );
};
