/** Contenido de la presentación — extraído del código y marketing reales de Ksmart360. */

export const stats = [
  { value: "18+", label: "Módulos activos" },
  { value: "5", label: "Tipos de negocio" },
  { value: "30+", label: "Empresas activas" },
  { value: "99.9%", label: "Uptime" },
];

export const businessTypes = [
  {
    icon: "🏪",
    name: "Tienda / Comercio",
    subtitle: "Tiendas · Mercados · Ferreterías · Distribuidoras · Talleres",
    headline: "Vende más, pierde menos, fideliza mejor.",
  },
  {
    icon: "🚗",
    name: "Parqueadero",
    subtitle: "Motos · Carros · Bicicletas",
    headline: "Nada entra ni sale sin registro. Control total.",
  },
  {
    icon: "🚿",
    name: "Lavadero",
    subtitle: "Autolavado · Detailing · Car wash",
    headline: "Sabe cuánto produce cada operario.",
  },
  {
    icon: "🍽️",
    name: "Restaurante",
    subtitle: "Cafetería · Comidas rápidas · Restaurante",
    headline: "Digitalizado tal como opera en la vida real.",
  },
];

export const differentiators = [
  {
    icon: "📷",
    title: "POS con cámara o lector",
    desc: "Vende con lector de barras USB o con la cámara del celular. Sin comprar hardware obligatorio.",
  },
  {
    icon: "🌍",
    title: "Auto-completado global",
    desc: "Escanea un producto y el nombre, la descripción y la imagen se cargan solos desde bases de datos mundiales.",
  },
  {
    icon: "🛍️",
    title: "Catálogo virtual + WhatsApp",
    desc: "Tienda online con enlace propio. Los pedidos llegan a tu WhatsApp y al sistema, con stock sincronizado.",
  },
  {
    icon: "⭐",
    title: "Fidelización con puntos",
    desc: "El cliente acumula puntos en cada compra, configurables por el administrador. Clientes que vuelven solos.",
  },
  {
    icon: "👆",
    title: "Acceso biométrico FIDO2",
    desc: "Entra con huella o rostro. La misma tecnología WebAuthn que usan los bancos. Sin contraseñas.",
  },
  {
    icon: "📒",
    title: "Contabilidad automática",
    desc: "Cada venta, compra o gasto genera su asiento en partida doble según el PUC colombiano. Sin ser contador.",
  },
];

export const capabilities = [
  {
    category: "Ventas y POS",
    items: [
      "POS táctil y clásico con lector",
      "Escáner por cámara del celular",
      "Hasta 4 métodos de pago por venta",
      "Cotizaciones → Factura en un clic",
      "Fidelización con puntos",
    ],
  },
  {
    category: "Inventario",
    items: [
      "Auto-completado global al escanear",
      "Productos con variantes",
      "Lotes y vencimientos (FEFO)",
      "Kardex con trazabilidad total",
      "Alertas de stock mínimo",
    ],
  },
  {
    category: "Clientes y cobros",
    items: [
      "Cartera con aging (30/60/90 días)",
      "Cobro por WhatsApp en un clic",
      "Recibo PDF por WhatsApp",
      "Alertas de vencimiento",
      "Programa de puntos",
    ],
  },
  {
    category: "Análisis y finanzas",
    items: [
      "Dashboard en tiempo real",
      "9 tipos de reporte",
      "Contabilidad automática PUC",
      "IVA y Caja/Bancos automáticos",
      "Export a Excel y PDF",
    ],
  },
];

export const techStack = [
  { label: "React 18", desc: "Frontend SPA" },
  { label: "FastAPI", desc: "Backend Python 3.11" },
  { label: "PostgreSQL 17", desc: "Base de datos" },
  { label: "Oracle Cloud", desc: "Infraestructura ARM" },
  { label: "Nginx + SSL", desc: "Proxy inverso" },
  { label: "Wompi", desc: "Pagos Colombia" },
  { label: "DIAN / Matias", desc: "Facturación electrónica" },
  { label: "WebAuthn FIDO2", desc: "Biometría" },
  { label: "WhatsApp API", desc: "Notificaciones" },
];

export const security = [
  { icon: "🔑", title: "JWT + empresa_id", desc: "Aislamiento multi-tenant en cada request." },
  { icon: "👆", title: "Biométrico FIDO2", desc: "Huella o rostro con WebAuthn. Sin contraseña." },
  { icon: "🛡️", title: "RBAC multi-módulo", desc: "Permisos por rol en 18+ módulos." },
  { icon: "🔒", title: "HTTPS forzado", desc: "Let's Encrypt con renovación automática." },
];

export const plans = [
  { name: "Trial", icon: "⚡", price: "Gratis", period: "14 días", fe: false, highlight: false },
  { name: "Básico", icon: "🚀", price: "$29.900", period: "/mes", fe: false, highlight: false },
  { name: "Emprendedor", icon: "✨", price: "$49.900", period: "/mes", fe: "100 docs", highlight: false },
  { name: "Comercio", icon: "🏆", price: "$69.900", period: "/mes", fe: "200 docs", highlight: true },
  { name: "Empresarial", icon: "🏢", price: "$89.900", period: "/mes", fe: "350 docs", highlight: false },
];

export const onboardingSteps = [
  {
    step: "01",
    title: "Regístrate en 2 minutos",
    desc: "Elige tu tipo de negocio y el sistema activa automáticamente los módulos que necesitas. Sin configuración técnica.",
  },
  {
    step: "02",
    title: "Carga tu catálogo con la cámara",
    desc: "Escanea cada producto con el celular y el sistema lo completa desde bases de datos globales. O importa por Excel.",
  },
  {
    step: "03",
    title: "Empieza a operar hoy",
    desc: "POS, inventario, producción, fidelización y recibos por WhatsApp desde el primer día. Soporte incluido.",
  },
];
