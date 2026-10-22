export interface RestaurantInfo {
  name: string;
  shortName: string;
  tagline: string;
  descriptor: string;
  address: {
    street: string;
    neighborhood: string;
    postalCode: string;
    city: string;
    province: string;
    full: string;
    coordinates: string;
    googleMapsUrl: string;
  };
  contact: {
    phone: string;
    phoneRaw: string;
    instagram: string;
    instagramUrl: string;
  };
  schedule: {
    isProvisional: boolean;
    disclaimer: string;
    shifts: Array<{
      days: string;
      hours: string;
      notes?: string;
    }>;
  };
  access: {
    metro: string;
    bus: string;
    parking: string;
    landmarks: string;
  };
  highlights: string[];
}

export const restaurantData: RestaurantInfo = {
  name: "Gaditanísima",
  shortName: "Gaditanísima Taberna",
  tagline: "Un rincón del sur en Bilbao",
  descriptor: "Taberna de inspiración gaditana en Indautxu",
  address: {
    street: "Calle Egaña, 3",
    neighborhood: "Indautxu",
    postalCode: "48010",
    city: "Bilbao",
    province: "Bizkaia",
    full: "Calle Egaña, 3 · 48010 Bilbao (Indautxu)",
    coordinates: "43°15'35.8\"N 2°56'09.4\"W",
    googleMapsUrl: "https://maps.google.com/?q=Calle+Ega%C3%B1a+3+Bilbao",
  },
  contact: {
    phone: "946 291 588",
    phoneRaw: "+34946291588",
    instagram: "@gaditanisimabilbao",
    instagramUrl: "https://www.instagram.com/gaditanisimabilbao/",
  },
  schedule: {
    isProvisional: true,
    disclaimer: "Horario orientativo de demostración · Pendiente de confirmación definitiva por el establecimiento.",
    shifts: [
      {
        days: "Martes a Jueves",
        hours: "12:30 – 16:30 | 19:30 – 23:30",
        notes: "Barra continua y servicio de comedor",
      },
      {
        days: "Viernes y Sábados",
        hours: "12:30 – 00:30",
        notes: "Servicio ininterrumpido en barra, comidas y cenas",
      },
      {
        days: "Domingos",
        hours: "12:30 – 17:00",
        notes: "Aperitivos, vermut y almuerzo de domingo",
      },
      {
        days: "Lunes",
        hours: "Cerrado por descanso",
      },
    ],
  },
  access: {
    metro: "Metro Bilbao: Estación Indautxu (salidas Urquijo o Doctor Areilza, a 2 min caminando)",
    bus: "Bilbobus líneas 18, 26, 38, 76, 77 (paradas Gran Vía / Campuzano)",
    parking: "Parking público Plaza Campuzano / Parking Alhóndiga Azkuna Zentroa (a 150m)",
    landmarks: "A 2 minutos de Azkuna Zentroa (Alhóndiga) y Plaza Campuzano",
  },
  highlights: [
    "Tortillitas de camarones y pescaíto frito en harina limpia",
    "Atún rojo salvaje de almadraba",
    "Vinos generosos del Marco de Jerez y manzanilla en rama",
    "Cerveza Victoria Málaga tirada en grifo cerámico a 2°C",
    "Terraza animada en Calle Egaña y salón interior con suelo hidráulico tradicional",
  ],
};
