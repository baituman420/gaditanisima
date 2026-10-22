# Gaditanísima · Taberna en Bilbao

Web definitiva de demostración para **Gaditanísima**, taberna tradicional de inspiración gaditana situada en **Calle Egaña, 3 (Indautxu, Bilbao)**.

---

## 1. Arquitectura y Dirección Artística

El proyecto combina dos universos visuales armónicamente integrados:

1. **Portada Cinemática (V3 Aprobada):**
   - Escenario oscuro, teatral y cinematográfico.
   - Secuencia exacta: reproducción automática del vídeo de la bailaora (silenciado) -> giro flamenco y aproximación a los zapatos -> remate con taconazo -> onda expansiva circular (`shock`), destello cálido (`flash`) y sacudida de cámara (`shake`) -> pausa dramática de 500 ms -> revelación del logotipo original y menú de navegación.
   - Controles de usuario: «Saltar intro ↗» (o «Entrar →» si el navegador bloquea la reproducción automática) y «↺ Ver intro» para repetir la experiencia.

2. **Páginas Interiores (V5 Stitch):**
   - Atmósfera luminosa, mediterránea y andaluza (marfil cálido `#FAF7F2`, cal blanca `#FDFCF9`, borgoña profundo `#4A121A`, oro viejo `#C29B38` y arena suave `#D8C7B5`).
   - Diseño rectilíneo puro sin cajas tipo tarjeta, sin sombras artificiales y sin esquinas redondeadas (`rounded-none`).
   - Fotografía auténtica como protagonista absoluta, sin marcos decorativos ni imágenes de stock.
   - Fondos ilustrados de acuarela basados en el collage vintage de Cádiz y Bilbao, integrados con una opacidad sutil (6%) en CSS para acompañar el contenido sin restar legibilidad.

---

## 2. Pantallas Implementadas

- **`/` (Portada V3):** Entrada cinemática con el vídeo de la bailaora, logotipo oficial y acceso a las secciones.
- **`/#/carta` (La Carta):** Registro gastronómico abierto con fotografía de la carta física original, tortillitas de camarones, puntillitas fritas, atún de almadraba, pulpo a la brasa y coulant casero.
- **`/#/nuestra-esencia` (Nuestra Esencia):** Manifiesto del cruce entre Cádiz y Bilbao, acompañado del Cartel Fundacional oficial de inauguración (25 de junio).
- **`/#/el-local` (El Local):** Ensayo visual arquitectónico que detalla los tres ritmos del espacio (La Barra, El Comedor de suelo hidráulico y La Terraza animada en Calle Egaña).
- **`/#/visitanos` (Visítanos):** Guía de llegada, accesibilidad (Metro Indautxu), cartel oficial de reservas con llamada telefónica directa (**946 291 588**) e Instagram (**`@gaditanisimabilbao`**).

---

## 3. Pila Tecnológica

- **React 18**
- **Vite 6** (con TypeScript)
- **Tailwind CSS 3.4** (con `@tailwindcss/forms` y configuración personalizada de color y tipografía)
- **React Router 6** (`HashRouter` para compatibilidad universal con GitHub Pages)
- **Lucide React** (iconos funcionales minimalistas)

---

## 4. Ejecución en Local

Para iniciar el servidor de desarrollo en local:

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev
```

El servidor estará disponible en `http://localhost:5173/`.

Para generar y previsualizar la compilación optimizada de producción:

```bash
# Generar paquete para publicación
npm run build

# Previsualizar el resultado de dist/
npm run preview
```

---

## 5. Publicación en GitHub Pages

El proyecto está preparado de fábrica para su publicación inmediata en GitHub Pages:

1. **Configuración de base relativa (`base: './'` en `vite.config.ts`):** Todos los scripts, estilos y recursos multimedia se enlazan mediante rutas relativas, permitiendo que la web funcione tanto en la raíz de un dominio como en un subdirectorio (ej. `https://usuario.github.io/Gaditanisima/`).
2. **Enrutamiento por Hash (`HashRouter`):** Evita el habitual error 404 al recargar directamente en subpáginas (`/#/carta`, `/#/el-local`, etc.) en servidores de hosting estático sin reescritura de URLs.
3. **Página de respaldo `404.html`:** Se incluye en la carpeta `public/` para redirigir peticiones directas en caso de servidores con configuración histórica.

### Opciones de Despliegue:

- **Opción A (Mediante la carpeta `dist`):**
  1. Ejecuta `npm run build`.
  2. Publica el contenido de la carpeta `dist/` en la rama `gh-pages` o en la carpeta `/docs` de la rama principal.

- **Opción B (Mediante GitHub Actions):**
  Puedes utilizar el flujo de trabajo estándar de GitHub Actions para Vite/Static HTML.

---

## 6. Mantenimiento y Actualización de Contenidos

Todos los datos editables están centralizados para facilitar futuras modificaciones:

- **Datos del Establecimiento (`src/data/restaurant.ts`):** Dirección, teléfono oficial, Instagram, coordenadas y horarios.
- **Datos de la Carta (`src/data/menu.ts`):** Capítulos gastronómicos, platos, descripciones y precios.
- **Recursos Multimedia (`public/assets/`):**
  - `public/assets/media/`: Vídeo de la bailaora (`bailaora.mp4`), póster y logotipo.
  - `public/assets/images/`: 12 fotografías reales del establecimiento y su gastronomía.
  - `public/assets/backgrounds/`: Cuadrantes decorativos de acuarela.

---

## 7. Estado de Datos Reales vs Provisionales

- **Confirmados:**
  - Nombre: Gaditanísima Taberna.
  - Dirección: Calle Egaña, 3 · 48010 Indautxu, Bilbao.
  - Teléfono Oficial de Reservas: 946 291 588.
  - Instagram Oficial: `@gaditanisimabilbao`.
  - Fecha de Inauguración: 25 de junio de 2024.
  - Fotografías: Todas las imágenes de comida, sala, vidriera, grifos y terraza corresponden a capturas auténticas del establecimiento.
- **Provisionales (claramente señalizados en la web):**
  - Carta definitiva con precios cerrados (se muestra una propuesta orientativa de demostración).
  - Horarios exactos de apertura por turnos (claramente indicados como horarios provisionales sujetos a confirmación).
