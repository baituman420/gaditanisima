export interface MenuItem {
  id: string;
  name: string;
  description: string;
  priceProvisional: string;
  provisionalTag?: string;
  featured?: boolean;
  image?: string;
  imageAlt?: string;
}

export interface MenuSection {
  id: string;
  title: string;
  subtitle: string;
  disclaimer?: string;
  items: MenuItem[];
}

export interface MenuData {
  isProvisional: boolean;
  generalDisclaimer: string;
  sections: MenuSection[];
}

export const menuData: MenuData = {
  isProvisional: true,
  generalDisclaimer: "Carta de demostración · Selección gastronómica y precios orientativos pendientes de la carta oficial del establecimiento.",
  sections: [
    {
      id: "frituras",
      title: "De la Bahía & Frituras Gaditanas",
      subtitle: "Fritura andaluza en harina limpia y aceite de oliva virgen extra",
      disclaimer: "Propuesta gastronómica orientativa de demostración",
      items: [
        {
          id: "tortillitas-camarones",
          name: "Tortillitas de Camarones",
          description: "Crujientes, finas como encaje, con camarón vivo, harina de garbanzo y cebolleta fresca.",
          priceProvisional: "Consultar",
          provisionalTag: "Propuesta demo",
          featured: true,
          image: "./assets/images/food-tortillitas-camarones.jpg",
          imageAlt: "Plato de tortillitas de camarones servido por el camarero",
        },
        {
          id: "puntillitas-bahia",
          name: "Puntillitas de la Bahía",
          description: "Pescaíto frito gaditano en su punto crujiente, servido con gajo de limón y alioli casero.",
          priceProvisional: "Consultar",
          provisionalTag: "Propuesta demo",
          featured: true,
          image: "./assets/images/food-puntillitas-fritas.jpg",
          imageAlt: "Puntillitas fritas crujientes en cuenco de cerámica",
        },
        {
          id: "cazon-adobo",
          name: "Cazón en Adobo Tradicional (Bienmesabe)",
          description: "Marinado con orégano silvestre, comino, pimentón dulce y vinagre de Jerez.",
          priceProvisional: "Consultar",
          provisionalTag: "Propuesta demo",
        },
        {
          id: "boquerones-fritos",
          name: "Boquerones Fritos al Limón",
          description: "Limpios, abiertos al libro y pasados por harina de almorta sin gota de grasa.",
          priceProvisional: "Consultar",
          provisionalTag: "Propuesta demo",
        },
        {
          id: "chocos-fritos",
          name: "Chocos Fritos a la Gaditana",
          description: "Tiras tiernas de choco con harina de fuerza y sal marina de salinas de Chiclana.",
          priceProvisional: "Consultar",
          provisionalTag: "Propuesta demo",
        },
      ],
    },
    {
      id: "almadraba",
      title: "Almadraba & Especialidades",
      subtitle: "Platos nobles de mar y fuego con la identidad del sur",
      disclaimer: "Propuesta gastronómica orientativa de demostración",
      items: [
        {
          id: "atun-rojo-almadraba",
          name: "Tacos de Atún Rojo Salvaje sobre Cebolla Pochada",
          description: "Lomo marcado al fuego vivo en plancha, jugoso en su centro, sobre base de cebolla confitada a fuego lento.",
          priceProvisional: "Consultar",
          provisionalTag: "Plato de muestra",
          featured: true,
          image: "./assets/images/food-atun-rojo-almadraba.jpg",
          imageAlt: "Lomos de atún rojo marcados sobre cama de cebolla caramelizada",
        },
        {
          id: "pulpo-brasa",
          name: "Pata de Pulpo a la Brasa con Patatas",
          description: "Pata entera dorada a la brasa con emulsión de aceite virgen, sal en escamas y toque de pimentón.",
          priceProvisional: "Consultar",
          provisionalTag: "Plato de muestra",
          featured: true,
          image: "./assets/images/food-pulpo-brasa.jpg",
          imageAlt: "Pata de pulpo a la brasa sobre rodajas de patata",
        },
        {
          id: "tataki-atun",
          name: "Tataki de Atún con Sésamo Tostado",
          description: "Sellado rápido, vinagreta de soja y reducción de Pedro Ximénez.",
          priceProvisional: "Consultar",
          provisionalTag: "Propuesta demo",
        },
        {
          id: "gambas-ajillo",
          name: "Gambas al Ajillo en Cazuela de Barro",
          description: "Aceite de oliva virgen extra humeante, ajos laminados y guindilla.",
          priceProvisional: "Consultar",
          provisionalTag: "Propuesta demo",
        },
      ],
    },
    {
      id: "chacinas",
      title: "Chacinas de la Sierra & Tapas Frías",
      subtitle: "El aperitivo eterno de mostrador y tertulia",
      disclaimer: "Propuesta gastronómica orientativa de demostración",
      items: [
        {
          id: "chicharrones-chiclana",
          name: "Chicharrones Especiales de Chiclana",
          description: "Cortados en láminas muy finas con un golpe de sal gorda y zumo de limón fresco.",
          priceProvisional: "Consultar",
          provisionalTag: "Propuesta demo",
        },
        {
          id: "queso-payoyo",
          name: "Queso Payoyo Curado de Grazalema",
          description: "Elaborado con leche de cabra payoya y oveja merina, servido con picos artesanos.",
          priceProvisional: "Consultar",
          provisionalTag: "Propuesta demo",
        },
        {
          id: "papas-alino",
          name: "Papas Aliñás al Estilo Sanluqueño",
          description: "Patata templada de Sanlúcar con cebolleta fresca, perejil picado y aceite virgen extra.",
          priceProvisional: "Consultar",
          provisionalTag: "Propuesta demo",
        },
        {
          id: "ensaladilla-gambas",
          name: "Ensaladilla Rusa con Gamba Blanca",
          description: "Receta tabernaria con patata suave, gambas de la costa y mayonesa emulsionada.",
          priceProvisional: "Consultar",
          provisionalTag: "Propuesta demo",
        },
      ],
    },
    {
      id: "postres",
      title: "Postres Caseros",
      subtitle: "El cierre dulce con aroma a canela y chocolate",
      disclaimer: "Propuesta gastronómica orientativa de demostración",
      items: [
        {
          id: "coulant-chocolate",
          name: "Coulant de Chocolate Tibio con Nata",
          description: "Corazón fundente de cacao amargo con lluvia de azúcar glas y crema de nata batida.",
          priceProvisional: "Consultar",
          provisionalTag: "Postre de muestra",
          featured: true,
          image: "./assets/images/food-coulant-chocolate.jpg",
          imageAlt: "Coulant de chocolate caliente con sirope y nata batida",
        },
        {
          id: "torrija-caramelizada",
          name: "Torrija Caramelizada al Vino Dulce",
          description: "Pan brioche impregnado en leche aromatizada con canela, sellado con azúcar quemada.",
          priceProvisional: "Consultar",
          provisionalTag: "Propuesta demo",
        },
        {
          id: "tarta-queso",
          name: "Tarta de Queso Horneada",
          description: "Cremosa en el centro, con base quebrada y toque suave de queso curado.",
          priceProvisional: "Consultar",
          provisionalTag: "Propuesta demo",
        },
      ],
    },
    {
      id: "bodega",
      title: "Vinos del Marco de Jerez & Grifo",
      subtitle: "Generosos, finos, manzanillas y cervezas tiradas con pulso maestro",
      disclaimer: "Selección de bodega ilustrativa de demostración",
      items: [
        {
          id: "cerveza-victoria",
          name: "Cerveza Victoria de Málaga de Grifo",
          description: "Tirada en columna cerámica esmaltada a 2°C, con espuma densa y trago fresco.",
          priceProvisional: "Consultar",
          provisionalTag: "Grifo del local",
          featured: true,
          image: "./assets/images/detail-grifos-victoria.jpg",
          imageAlt: "Columna de grifos cerámicos Victoria Málaga en la barra",
        },
        {
          id: "manzanilla-rama",
          name: "Manzanilla en Rama de Sanlúcar",
          description: "Crianza biológica bajo velo de flor, directa de la bota, salina y punzante.",
          priceProvisional: "Consultar",
          provisionalTag: "Propuesta demo",
        },
        {
          id: "fino-jerez",
          name: "Fino Clásico de Jerez",
          description: "Seco, aromático, almendrado y servido en catavinos a la temperatura exacta.",
          priceProvisional: "Consultar",
          provisionalTag: "Propuesta demo",
        },
        {
          id: "amontillado",
          name: "Amontillado Viejo",
          description: "Doble crianza biológica y oxidativa, con notas de avellana y madera noble.",
          priceProvisional: "Consultar",
          provisionalTag: "Propuesta demo",
        },
        {
          id: "vermut-grifo",
          name: "Vermut Rojo de Grifo",
          description: "Macerado con botánicos andaluces, servido con hielo, piel de naranja y aceituna.",
          priceProvisional: "Consultar",
          provisionalTag: "Propuesta demo",
        },
      ],
    },
  ],
};
