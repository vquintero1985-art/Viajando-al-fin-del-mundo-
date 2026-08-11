
const dayColors = {
  1: "#b2675e",
  2: "#2e7d64",
  3: "#668f80",
  4: "#2d6782",
  5: "#7a6d99"
};

const commons = (filename) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}`;

const fallback = commons("Ushuaia - Argentina.jpg");

/*
  Coordenadas geográficas aproximadas de referencia.
  Las rutas dibujadas muestran el orden del itinerario turístico.
  No deben utilizarse como navegación GPS ni reemplazan información de prestadores/autoridades.
*/

const localFallbackPhotos = {
  "Aeropuerto Malvinas Argentinas": "assets/markers/ushuaia.jpg",
  "Centro de Ushuaia": "assets/markers/ushuaia.jpg",
  "Costanera de Ushuaia": "assets/markers/ushuaia.jpg",
  "Puerto de Ushuaia": "assets/markers/puerto.jpg",
  "Paseo de Artesanos": "assets/markers/ushuaia.jpg",

  "Estación Fin del Mundo": "assets/markers/tren-fin-del-mundo.jpg",
  "Estación Macarena": "assets/markers/tren-fin-del-mundo.jpg",
  "Estación Parque Nacional": "assets/markers/tren-fin-del-mundo.jpg",
  "Ensenada Zaratiegui": "assets/markers/ensenada-zaratiegui.jpg",
  "Lago Acigami": "assets/markers/lago-acigami.jpg",
  "Bahía Lapataia": "assets/markers/bahia-lapataia.jpg",
  "Mirador Lapataia": "assets/markers/bahia-lapataia.jpg",

  "Inicio sendero Laguna Esmeralda": "assets/markers/laguna-esmeralda.jpg",
  "Bosque y turberas": "assets/markers/laguna-esmeralda.jpg",
  "Laguna Esmeralda": "assets/markers/laguna-esmeralda.jpg",

  "Puerto Turístico": "assets/markers/puerto.jpg",
  "Isla de los Pájaros": "assets/markers/isla-pajaros.jpg",
  "Isla de los Lobos": "assets/markers/isla-lobos.jpg",
  "Faro Les Éclaireurs": "assets/markers/faro-les-eclaireurs.jpg",
  "Isla Bridges": "assets/markers/isla-bridges.jpg",

  "Base Cerro Martial": "assets/markers/glaciar-martial.jpg",
  "Mirador del Glaciar Martial": "assets/markers/glaciar-martial.jpg",
  "Mirador de Ushuaia": "assets/markers/ushuaia.jpg"
};

function localFallbackFor(name) {
  return localFallbackPhotos[name] || "assets/markers/ushuaia.jpg";
}

const days = [
  {
    day: 1,
    title: "Bienvenidos al Fin del Mundo",
    subtitle: "Recepción y aclimatación",
    intro: "Una primera jornada tranquila para llegar, instalarse y tener el primer contacto con la costa del Canal Beagle.",
    cover: commons("Ushuaia - Argentina.jpg"),
    schedule: [
      ["Según vuelo", "Llegada a Ushuaia", "Recepción en el Aeropuerto Internacional Malvinas Argentinas y traslado privado."],
      ["Check-in", "Alojamiento", "Distribución de habitaciones y descanso."],
      ["Tarde", "Centro y tiempo libre", "Almuerzo, centro, costanera, puerto, Paseo de Artesanos y compras."],
      ["Tarde", "Caminata de bienvenida", "Recorrido suave por la costanera y primer contacto con el Canal Beagle."],
      ["Noche", "Cena libre", "Gastronomía local a elección del pasajero."]
    ],
    pois: [
      {
        name: "Aeropuerto Malvinas Argentinas",
        time: "Llegada",
        coords: [-54.8433, -68.2958],
        photo: commons("Ushuaia Airport.jpg"),
        desc: "Puerta de entrada aérea a Ushuaia, ubicada a pocos kilómetros del centro."
      },
      {
        name: "Centro de Ushuaia",
        time: "Check-in / tiempo libre",
        coords: [-54.8076, -68.3073],
        photo: commons("Ushuaia city.jpg"),
        desc: "Área céntrica con hoteles, gastronomía, comercios y servicios."
      },
      {
        name: "Costanera de Ushuaia",
        time: "Tarde",
        coords: [-54.8107, -68.3044],
        photo: commons("Ushuaia - Argentina.jpg"),
        desc: "Paseo costero con vistas al Canal Beagle y a las montañas fueguinas."
      },
      {
        name: "Puerto de Ushuaia",
        time: "Tarde",
        coords: [-54.8090, -68.3015],
        photo: commons("Port of Ushuaia.jpg"),
        desc: "Puerto turístico y punto de salida de numerosas navegaciones por el Canal Beagle."
      },
      {
        name: "Paseo de Artesanos",
        time: "Tarde libre",
        coords: [-54.8085, -68.3036],
        photo: commons("Ushuaia Argentina.jpg"),
        desc: "Sector céntrico ideal para una caminata breve, compras y contacto con productos locales."
      }
    ]
  },
  {
    day: 2,
    title: "Donde termina la ruta y comienza la aventura",
    subtitle: "Parque Nacional + Tren del Fin del Mundo",
    intro: "Bosques, lagos, costa, historia y el final de la Ruta Nacional 3 en una de las jornadas más completas del circuito.",
    cover: commons("Tierra del Fuego National Park.jpg"),
    schedule: [
      ["08:00", "Desayuno", "Desayuno en el hotel."],
      ["08:45", "Salida desde Ushuaia", "Traslado en minibús hacia la Estación del Fin del Mundo."],
      ["09:15", "Tren del Fin del Mundo", "Recorrido histórico y paisajístico con parada intermedia en Macarena."],
      ["11:15", "Parque Nacional", "Continuación en vehículo turístico."],
      ["11:45", "Ensenada Zaratiegui", "Parada panorámica, caminata corta y fotografías."],
      ["12:30", "Almuerzo", "Vianda o establecimiento habilitado."],
      ["13:30", "Lago Acigami", "Caminata breve e interpretación ambiental."],
      ["14:30", "Bahía Lapataia", "Visita al final de la Ruta Nacional 3."],
      ["15:00", "Mirador Lapataia", "Sendero de baja dificultad."],
      ["16:00", "Pasarelas de Lapataia", "Fotografías y contemplación."],
      ["17:00", "Regreso", "Retorno hacia Ushuaia."],
      ["18:00", "Hotel", "Llegada aproximada y noche libre."]
    ],
    pois: [
      {
        name: "Estación Fin del Mundo",
        time: "09:15",
        coords: [-54.8307, -68.4220],
        photo: commons("End of the World Train.jpg"),
        desc: "Punto de partida del Ferrocarril Austral Fueguino, conocido como Tren del Fin del Mundo."
      },
      {
        name: "Estación Macarena",
        time: "Parada intermedia",
        coords: [-54.8390, -68.4680],
        photo: commons("Tren del Fin del Mundo.jpg"),
        desc: "Parada del recorrido ferroviario en un entorno de bosque y cursos de agua."
      },
      {
        name: "Estación Parque Nacional",
        time: "11:00 aprox.",
        coords: [-54.8437, -68.5220],
        photo: commons("End of the World Train Ushuaia.jpg"),
        desc: "Llegada del tren dentro del área protegida y conexión con el recorrido terrestre."
      },
      {
        name: "Ensenada Zaratiegui",
        time: "11:45",
        coords: [-54.8509, -68.5329],
        photo: commons("Ensenada Zaratiegui.jpg"),
        desc: "Sector costero del Parque Nacional Tierra del Fuego sobre el Canal Beagle."
      },
      {
        name: "Lago Acigami",
        time: "13:30",
        coords: [-54.8412, -68.5793],
        photo: commons("Lago Roca Tierra del Fuego.jpg"),
        desc: "Lago de origen glaciario rodeado por bosque andino-patagónico y montañas."
      },
      {
        name: "Bahía Lapataia",
        time: "14:30",
        coords: [-54.8526, -68.5770],
        photo: commons("Lapataia Bay.jpg"),
        desc: "Uno de los paisajes más representativos del parque y final de la Ruta Nacional 3."
      },
      {
        name: "Mirador Lapataia",
        time: "15:00",
        coords: [-54.8509, -68.5727],
        photo: commons("Bahia Lapataia Tierra del Fuego.jpg"),
        desc: "Sendero panorámico entre bosque y turbal con vistas abiertas a la bahía."
      }
    ]
  },
  {
    day: 3,
    title: "El espejo verde de la montaña",
    subtitle: "Trekking Laguna Esmeralda",
    intro: "La jornada de aventura moderada: bosque de lenga, turberas, montaña y una laguna glaciaria de intenso color.",
    cover: commons("Laguna Esmeralda Ushuaia.jpg"),
    schedule: [
      ["07:30", "Desayuno", "Desayuno en el hotel."],
      ["08:15", "Salida desde Ushuaia", "Traslado por Ruta Nacional 3 hacia el inicio del sendero."],
      ["08:45", "Inicio del trekking", "9 km ida y vuelta · 4 a 5 h · dificultad media/fácil · +220 m."],
      ["11:00", "Laguna Esmeralda", "Descanso, fotografías, contemplación y snack."],
      ["12:00", "Box lunch", "Almuerzo tipo vianda junto al entorno de la laguna."],
      ["12:30", "Regreso", "Descenso por el mismo sendero."],
      ["14:30", "Fin del trekking", "Recepción del grupo y traslado a Ushuaia."],
      ["15:30", "Ciudad", "Llegada aproximada y tarde libre."],
      ["20:00", "Cena libre", "Noche en Ushuaia."]
    ],
    pois: [
      {
        name: "Inicio sendero Laguna Esmeralda",
        time: "08:45",
        coords: [-54.7220, -68.1215],
        photo: commons("Laguna Esmeralda Ushuaia.jpg"),
        desc: "Acceso al trekking desde la Ruta Nacional 3, en el Valle de Tierra Mayor."
      },
      {
        name: "Bosque y turberas",
        time: "Durante el ascenso",
        coords: [-54.7030, -68.1170],
        photo: commons("Tierra del Fuego forest.jpg"),
        desc: "Tramo entre lengas, cursos de agua y turberas características del paisaje fueguino."
      },
      {
        name: "Laguna Esmeralda",
        time: "11:00",
        coords: [-54.6828, -68.1154],
        photo: commons("Laguna Esmeralda, Ushuaia.jpg"),
        desc: "Laguna de origen glaciario al pie del cordón montañoso, objetivo principal del trekking."
      }
    ]
  },
  {
    day: 4,
    title: "Navegando hacia el Fin del Mundo",
    subtitle: "Canal Beagle + Faro Les Éclaireurs",
    intro: "Una jornada marítima entre aves, lobos marinos, islas, historia y una de las postales más famosas de Ushuaia.",
    cover: commons("Les Eclaireurs Lighthouse.jpg"),
    schedule: [
      ["08:00", "Desayuno", "Desayuno en el hotel."],
      ["09:00", "Puerto turístico", "Traslado desde el alojamiento."],
      ["09:30", "Embarque", "Inicio de navegación por el Canal Beagle."],
      ["10:00", "Isla de los Pájaros", "Observación de aves marinas."],
      ["10:30", "Isla de los Lobos", "Observación de fauna marina."],
      ["11:00", "Faro Les Éclaireurs", "Parada fotográfica y explicación histórica."],
      ["11:30", "Isla Bridges", "Sendero interpretativo si la modalidad contratada incluye desembarco."],
      ["12:30", "Puerto", "Regreso y fin de la navegación."],
      ["13:00", "Almuerzo libre", "Zona céntrica."],
      ["14:30", "Tiempo libre", "Centro, compras, cafetería, costanera o descanso."],
      ["20:00", "Cena de despedida", "Propuesta grupal opcional con gastronomía regional."]
    ],
    pois: [
      {
        name: "Puerto Turístico",
        time: "09:30",
        coords: [-54.8091, -68.3010],
        photo: commons("Ushuaia port.jpg"),
        desc: "Punto de embarque para la navegación por el Canal Beagle."
      },
      {
        name: "Isla de los Pájaros",
        time: "10:00",
        coords: [-54.8710, -68.2180],
        photo: commons("Bird Island Beagle Channel.jpg"),
        desc: "Sector de observación de aves marinas en el archipiélago Bridges."
      },
      {
        name: "Isla de los Lobos",
        time: "10:30",
        coords: [-54.8840, -68.1930],
        photo: commons("Sea lions Beagle Channel.jpg"),
        desc: "Afloramientos rocosos utilizados por colonias de lobos marinos."
      },
      {
        name: "Faro Les Éclaireurs",
        time: "11:00",
        coords: [-54.8715, -68.0841],
        photo: commons("Les Eclaireurs Lighthouse.jpg"),
        desc: "Faro emblemático del Canal Beagle, conocido popularmente como el Faro del Fin del Mundo."
      },
      {
        name: "Isla Bridges",
        time: "11:30",
        coords: [-54.8505, -68.2570],
        photo: commons("Beagle Channel Ushuaia.jpg"),
        desc: "Isla próxima a Ushuaia donde algunas navegaciones incluyen desembarco y caminata interpretativa."
      }
    ]
  },
  {
    day: 5,
    title: "Entre el bosque y el hielo",
    subtitle: "Glaciar Martial + mirador panorámico + regreso",
    intro: "Un cierre de montaña próximo a la ciudad, con vistas panorámicas y una exigencia menor que el trekking del día 3.",
    cover: commons("Martial Glacier Ushuaia.jpg"),
    schedule: [
      ["08:00", "Desayuno", "Desayuno en el hotel."],
      ["09:00", "Check-out", "Equipaje en guarda hasta el traslado final."],
      ["09:30", "Cerro Martial", "Traslado hacia la base del circuito."],
      ["10:00", "Mirador del Glaciar", "2,5 km aprox. · 75 min · dificultad media · +220 m."],
      ["11:30", "Contemplación", "Fotografías y descanso."],
      ["12:00", "Descenso", "Regreso hacia la base."],
      ["13:00", "Almuerzo", "Almuerzo libre."],
      ["14:00", "Mirador panorámico", "Última vista sobre Ushuaia y el Canal Beagle."],
      ["15:00", "Hotel", "Retiro del equipaje."],
      ["15:30", "Aeropuerto", "Traslado privado y fin del circuito."]
    ],
    pois: [
      {
        name: "Base Cerro Martial",
        time: "09:30",
        coords: [-54.7851, -68.3622],
        photo: commons("Martial Glacier Ushuaia.jpg"),
        desc: "Acceso de montaña próximo a la ciudad, punto de partida hacia los miradores del Martial."
      },
      {
        name: "Mirador del Glaciar Martial",
        time: "10:00",
        coords: [-54.7772, -68.3810],
        photo: commons("Glaciar Martial Ushuaia.jpg"),
        desc: "Sector panorámico con vistas al valle glacial, bosque y cumbres del Martial."
      },
      {
        name: "Mirador de Ushuaia",
        time: "14:00",
        coords: [-54.7934, -68.3442],
        photo: commons("Ushuaia view.jpg"),
        desc: "Punto elevado para cerrar el viaje con una vista general de la ciudad y el Canal Beagle."
      },
      {
        name: "Aeropuerto Malvinas Argentinas",
        time: "15:30 / 16:00",
        coords: [-54.8433, -68.2958],
        photo: commons("Ushuaia Airport.jpg"),
        desc: "Traslado final para tomar el vuelo de regreso."
      }
    ]
  }
];

const map = L.map("map", {
  zoomControl: true,
  scrollWheelZoom: true
}).setView([-54.79, -68.32], 10);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const markerLayers = {};
const routeLayers = {};

function photoIcon(poi, day) {
  return L.divIcon({
    className: "",
    html: `
      <div class="photo-marker day-ring-${day}">
        <img src="${poi.photo}" alt="${poi.name}"
          onerror="this.onerror=null;this.src='${localFallbackFor(poi.name)}'">
        <span class="marker-label">${poi.name}</span>
      </div>`,
    iconSize: [54, 54],
    iconAnchor: [27, 27],
    popupAnchor: [0, -30]
  });
}

function popupHtml(poi, day) {
  return `
    <article class="poi-popup">
      <img src="${poi.photo}" alt="${poi.name}"
        onerror="this.onerror=null;this.src='${localFallbackFor(poi.name)}'">
      <div class="poi-popup__body">
        <div class="poi-popup__meta">DÍA ${day} · ${poi.time}</div>
        <h3>${poi.name}</h3>
        <p>${poi.desc}</p>
      </div>
    </article>`;
}

function addDayToMap(dayData) {
  const markers = L.layerGroup();
  dayData.pois.forEach(poi => {
    L.marker(poi.coords, { icon: photoIcon(poi, dayData.day) })
      .bindPopup(popupHtml(poi, dayData.day), { maxWidth: 280 })
      .addTo(markers);
  });
  markerLayers[dayData.day] = markers;

  const coords = dayData.pois.map(p => p.coords);
  routeLayers[dayData.day] = L.polyline(coords, {
    color: dayColors[dayData.day],
    weight: 4,
    opacity: .85,
    dashArray: dayData.day === 4 ? "8 8" : null
  });
}

days.forEach(addDayToMap);

function clearMapLayers() {
  Object.values(markerLayers).forEach(layer => map.removeLayer(layer));
  Object.values(routeLayers).forEach(layer => map.removeLayer(layer));
}

function boundsForDay(day) {
  const selected = day === "all" ? days : days.filter(d => String(d.day) === String(day));
  const pts = selected.flatMap(d => d.pois.map(p => p.coords));
  return L.latLngBounds(pts);
}

function showDay(day) {
  clearMapLayers();

  const selected = day === "all" ? days : days.filter(d => String(d.day) === String(day));
  selected.forEach(d => {
    routeLayers[d.day].addTo(map);
    markerLayers[d.day].addTo(map);
  });

  const bounds = boundsForDay(day);
  if (bounds.isValid()) {
    map.fitBounds(bounds, {
      padding: [45, 45],
      maxZoom: day === "3" ? 12 : 11
    });
  }

  document.querySelectorAll(".day-tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.day === String(day));
  });

  document.querySelectorAll(".day-card").forEach(card => {
    const active = day === "all" || card.dataset.day === String(day);
    card.style.display = active ? "grid" : "none";
  });
}

document.querySelectorAll(".day-tab").forEach(btn => {
  btn.addEventListener("click", () => showDay(btn.dataset.day));
});

function renderCards() {
  const host = document.getElementById("dayCards");
  host.innerHTML = days.map(d => `
    <article class="day-card" data-day="${d.day}">
      <div class="day-card__photo" style="background-image:
        linear-gradient(0deg,rgba(6,30,33,.18),rgba(6,30,33,.03)),
        url('${d.cover}')">
        <div class="day-card__stamp">
          <small>DÍA</small>
          <strong>0${d.day}</strong>
        </div>
      </div>
      <div class="day-card__body">
        <h3>${d.title}</h3>
        <p><strong>${d.subtitle}.</strong> ${d.intro}</p>
        <div class="schedule">
          ${d.schedule.map(item => `
            <div class="schedule-row">
              <time>${item[0]}</time>
              <div>
                <strong>${item[1]}</strong>
                <span>${item[2]}</span>
              </div>
            </div>`).join("")}
        </div>
      </div>
    </article>
  `).join("");
}

renderCards();
showDay("all");

window.addEventListener("resize", () => setTimeout(() => map.invalidateSize(), 150));


// Recalcula el tamaño del mapa cuando termina de cargar la página.
// Esto es especialmente importante al abrir index.html directamente desde Finder/Chrome.
window.addEventListener("load", () => {
  setTimeout(() => {
    map.invalidateSize(true);
    showDay(document.querySelector(".day-tab.active")?.dataset.day || "all");
  }, 250);
});


// Responsive map handling: recalcula Leaflet al cambiar tamaño u orientación.
let mapResizeTimer;
function refreshResponsiveMap() {
  clearTimeout(mapResizeTimer);
  mapResizeTimer = setTimeout(() => {
    map.invalidateSize(true);
    const activeDay = document.querySelector(".day-tab.active")?.dataset.day || "all";
    const bounds = boundsForDay(activeDay);
    if (bounds.isValid()) {
      map.fitBounds(bounds, {
        padding: window.innerWidth <= 580 ? [28, 28] : [45, 45],
        maxZoom: activeDay === "3" ? 12 : 11
      });
    }
  }, 180);
}

window.addEventListener("resize", refreshResponsiveMap);
window.addEventListener("orientationchange", () => {
  setTimeout(refreshResponsiveMap, 320);
});
