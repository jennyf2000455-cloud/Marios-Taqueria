const CONFIG = {
  nombre: "Taqueria y Antojitos Mario",
  subtitulo: "Auténticos antojitos mexicanos en Los Fresnos",
  assets: {
    logo: "assets/mario-logo.jpeg",
    cover: ""
  },
  historia: [
    "En Taqueria y Antojitos Mario celebramos los sabores tradicionales de México con una cocina cercana y familiar. Cada platillo se prepara al momento para mantener la esencia de la comida callejera con un toque casero.",
    "Nuestra taquería nació del deseo de compartir recetas sencillas, llenas de sabor y hechas con ingredientes frescos. Aquí encontrarás un menú pensado para disfrutar en cualquier momento del día.",
    "Nos encanta recibir a la comunidad de Los Fresnos con un servicio cálido y un ambiente relajado, donde cada visita se convierte en una experiencia auténtica y deliciosa."
  ],
  direccion: "116 E Ocean Blvd",
  ciudadEstado: "Los Fresnos, TX 78566",
  telefono: "(956) 233-6004",
  horarios: {
    Lunes: "11:00 AM - 12:00 AM",
    Martes: "11:00 AM - 12:00 AM",
    "Miércoles": "11:00 AM - 12:00 AM",
    Jueves: "11:00 AM - 12:00 AM",
    Viernes: "11:00 AM - 12:00 AM",
    Sábado: "11:00 AM - 12:00 AM",
    Domingo: "12:00 PM - 12:00 AM"
  },
  whatsapp: "9562336004",
  menu: [
    {
      categoria: "Antojitos",
      items: [
        {
          nombre: "Nachos Panchos",
          precio: "$8.25",
          nota: "Frijoles, queso amarillo, lechuga, tomate y jalapeño."
        },
        {
          nombre: "Tostadas (Orden de 6)",
          precio: "$9.99",
          nota: "Pollo o deshebrada. Frijoles, lechuga, tomate y queso."
        },
        {
          nombre: "Flautas (Orden de 6)",
          precio: "$8.25",
          nota: "Pollo o deshebrada. Lechuga, tomate y queso."
        },
        {
          nombre: "Sopes (Orden de 6)",
          precio: "$8.25",
          nota: "Pollo o deshebrada. Salsa, lechuga, tomate y queso."
        }
      ]
    },
    {
      categoria: "Hamburguesas",
      nota: "Incluye mayonesa, mostaza, pepinos, tomate, lechuga y cebolla.",
      items: [
        { nombre: "Cheeseburger", precio: "$6.50" },
        { nombre: "Mushroom Swiss", precio: "$7.50" },
        { nombre: "Bacon Cheeseburger", precio: "$8.00" },
        { nombre: "Double Bacon Jam", precio: "$10.75" }
      ]
    },
    {
      categoria: "Orden de 6 Tacos",
      items: [
        { nombre: "Bistek", precio: "$7.00" },
        { nombre: "Fajita", precio: "$8.00" },
        { nombre: "Tripa", precio: "$8.00" },
        { nombre: "Pastor", precio: "$7.00" },
        { nombre: "Pollo", precio: "$7.00" },
        { nombre: "Deshebrada", precio: "$7.00" },
        { nombre: "Guisada", precio: "$7.00" }
      ],
      nota: "Incluye cilantro, cebolla, aguacate y queso (según preparación)."
    },
    {
      categoria: "Tacos de Harina",
      items: [
        { nombre: "Bistek", precio: "$8.25" },
        { nombre: "Tripa", precio: "$9.00" },
        { nombre: "Pastor", precio: "$8.25" },
        { nombre: "Fajita", precio: "$9.00" },
        { nombre: "Pollo", precio: "$8.25" },
        { nombre: "Deshebrada", precio: "$8.25" },
        { nombre: "Guisada", precio: "$8.25" }
      ]
    },
    {
      categoria: "Tortas",
      items: [
        { nombre: "Pollo", precio: "$3.75" },
        { nombre: "Deshebrada", precio: "$3.75" },
        { nombre: "Bistek", precio: "$3.75" },
        { nombre: "Jamón", precio: "$3.75" }
      ],
      nota: "Incluye mayonesa, lechuga, tomate, aguacate y queso."
    },
    {
      categoria: "Papa Asada",
      items: [{ nombre: "Papa Asada", precio: "$4.00" }],
      nota: "Con bistek, mantequilla, crema, tocino y queso amarillo."
    },
    {
      categoria: "Snacks",
      items: [
        { nombre: "Chicken Nuggets (6 nuggets + papas)", precio: "$3.99" },
        { nombre: "Chicken Tenders (2 piezas + papas)", precio: "$3.99" },
        { nombre: "Papas Fritas", precio: "$2.00" }
      ]
    },
    {
      categoria: "Frijoles y Botanas",
      items: [
        { nombre: "Frijoles Especiales", precio: "$2.25" },
        { nombre: "Frijoles Charros", precio: "$1.25" },
        { nombre: "Cueritos", precio: "$2.00" }
      ]
    },
    {
      categoria: "Extras",
      items: [
        { nombre: "Carne / Meat", precio: "$4.00" },
        { nombre: "Aguacate / Avocado", precio: "$2.00" },
        { nombre: "Queso / Cheese", precio: "$1.00" },
        { nombre: "Beans", precio: "$1.00" },
        { nombre: "Cebolla asada / Roasted Onion", precio: "$1.00" },
        { nombre: "Salsa", precio: "$0.25" }
      ]
    },
    {
      categoria: "Bebidas",
      items: [
        { nombre: "Limonada 32 oz", precio: "$3.00" },
        { nombre: "Limonada 16 oz", precio: "$1.50" },
        { nombre: "Agua embotellada", precio: "$1.50", nota: "No refills." },
        { nombre: "Sodas", precio: "$1.75", nota: "Coca-Cola, Sprite, Manzana, Dr Pepper, Diet Coke." },
        {
          nombre: "Refrescos Mexicanos",
          precio: "$3.25",
          nota: "Coca-Cola, Manzana, Apple Punch."
        }
      ]
    },
    {
      categoria: "Especial de Viernes",
      items: [
        {
          nombre: "Nota (sin precio fijo de plato)",
          precio: "",
          nota: "Todos los viernes: platos de pescado y camarón. Incluye arroz, papas y ensalada. 11:30am–5:30pm."
        },
        { nombre: "Caldo de Mariscos (Pescado / Fish)", precio: "$9.50" },
        { nombre: "Caldo (Fish & Shrimp)", precio: "$10.50" },
        { nombre: "Caldo de Mariscos", precio: "$9.99" }
      ]
    }
  ]
};

