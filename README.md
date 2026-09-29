# DyangoTech — Landing page

Sitio de una sola página para DyangoTech: estudio de automatización de procesos,
desarrollo de software a medida y diseño web.

HTML, CSS y JavaScript puros. **Sin build, sin dependencias, sin Node.**
Los archivos se publican tal cual.

## Estructura

| Archivo | Qué es |
|---|---|
| `index.html` | Toda la página + datos estructurados JSON-LD para SEO |
| `styles.css` | Estilos. La paleta está en variables CSS al inicio (`:root`) |
| `script.js` | Acordeón del FAQ, header al hacer scroll, animaciones de entrada |
| `logo.svg` | Logo / favicon |
| `og-image.png` | Imagen de vista previa al compartir el link (1200×630) |
| `img/` | Capturas de los proyectos (WebP) |
| `robots.txt`, `sitemap.xml` | SEO |

## Cambios frecuentes

**Cambiar el color de acento:** en `styles.css`, variable `--color-accent` dentro
de `:root`. Se usa exclusivamente en los botones de llamado a la acción.

**Cambiar el WhatsApp:** reemplazar `573133448250` en todo `index.html`.

**Cambiar el correo:** reemplazar `contacto@dyangotech.com` en `index.html`.

**Cambiar precios de los planes:** sección `#planes` de `index.html`. Modelo: pago único por
proyecto + mantenimiento mensual opcional. Los precios también aparecen en el FAQ
("¿Cuánto cuesta una página web?" y "¿Tengo que pagar una mensualidad?"), visible y JSON-LD.

**Agregar un proyecto:** duplicar un bloque `<article class="card card-proj">`
en la sección `#proyectos`. Las imágenes van en `img/` a 880×420.

**Agregar una pregunta al FAQ:** hay que añadirla en dos lugares — el HTML visible
y el bloque `FAQPage` del JSON-LD en el `<head>`. Si no coinciden, Google penaliza.

## Publicar

Subir el contenido de la raíz al hosting. No hay paso de compilación.

## Antes de publicar

- [ ] Confirmar el dominio real en `og:url`, `canonical` y `sitemap.xml`
- [ ] Verificar que `og-image.png` quede accesible en la raíz del dominio
