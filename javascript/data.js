const productsData = [
  {
    id: 1,
    name: "Clínicas Médicas Móviles",
    descripcion:
      "Ofrecer atención médica básica y consultas gratuitas en comunidades rurales.",
    cardImg: "/javascript/proyectos/clinica-movil.jpg",
    category: "salud",
    donacion:
      "¡Ayúdanos a hacer posible esta misión! Dona un dólar para apoyar la atención médica en comunidades rurales.",
    bid: "1",
  },
  {
    id: 2,
    name: "Programa de Educación en Salud",
    descripcion:
      "Impartir programas de educación en salud en escuelas locales para promover hábitos de vida saludables y prevenir enfermedades.",
    cardImg: "/javascript/proyectos/proyect-2.jpg",
    category: "educación",
    donacion:
      "¡Tu contribución de un dólar nos ayuda a educar a más personas sobre la importancia de la salud!",
    bid: "1",
  },
  {
    id: 3,
    name: "Campañas de Vacunación",
    descripcion:
      "Colaborar con organizaciones de salud para llevar a cabo campañas de vacunación gratuitas en comunidades necesitadas.",
    cardImg: "/javascript/proyectos/proyecto-3.jpg",
    category: "salud",
    donacion:
      "¡Dona un dólar para proteger a las comunidades mediante la vacunación!",
    bid: "1",
  },
  {
    id: 4,
    name: "Apoyo Psicológico en Línea",
    descripcion:
      "Ofrecer sesiones de apoyo psicológico en línea dirigidas por profesionales para ayudar a personas con problemas de salud mental.",
    cardImg: "/javascript/proyectos/proyect-4.jpg",
    category: "salud",
    donacion:
      "Tu donación de un dólar permite brindar apoyo psicológico a quienes lo necesitan.",
    bid: "1",
  },
  {
    id: 5,
    name: "Proyecto de Recolección de Medicamentos",
    descripcion:
      "Organizar campañas de recolección de medicamentos no utilizados y donarlos a personas sin acceso a atención médica.",
    cardImg: "/javascript/proyectos/proyect-5.jpg",
    category: "salud",
    donacion:
      "¡Con tu contribución de un dólar, podemos proporcionar medicamentos esenciales a quienes los necesitan!",
    bid: "1",
  },
  {
    id: 6,
    name: "Capacitación en Primeros Auxilios",
    descripcion:
      "Impartir talleres de capacitación en primeros auxilios en escuelas y comunidades para empoderar a las personas a responder a emergencias médicas.",
    cardImg: "/javascript/proyectos/proyect-6.jpg",
    category: "educación",
    donacion:
      "¡Tu donación de un dólar nos ayuda a capacitar a más personas en primeros auxilios!",
    bid: "1",
  },
  {
    id: 7,
    name: "Campaña de Donación de Sangre",
    descripcion:
      "Organizar campañas regulares de donación de sangre para abastecer bancos de sangre locales y salvar vidas.",
    cardImg: "/javascript/proyectos/proyect-7.jpg",
    category: "salud",
    donacion: "¡Dona un dólar y salva vidas a través de la donación de sangre!",
    bid: "1",
  },
  {
    id: 8,
    name: "Mentoría para Estudiantes de Medicina",
    descripcion:
      "Establecer un programa de mentoría donde estudiantes más avanzados asesoren a los más nuevos en su camino académico y profesional.",
    cardImg: "/javascript/proyectos/proyect-8.jpg",
    category: "educación",
    donacion:
      "¡Tu donación de un dólar apoya la formación de futuros profesionales de la salud!",
    bid: "1",
  },
  {
    id: 9,
    name: "Talleres de Nutrición",
    descripcion:
      "Ofrecer talleres sobre nutrición y cocina saludable para comunidades que enfrentan desafíos de acceso a alimentos saludables.",
    cardImg: "/javascript/proyectos/proyect-9.jpg",
    category: "educación",
    donacion:
      "¡Ayúdanos a promover una alimentación saludable donando un dólar!",
    bid: "1",
  },
  {
    id: 10,
    name: "Campañas de Concienciación sobre Enfermedades",
    descripcion:
      "Organizar campañas de concienciación sobre enfermedades específicas para informar y educar a la comunidad sobre prevención y tratamiento.",
    cardImg: "/javascript/proyectos/proyect-10.jpg",
    category: "concientización",
    donacion:
      "¡Tu donación de un dólar nos permite concienciar sobre enfermedades y salvar vidas!",
    bid: "1",
  },
  {
    id: 11,
    name: "Atención Médica para Personas Sin Hogar",
    descripcion:
      "Colaborar con refugios locales para proporcionar atención médica y servicios de salud a personas sin hogar.",
    cardImg: "/javascript/proyectos/proyect-11.jpg",
    category: "salud",
    donacion:
      "¡Dona un dólar para ayudar a las personas sin hogar a acceder a atención médica!",
    bid: "1",
  },
  {
    id: 12,
    name: "Proyectos de Investigación Médica Comunitaria",
    descripcion:
      "Fomentar la investigación médica comunitaria centrada en problemas de salud locales y soluciones relevantes.",
    cardImg: "/javascript/proyectos/proyect-12.jpg",
    category: "concientización",
    donacion:
      "¡Tu contribución de un dólar impulsa la investigación médica comunitaria!",
    bid: "1",
  },
  {
    id: 13,
    name: "Programa de Atención Médica a Personas Mayores",
    descripcion:
      "Crear un programa de visitas médicas a domicilio para personas mayores con dificultades para acceder a la atención médica.",
    cardImg: "/javascript/proyectos/proyect-13.jpg",
    category: "salud",
    donacion: "¡Dona un dólar para cuidar de nuestros adultos mayores!",
    bid: "1",
  },
  {
    id: 14,
    name: "Campañas de Higiene y Saneamiento",
    descripcion:
      "Llevar a cabo campañas para promover prácticas de higiene y saneamiento adecuadas en comunidades con acceso limitado a recursos.",
    cardImg: "/javascript/proyectos/proyect-14.jpg",
    category: "concientización",
    donacion:
      "¡Tu donación de un dólar promueve la higiene y el saneamiento en comunidades necesitadas!",
    bid: "1",
  },
  {
    id: 15,
    name: "Servicios de Traducción Médica",
    descripcion:
      "Ofrecer servicios de traducción médica para personas que hablan diferentes idiomas y tienen dificultades para comunicarse con profesionales de la salud.",
    cardImg: "/javascript/proyectos/proyect-15.jpg",
    category: "salud",
    donacion:
      "¡Tu donación de un dólar facilita la comunicación en el ámbito de la salud!",
    bid: "1",
  },
];

const divideProductsInParts = (size) => {
  let productsList = [];

  for (let i = 0; i < productsData.length; i += size) {
    productsList.push(productsData.slice(i, i + size));
  }
  return productsList;
};

const appState = {
  products: divideProductsInParts(3),
  currentProductsIndex: 0,
  productsLimit: divideProductsInParts(3).length,
  activeFilter: null,
};
