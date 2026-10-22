import React from 'react';
import { InteriorLayout } from '../components/layout/InteriorLayout';
import { restaurantData } from '../data/restaurant';
import { Sun, Compass, Heart, Anchor, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NuestraEsencia: React.FC = () => {
  return (
    <InteriorLayout bgVariant="esencia">
      {/* 1. MONUMENTAL HERO: El Encuentro Cádiz & Bilbao (Fondo completamente transparente) */}
      <section className="relative w-full bg-transparent border-b border-[#D8C7B5]/40 pt-10 pb-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Monumental Typography */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[1px] bg-rojo-flamenco"></span>
                <span className="font-label-caps text-xs tracking-[0.3em] text-oro-bronce uppercase font-semibold">
                  Manifiesto · Capítulo I
                </span>
              </div>

              <h1 className="font-display-hero text-4xl sm:text-6xl lg:text-7xl xl:text-[84px] text-borgoña-profundo leading-[0.94] tracking-tight mb-8">
                EL ALMA DE CÁDIZ<br />
                <span className="italic font-normal text-rojo-flamenco font-serif">EN EL CORAZÓN</span><br />
                DE BILBAO.
              </h1>

              <p className="font-body-lg text-lg sm:text-xl text-tinta-profunda font-normal leading-relaxed max-w-xl mb-8">
                De la luz salina y radiante del Atlántico al sirimiri indauxtarra: una taberna nacida del
                encuentro sincero entre dos tierras que honran la charla pausada, el compás y la mesa compartida.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-5 border-t border-[#D8C7B5]/60 text-xs font-label-caps tracking-widest text-tinta-suave uppercase font-medium">
                <div className="flex items-center gap-2 text-oro-bronce font-semibold">
                  <Sun className="w-4 h-4 text-rojo-flamenco" />
                  <span>Luz de Cal & Salitre</span>
                </div>
                <div className="h-3 w-[1px] bg-arena-calida"></div>
                <div className="flex items-center gap-2 text-tinta-profunda">
                  <Compass className="w-4 h-4 text-oro-bronce" />
                  <span>{restaurantData.address.coordinates}</span>
                </div>
              </div>
            </div>

            {/* Visual Balance: Flamenco Motion & Light */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden bg-pergamino border border-arena-calida/60 shadow-xl">
                <img
                  src="./assets/media/bailaora-poster.png"
                  alt="Bailaora flamenca en giro con traje rojo voluminoso"
                  className="w-full h-full object-cover object-[65%_25%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-borgoña-oscuro/60 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-[#FAF7F2]">
                  <span className="font-label-caps text-xs tracking-[0.25em] uppercase font-medium">
                    El Vuelo & La Casta
                  </span>
                  <span className="font-label-numeric text-xs text-oro-viejo">
                    Compás de 12 tiempos
                  </span>
                </div>
              </div>
              <p className="font-body-sm text-xs italic text-tinta-suave text-left mt-3 font-medium">
                Fuerza de la bahía recortada contra la cal: el fuego que atempera el invierno norteño.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 2. HILO CONDUCTOR EDITORIAL (Translúcido y ligero) */}
      <div className="w-full bg-[#F4EFEB]/40 border-b border-[#D8C7B5]/40 py-4 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs font-label-caps tracking-[0.25em] uppercase">
          <span className="text-rojo-flamenco font-bold">Compás de Sal & Piedra</span>
          <span className="text-tinta-suave hidden sm:inline font-medium">Egaña Hiribidea, 3 · Indautxu</span>
          <span className="text-tinta-profunda font-semibold">Taberna Tradicional Andaluza</span>
        </div>
      </div>

      {/* 3. MANIFIESTO NARRATIVO & DOCUMENTO FUNDACIONAL */}
      <section className="w-full px-4 sm:px-8 lg:px-16 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Columna 1: El Cruce (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <span className="font-label-caps text-xs tracking-[0.28em] text-oro-bronce uppercase font-semibold block mb-2">
                  01 — El Cruce
                </span>
                <h2 className="font-headline-lg text-3xl sm:text-4xl text-borgoña-profundo leading-tight">
                  Un puente sincero entre la Bahía y la Ría.
                </h2>
              </div>

              <div className="font-body-md text-base sm:text-lg text-tinta-profunda space-y-5 leading-relaxed font-normal">
                <p>
                  <span className="float-left text-6xl font-display-hero text-rojo-flamenco leading-none pr-3 pt-1">
                    G
                  </span>
                  aditanísima nace como un puente sincero entre la Bahía de Cádiz y las calles de Bilbao.
                  Traemos el compás de las tabernas de barrio, el aroma a manzanilla en rama y pescaíto frito
                  en harina limpia, y la alegría espontánea de la charla que se alarga sin pedir permiso.
                </p>
                <p>
                  No venimos a impostar una postal folclórica, sino a plantar una raíz viva. El calor del sur no
                  choca contra la piedra mojada de Indautxu: se ampara en ella. Los vinos generosos del Marco de Jerez
                  encuentran en el clima vizcaíno su contrapunto más honesto.
                </p>
              </div>
            </div>

            {/* Columna 2: Cartel Fundacional Real (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-md bg-[#FAF7F2] p-2 border border-arena-calida/70 shadow-lg">
                <div className="overflow-hidden bg-[#4A121A]">
                  <img
                    src="./assets/images/archive-inauguracion.jpg"
                    alt="Cartel oficial de inauguración de Gaditanísima Taberna en Calle Egaña 3, Bilbao"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="pt-3 px-2 flex items-center justify-between text-xs font-label-caps tracking-widest text-tinta-profunda font-medium">
                  <span className="text-borgoña-profundo font-semibold uppercase">
                    Cartel Oficial
                  </span>
                  <span className="text-oro-bronce font-label-numeric font-bold">
                    Inauguración · 25 de Junio
                  </span>
                </div>
              </div>
              <p className="font-body-sm text-xs italic text-tinta-suave text-center mt-3 max-w-sm font-medium">
                Documento original: la proclama que anunció en Egaña 3 la llegada de los sabores y la solera gaditana.
              </p>
            </div>

            {/* Columna 3: Notas de Identidad (3 cols) */}
            <div className="lg:col-span-3 space-y-6 pt-4 lg:pt-0">
              
              <div className="border-t border-[#D8C7B5] pt-4">
                <div className="flex items-center gap-2 mb-2 text-oro-bronce">
                  <Anchor className="w-4 h-4" />
                  <span className="font-label-caps text-xs tracking-widest uppercase font-semibold">
                    Materia Prima
                  </span>
                </div>
                <p className="font-body-sm text-sm text-tinta-suave leading-relaxed font-normal">
                  Langostinos vivos de Sanlúcar, atún rojo salvaje de almadraba, chicharrones de Chiclana y el pan crujiente que templa los aguaceros norteños.
                </p>
              </div>

              <div className="border-t border-[#D8C7B5] pt-4">
                <div className="flex items-center gap-2 mb-2 text-oro-bronce">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-label-caps text-xs tracking-widest uppercase font-semibold">
                    El Marco Líquido
                  </span>
                </div>
                <p className="font-body-sm text-sm text-tinta-suave leading-relaxed font-normal">
                  Finotadas vivas, manzanillas de solera y caña helada de Victoria Málaga. Sin protocolo solemne: pureza tabernaria popular.
                </p>
              </div>

              <div className="border-t border-[#D8C7B5] pt-4">
                <div className="flex items-center gap-2 mb-2 text-oro-bronce">
                  <Heart className="w-4 h-4" />
                  <span className="font-label-caps text-xs tracking-widest uppercase font-semibold">
                    El Temple
                  </span>
                </div>
                <p className="font-body-sm text-sm text-tinta-suave leading-relaxed font-normal">
                  Servir despacio para conversar deprisa. Un rito que no entiende de prisas mercantiles, sino de calidez humana y buen compás.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  to="/el-local"
                  className="inline-flex items-center gap-2 text-xs font-label-caps tracking-widest uppercase text-borgoña-profundo hover:text-rojo-flamenco font-semibold transition-colors group/link"
                >
                  <span>Conoce Nuestro Espacio</span>
                  <ArrowRight className="w-4 h-4 text-oro-bronce group-hover/link:text-rojo-flamenco transition-colors" />
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>
    </InteriorLayout>
  );
};
