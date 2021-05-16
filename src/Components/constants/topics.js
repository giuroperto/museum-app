import ROUTES from "./routes";

const TOPICS = {
  ORIONE: [
    {
      item: "Fotos Históricas",
      menu: [],
      route: ROUTES.CELEBRACOES,
      resources: []
    }, {
      item: "Orione no Brasil",
      menu: [],
      route: ROUTES.CELEBRACOES,
      resources: []
    }, {
      item: "Coroinhas",
      menu: [],
      route: ROUTES.CELEBRACOES,
      resources: []
    }, {
      item: "Eventos",
      menu: [],
      route: ROUTES.CELEBRACOES,
      resources: []
    }, {
      item: "Grupos de Estudos",
      menu: ["Filmes", "Livros"],
      route: ROUTES.CELEBRACOES,
      resources: []
    }, {
      item: "Memorial",
      menu: [],
      route: ROUTES.CELEBRACOES,
      resources: []
    }, {
      item: "Missão com os Jovens",
      menu: [],
      route: ROUTES.CELEBRACOES,
      resources: []
    }, {
      item: "Missão em Moçambique",
      menu: [],
      route: ROUTES.CELEBRACOES,
      resources: []
    }, {
      item: "Obras",
      menu: ["Idiomas"],
      route: ROUTES.CELEBRACOES,
      resources: []
    }, {
      item: "Orionitas",
      menu: ["Agenda", "Origem e Evolução no Brasil"],
      route: ROUTES.CELEBRACOES,
      resources: []
    }, {
      item: "Pequena Obra de Dom Orione",
      menu: [],
      route: ROUTES.CELEBRACOES,
      resources: []
    }, {
      item: "Relíquia",
      menu: [],
      route: ROUTES.CELEBRACOES,
      resources: []
    }
  ],
  ACHIROPITA: [
    {
      item: "Celebrações",
      menu: ["Fotos"],
      route: ROUTES.CELEBRACOES,
      resources: ["Fotos"]
    }, {
      item: "Festa da Achiropita",
      menu: ["Fotos", "Logos", "Revistas", "Vídeos"],
      route: ROUTES.FESTA,
      resources: []
    }, {
      item: "Filmes",
      menu: [],
      route: ROUTES.FILMES,
      resources: []
    }, {
      item: "Livros e Artigos",
      menu: [],
      route: ROUTES.LIVROSARTIGOS,
      resources: []
    }, {
      item: "Paróquia",
      menu: ["Coroinhas", "Fotos", "Memorial"],
      route: ROUTES.PAROQUIA,
      resources: []
    }, {
      item: "Pinturas",
      menu: [],
      route: ROUTES.PINTURAS,
      resources: []
    }, {
      item: "Projetos",
      menu: [],
      route: ROUTES.PROJETOS,
      resources: []
    }, {
      item: "Sementeira Achiropita Orione",
      menu: ["Fotos", "Vídeos"],
      route: ROUTES.SEMENTEIRA,
      resources: []
    }, {
      item: "Vídeos",
      menu: [],
      route: ROUTES.VIDEOS,
      resources: []
    }
  ],
  BIXIGA: [

  ],
};

export default TOPICS;