const safeSetText = (element, text) => {
  if (element) {
    element.textContent = text;
  }
};

const renderHistoria = (historyContainer) => {
  if (!historyContainer) {
    return;
  }
  historyContainer.innerHTML = CONFIG.historia
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");
};

const renderDatos = (datosContainer) => {
  if (!datosContainer) {
    return;
  }
  const horarios = Object.entries(CONFIG.horarios)
    .map(([dia, horario]) => `<p><strong>${dia}:</strong> ${horario}</p>`)
    .join("");

  datosContainer.innerHTML = `
    <article class="info-card">
      <h3>Dirección</h3>
      <p>${CONFIG.direccion}</p>
      <p>${CONFIG.ciudadEstado}</p>
    </article>
    <article class="info-card">
      <h3>Horarios</h3>
      ${horarios}
    </article>
    <article class="info-card">
      <h3>Teléfono</h3>
      <p>${CONFIG.telefono}</p>
      <div class="info-card__actions">
        <a class="button button--outline" href="tel:${CONFIG.telefono.replace(/[^0-9]/g, "")}">Llamar</a>
      </div>
    </article>
  `;
};

const renderMenu = (menuContainer) => {
  if (!menuContainer) {
    return;
  }
  menuContainer.innerHTML = CONFIG.menu
    .map((category) => {
      const items = category.items
        .map((item) => {
          const note = item.nota ? `<div class="menu-item__note">${item.nota}</div>` : "";
          const price = item.precio ? `<div class="menu-item__price">${item.precio}</div>` : "";
          return `
            <div class="menu-item">
              <div class="menu-item__name">${item.nombre}</div>
              ${price}
              ${note}
            </div>
          `;
        })
        .join("");

      const categoryNote = category.nota
        ? `<p class="menu-category__note">${category.nota}</p>`
        : "";

      return `
        <article class="menu-category">
          <h3>${category.categoria}</h3>
          ${categoryNote}
          ${items}
        </article>
      `;
    })
    .join("");
};

const renderActions = (actionsContainer) => {
  if (!actionsContainer) {
    return;
  }
  const whatsappNumber = CONFIG.whatsapp?.trim();
  if (!whatsappNumber) {
    const actionsSection = actionsContainer.closest("section");
    actionsSection?.remove();
    return;
  }
  const whatsappMessage = encodeURIComponent(
    "Hola, me gustaría hacer una pregunta sobre el menú."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  actionsContainer.innerHTML = `
    <article class="action-card">
      <h3>WhatsApp</h3>
      <p>Escríbenos para resolver dudas o tomar pedidos.</p>
      <a class="button" href="${whatsappLink}" target="_blank" rel="noopener">Abrir WhatsApp</a>
    </article>
  `;
};

const applyHeroImages = (hero) => {
  const coverPath = CONFIG.assets?.cover?.trim();
  if (!hero || !coverPath) {
    hero?.classList.remove("has-cover");
    return;
  }

  const coverImage = new Image();
  coverImage.onload = () => {
    hero.style.backgroundImage = `url('${coverImage.src}')`;
    hero.classList.add("has-cover");
  };
  coverImage.onerror = () => {
    hero.classList.remove("has-cover");
  };
  coverImage.src = coverPath;
};

const applyHeroLogo = (heroLogo) => {
  if (!heroLogo) {
    return;
  }
  const logoPath = CONFIG.assets?.logo?.trim();
  if (logoPath) {
    heroLogo.src = logoPath;
    heroLogo.alt = `${CONFIG.nombre} logo`;
    heroLogo.classList.remove("isHidden");
    heroLogo.onerror = () => {
      heroLogo.classList.add("isHidden");
    };
  } else {
    heroLogo.classList.add("isHidden");
  }
};

const render = () => {
  const historyContainer = document.querySelector("#historia-content");
  const datosContainer = document.querySelector("#datos-content");
  const menuContainer = document.querySelector("#menu-content");
  const actionsContainer = document.querySelector("#actions-content");
  const hero = document.querySelector(".hero");
  const heroLogo = document.querySelector("#heroLogo");
  const heroName = document.querySelector("#heroName");
  const heroSubtitle = document.querySelector("#heroSubtitle");

  document.title = CONFIG.nombre;
  safeSetText(heroName, CONFIG.nombre);
  safeSetText(heroSubtitle, CONFIG.subtitulo);
  renderHistoria(historyContainer);
  renderDatos(datosContainer);
  renderMenu(menuContainer);
  renderActions(actionsContainer);
  applyHeroImages(hero);
  applyHeroLogo(heroLogo);
};

document.addEventListener("DOMContentLoaded", render);
