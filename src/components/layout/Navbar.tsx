import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Phone, Menu, X, ArrowLeft, Calendar } from 'lucide-react';
import { restaurantData } from '../../data/restaurant';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { to: '/carta', label: 'La Carta' },
    { to: '/nuestra-esencia', label: 'Nuestra Esencia' },
    { to: '/el-local', label: 'El Local' },
    { to: '/visitanos', label: 'Visítanos' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#D8C7B5]/60 transition-all duration-300">
      <div className="h-20 w-full px-4 sm:px-8 lg:px-16 flex items-center justify-between">
        
        {/* Brand identity */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-3 group focus:outline-none"
            title="Volver a la Portada"
          >
            <img
              src="./logo.png"
              alt="Logotipo Gaditanísima Taberna"
              className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col text-left">
              <span className="font-display-hero text-xl sm:text-2xl tracking-tight leading-none text-borgoña-profundo group-hover:text-oro-viejo transition-colors font-medium">
                GADITANÍSIMA
              </span>
              <span className="font-label-caps text-[10px] tracking-[0.25em] text-oro-viejo mt-0.5 uppercase font-semibold">
                Taberna · Bilbao
              </span>
            </div>
          </Link>

          <div className="hidden xl:block h-6 w-[1px] bg-arena-calida/60 ml-3"></div>

          <Link
            to="/"
            onClick={closeMobileMenu}
            className="hidden xl:inline-flex items-center gap-1.5 font-label-caps text-xs tracking-widest text-tinta-suave hover:text-borgoña-profundo transition-colors ml-1 uppercase font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-oro-bronce" />
            <span>Portada Cinemática</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-label-caps text-xs tracking-[0.2em] uppercase transition-all duration-200 py-1 ${
                  isActive
                    ? 'text-borgoña-profundo border-b-2 border-borgoña-profundo font-bold'
                    : 'text-tinta-profunda hover:text-borgoña-profundo border-b-2 border-transparent font-medium'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Action button (Telephone reservation) */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${restaurantData.contact.phoneRaw}`}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-borgoña-profundo hover:bg-borgoña-oscuro text-[#FAF7F2] transition-all duration-300 font-label-caps text-[11px] tracking-[0.18em] uppercase border border-oro-viejo/40 shadow-sm"
            title="Llamar para reservar mesa"
          >
            <Calendar className="w-3.5 h-3.5 text-oro-viejo" />
            <span>Reservas · {restaurantData.contact.phone}</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-borgoña-profundo hover:text-oro-viejo transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#D8C7B5] px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="flex items-center gap-2 py-2 font-label-caps text-xs tracking-widest text-oro-bronce uppercase border-b border-arena-calida/40 font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Ver Portada Cinemática</span>
            </Link>

            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `font-label-caps text-sm tracking-[0.2em] uppercase py-2 transition-colors ${
                    isActive
                      ? 'text-borgoña-profundo font-bold pl-2 border-l-2 border-borgoña-profundo'
                      : 'text-tinta-profunda hover:text-borgoña-profundo font-medium'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div className="pt-4 mt-2 border-t border-arena-calida/40 flex flex-col gap-3">
              <a
                href={`tel:${restaurantData.contact.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 bg-borgoña-profundo text-[#FAF7F2] font-label-caps text-xs tracking-[0.2em] uppercase border border-oro-viejo/50"
              >
                <Phone className="w-4 h-4 text-oro-viejo" />
                <span>Llamar: {restaurantData.contact.phone}</span>
              </a>

              <div className="text-center font-label-caps text-[11px] tracking-widest text-tinta-suave uppercase font-medium">
                {restaurantData.address.street} · Bilbao
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
