import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Compass, RotateCcw } from 'lucide-react';
import { InstagramIcon } from '../icons/InstagramIcon';
import { restaurantData } from '../../data/restaurant';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#4A121A] text-[#FAF7F2] border-t border-[#C29B38]/30 relative z-20">
      {/* Top Banner Track */}
      <div className="w-full border-b border-[#FAF7F2]/10 py-3.5 px-4 sm:px-8 lg:px-16 flex items-center justify-between text-[11px] font-label-caps text-[#FAF7F2]/70 tracking-[0.28em] uppercase">
        <span>Bilbao · Indautxu</span>
        <span className="text-[#C29B38]">✦ &nbsp; <span className="text-rojo-flamenco">✦</span> &nbsp; ✦</span>
        <span>Cádiz · Bahía</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Col 1: Identity & Soul (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <Link to="/" className="flex items-center gap-3.5 group w-fit" title="Volver a la Portada">
              <img
                src="./logo.png"
                alt="Emblema oficial Gaditanísima"
                className="h-12 w-auto object-contain brightness-105"
              />
              <div className="flex flex-col text-left">
                <span className="font-display-hero text-2xl text-[#FAF7F2] group-hover:text-rojo-flamenco transition-colors tracking-tight font-medium">
                  {restaurantData.name}
                </span>
                <span className="font-label-caps text-[10px] tracking-[0.3em] text-[#C29B38] uppercase">
                  {restaurantData.shortName}
                </span>
              </div>
            </Link>

            <p className="font-body-md text-sm text-[#FAF7F2]/90 leading-relaxed max-w-sm pt-2 font-normal">
              El alma y la sal de la Bahía de Cádiz arraigadas en el ensanche de Indautxu.
              Pescados de lonja, frituras en harina limpia, atún rojo de almadraba y vinos de solera vieja.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-label-caps tracking-widest text-[#FAF7F2]/75">
              <span className="flex items-center gap-1.5 text-[#C29B38] font-medium">
                <Compass className="w-3.5 h-3.5 text-rojo-flamenco" />
                <span>{restaurantData.address.coordinates}</span>
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <h4 className="font-label-caps text-xs tracking-[0.25em] text-[#C29B38] uppercase font-semibold pb-1 border-b border-[#FAF7F2]/10">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm font-label-caps tracking-widest uppercase text-[#FAF7F2]/85">
              <li>
                <Link to="/" className="hover:text-rojo-flamenco flex items-center gap-1.5 transition-colors group/nav">
                  <RotateCcw className="w-3 h-3 text-[#C29B38] group-hover/nav:text-rojo-flamenco transition-colors" />
                  <span>Portada Cinemática</span>
                </Link>
              </li>
              <li>
                <Link to="/carta" className="hover:text-rojo-flamenco transition-colors">
                  La Carta
                </Link>
              </li>
              <li>
                <Link to="/nuestra-esencia" className="hover:text-rojo-flamenco transition-colors">
                  Nuestra Esencia
                </Link>
              </li>
              <li>
                <Link to="/el-local" className="hover:text-rojo-flamenco transition-colors">
                  El Local
                </Link>
              </li>
              <li>
                <Link to="/visitanos" className="hover:text-rojo-flamenco transition-colors">
                  Visítanos & Reservas
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Address (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            <h4 className="font-label-caps text-xs tracking-[0.25em] text-[#C29B38] uppercase font-semibold pb-1 border-b border-[#FAF7F2]/10">
              Contacto & Llegada
            </h4>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C29B38] shrink-0 mt-0.5" />
                <span className="font-body-md text-[#FAF7F2]/90 font-normal">
                  {restaurantData.address.full}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-rojo-flamenco shrink-0" />
                <a
                  href={`tel:${restaurantData.contact.phoneRaw}`}
                  className="font-label-numeric font-medium text-[#FAF7F2] hover:text-rojo-flamenco transition-colors tracking-wide"
                >
                  {restaurantData.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <InstagramIcon className="w-4 h-4 text-rojo-flamenco shrink-0" />
                <a
                  href={restaurantData.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-label-numeric font-medium text-[#FAF7F2] hover:text-rojo-flamenco transition-colors tracking-wide"
                >
                  {restaurantData.contact.instagram}
                </a>
              </div>
            </div>

            <div className="pt-3 text-[11px] font-label-caps text-[#FAF7F2]/75 leading-normal font-normal">
              <span className="text-[#C29B38] font-medium">Nota:</span> Demostración de diseño web · Horarios e información sujetos a confirmación.
            </div>
          </div>
        </div>

        {/* Bottom hairline copyright */}
        <div className="mt-12 pt-6 border-t border-[#FAF7F2]/10 flex flex-col sm:flex-row items-center justify-between text-xs font-label-caps tracking-widest text-[#FAF7F2]/75 gap-4 font-normal">
          <div>
            © {new Date().getFullYear()} {restaurantData.name} · Egaña 3, Bilbao
          </div>
          <div className="flex items-center gap-4">
            <span>Diseño editorial de demostración</span>
            <span>·</span>
            <Link to="/" className="hover:text-[#C29B38] transition-colors">
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
