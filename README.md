# IDDI NEWS

IDDI NEWS es el sitio web de la plataforma de noticias y recursos educativos bilingües del Departamento de Inglés de la Institución Educativa Distrital Bilingüe Nueva Granada, en Barranquilla, Colombia. El proyecto busca comunicar noticias, proyectos y actividades escolares, y apoyar el aprendizaje en inglés y español.

## Objetivo

Reconstruir en Astro el sitio web que comenzó como un prototipo estático de HTML y CSS. La carpeta anterior `iD-News` sirve como referencia de contenido, recursos visuales y dirección de diseño; el desarrollo activo ocurre en este repositorio.

El sitio debe ser claro, accesible y adaptable a móviles. Conserva la identidad visual azul y los recursos gráficos existentes cuando sean pertinentes. El contenido combina navegación e información en inglés con descripciones y contexto bilingües.

## Páginas

- `/` — Inicio: presentación del proyecto y enlaces a sus secciones.
- `/about/` — Acerca de IDDI NEWS y su propósito educativo.
- `/services/` — Noticias bilingües, proyectos y cobertura de actividades escolares.
- `/gallery/` — Galería de imágenes de la comunidad educativa.
- `/contact/` — Información para contactar al Departamento de Inglés.

## Arquitectura

El proyecto usa Astro y genera páginas mediante rutas basadas en archivos. Un layout compartido proporciona metadatos, navegación y pie de página; los componentes comunes están en `src/components/`. Los estilos adaptables se mantienen en `src/styles/global.css`, y las páginas están en `src/pages/`.

Las imágenes migradas de la versión estática están en `public/images/`. No inventes datos institucionales, direcciones ni canales de contacto que no estén en las fuentes del proyecto.

## Desarrollo

Instala dependencias con `npm install` y ejecuta `npm run dev`. Para iniciar el servidor en segundo plano, usa `astro dev --background`; puedes gestionarlo con `astro dev status`, `astro dev logs` y `astro dev stop`.

Genera el sitio de producción con `npm run build`.
