import React, { useState } from 'react';
import { InteriorLayout } from '../components/layout/InteriorLayout';
import { menuData } from '../data/menu';
import { restaurantData } from '../data/restaurant';
import { Utensils, AlertCircle, Phone, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Carta: React.FC = () => {
  const [activeSectionId, setActiveSectionId] = useState<string>('all');

  const filteredSections = activeSectionId === 'all'
    ? menuData.sections
    : menuData.sections.filter(s => s.id === activeSectionId);

  return (
    <InteriorLayout bgVariant="carta">
      {/* 1. EDITORIAL HEADER & ARCHIVAL OVERTURE */}
      <section className="relative w-full px-4 sm:px-8 lg:px-16 pt-10 pb-16 lg:py-20 border-b border-[#D8C7B5]/40">
        <div className="max-w-7xl mx-auto">
          
          {/* Metadata bar */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#D8C7B5]/40">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-rojo-flamenco"></span>
              <span className="font-label-caps text-xs tracking-[0.28em] text-oro-bronce uppercase font-semibold">
                Registro Gastronómico · Edición Taberna
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs font-label-numeric tracking-widest text-tinta-suave font-medium uppercase">
              <span>{restaurantData.address.street}</span>
              <span className="text-rojo-flamenco font-bold">·</span>
              <span>{restaurantData.address.coordinates}</span>
            </div>
          </div>

          {/* Hero Title & Real Photography Integration */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <h1 className="font-display-hero text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-borgoña-profundo tracking-tight leading-[0.95] mb-6">
                La <span className="italic font-serif text-rojo-flamenco">Carta</span>
              </h1>
              <p className="font-display-hero italic text-xl sm:text-2xl text-terracota-suave font-normal mb-6">
                Sal, Fritura Limpia & Solera Andaluza en Bilbao.
              </p>
              <p className="font-body-lg text-base sm:text-lg text-tinta-profunda font-normal leading-relaxed max-w-2xl mb-8">
                Traemos los sabores puros de la Bahía de Cádiz a Indautxu: tortillitas de camarón de Sanlúcar,
                pescaíto frito en harina ligera, el mejor atún salvaje de almadraba y vinos de bota recién escanciados.
              </p>

              {/* Notice regarding provisional / demo status */}
              <div className="bg-[#FAF7F2] border-l-2 border-oro-bronce p-4 sm:p-5 flex items-start gap-3 text-xs sm:text-sm text-tinta-suave">
                <AlertCircle className="w-5 h-5 text-oro-bronce shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-label-caps tracking-widest text-borgoña-profundo font-semibold uppercase block">
                    Propuesta de Demostración
                  </span>
                  <p className="font-body-sm text-tinta-profunda leading-relaxed font-normal">
                    {menuData.generalDisclaimer} La disponibilidad diaria depende de las capturas de lonja y el mercado matinal.
                  </p>
                </div>
              </div>
            </div>

            {/* Real Establishment Photo: Printed Menu Held by Hand */}
            <div className="lg:col-span-5 relative">
              <div className="relative bg-[#FAF7F2] p-2 border border-arena-calida/60 shadow-lg">
                <div className="relative aspect-[3/4] overflow-hidden bg-pergamino">
                  <img
                    src="./assets/images/detail-carta-mano.jpg"
                    alt="Mano sosteniendo el folleto impreso de La Carta frente a Gaditanísima en Bilbao"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-borgoña-oscuro/40 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[#FAF7F2]">
                    <span className="font-label-caps text-[10px] tracking-[0.25em] uppercase font-medium">
                      Carta Impresa Original
                    </span>
                    <span className="font-label-numeric text-xs text-oro-viejo">
                      Edición Taberna
                    </span>
                  </div>
                </div>
              </div>
              <p className="font-body-sm text-xs italic text-tinta-suave text-center mt-3 font-medium">
                Folleto físico original de La Carta en el umbral iluminado de la taberna.
              </p>
            </div>
          </div>

          {/* Section Filter Triggers (No rounded buttons, flat editorial layout) */}
          <div className="mt-14 pt-6 border-t border-[#D8C7B5]/60 flex flex-wrap items-center gap-3 sm:gap-6">
            <span className="font-label-caps text-xs tracking-widest text-oro-bronce uppercase font-semibold">
              Capítulos:
            </span>
            <button
              onClick={() => setActiveSectionId('all')}
              className={`font-label-caps text-xs tracking-[0.2em] uppercase py-1 px-3 transition-colors ${
                activeSectionId === 'all'
                  ? 'bg-borgoña-profundo text-[#FAF7F2]'
                  : 'text-tinta-profunda hover:text-rojo-flamenco bg-pergamino/50 font-medium'
              }`}
            >
              Todos los Capítulos
            </button>
            {menuData.sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => setActiveSectionId(sec.id)}
                className={`font-label-caps text-xs tracking-[0.2em] uppercase py-1 px-3 transition-colors ${
                  activeSectionId === sec.id
                    ? 'bg-borgoña-profundo text-[#FAF7F2]'
                    : 'text-tinta-profunda hover:text-rojo-flamenco bg-pergamino/50 font-medium'
                }`}
              >
                {sec.title.split('&')[0].trim()}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* 2. CULINARY REGISTER (Unboxed open layout, no generic cards) */}
      <section className="w-full px-4 sm:px-8 lg:px-16 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto space-y-20 lg:space-y-28">
          
          {filteredSections.map((section, idx) => (
            <div key={section.id} className="space-y-10">
              
              {/* Section Header */}
              <div className="border-b border-[#D8C7B5] pb-4 flex flex-col md:flex-row md:items-end justify-between gap-3">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-label-numeric text-xs font-semibold text-oro-bronce">
                      0{idx + 1}
                    </span>
                    <span className="w-6 h-[1px] bg-rojo-flamenco/70"></span>
                    <span className="font-label-caps text-xs tracking-[0.25em] text-oro-bronce uppercase font-semibold">
                      Capítulo
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-3xl sm:text-4xl text-borgoña-profundo font-normal">
                    {section.title}
                  </h2>
                </div>
                <div className="text-right">
                  <p className="font-display-hero italic text-sm text-terracota-suave">
                    {section.subtitle}
                  </p>
                  <span className="font-label-caps text-[11px] tracking-widest text-borgoña-profundo font-semibold uppercase">
                    {section.disclaimer}
                  </span>
                </div>
              </div>

              {/* Items Register */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
                {/* Culinary list (8 cols on desktop if featured image, or 12 cols) */}
                <div className={`${section.items.some(i => i.image) ? 'lg:col-span-7 xl:col-span-8' : 'lg:col-span-12'} space-y-6`}>
                  {section.items.map((item) => (
                    <div
                      key={item.id}
                      className="group pb-5 border-b border-[#D8C7B5]/40 transition-colors hover:border-rojo-flamenco/50"
                    >
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="font-headline-md text-xl sm:text-2xl text-tinta-profunda group-hover:text-rojo-flamenco transition-colors font-medium">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-2 shrink-0">
                          {item.provisionalTag && (
                            <span className="font-label-caps text-[9px] tracking-widest px-1.5 py-0.5 bg-arena-calida/50 text-tinta-profunda font-semibold uppercase">
                              {item.provisionalTag}
                            </span>
                          )}
                          <span className="font-label-numeric text-sm sm:text-base font-semibold text-borgoña-profundo">
                            {item.priceProvisional}
                          </span>
                        </div>
                      </div>

                      <p className="font-body-md text-sm sm:text-base text-tinta-suave font-normal mt-1.5 leading-relaxed max-w-2xl">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Real photographic showcase column for sections with photos */}
                {section.items.filter(i => i.image).map((item) => (
                  <div key={item.id} className="lg:col-span-5 xl:col-span-4 flex flex-col">
                    <div className="relative bg-[#FAF7F2] p-2 border border-arena-calida/70 shadow-sm">
                      <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-pergamino">
                        <img
                          src={item.image}
                          alt={item.imageAlt || item.name}
                          className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                      <div className="pt-3 px-2 flex items-center justify-between text-tinta-profunda">
                        <span className="font-label-caps text-[10px] tracking-widest text-borgoña-profundo font-semibold uppercase">
                          Fotografía Real
                        </span>
                        <span className="font-body-sm text-xs italic text-tinta-suave font-medium">
                          {item.name.split('(')[0].trim()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>
      </section>

      {/* 3. FOOTNOTE / RESERVAS CALLOUT */}
      <section className="w-full bg-[#F4EFEB] py-14 px-4 sm:px-8 lg:px-16 border-t border-[#D8C7B5]">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <Utensils className="w-7 h-7 text-rojo-flamenco mx-auto" />
          <h3 className="font-headline-lg text-2xl sm:text-3xl text-borgoña-profundo">
            Mesa, Barra & Solera en la Calle Egaña
          </h3>
          <p className="font-body-md text-sm sm:text-base text-tinta-profunda font-normal max-w-xl mx-auto leading-relaxed">
            Recomendamos consultar las sugerencias de temporada y reservar mesa tanto para comidas como para cenas.
          </p>
          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${restaurantData.contact.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-borgoña-profundo hover:bg-borgoña-oscuro text-[#FAF7F2] font-label-caps text-xs tracking-[0.2em] uppercase border border-oro-viejo/50 transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4 text-oro-viejo" />
              <span>Reservas: {restaurantData.contact.phone}</span>
            </a>
            <Link
              to="/visitanos"
              className="inline-flex items-center gap-2 px-6 py-3 border border-borgoña-profundo text-borgoña-profundo hover:border-rojo-flamenco hover:text-rojo-flamenco hover:bg-pergamino font-label-caps text-xs tracking-[0.2em] uppercase transition-colors font-medium"
            >
              <span>Ver Ubicación & Horarios</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </InteriorLayout>
  );
};
