import CONTENT from "./content";
import ROUTES from "./routes";

const MENU = {
  ORIONE: [
    {
      item: "Biografia",
      route: ROUTES.ORIONE_BIOGRAFIA,
      subitems: [
        {
          item: "Linha do tempo da Vida, obra e canonização de Don Orione",
          route: ROUTES.ORIONE_BIOGRAFIA_LINHA,
          subitems: [],
        },
      ],
    }, 
    {
      item: "Obra Orionita no Mundo",
      route: ROUTES.ORIONE_OBRAS,
      subitems: [
        {
          item: "No Brasil",
          route: ROUTES.ORIONE_OBRAS_BRASIL,
          subitems: [
            {
              item: "1906-1923",
              subtitle: "A motivação da evangelização e a vinda de São Orione ao Brasil",
              route: ROUTES.ORIONE_OBRAS_BRASIL_1,
            }, {
              item: "1923-1934",
              subtitle: "A chegada ao Brasil e ação dos pioneiros",
              route: ROUTES.ORIONE_OBRAS_BRASIL_2,
            }, {
              item: "1934-1940",
              subtitle: "Pequena Obra da Divina Providência de Don Orione no Brasil e a segunda estada do santo na América",
              route: ROUTES.ORIONE_OBRAS_BRASIL_3,
            }, {
              item: "1940-1947",
              subtitle: "Consolidação da evangelização orionita no Brasil em SP, RJ e MG",
              route: ROUTES.ORIONE_OBRAS_BRASIL_4,
            }, {
              item: "1972-2002",
              subtitle: "Casas de Don Orione no Rio Grande do Sul",
              route: ROUTES.ORIONE_OBRAS_BRASIL_5,
            }, {
              item: "Missionários pioneiros no Brasil",
              links: ["Lista dos falecidos", "Sobre os pioneiros"],
              route: ROUTES.ORIONE_OBRAS_BRASIL_6,
            }
          ],
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
          subitems: [],
        }, {
          item: "Livros e publicações sobre Don Orione",
          route: ROUTES.ORIONE_PUBLICACOES_LIVROS,
          subitems: [
            {
              item: "A vida de São Luís Orione em quadrinhos",
              route: ROUTES.ORIONE_PUBLICACOES_LIVROS_1,
            }, {
              item: "Pérolas: pensamentos espirituais de São Luís Orione",
              route: ROUTES.ORIONE_PUBLICACOES_LIVROS_2,
            }, {
              item: "Novena de Don Orione",
              route: ROUTES.ORIONE_PUBLICACOES_LIVROS_3,
            }, {
              item: "Don Orione: Em nome da Divina Providência, as mais belas páginas",
              route: ROUTES.ORIONE_PUBLICACOES_LIVROS_4,
            }, {
              item: "Don Orione o encantador da juventude",
              route: ROUTES.ORIONE_PUBLICACOES_LIVROS_5,
            }, {
              item: "Livros do grupo de estudos orionitas - GEO",
              route: ROUTES.ORIONE_PUBLICACOES_LIVROS_6,
            }, {
              item: "Obras sobre Don Orione em idiomas",
              route: ROUTES.ORIONE_PUBLICACOES_LIVROS_7,
            }, {
              item: "Revista Moçambique",
              route: ROUTES.ORIONE_PUBLICACOES_LIVROS_8,
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
          subitems: [],
        }, {
          item: "Galeria Don Orione no Brasil",
          route: ROUTES.ORIONE_FOTOS_2,
          subitems: [],
        }, {
          item: "Galeria de fotos de relíquias de Don Orione no Brasil",
          route: ROUTES.ORIONE_FOTOS_3,
          subitems: [],
        }, {
          item: "Galeria de fotos do Encontro Latino Americano de Jovens Orionitas",
          route: ROUTES.ORIONE_FOTOS_4,
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
          subitems: [],
        }, {
          item: "Cartazes de eventos orionitas",
          route: ROUTES.ORIONE_ICONOLOGIA_CARTAZES,
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
            }, {
              item: "Universo Orione",
              route: ROUTES.ORIONE_FILMES_BOGAZ_2,
            }, {
              item: "Memórias de uma aliança",
              route: ROUTES.ORIONE_FILMES_BOGAZ_3,
            }, {
              item: "Perfume de Jasmim",
              route: ROUTES.ORIONE_FILMES_BOGAZ_4,
            }, {
              item: "Qualquer coisa de Don Orione",
              route: ROUTES.ORIONE_FILMES_BOGAZ_5,
            }, {
              item: "Vocação: tocar na orquestra de Deus",
              route: ROUTES.ORIONE_FILMES_BOGAZ_6,
            }, {
              item: "Orione Apóstolo da Caridade",
              route: ROUTES.ORIONE_FILMES_BOGAZ_7,
            }, {
              item: "Recordações de um santo",
              route: ROUTES.ORIONE_FILMES_BOGAZ_8,
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
            }, {
              item: "Se Don Orione vivesse em nossos dias",
              route: ROUTES.ORIONE_FILMES_ORIONITAS_3,
            }
          ],
        }
      ],
    }, 
  ],
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
          item: "Pastoral",
          route: ROUTES.ACHIROPITA_PAROQUIA_PASTORAL,
          subitems: [
            {
              item: "Horário de Missas e terços",
              route: ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_1,
            }, {
              item: "Sementeira Achiropita Orione",
              route: ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_2,
            }, {
              item: "Pastoral da Pessoa Idosa",
              route: ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_3,
            }, {
              item: "Pastoral Afro",
              route: ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_4,
            }, {
              item: "Pastoral do Batismo",
              route: ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_5,
            }, {
              item: "Pastoral da Animação Bíblico Catequética",
              route: ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_6,
            }, {
              item: "Pastoral da Criança",
              route: ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_7,
            }, {
              item: "Pastoral da Comunicação",
              route: ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_8,
            }, {
              item: "Pastoral do Dizimo",
              route: ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_9,
            }, {
              item: "Pastoral da Juventude",
              route: ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_10,
            }, {
              item: "Pastoral da Saúde",
              route: ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_11,
            }, {
              item: "Apostolado da Oração",
              route: ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_12,
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
            }, {
              item: "Cartazes",
              route: ROUTES.ACHIROPITA_FESTA_MATERIAL_3,
            }, {
              item: "Logomarcas",
              route: ROUTES.ACHIROPITA_FESTA_MATERIAL_4,
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
          item: "Creche Mãe Achiropita",
          route: ROUTES.ACHIROPITA_PROJETOS_1,
          subitems: [],
        }, {
          item: "Núcleo de convivência para Idosos",
          route: ROUTES.ACHIROPITA_PROJETOS_2,
          subitems: [],
        }, {
          item: "C.E.D.O. – Centro Educacional Don Orione",
          route: ROUTES.ACHIROPITA_PROJETOS_3,
          subitems: [],
        }, {
          item: "Casa Rainha da Paz",
          route: ROUTES.ACHIROPITA_PROJETOS_4,
          subitems: [],
        }, {
          item: "Casa Don Orione",
          route: ROUTES.ACHIROPITA_PROJETOS_5,
          subitems: [],
        }, {
          item: "Centro Jurídico",
          route: ROUTES.ACHIROPITA_PROJETOS_6,
          subitems: [],
        }, {
          item: "MOVA – Movimento de Alfabetização para adultos",
          route: ROUTES.ACHIROPITA_PROJETOS_7,
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
          subitems: [],
        }, {
          item: "Maria Mãe de Deus, beleza infinita",
          route: ROUTES.ACHIROPITA_LIVROS_2,
          subitems: [],
        }, {
          item: "Livreto Maria -poemas",
          route: ROUTES.ACHIROPITA_LIVROS_3,
          subitems: [],
        }, {
          item: "Jesus Cristo, Filho de Deus, beleza infinita",
          route: ROUTES.ACHIROPITA_LIVROS_4,
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
          item: "Celebrações 2019",
          route: ROUTES.ACHIROPITA_FOTOS_1,
          subitems: [],
        }, {
          item: "Coroinhas 2019",
          route: ROUTES.ACHIROPITA_FOTOS_2,
          subitems: [],
        }, {
          item: "Pastorais",
          route: ROUTES.ACHIROPITA_FOTOS_3,
          subitems: [],
        }
      ],
    }, 
    {
      item: "Filmes e vídeos",
      route: ROUTES.ACHIROPITA_FILMES,
      subitems: [
        {
          item: "Nossa Senhora Achiropita",
          route: ROUTES.ACHIROPITA_FILMES_1,
          subitems: [],
        }, {
          item: "A relíquia",
          route: ROUTES.ACHIROPITA_FILMES_2,
          subitems: [
            {
              item: "Sinopse de A Relíquia",
              route: ROUTES.ACHIROPITA_FILMES_2_SINOPSE,
            }
          ],
        }, {
          item: "A relíquia e o milagre",
          route: ROUTES.ACHIROPITA_FILMES_3,
          subitems: [],
        }, {
          item: "Socorra meu povo",
          route: ROUTES.ACHIROPITA_FILMES_4,
          subitems: [],
        }, {
          item: "São José, o bom carpinteiro",
          route: ROUTES.ACHIROPITA_FILMES_5,
          subitems: [
            {
              item: "Versão em inglês",
              route: ROUTES.ACHIROPITA_FILMES_5_EN,
            }, {
              item: "Versão em português",
              route: ROUTES.ACHIROPITA_FILMES_5_PT,
            }
          ],
        }, {
          item: "São Tarciso",
          route: ROUTES.ACHIROPITA_FILMES_6,
          subitems: [],
        }, {
          item: "Emanuel",
          route: ROUTES.ACHIROPITA_FILMES_7,
          subitems: [],
        }, {
          item: "Rosas para Rita",
          route: ROUTES.ACHIROPITA_FILMES_8,
          subitems: [],
        }, {
          item: "Sangue no Sertão",
          route: ROUTES.ACHIROPITA_FILMES_9,
          subitems: [],
        }, {
          item: "Santo Antônio e o milagre eucarístico",
          route: ROUTES.ACHIROPITA_FILMES_10,
          subitems: [],
        }, {
          item: "Vida em versos: autobiográfico",
          route: ROUTES.ACHIROPITA_FILMES_11,
          subitems: [],
        }, {
          item: "Zilda Arns: via sacra da solidariedade",
          route: ROUTES.ACHIROPITA_FILMES_12,
          subitems: [],
        }, {
          item: "Maria Mãe de Deus",
          route: ROUTES.ACHIROPITA_FILMES_13,
          subitems: [],
        }, {
          item: "Perfume de Jasmim",
          route: ROUTES.ACHIROPITA_FILMES_14,
          subitems: [
            {
              item: "Versão português",
              route: ROUTES.ACHIROPITA_FILMES_14_PT,
            }, {
              item: "Versão espanhol",
              route: ROUTES.ACHIROPITA_FILMES_14_ES,
            }
          ],
        }, {
          item: "Santa Luzia",
          route: ROUTES.ACHIROPITA_FILMES_15,
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
          subitems: [],
        }, {
          item: "Esculturas",
          route: ROUTES.ACHIROPITA_PATRIMONIO_ESCULTURAS,
          subitems: [],
        }, {
          item: "Painéis da Cúpula",
          route: ROUTES.ACHIROPITA_PATRIMONIO_PAINEIS,
          subitems: [],
        }
      ],
    }, 
  ],
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
          subitems: [],
        }, {
          item: "Teatros",
          route: ROUTES.BIXIGA_CULTURA_TEATROS,
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
          subitems: [],
        }, {
          item: "Adoniram Barbosa",
          route: ROUTES.BIXIGA_PERSONAGENS_2,
          subitems: [],
        }, {
          item: "Antonio Rago",
          route: ROUTES.BIXIGA_PERSONAGENS_3,
          subitems: [],
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
      subitems: [],
    }, 
  ],
};

export default MENU;

// 2.2.2.1 Sementeira Clips