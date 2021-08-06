import CONTENT from "./content";
import ROUTES from "./routes";

const MENU = {
  // TODO ORIONE --------------------------------------------------------------
  ORIONE: [
    {
      item: "Biografia",
      route: ROUTES.ORIONE_BIOGRAFIA,
      resources: CONTENT.ORIONE_BIOGRAFIA,
      subitems: [],
    }, 
    {
      item: "Obra Orionita no Brasil",
      route: ROUTES.ORIONE_OBRAS_BRASIL,
      subitems: [
        {
          item: "1906-1923",
          subtitle: "A motivação da evangelização e a vinda de São Orione ao Brasil",
          route: ROUTES.ORIONE_OBRAS_BRASIL_1,
          resources: CONTENT.ORIONE_OBRAS_BRASIL_1,
        }, {
          item: "1923-1934",
          subtitle: "A chegada ao Brasil e ação dos pioneiros",
          route: ROUTES.ORIONE_OBRAS_BRASIL_2,
          resources: CONTENT.ORIONE_OBRAS_BRASIL_2,
        }, {
          item: "1934-1940",
          subtitle: "Pequena Obra da Divina Providência de Don Orione no Brasil e a segunda estada do santo na América",
          route: ROUTES.ORIONE_OBRAS_BRASIL_3,
          resources: CONTENT.ORIONE_OBRAS_BRASIL_3,
        }, {
          item: "1940-1947",
          subtitle: "Consolidação da evangelização orionita no Brasil em SP, RJ e MG",
          route: ROUTES.ORIONE_OBRAS_BRASIL_4,
          resources: CONTENT.ORIONE_OBRAS_BRASIL_4,
        }, {
          item: "1972-2002",
          subtitle: "Casas de Don Orione no Rio Grande do Sul",
          route: ROUTES.ORIONE_OBRAS_BRASIL_5,
          resources: CONTENT.ORIONE_OBRAS_BRASIL_5,
        }, {
          item: "Missionários pioneiros no Brasil - Lista de Falecidos",
          route: ROUTES.ORIONE_OBRAS_BRASIL_6,
          resources: CONTENT.ORIONE_OBRAS_BRASIL_6,
        }, {
          item: "Missionários pioneiros no Brasil",
          route: ROUTES.ORIONE_OBRAS_BRASIL_7,
          resources: CONTENT.ORIONE_OBRAS_BRASIL_7,
        }
      ],
    }, 
    {
      item: "Publicações",
      route: ROUTES.ORIONE_PUBLICACOES,
      subitems: [
        {
          item: "Boletim Informativo Histórico da Pequena Obra da Providência",
          route: ROUTES.ORIONE_PUBLICACOES_BOLETIM,
          resources: CONTENT.ORIONE_PUBLICACOES_BOLETIM,
          subitems: [],
        }, {
          item: "Livros e publicações sobre Don Orione",
          route: ROUTES.ORIONE_PUBLICACOES_LIVROS,
          resources: CONTENT.ORIONE_PUBLICACOES_LIVROS,
          subitems: [
            {
              item: "A vida de São Luís Orione em quadrinhos",
              route: ROUTES.ORIONE_PUBLICACOES_LIVROS_1,
              resources: CONTENT.ORIONE_PUBLICACOES_LIVROS_1,
            }, {
              item: "Pérolas: pensamentos espirituais de Orione",
              route: ROUTES.ORIONE_PUBLICACOES_LIVROS_2,
              resources: CONTENT.ORIONE_PUBLICACOES_LIVROS_2,
            }, {
              item: "Novena de Don Orione",
              route: ROUTES.ORIONE_PUBLICACOES_LIVROS_3,
              resources: CONTENT.ORIONE_PUBLICACOES_LIVROS_3,
            }, {
              item: "Em nome da Divina Providência, as mais belas páginas",
              route: ROUTES.ORIONE_PUBLICACOES_LIVROS_4,
              resources: CONTENT.ORIONE_PUBLICACOES_LIVROS_4,
            }, {
              item: "Don Orione o encantador da juventude",
              route: ROUTES.ORIONE_PUBLICACOES_LIVROS_5,
              resources: CONTENT.ORIONE_PUBLICACOES_LIVROS_5,
            }, {
              item: "GEO - Se Luis Orione vivesse em nossos dias",
              route: ROUTES.ORIONE_PUBLICACOES_LIVROS_6,
              resources: CONTENT.ORIONE_PUBLICACOES_LIVROS_6,
            }, {
              item: "GEO - A grande pescaria",
              route: ROUTES.ORIONE_PUBLICACOES_LIVROS_7,
              resources: CONTENT.ORIONE_PUBLICACOES_LIVROS_7,
            }, {
              item: "GEO - Caminhando nas terras do pau brasil",
              route: ROUTES.ORIONE_PUBLICACOES_LIVROS_8,
              resources: CONTENT.ORIONE_PUBLICACOES_LIVROS_8,
            }, {
              item: "GEO - Cem anos de história",
              route: ROUTES.ORIONE_PUBLICACOES_LIVROS_9,
              resources: CONTENT.ORIONE_PUBLICACOES_LIVROS_9,
            }, {
              item: "GEO - Dois pulmões e um só coração",
              route: ROUTES.ORIONE_PUBLICACOES_LIVROS_10,
              resources: CONTENT.ORIONE_PUBLICACOES_LIVROS_10,
            }, {
              item: "GEO - Os Orionitas no Brasil",
              route: ROUTES.ORIONE_PUBLICACOES_LIVROS_11,
              resources: CONTENT.ORIONE_PUBLICACOES_LIVROS_11,
            }, {
              item: "GEO - Reminiscências católicas e orionitas",
              route: ROUTES.ORIONE_PUBLICACOES_LIVROS_12,
              resources: CONTENT.ORIONE_PUBLICACOES_LIVROS_12,
            }, {
              item: "GEO - Século Orione",
              route: ROUTES.ORIONE_PUBLICACOES_LIVROS_13,
              resources: CONTENT.ORIONE_PUBLICACOES_LIVROS_13,
            }, {
              item: "GEO - Nossos santos a caminho do altar",
              route: ROUTES.ORIONE_PUBLICACOES_LIVROS_14,
              resources: CONTENT.ORIONE_PUBLICACOES_LIVROS_14,
            }, {
              item: "Cartas de San Luis Orione (ES)",
              route: ROUTES.ORIONE_PUBLICACOES_LIVROS_15,
              resources: CONTENT.ORIONE_PUBLICACOES_LIVROS_15,
            }, {
              item: "Don Orione Un Profeta de Nuestro Tiempo (ES)",
              route: ROUTES.ORIONE_PUBLICACOES_LIVROS_16,
              resources: CONTENT.ORIONE_PUBLICACOES_LIVROS_16,
            }, {
              item: "El Espiritu de Don Orione (ES)",
              route: ROUTES.ORIONE_PUBLICACOES_LIVROS_17,
              resources: CONTENT.ORIONE_PUBLICACOES_LIVROS_17,
            }, {
              item: "Don Orione El Apóstol de la Caridad (ES)",
              route: ROUTES.ORIONE_PUBLICACOES_LIVROS_18,
              resources: CONTENT.ORIONE_PUBLICACOES_LIVROS_18,
            }, {
              item: "Tras los pasos de Don Orione (ES)",
              route: ROUTES.ORIONE_PUBLICACOES_LIVROS_19,
              resources: CONTENT.ORIONE_PUBLICACOES_LIVROS_19,
            }, {
              item: "Revista Moçambique",
              route: ROUTES.ORIONE_PUBLICACOES_LIVROS_20,
              resources: CONTENT.ORIONE_PUBLICACOES_LIVROS_20,
            }
          ],
        }
      ],
    }, 
    {
      item: "Fotos",
      route: ROUTES.ORIONE_FOTOS,
      subitems: [
        {
          item: "Galeria de fotos históricas",
          route: ROUTES.ORIONE_FOTOS_1,
          resources: CONTENT.ORIONE_FOTOS_1,
          subitems: [],
        }, {
          item: "Galeria Don Orione no Brasil",
          route: ROUTES.ORIONE_FOTOS_2,
          resources: CONTENT.ORIONE_FOTOS_2,
          subitems: [],
        }, {
          item: "Galeria de fotos de relíquias de Don Orione no Brasil",
          route: ROUTES.ORIONE_FOTOS_3,
          resources: CONTENT.ORIONE_FOTOS_3,
          subitems: [],
        }, {
          item: "Galeria de fotos do Encontro Latino Americano de Jovens Orionitas",
          route: ROUTES.ORIONE_FOTOS_4,
          resources: CONTENT.ORIONE_FOTOS_4,
          subitems: [],
        }
      ],
    }, 
    {
      item: "Iconologia e Iconografia de Don Orione no Brasil",
      route: ROUTES.ORIONE_ICONOLOGIA,
      subitems: [
        {
          item: "Galeria de imagens em agendas e fotos",
          route: ROUTES.ORIONE_ICONOLOGIA_GALERIA,
          resources: CONTENT.ORIONE_ICONOLOGIA_GALERIA,
          subitems: [],
        }, {
          item: "Cartazes de eventos orionitas",
          route: ROUTES.ORIONE_ICONOLOGIA_CARTAZES,
          resources: CONTENT.ORIONE_ICONOLOGIA_CARTAZES,
          subitems: [],
        }
      ],
    }, 
    {
      item: "Filmes e Vídeos",
      route: ROUTES.ORIONE_FILMES,
      subitems: [
        {
          item: "Produções de Pe Antônio Bogaz",
          route: ROUTES.ORIONE_FILMES_BOGAZ,
          subitems: [
            {
              item: "A vida é como um rio",
              route: ROUTES.ORIONE_FILMES_BOGAZ_1,
              resources: CONTENT.ORIONE_FILMES_BOGAZ_1
            }, {
              item: "Universo Orione",
              route: ROUTES.ORIONE_FILMES_BOGAZ_2,
              resources: CONTENT.ORIONE_FILMES_BOGAZ_2
            }, {
              item: "Memórias de uma aliança",
              route: ROUTES.ORIONE_FILMES_BOGAZ_3,
              resources: CONTENT.ORIONE_FILMES_BOGAZ_3
            }, {
              item: "Perfume de Jasmim",
              route: ROUTES.ORIONE_FILMES_BOGAZ_4,
              resources: CONTENT.ORIONE_FILMES_BOGAZ_4
            }, {
              item: "Qualquer coisa de Don Orione",
              route: ROUTES.ORIONE_FILMES_BOGAZ_5,
              resources: CONTENT.ORIONE_FILMES_BOGAZ_5
            }, {
              item: "Vocação: tocar na orquestra de Deus",
              route: ROUTES.ORIONE_FILMES_BOGAZ_6,
              resources: CONTENT.ORIONE_FILMES_BOGAZ_6
            }, {
              item: "Orione Apóstolo da Caridade",
              route: ROUTES.ORIONE_FILMES_BOGAZ_7,
              resources: CONTENT.ORIONE_FILMES_BOGAZ_7
            }, {
              item: "Recordações de um santo",
              route: ROUTES.ORIONE_FILMES_BOGAZ_8,
              resources: CONTENT.ORIONE_FILMES_BOGAZ_8
            }
          ],
        }, {
          item: "Produções do Grupo de Estudos Orionitas",
          route: ROUTES.ORIONE_FILMES_ORIONITAS,
          subitems: [
            {
              item: "A grande pescaria",
              route: ROUTES.ORIONE_FILMES_ORIONITAS_1,
            }, {
              item: "Caminhando nas terras do pau-brasil",
              route: ROUTES.ORIONE_FILMES_ORIONITAS_2,
              resources: CONTENT.ORIONE_FILMES_ORIONITAS_2
            }, {
              item: "Se Don Orione vivesse em nossos dias",
              route: ROUTES.ORIONE_FILMES_ORIONITAS_3,
              resources: CONTENT.ORIONE_FILMES_ORIONITAS_3
            }
          ],
        }
      ],
    }, 
  ],
  // TODO ACHIROPITA ----------------------------------------------------------
  ACHIROPITA: [
    {
      item: "História",
      route: ROUTES.ACHIROPITA_HISTORIA,
      resources: CONTENT.ACHIROPITA_HISTORIA,
      subitems: [
        {
          item: "Culto à Achiropita: uma longa história",
          route: ROUTES.ACHIROPITA_HISTORIA_1,
          resources: CONTENT.ACHIROPITA_HISTORIA_1,
          subitems: [],
        }, {
          item: "Significado do ícone Achiropita",
          route: ROUTES.ACHIROPITA_HISTORIA_2,
          resources: CONTENT.ACHIROPITA_HISTORIA_2,
          subitems: [],
        }, {
          item: "Devoção à N.Sra Achiropita no Bixiga",
          route: ROUTES.ACHIROPITA_HISTORIA_3,
          resources: CONTENT.ACHIROPITA_HISTORIA_3,
          subitems: [],
        }, {
          item: "Imagem da Madonna aporta no Brasil: memória oral",
          route: ROUTES.ACHIROPITA_HISTORIA_4,
          resources: CONTENT.ACHIROPITA_HISTORIA_4,
          subitems: [],
        }, {
          item: "Da Capelinha à Igreja",
          route: ROUTES.ACHIROPITA_HISTORIA_5,
          resources: CONTENT.ACHIROPITA_HISTORIA_5,
          subitems: [],
        }
      ],
    }, 
    {
      item: "Paróquia",
      route: ROUTES.ACHIROPITA_PAROQUIA,
      resources: CONTENT.ACHIROPITA_PAROQUIA,
      subitems: [
        {
          item: "Hino da Comunidade Achiropita",
          route: ROUTES.ACHIROPITA_PAROQUIA_HINO,
          resources: CONTENT.ACHIROPITA_PAROQUIA_HINO,
          subitems: [],
        }, {
          item: "Horário de Missas e terços",
          route: ROUTES.ACHIROPITA_PAROQUIA_HORARIOS,
          resources: CONTENT.ACHIROPITA_PAROQUIA_HORARIOS,
          subitems: [],
        }, {
          item: "Sementeira Achiropita Orione",
          route: ROUTES.ACHIROPITA_PAROQUIA_SEMENTEIRA,
          resources: CONTENT.ACHIROPITA_PAROQUIA_SEMENTEIRA,
          subitems: [],
        }, {
          item: "Oratório Festivo Achiropita - Orione",
          route: ROUTES.ACHIROPITA_PAROQUIA_ORATORIO,
          resources: CONTENT.ACHIROPITA_PAROQUIA_ORATORIO,
          subitems: [],
        }, {
          item: "Congregação Mariana",
          route: ROUTES.ACHIROPITA_PAROQUIA_CONGREGACAO,
          resources: CONTENT.ACHIROPITA_PAROQUIA_CONGREGACAO,
          subitems: [],
        }, {
          item: "Pastoral",
          route: ROUTES.ACHIROPITA_PAROQUIA_PASTORAL,
          subitems: [
            {
              item: "Pastoral da Pessoa Idosa",
              route: ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_1,
              resources: CONTENT.ACHIROPITA_PAROQUIA_PASTORAL_1,
            }, {
              item: "Pastoral Afro",
              route: ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_2,
              resources: CONTENT.ACHIROPITA_PAROQUIA_PASTORAL_2,
            }, {
              item: "Pastoral do Batismo",
              route: ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_3,
              resources: CONTENT.ACHIROPITA_PAROQUIA_PASTORAL_3,
            }, {
              item: "Pastoral da Animação Bíblico Catequética",
              route: ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_4,
              resources: CONTENT.ACHIROPITA_PAROQUIA_PASTORAL_4,
            }, {
              item: "Pastoral da Comunicação",
              route: ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_5,
              resources: CONTENT.ACHIROPITA_PAROQUIA_PASTORAL_5,
            }, {
              item: "Pastoral do Dizimo",
              route: ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_6,
              resources: CONTENT.ACHIROPITA_PAROQUIA_PASTORAL_6,
            }, {
              item: "Pastoral da Juventude",
              route: ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_7,
              resources: CONTENT.ACHIROPITA_PAROQUIA_PASTORAL_7,
            }, {
              item: "Pastoral da Saúde",
              route: ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_8,
              resources: CONTENT.ACHIROPITA_PAROQUIA_PASTORAL_8,
            }, {
              item: "Apostolado da Oração",
              route: ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_9,
              resources: CONTENT.ACHIROPITA_PAROQUIA_PASTORAL_9,
            }, {
              item: "Grupo de Oração Nossa Senhora do Cenáculo",
              route: ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_10,
              resources: CONTENT.ACHIROPITA_PAROQUIA_PASTORAL_10,
            }, {
              item: "Grupo do Terço",
              route: ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_11,
              resources: CONTENT.ACHIROPITA_PAROQUIA_PASTORAL_11,
            }, {
              item: "Pastoral Vocacional",
              route: ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_12,
              resources: CONTENT.ACHIROPITA_PAROQUIA_PASTORAL_12,
            }, {
              item: "Pastoral Missionária",
              route: ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_13,
              resources: CONTENT.ACHIROPITA_PAROQUIA_PASTORAL_13,
            }, {
              item: "Pastoral dos Noivos",
              route: ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_14,
              resources: CONTENT.ACHIROPITA_PAROQUIA_PASTORAL_14,
            }, {
              item: "Pastoral dos Ministros da Eucaristia",
              route: ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_15,
              resources: CONTENT.ACHIROPITA_PAROQUIA_PASTORAL_15,
            }, {
              item: "Pastoral dos Migrantes",
              route: ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_16,
              resources: CONTENT.ACHIROPITA_PAROQUIA_PASTORAL_16,
            }, {
              item: "Pastoral da Mulher",
              route: ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_17,
              resources: CONTENT.ACHIROPITA_PAROQUIA_PASTORAL_17,
            }, {
              item: "Pastoral da Família",
              route: ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_18,
              resources: CONTENT.ACHIROPITA_PAROQUIA_PASTORAL_18,
            }, {
              item: "Pastoral dos Coroinhas",
              route: ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_19,
              resources: CONTENT.ACHIROPITA_PAROQUIA_PASTORAL_19,
            }, {
              item: "Pia União das Filhas de Maria",
              route: ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_20,
              resources: CONTENT.ACHIROPITA_PAROQUIA_PASTORAL_20,
            }, {
              item: "MLO - Movimento Laical Orionita",
              route: ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_21,
              resources: CONTENT.ACHIROPITA_PAROQUIA_PASTORAL_21,
            }, {
              item: "Comunidade Betel",
              route: ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_22,
              resources: CONTENT.ACHIROPITA_PAROQUIA_PASTORAL_22,
            }
          ],
        }, 
      ]
    }, {
      item: "Festa da Achiropita",
      route: ROUTES.ACHIROPITA_FESTA,
      resources: CONTENT.ACHIROPITA_FESTA,
      subitems: [
        {
          item: "Apresentação da Festa",
          route: ROUTES.ACHIROPITA_FESTA_APRESENTACAO,
          resources: CONTENT.ACHIROPITA_FESTA_APRESENTACAO,
          subitems: [],
        }, {
          item: "Breve Histórico",
          route: ROUTES.ACHIROPITA_FESTA_HISTORICO,
          resources: CONTENT.ACHIROPITA_FESTA_HISTORICO,
          subitems: [],
        }, {
          item: "Festa Presencial e Delivery",
          route: ROUTES.ACHIROPITA_FESTA_PRESENCIAL,
          subitems: [],
        }, {
          item: "Material Promocional",
          route: ROUTES.ACHIROPITA_FESTA_MATERIAL,
          subitems: [
            {
              item: "Clipping",
              route: ROUTES.ACHIROPITA_FESTA_MATERIAL_1,
            }, {
              item: "Publicações",
              route: ROUTES.ACHIROPITA_FESTA_MATERIAL_2,
              resources: CONTENT.ACHIROPITA_FESTA_MATERIAL_2,
            }, {
              item: "Cartazes",
              route: ROUTES.ACHIROPITA_FESTA_MATERIAL_3,
              resources: CONTENT.ACHIROPITA_FESTA_MATERIAL_3,
            }, {
              item: "Logomarcas",
              route: ROUTES.ACHIROPITA_FESTA_MATERIAL_4,
              resources: CONTENT.ACHIROPITA_FESTA_MATERIAL_4,
            }, {
              item: "Vídeos",
              route: ROUTES.ACHIROPITA_FESTA_MATERIAL_5,
            }
          ],
        }
      ],
    }, 
    {
      item: "Projetos",
      route: ROUTES.ACHIROPITA_PROJETOS,
      subitems: [
        {
          item: "Vídeo de Apresentação",
          route: ROUTES.ACHIROPITA_PROJETOS_1,
          resources: CONTENT.ACHIROPITA_PROJETOS_1,
          subitems: [],
        }, {
          item: "Creche Mãe Achiropita",
          route: ROUTES.ACHIROPITA_PROJETOS_2,
          resources: CONTENT.ACHIROPITA_PROJETOS_2,
          subitems: [],
        }, {
          item: "Núcleo de convivência para Idosos",
          route: ROUTES.ACHIROPITA_PROJETOS_3,
          resources: CONTENT.ACHIROPITA_PROJETOS_3,
          subitems: [],
        }, {
          item: "C.E.D.O. – Centro Educacional Don Orione",
          route: ROUTES.ACHIROPITA_PROJETOS_4,
          subitems: [],
        }, {
          item: "Casa Rainha da Paz",
          route: ROUTES.ACHIROPITA_PROJETOS_5,
          resources: CONTENT.ACHIROPITA_PROJETOS_5,
          subitems: [],
        }, {
          item: "Casa Don Orione",
          route: ROUTES.ACHIROPITA_PROJETOS_6,
          subitems: [],
        }, {
          item: "Centro Jurídico",
          route: ROUTES.ACHIROPITA_PROJETOS_7,
          subitems: [],
        }, {
          item: "MOVA – Movimento de Alfabetização para adultos",
          route: ROUTES.ACHIROPITA_PROJETOS_8,
          subitems: [],
        }
      ]
    }, 
    {
      item: "Livros & publicações",
      route: ROUTES.ACHIROPITA_LIVROS,
      subitems: [
        {
          item: "Nossa Sra Achiropita – Novena",
          route: ROUTES.ACHIROPITA_LIVROS_1,
          resources: CONTENT.ACHIROPITA_LIVROS_1,
          subitems: [],
        }, {
          item: "Maria Mãe de Deus, beleza infinita",
          route: ROUTES.ACHIROPITA_LIVROS_2,
          resources: CONTENT.ACHIROPITA_LIVROS_2,
          subitems: [],
        }, {
          item: "Livreto Maria - poemas",
          route: ROUTES.ACHIROPITA_LIVROS_3,
          subitems: [
            {
              item: "Introdução aos Poemas",
              route: ROUTES.ACHIROPITA_LIVROS_3_INTRODUCAO,
              resources: CONTENT.ACHIROPITA_LIVROS_3_INTRODUCAO,
            }, {
            item: "Divulgação",
            route: ROUTES.ACHIROPITA_LIVROS_3_DIVULGACAO,
            resources: CONTENT.ACHIROPITA_LIVROS_3_DIVULGACAO,
          }
        ],
        }, {
          item: "Jesus Cristo, Filho de Deus, beleza infinita",
          route: ROUTES.ACHIROPITA_LIVROS_4,
          resources: CONTENT.ACHIROPITA_LIVROS_4,
          subitems: [],
        }, {
          item: "Clipping",
          route: ROUTES.ACHIROPITA_LIVROS_5,
          subitems: [],
        }
      ],
    }, 
    {
      item: "Fotos",
      route: ROUTES.ACHIROPITA_FOTOS,
      subitems: [
        {
          item: "Celebrações e Pastorais",
          route: ROUTES.ACHIROPITA_FOTOS_1,
          resources: CONTENT.ACHIROPITA_FOTOS_1,
          subitems: [],
        }, {
          item: "Coroinhas",
          route: ROUTES.ACHIROPITA_FOTOS_2,
          resources: CONTENT.ACHIROPITA_FOTOS_2,
          subitems: [],
        }
      ],
    }, 
    {
      item: "Filmes e vídeos",
      route: ROUTES.ACHIROPITA_FILMES,
      subitems: [
        {
          item: "Vida e Milagres de Santa Beatriz da Silva",
          route: ROUTES.ACHIROPITA_FILMES_1,
          resources: CONTENT.ACHIROPITA_FILMES_1,
          subitems: [],
        }, {
          item: "A relíquia",
          route: ROUTES.ACHIROPITA_FILMES_2,
          resources: CONTENT.ACHIROPITA_FILMES_2,
          subitems: [
            {
              item: "Sinopse de A Relíquia",
              route: ROUTES.ACHIROPITA_FILMES_2_SINOPSE,
              resources: CONTENT.ACHIROPITA_FILMES_2_SINOPSE,
            }
          ],
        }, {
          item: "Vida e Obra de Santo Eugênio de Mazenod",
          route: ROUTES.ACHIROPITA_FILMES_3,
          resources: CONTENT.ACHIROPITA_FILMES_3,
          subitems: [],
        }, {
          item: "Socorra meu povo",
          route: ROUTES.ACHIROPITA_FILMES_4,
          resources: CONTENT.ACHIROPITA_FILMES_4,
          subitems: [],
        }, {
          item: "São José, o bom carpinteiro",
          route: ROUTES.ACHIROPITA_FILMES_5,
          resources: CONTENT.ACHIROPITA_FILMES_5,
          subitems: [],
        }, {
          item: "São Tarciso",
          route: ROUTES.ACHIROPITA_FILMES_6,
          resources: CONTENT.ACHIROPITA_FILMES_6,
          subitems: [],
        }, {
          item: "A Vida e a Obra de Bárbara Maix",
          route: ROUTES.ACHIROPITA_FILMES_7,
          resources: CONTENT.ACHIROPITA_FILMES_7,
          subitems: [],
        }, {
          item: "Rosas para Rita",
          route: ROUTES.ACHIROPITA_FILMES_8,
          resources: CONTENT.ACHIROPITA_FILMES_8,
          subitems: [],
        }, {
          item: "Sangue no Sertão",
          route: ROUTES.ACHIROPITA_FILMES_9,
          resources: CONTENT.ACHIROPITA_FILMES_9,
          subitems: [],
        }, {
          item: "Santo Antônio e o milagre eucarístico",
          route: ROUTES.ACHIROPITA_FILMES_10,
          resources: CONTENT.ACHIROPITA_FILMES_10,
          subitems: [],
        }, {
          item: "Vida em versos: autobiográfico",
          route: ROUTES.ACHIROPITA_FILMES_11,
          resources: CONTENT.ACHIROPITA_FILMES_11,
          subitems: [],
        }, {
          item: "Zilda Arns: via sacra da solidariedade",
          route: ROUTES.ACHIROPITA_FILMES_12,
          resources: CONTENT.ACHIROPITA_FILMES_12,
          subitems: [],
        }, {
          item: "Maria Mãe de Deus",
          route: ROUTES.ACHIROPITA_FILMES_13,
          resources: CONTENT.ACHIROPITA_FILMES_13,
          subitems: [],
        }, {
          item: "Perfume de Jasmim",
          route: ROUTES.ACHIROPITA_FILMES_14,
          subitems: [
            {
              item: "Perfume de Jasmim - Episódio 1",
              route: ROUTES.ACHIROPITA_FILMES_14_EP1,
              resources: CONTENT.ACHIROPITA_FILMES_14_EP1,
            }, {
              item: "Perfume de Jasmim - Episódio 2",
              route: ROUTES.ACHIROPITA_FILMES_14_EP2,
              resources: CONTENT.ACHIROPITA_FILMES_14_EP2,
            }, {
              item: "Perfume de Jasmim - Episódio 3",
              route: ROUTES.ACHIROPITA_FILMES_14_EP3,
              resources: CONTENT.ACHIROPITA_FILMES_14_EP3,
            }, {
              item: "Perfume de Jasmim - Episódio 4",
              route: ROUTES.ACHIROPITA_FILMES_14_EP4,
              resources: CONTENT.ACHIROPITA_FILMES_14_EP4,
            }, {
              item: "Perfume de Jasmim - Episódio 5",
              route: ROUTES.ACHIROPITA_FILMES_14_EP5,
              resources: CONTENT.ACHIROPITA_FILMES_14_EP5,
            }, {
              item: "Perfume de Jasmim - Episódio 6",
              route: ROUTES.ACHIROPITA_FILMES_14_EP6,
              resources: CONTENT.ACHIROPITA_FILMES_14_EP6,
            }, {
              item: "Perfume de Jasmim - Episódio 7",
              route: ROUTES.ACHIROPITA_FILMES_14_EP7,
              resources: CONTENT.ACHIROPITA_FILMES_14_EP7,
            }, {
              item: "Perfume de Jasmim - Episódio 8",
              route: ROUTES.ACHIROPITA_FILMES_14_EP8,
              resources: CONTENT.ACHIROPITA_FILMES_14_EP8,
            }, {
              item: "Perfume de Jasmim - Episódio 9",
              route: ROUTES.ACHIROPITA_FILMES_14_EP9,
              resources: CONTENT.ACHIROPITA_FILMES_14_EP9,
            }, {
              item: "Perfume de Jasmim - Episódio 10",
              route: ROUTES.ACHIROPITA_FILMES_14_EP10,
              resources: CONTENT.ACHIROPITA_FILMES_14_EP10,
            }, {
              item: "Perfume de Jasmim - Episódio 11",
              route: ROUTES.ACHIROPITA_FILMES_14_EP11,
              resources: CONTENT.ACHIROPITA_FILMES_14_EP11,
            }, {
              item: "Perfume de Jasmim - Episódio 12",
              route: ROUTES.ACHIROPITA_FILMES_14_EP12,
              resources: CONTENT.ACHIROPITA_FILMES_14_EP12,
            }, {
              item: "Perfume de Jasmim - Episódio 13",
              route: ROUTES.ACHIROPITA_FILMES_14_EP13,
              resources: CONTENT.ACHIROPITA_FILMES_14_EP13,
            }
          ],
        }, {
          item: "Santa Luzia",
          route: ROUTES.ACHIROPITA_FILMES_15,
          resources: CONTENT.ACHIROPITA_FILMES_15,
          subitems: [],
        }
      ],
    }, 
    {
      item: "Patrimônio Histórico e Artístico",
      route: ROUTES.ACHIROPITA_PATRIMONIO,
      subitems: [
        {
          item: "Igreja",
          route: ROUTES.ACHIROPITA_PATRIMONIO_IGREJA,
          subitems: [],
        }, {
          item: "Pinturas",
          route: ROUTES.ACHIROPITA_PATRIMONIO_PINTURAS,
          resources: CONTENT.ACHIROPITA_PATRIMONIO_PINTURAS,
          subitems: [],
        }, {
          item: "Esculturas",
          route: ROUTES.ACHIROPITA_PATRIMONIO_ESCULTURAS,
          resources: CONTENT.ACHIROPITA_PATRIMONIO_ESCULTURAS,
          subitems: [],
        }, {
          item: "Painéis da Cúpula",
          route: ROUTES.ACHIROPITA_PATRIMONIO_PAINEIS,
          resources: CONTENT.ACHIROPITA_PATRIMONIO_PAINEIS,
          subitems: [],
        }
      ],
    }, 
  ],
  // TODO BIXIGA --------------------------------------------------------------
  BIXIGA: [
    {
      item: "História do Bairro",
      route: ROUTES.BIXIGA_HISTORIA,
      resources: CONTENT.BIXIGA_HISTORIA,
      subitems: [
        {
          item: "Movimento Migratório",
          route: ROUTES.BIXIGA_HISTORIA_MIGRACAO,
          resources: CONTENT.BIXIGA_HISTORIA_MIGRACAO,
          subitems: [],
        }
      ],
    }, 
    {
      item: "Artes e Cultura",
      route: ROUTES.BIXIGA_CULTURA,
      subitems: [
        {
          item: "Espaços culturais",
          route: ROUTES.BIXIGA_CULTURA_ESPACOS,
          subitems: [
            {
              item: "Feira de Antiguidades do Bixiga",
              route: ROUTES.BIXIGA_CULTURA_ESPACOS_1,
              resources: CONTENT.BIXIGA_CULTURA_ESPACOS_1,
            }
          ],
        }, {
          item: "Teatros",
          route: ROUTES.BIXIGA_CULTURA_TEATROS,
          resources: CONTENT.BIXIGA_CULTURA_TEATROS,
          subitems: [],
        }
      ],
    }, 
    {
      item: "Música",
      route: ROUTES.BIXIGA_MUSICA,
      subitems: [
        {
          item: "Vai-vai",
          route: ROUTES.BIXIGA_MUSICA_VAIVAI,
          resources: CONTENT.BIXIGA_MUSICA_VAIVAI,
          subitems: [],
        }, {
          item: "Blocos Carnavalescos",
          route: ROUTES.BIXIGA_MUSICA_BLOCOS,
          subitems: [],
        }
      ],
    }, 
    {
      item: "Personagens",
      route: ROUTES.BIXIGA_PERSONAGENS,
      subitems: [
        {
          item: "Dona Yayá",
          route: ROUTES.BIXIGA_PERSONAGENS_1,
          resources: CONTENT.BIXIGA_PERSONAGENS_1,
          subitems: [],
        }, {
          item: "Adoniram Barbosa",
          route: ROUTES.BIXIGA_PERSONAGENS_2,
          resources: CONTENT.BIXIGA_PERSONAGENS_2,
          subitems: [
            {
              item: "Conheça Um Samba no Bixiga",
              route: ROUTES.BIXIGA_PERSONAGENS_2_VIDEO,
              resources: CONTENT.BIXIGA_PERSONAGENS_2_VIDEO,
            }
          ],
        }, {
          item: "Antonio Rago",
          route: ROUTES.BIXIGA_PERSONAGENS_3,
          resources: CONTENT.BIXIGA_PERSONAGENS_3,
          subitems: [
            {
              item: "Conheça Antônio Rago em Jamais te esquecerei",
              route: ROUTES.BIXIGA_PERSONAGENS_3_VIDEO,
              resources: CONTENT.BIXIGA_PERSONAGENS_3_VIDEO,
            }
          ],
        }, {
          item: "Sílvio Santos",
          route: ROUTES.BIXIGA_PERSONAGENS_4,
          subitems: [],
        }, {
          item: "Emanuel Araújo",
          route: ROUTES.BIXIGA_PERSONAGENS_5,
          subitems: [],
        }, {
          item: "Sérgio Mamberti",
          route: ROUTES.BIXIGA_PERSONAGENS_6,
          subitems: [],
        }
      ],
    }, 
    {
      item: "Patrimônio histórico",
      route: ROUTES.BIXIGA_PATRIMONIO,
      subitems: [
        {
          item: "Vila Itororó",
          route: ROUTES.BIXIGA_PATRIMONIO_1,
          resources: CONTENT.BIXIGA_PATRIMONIO_1,
          subitems: [],
        }, {
          item: "Casa da Dona Yayá",
          route: ROUTES.BIXIGA_PATRIMONIO_2,
          resources: CONTENT.BIXIGA_PATRIMONIO_2,
          subitems: [],
        }
      ],
    }, 
  ],
};

export default MENU;
