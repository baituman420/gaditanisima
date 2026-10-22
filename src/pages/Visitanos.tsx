import React from 'react';
import { InteriorLayout } from '../components/layout/InteriorLayout';
import { restaurantData } from '../data/restaurant';
import { Phone, Compass, Train, Car, Clock, AlertCircle, ExternalLink } from 'lucide-react';
import { InstagramIcon } from '../components/icons/InstagramIcon';

export const Visitanos: React.FC = () => {
  return (
    <InteriorLayout bgVariant="visitanos">
      {/* 1. EDITORIAL HEADER & MONUMENTAL ADDRESS */}
      <section className="relative w-full pt-10 pb-16 lg:py-20 px-4 sm:px-8 lg:px-16 border-b border-[#D8C7B5]/40">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Overline track */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D8C7B5]/40 pb-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-oro-bronce"></span>
              <span className="font-label-caps text-xs tracking-[0.28em] text-oro-bronce uppercase font-semibold">
                Guía de Llegada & Localización
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-label-numeric tracking-widest text-tinta-suave uppercase font-medium">
              <span>{restaurantData.address.coordinates}</span>
              <span className="text-oro-bronce">·</span>
              <span className="text-borgoña-profundo font-semibold">Indautxu, Bilbao</span>
            </div>
          </div>

          {/* Headline & Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end">
            <div className="lg:col-span-7">
              <h1 className="font-display-hero text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-borgoña-profundo tracking-tight leading-[0.92] uppercase">
                Encuéntranos<br />
                <span className="italic font-normal font-serif text-terracota-suave lowercase">en</span> Bilbao
              </h1>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#FAF7F2] border-l-2 border-oro-bronce p-6 sm:p-7 shadow-sm">
                <span className="font-label-caps text-xs text-oro-bronce tracking-[0.25em] uppercase block mb-1 font-semibold">
                  Dirección Confirmada
                </span>
                <p className="font-display-hero text-2xl text-borgoña-profundo font-medium">
                  {restaurantData.address.street}
                </p>
                <p className="font-label-caps text-xs text-tinta-suave mt-1 tracking-wider uppercase font-medium">
                  {restaurantData.address.postalCode} {restaurantData.address.neighborhood} · {restaurantData.address.city}, {restaurantData.address.province}
                </p>
                <p className="font-body-sm text-sm text-tinta-profunda mt-3 font-normal leading-relaxed">
                  En el corazón de Indautxu, en una animada calle peatonal junto a la Plaza Campuzano y a 2 minutos de Azkuna Zentroa (Alhóndiga).
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. ARCHIVAL RESERVATIONS & STOREFRONT */}
      <section className="w-full py-16 lg:py-24 px-4 sm:px-8 lg:px-16 border-b border-[#D8C7B5]">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Authentic Official Reservations Graphic (6 cols) */}
            <div className="lg:col-span-6 flex flex-col space-y-6">
              <div className="relative bg-[#FAF7F2] border border-[#D8C7B5] p-6 sm:p-8 shadow-md">
                
                {/* Vintage Corner Ornaments */}
                <div className="absolute top-2 left-2 text-oro-bronce text-xs">✦</div>
                <div className="absolute top-2 right-2 text-oro-bronce text-xs">✦</div>
                <div className="absolute bottom-2 left-2 text-oro-bronce text-xs">✦</div>
                <div className="absolute bottom-2 right-2 text-oro-bronce text-xs">✦</div>

                <div className="flex flex-col items-center text-center">
                  <span className="font-label-caps text-xs tracking-[0.28em] text-oro-bronce uppercase font-semibold mb-3">
                    Taberna Tradicional Gaditana
                  </span>

                  {/* Real Official Reservations Poster */}
                  <div className="w-full max-w-sm mb-6 border border-oro-bronce/40 overflow-hidden shadow-sm bg-[#4A121A]">
                    <img
                      src="./assets/images/archive-reservas.jpg"
                      alt="Cartel oficial de Reservas de Gaditanísima Taberna - Llámanos 946 291 588"
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  <h2 className="font-headline-lg text-2xl sm:text-3xl text-borgoña-profundo uppercase tracking-wide leading-tight mb-2">
                    Atención Telefónica Directa
                  </h2>
                  <p className="font-body-sm text-sm text-tinta-profunda max-w-md mx-auto mb-6 font-normal leading-relaxed">
                    Recomendamos reservar con antelación tanto para servicio de comedor como para mesas de raciones. Barra libre y tabernera disponible por orden de llegada.
                  </p>

                  {/* Big Call Action Button */}
                  <a
                    href={`tel:${restaurantData.contact.phoneRaw}`}
                    className="group w-full py-4 px-6 bg-borgoña-profundo hover:bg-borgoña-oscuro text-[#FAF7F2] transition-all duration-300 flex items-center justify-center gap-4 border border-oro-viejo/60 shadow-md"
                  >
                    <div className="w-10 h-10 bg-[#FAF7F2]/10 group-hover:bg-oro-viejo flex items-center justify-center transition-colors">
                      <Phone className="w-5 h-5 text-oro-viejo group-hover:text-borgoña-profundo" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-label-caps text-[10px] text-[#FAF7F2]/90 uppercase tracking-widest font-medium">
                        Llamar ahora para reservar
                      </span>
                      <span className="font-label-numeric text-xl tracking-wider text-[#FAF7F2] font-semibold">
                        {restaurantData.contact.phone}
                      </span>
                    </div>
                  </a>

                  {/* Instagram & Social Info */}
                  <div className="mt-6 pt-5 w-full flex items-center justify-between border-t border-[#D8C7B5]">
                    <div className="flex items-center gap-2">
                      <InstagramIcon className="w-4 h-4 text-oro-bronce" />
                      <span className="font-label-caps text-xs tracking-widest text-tinta-suave uppercase font-medium">
                        Instagram Oficial
                      </span>
                    </div>
                    <a
                      href={restaurantData.contact.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-label-numeric text-sm text-borgoña-profundo hover:text-oro-bronce transition-colors font-semibold flex items-center gap-1"
                    >
                      <span>{restaurantData.contact.instagram}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-oro-bronce" />
                    </a>
                  </div>

                </div>
              </div>

              <div className="px-2 flex items-start gap-3 text-tinta-profunda text-xs sm:text-sm font-normal">
                <AlertCircle className="w-4 h-4 text-oro-bronce shrink-0 mt-0.5" />
                <p>
                  Para celebraciones, comidas de grupo o mesas de más de 6 comensales, rogamos llamar preferentemente en horario de mañana de 11:30 a 13:00 h.
                </p>
              </div>
            </div>

            {/* Right: Vidriera y Rótulo Tradicional Real (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="bg-[#FAF7F2] border border-[#D8C7B5] overflow-hidden shadow-lg">
                <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-pergamino relative">
                  <img
                    src="./assets/images/detail-vidriera-emblema.jpg"
                    alt="Vidriera y rótulo artesanal de Gaditanísima Taberna en Calle Egaña 3, Bilbao"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6 bg-[#FAF7F2] border-t border-[#D8C7B5] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-label-caps text-xs tracking-[0.25em] text-oro-bronce uppercase font-semibold">
                      El Umbral · Calle Egaña, 3
                    </span>
                    <span className="font-label-numeric text-xs text-tinta-suave uppercase tracking-widest font-medium">
                      Portal 03
                    </span>
                  </div>
                  <p className="font-headline-md text-xl text-borgoña-profundo font-normal">
                    Donde la piedra de Bilbao abraza la alegría del sur.
                  </p>
                  <p className="font-body-sm text-sm text-tinta-profunda font-normal leading-relaxed">
                    Madera vista, rótulo en vidrio fileteado con el emblema de la taberna y el aroma a caña fresca y pescaíto tras cruzar el umbral.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. HORARIOS DE SERVICIO (Con aviso de demostración claro) */}
      <section className="w-full bg-[#F4EFEB] py-16 lg:py-20 px-4 sm:px-8 lg:px-16 border-b border-[#D8C7B5]">
        <div className="max-w-7xl mx-auto space-y-10">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-[#D8C7B5] pb-6">
            <div>
              <div className="flex items-center gap-2 text-oro-bronce mb-1">
                <Clock className="w-4 h-4" />
                <span className="font-label-caps text-xs tracking-[0.28em] uppercase font-semibold">
                  Ritmos de Mesa y Barra
                </span>
              </div>
              <h2 className="font-headline-lg text-3xl sm:text-4xl text-borgoña-profundo uppercase tracking-tight">
                Horarios de Servicio
              </h2>
            </div>
            <div className="max-w-md">
              <span className="inline-block px-2.5 py-1 bg-arena-calida/60 text-tinta-profunda font-label-caps text-[11px] tracking-widest uppercase mb-1 font-semibold">
                Datos Provisionales de Demostración
              </span>
              <p className="font-body-sm text-xs text-tinta-suave font-normal">
                {restaurantData.schedule.disclaimer}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {restaurantData.schedule.shifts.map((shift, i) => (
              <div
                key={i}
                className="bg-[#FAF7F2] p-6 border border-arena-calida/60 space-y-3"
              >
                <span className="font-label-caps text-xs tracking-widest text-oro-bronce uppercase font-semibold block">
                  {shift.days}
                </span>
                <p className="font-label-numeric text-base sm:text-lg font-medium text-borgoña-profundo">
                  {shift.hours}
                </p>
                {shift.notes && (
                  <p className="font-body-sm text-xs text-tinta-suave font-normal pt-2 border-t border-arena-calida/40">
                    {shift.notes}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. CÓMO LLEGAR & ACCESIBILIDAD */}
      <section className="w-full py-16 lg:py-24 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="border-b border-[#D8C7B5] pb-4">
            <span className="font-label-caps text-xs tracking-[0.25em] text-oro-bronce uppercase block mb-1 font-semibold">
              Conexiones & Transporte
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-borgoña-profundo">
              Accesibilidad en Indautxu
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Metro */}
            <div className="p-6 bg-[#FAF7F2] border border-arena-calida/60 space-y-3">
              <div className="w-10 h-10 bg-pergamino flex items-center justify-center text-borgoña-profundo">
                <Train className="w-5 h-5 text-oro-bronce" />
              </div>
              <h3 className="font-headline-md text-xl text-borgoña-profundo">
                Metro Bilbao
              </h3>
              <p className="font-body-sm text-sm text-tinta-profunda font-normal leading-relaxed">
                {restaurantData.access.metro}
              </p>
            </div>

            {/* Autobús */}
            <div className="p-6 bg-[#FAF7F2] border border-arena-calida/60 space-y-3">
              <div className="w-10 h-10 bg-pergamino flex items-center justify-center text-borgoña-profundo">
                <Compass className="w-5 h-5 text-oro-bronce" />
              </div>
              <h3 className="font-headline-md text-xl text-borgoña-profundo">
                Bilbobus & Conexiones
              </h3>
              <p className="font-body-sm text-sm text-tinta-profunda font-normal leading-relaxed">
                {restaurantData.access.bus}
              </p>
            </div>

            {/* Parking & Entorno */}
            <div className="p-6 bg-[#FAF7F2] border border-arena-calida/60 space-y-3">
              <div className="w-10 h-10 bg-pergamino flex items-center justify-center text-borgoña-profundo">
                <Car className="w-5 h-5 text-oro-bronce" />
              </div>
              <h3 className="font-headline-md text-xl text-borgoña-profundo">
                Parking & Paseo Peatonal
              </h3>
              <p className="font-body-sm text-sm text-tinta-profunda font-normal leading-relaxed">
                {restaurantData.access.parking}. {restaurantData.access.landmarks}.
              </p>
            </div>

          </div>

          {/* Decorative motif disclaimer banner (Adjustment 3) */}
          <div className="bg-[#FAF7F2] p-4 border border-dashed border-arena-calida text-center text-xs font-label-caps tracking-widest text-tinta-suave font-medium">
            <span className="text-oro-bronce font-bold">Nota de diseño:</span> Los fondos acuarelados de Cádiz y Bilbao son composiciones artísticas exclusivamente decorativas y no pretenden representar fotográficamente el exterior del local.
          </div>

        </div>
      </section>
    </InteriorLayout>
  );
};
