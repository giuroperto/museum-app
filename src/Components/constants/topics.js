import ROUTES from "./routes";

const TOPICS = {
  ORIONE: [
    {
      item: "Fotos Históricas",
      menu: [],
      route: ROUTES.CELEBRACOES
    }, {
      item: "Orione no Brasil",
      menu: [],
      route: ROUTES.CELEBRACOES
    }, {
      item: "Coroinhas",
      menu: [],
      route: ROUTES.CELEBRACOES
    }, {
      item: "Eventos",
      menu: [],
      route: ROUTES.CELEBRACOES
    }, {
      item: "Grupos de Estudos",
      menu: ["Filmes", "Livros"],
      route: ROUTES.CELEBRACOES
    }, {
      item: "Memorial",
      menu: [],
      route: ROUTES.CELEBRACOES
    }, {
      item: "Missão com os Jovens",
      menu: [],
      route: ROUTES.CELEBRACOES
    }, {
      item: "Missão em Moçambique",
      menu: [],
      route: ROUTES.CELEBRACOES
    }, {
      item: "Obras",
      menu: ["Idiomas"],
      route: ROUTES.CELEBRACOES
    }, {
      item: "Orionitas",
      menu: ["Agenda", "Origem e Evolução no Brasil"],
      route: ROUTES.CELEBRACOES
    }, {
      item: "Pequena Obra de Dom Orione",
      menu: [],
      route: ROUTES.CELEBRACOES
    }, {
      item: "Relíquia",
      menu: [],
      route: ROUTES.CELEBRACOES
    }
  ],
  ACHIROPITA: [
    {
      item: "Celebrações",
      menu: ["Fotos"],
      route: ROUTES.CELEBRACOES
    }, {
      item: "Festa da Achiropita",
      menu: ["Fotos", "Logos", "Revistas", "Vídeos"],
      route: ROUTES.FESTA
    }, {
      item: "Filmes",
      menu: [],
      route: ROUTES.FILMES
    }, {
      item: "Livros e Artigos",
      menu: [],
      route: ROUTES.LIVROSARTIGOS
    }, {
      item: "Paróquia",
      menu: ["Coroinhas", "Fotos", "Memorial"],
      route: ROUTES.PAROQUIA
    }, {
      item: "Pinturas",
      menu: [],
      route: ROUTES.PINTURAS
    }, {
      item: "Projetos",
      menu: [],
      route: ROUTES.PROJETOS
    }, {
      item: "Sementeira Achiropita Orione",
      menu: ["Fotos", "Vídeos"],
      route: ROUTES.SEMENTEIRA
    }, {
      item: "Vídeos",
      menu: [],
      route: ROUTES.VIDEOS
    }
  ],
  BIXIGA: [

  ],
};

export default TOPICS;