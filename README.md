# Circuito Ushuaia · 5 días

Sitio web estático e interactivo para visualizar un circuito turístico de 5 días por Ushuaia.

## Qué incluye

- Mapa real basado en **OpenStreetMap**.
- Mapa interactivo con **Leaflet**.
- Filtro por día.
- Recorrido visual de cada jornada.
- Marcadores con **miniaturas fotográficas** en lugar de pines numéricos.
- Popups con horario, nombre y descripción de cada atractivo.
- Programa completo debajo del mapa.
- Diseño responsive para computadora, tablet y celular.
- Sin backend y sin proceso de compilación.

## Archivos

```text
circuito-ushuaia/
├── index.html
├── styles.css
├── app.js
└── README.md
```

## Publicar en GitHub Pages

1. Crear un repositorio nuevo en GitHub.
2. Subir estos cuatro archivos a la raíz del repositorio.
3. Ir a **Settings → Pages**.
4. En **Build and deployment**, elegir:
   - Source: **Deploy from a branch**
   - Branch: `main`
   - Folder: `/ (root)`
5. Guardar.
6. GitHub mostrará la URL pública del sitio.

## Importante sobre las fotografías

Las imágenes se cargan desde **Wikimedia Commons** mediante URLs públicas.
El código incorpora una imagen de respaldo en caso de que algún archivo externo
no esté disponible.

Para un proyecto comercial o institucional, se recomienda reemplazar cada URL
por fotografías propias o por imágenes con licencia verificada, y conservar la
atribución exigida por cada fuente.

## Importante sobre las coordenadas

Las coordenadas se utilizaron para representar de forma geográfica el orden del
itinerario y los principales atractivos. Son coordenadas de referencia y **no
deben utilizarse como navegación GPS**. Antes de publicar una versión comercial,
conviene validar accesos, horarios y puntos exactos con prestadores y organismos
turísticos oficiales.

## Dependencias externas

- Leaflet 1.9.4 (CDN)
- OpenStreetMap (map tiles)
- Wikimedia Commons (fotografías)

No hace falta instalar Node.js, npm ni ningún framework.


## Marcadores sin imágenes en blanco

Esta versión incluye imágenes locales dentro de `assets/markers/` como respaldo.
El sitio intenta mostrar primero la fotografía externa del atractivo y, si esa URL falla,
cambia automáticamente a una imagen local. De este modo los marcadores no quedan vacíos.

Las imágenes locales son **ilustrativas de respaldo**; para una publicación institucional
conviene reemplazarlas por fotografías propias o con licencia verificada del atractivo exacto.


## Diseño responsive

La versión V3 está optimizada para:

- teléfonos desde aproximadamente 320 px de ancho;
- teléfonos en orientación horizontal;
- tablets;
- notebooks;
- monitores de escritorio y pantallas grandes.

En móvil, el selector de días se transforma en una barra horizontal deslizable,
el mapa adapta automáticamente su altura, los marcadores reducen su tamaño,
las etiquetas largas se ocultan para evitar superposición y las fichas del
itinerario pasan a una sola columna.

Leaflet también recalcula su tamaño al rotar el dispositivo o cambiar el ancho
de la ventana.


## Versión final con fotos locales

Esta versión usa fotografías locales dentro de `assets/markers/` para los puntos de interés
principales de los cinco días. Los pines y las fichas ya no dependen de Wikimedia para esas
imágenes, lo que evita marcadores rotos al publicar en GitHub Pages.

Se mantiene el diseño responsive V3 para celular, tablet, notebook y escritorio.
