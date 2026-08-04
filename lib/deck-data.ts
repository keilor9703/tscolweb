/** Contenido de la presentación — extraído del código y marketing reales de Ksmart360. */

/* ─── Arco de apertura: problema → necesidad → solución ─── */

// Preguntas que un emprendedor "a ciegas" no puede responder (slide del desorden).
export const painQuestions = [
  "¿Cuánto gané realmente este mes?",
  "¿A quién le fié y cuánto me deben?",
  "¿Qué producto se vende más?",
  "¿Cuánto tengo en inventario ahora?",
  "¿Ya se me acabó otra vez?",
  "¿Dónde anoté esa venta?",
];

// Cifras de impacto. ⚠️ Verifica y actualiza las fuentes antes de presentar.
export const failureStats = [
  {
    value: 70,
    suffix: "%",
    label: "de los negocios nuevos NO superan los 5 años",
    source: "Confecámaras · supervivencia empresarial",
  },
  {
    value: 60,
    suffix: "%",
    label: "de los micronegocios en Colombia son informales",
    source: "DANE · micronegocios",
  },
  {
    value: 1,
    prefix: "#",
    label: "causa de cierre: no controlar las finanzas, no las ventas",
    source: "Estudios de mortalidad empresarial",
    isText: true,
  },
];

// Lo que la mayoría hace hoy vs. lo que necesita.
export const painToday = [
  { icon: "📓", text: "Las cuentas en un cuaderno… o en la memoria" },
  { icon: "🤯", text: "No sé si gané o perdí hasta fin de mes" },
  { icon: "📦", text: "Me entero que no hay stock cuando el cliente ya está en frente" },
  { icon: "🧾", text: "Sin factura electrónica: puertas cerradas y riesgo con la DIAN" },
];

// Criterios que debe cumplir la solución (puente hacia Ksmart360).
export const needCriteria = [
  { icon: "📊", title: "Ver tus números", desc: "Saber cuánto vendes, cuánto ganas y qué te deben — en tiempo real." },
  { icon: "📦", title: "Controlar tu inventario", desc: "Saber qué tienes, qué se vende y cuándo reponer, sin adivinar." },
  { icon: "🧾", title: "Cumplirle a la DIAN", desc: "Factura electrónica legal, sin sustos ni multas." },
  { icon: "📱", title: "Simple y desde el celular", desc: "Sin instalar nada, sin ser experto. Empiezas hoy mismo." },
];


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
    title: "Registra productos con solo escanear",
    desc: "Escanea el código de barras y el nombre, la descripción y la foto se cargan solos. Tú solo pones el precio.",
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
    title: "Entra con tu huella o tu rostro",
    desc: "La misma seguridad que usan los bancos. Sin contraseñas que se te olviden.",
  },
  {
    icon: "📒",
    title: "Contabilidad automática",
    desc: "Cada venta, compra o gasto queda registrado en tu contabilidad, al día. Sin ser contador ni pagar uno.",
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
      "Registra productos con solo escanear",
      "Variantes por talla, color o sabor",
      "Control de fechas de vencimiento",
      "Historial completo de cada producto",
      "Te avisa cuando algo se está agotando",
    ],
  },
  {
    category: "Clientes y cobros",
    items: [
      "Sabes quién te debe y desde cuándo",
      "Cobras por WhatsApp en un clic",
      "Envías el recibo por WhatsApp",
      "Te avisa cuando una cuota se vence",
      "Premias a tus clientes con puntos",
    ],
  },
  {
    category: "Análisis y finanzas",
    items: [
      "Tus números del día, en pantalla",
      "9 reportes listos de tu negocio",
      "Contabilidad automática (sin ser contador)",
      "Separa el IVA y la caja por ti",
      "Exportas a Excel y PDF",
    ],
  },
];

// Beneficios "de la tecnología" en lenguaje llano (no jerga).
export const techStack = [
  { icon: "☁️", label: "En la nube", desc: "Aunque se dañe tu celular, tu información no se pierde." },
  { icon: "🔄", label: "Respaldos diarios", desc: "Copias de seguridad automáticas, sin que hagas nada." },
  { icon: "📱", label: "En todos tus equipos", desc: "Celular, tablet o computador. Donde estés." },
  { icon: "🟢", label: "Siempre disponible", desc: "Funciona día y noche, todos los días del año." },
  { icon: "🚫", label: "Sin instalar nada", desc: "Se abre en el navegador. Sin programas ni mantenimiento." },
  { icon: "🇨🇴", label: "Soporte cercano", desc: "Un equipo colombiano que te habla claro y te acompaña." },
];

export const security = [
  { icon: "🔒", title: "Tu información es solo tuya", desc: "Los datos de tu negocio están separados y protegidos. Nadie más los ve." },
  { icon: "👆", title: "Entra con tu huella o tu rostro", desc: "Como en tu celular o tu banco. Sin contraseñas que se te olviden." },
  { icon: "👥", title: "Cada quien ve lo suyo", desc: "Tú decides qué puede ver y hacer cada empleado." },
  { icon: "🛡️", title: "Conexión siempre segura", desc: "Tu información viaja cifrada, igual que en la banca en línea." },
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
