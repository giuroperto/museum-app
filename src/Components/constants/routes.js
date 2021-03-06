const ROUTES = {
  HOME: '/',

  // orione routes
  ORIONE: '/orione',

  ORIONE_BIOGRAFIA: '/orione/biografia',
  
  ORIONE_OBRAS_BRASIL: '/orione/obras/brasil',
  ORIONE_OBRAS_BRASIL_1: '/orione/obras/brasil/1906-1923',
  ORIONE_OBRAS_BRASIL_2: '/orione/obras/brasil/1923-1934',
  ORIONE_OBRAS_BRASIL_3: '/orione/obras/brasil/1934-1940',
  ORIONE_OBRAS_BRASIL_4: '/orione/obras/brasil/1940-1947',
  ORIONE_OBRAS_BRASIL_5: '/orione/obras/brasil/1972-2002',
  ORIONE_OBRAS_BRASIL_6: '/orione/obras/brasil/pioneiros-falecidos',
  ORIONE_OBRAS_BRASIL_7: '/orione/obras/brasil/pioneiros',

  ORIONE_OBRAS_TXT: '/orione/obras/pdf',

  ORIONE_PUBLICACOES: '/orione/publicacoes',
  ORIONE_PUBLICACOES_BOLETIM: '/orione/publicacoes/boletim',

  ORIONE_PUBLICACOES_LIVROS: '/orione/publicacoes/livros',
  ORIONE_PUBLICACOES_LIVROS_1: '/orione/publicacoes/livros/quadrinho',
  ORIONE_PUBLICACOES_LIVROS_2: '/orione/publicacoes/livros/perolas',
  ORIONE_PUBLICACOES_LIVROS_3: '/orione/publicacoes/livros/novena',
  ORIONE_PUBLICACOES_LIVROS_4: '/orione/publicacoes/livros/don-orione',
  ORIONE_PUBLICACOES_LIVROS_5: '/orione/publicacoes/livros/juventude',

  ORIONE_PUBLICACOES_LIVROS_6: '/orione/publicacoes/livros/orionitas-livro1',
  ORIONE_PUBLICACOES_LIVROS_7: '/orione/publicacoes/livros/orionitas-livro2',
  ORIONE_PUBLICACOES_LIVROS_8: '/orione/publicacoes/livros/orionitas-livro3',
  ORIONE_PUBLICACOES_LIVROS_9: '/orione/publicacoes/livros/orionitas-livro4',
  ORIONE_PUBLICACOES_LIVROS_10: '/orione/publicacoes/livros/orionitas-livro5',
  ORIONE_PUBLICACOES_LIVROS_11: '/orione/publicacoes/livros/orionitas-livro6',
  ORIONE_PUBLICACOES_LIVROS_12: '/orione/publicacoes/livros/orionitas-livro7',
  ORIONE_PUBLICACOES_LIVROS_13: '/orione/publicacoes/livros/orionitas-livro8',
  ORIONE_PUBLICACOES_LIVROS_14: '/orione/publicacoes/livros/orionitas-livro9',
  ORIONE_PUBLICACOES_LIVROS_15: '/orione/publicacoes/livros/idiomas-livro1',
  ORIONE_PUBLICACOES_LIVROS_16: '/orione/publicacoes/livros/idiomas-livro2',
  ORIONE_PUBLICACOES_LIVROS_17: '/orione/publicacoes/livros/idiomas-livro3',
  ORIONE_PUBLICACOES_LIVROS_18: '/orione/publicacoes/livros/idiomas-livro4',
  ORIONE_PUBLICACOES_LIVROS_19: '/orione/publicacoes/livros/idiomas-livro5',
  ORIONE_PUBLICACOES_LIVROS_20: '/orione/publicacoes/livros/mocambique',

  ORIONE_FOTOS: '/orione/fotos',
  ORIONE_FOTOS_1: '/orione/fotos/historicas',
  ORIONE_FOTOS_2: '/orione/fotos/brasil',
  ORIONE_FOTOS_3: '/orione/fotos/reliquias',
  ORIONE_FOTOS_4: '/orione/fotos/orionitas',

  ORIONE_ICONOLOGIA: '/orione/iconologia',
  ORIONE_ICONOLOGIA_GALERIA: '/orione/iconologia/galeria',
  ORIONE_ICONOLOGIA_CARTAZES: '/orione/iconologia/cartazes',
  
  ORIONE_FILMES: '/orione/filmes',

  ORIONE_FILMES_BOGAZ: '/orione/filmes/bogaz',
  ORIONE_FILMES_BOGAZ_1: '/orione/filmes/bogaz/a-vida-e-como-um-rio',
  ORIONE_FILMES_BOGAZ_2: '/orione/filmes/bogaz/universo-orione',
  ORIONE_FILMES_BOGAZ_3: '/orione/filmes/bogaz/memorias-de-uma-alianca',
  ORIONE_FILMES_BOGAZ_4: '/orione/filmes/bogaz/perfume-de-jasmin',
  ORIONE_FILMES_BOGAZ_5: '/orione/filmes/bogaz/qualquer-coisa-de-don-orione',
  ORIONE_FILMES_BOGAZ_6: '/orione/filmes/bogaz/vocacao',
  ORIONE_FILMES_BOGAZ_7: '/orione/filmes/bogaz/orione-apostolo-da-caridade',
  ORIONE_FILMES_BOGAZ_8: '/orione/filmes/bogaz/recordacoes-de-um-santo',

  ORIONE_FILMES_ORIONITAS: '/orione/filmes/orionitas',
  ORIONE_FILMES_ORIONITAS_1: '/orione/filmes/orionitas/a-grande-pescaria',
  ORIONE_FILMES_ORIONITAS_2: '/orione/filmes/orionitas/caminhando-nas-terras-do-pau-brasil',
  ORIONE_FILMES_ORIONITAS_3: '/orione/filmes/orionitas/se-don-orione-vivesse-em-nossos-dias',
  
  ORIONE_RELIQUIAS: '/orione/reliquias',
  ORIONE_RELIQUIAS_FOTOS: '/orione/reliquias/fotos',
  ORIONE_RELIQUIAS_TEXTO: '/orione/reliquias/texto',

  // achiropita routes
  ACHIROPITA: '/achiropita',
  
  ACHIROPITA_HISTORIA: '/achiropita/historia',
  ACHIROPITA_HISTORIA_1: '/achiropita/historia/culto-a-achiropita',
  ACHIROPITA_HISTORIA_2: '/achiropita/historia/significado-do-icone-achiropita',
  ACHIROPITA_HISTORIA_3: '/achiropita/historia/devocao-a-achiropita-no-bixiga',
  ACHIROPITA_HISTORIA_4: '/achiropita/historia/imagem-da-madonna-aporta-no-brasil',
  ACHIROPITA_HISTORIA_5: '/achiropita/historia/da-capelinha-a-igreja',

  ACHIROPITA_PAROQUIA: '/achiropita/paroquia',
  ACHIROPITA_PAROQUIA_HINO: '/achiropita/paroquia/hino',
  ACHIROPITA_PAROQUIA_HORARIOS: '/achiropita/paroquia/pastoral/horarios',
  ACHIROPITA_PAROQUIA_SEMENTEIRA: '/achiropita/paroquia/pastoral/sementeira',
  ACHIROPITA_PAROQUIA_ORATORIO: '/achiropita/paroquia/pastoral/oratorio',
  ACHIROPITA_PAROQUIA_CONGREGACAO: '/achiropita/paroquia/pastoral/congregacao-mariana',
  ACHIROPITA_PAROQUIA_PASTORAL: '/achiropita/paroquia/pastoral',
  ACHIROPITA_PAROQUIA_PASTORAL_1: '/achiropita/paroquia/pastoral/pastoral-da-pessoa-idosa',
  ACHIROPITA_PAROQUIA_PASTORAL_2: '/achiropita/paroquia/pastoral/pastoral-afro',
  ACHIROPITA_PAROQUIA_PASTORAL_3: '/achiropita/paroquia/pastoral/pastoral-batismo',
  ACHIROPITA_PAROQUIA_PASTORAL_4: '/achiropita/paroquia/pastoral/pastoral-animacao-biblico-catequetica',
  ACHIROPITA_PAROQUIA_PASTORAL_5: '/achiropita/paroquia/pastoral/pastoral-comunicacao',
  ACHIROPITA_PAROQUIA_PASTORAL_6: '/achiropita/paroquia/pastoral/pastoral-dizimo',
  ACHIROPITA_PAROQUIA_PASTORAL_7: '/achiropita/paroquia/pastoral/pastoral-juventude',
  ACHIROPITA_PAROQUIA_PASTORAL_8: '/achiropita/paroquia/pastoral/pastoral-saude',
  ACHIROPITA_PAROQUIA_PASTORAL_9: '/achiropita/paroquia/pastoral/apostolado-oracao',
  ACHIROPITA_PAROQUIA_PASTORAL_10: '/achiropita/paroquia/pastoral/grupo-oracao',
  ACHIROPITA_PAROQUIA_PASTORAL_11: '/achiropita/paroquia/pastoral/grupo-terco',
  ACHIROPITA_PAROQUIA_PASTORAL_12: '/achiropita/paroquia/pastoral/pastoral-vocacional',
  ACHIROPITA_PAROQUIA_PASTORAL_13: '/achiropita/paroquia/pastoral/pastoral-missionaria',
  ACHIROPITA_PAROQUIA_PASTORAL_14: '/achiropita/paroquia/pastoral/pastoral-noivos',
  ACHIROPITA_PAROQUIA_PASTORAL_15: '/achiropita/paroquia/pastoral/pastoral-ministros',
  ACHIROPITA_PAROQUIA_PASTORAL_16: '/achiropita/paroquia/pastoral/pastoral-migrantes',
  ACHIROPITA_PAROQUIA_PASTORAL_17: '/achiropita/paroquia/pastoral/pastoral-mulher',
  ACHIROPITA_PAROQUIA_PASTORAL_18: '/achiropita/paroquia/pastoral/pastoral-familia',
  ACHIROPITA_PAROQUIA_PASTORAL_19: '/achiropita/paroquia/pastoral/pastoral-coroinhas',
  ACHIROPITA_PAROQUIA_PASTORAL_20: '/achiropita/paroquia/pastoral/pastoral-pia',
  ACHIROPITA_PAROQUIA_PASTORAL_21: '/achiropita/paroquia/pastoral/pastoral-mlo',
  ACHIROPITA_PAROQUIA_PASTORAL_22: '/achiropita/paroquia/pastoral/comunidade-betel',

  ACHIROPITA_FESTA: '/achiropita/festa',
  ACHIROPITA_FESTA_APRESENTACAO: '/achiropita/festa/apresentacao',
  ACHIROPITA_FESTA_HISTORICO: '/achiropita/festa/historico',
  ACHIROPITA_FESTA_PRESENCIAL: '/achiropita/festa/festa-presencial-delivery',
  ACHIROPITA_FESTA_MATERIAL: '/achiropita/festa/material',
  ACHIROPITA_FESTA_MATERIAL_1: '/achiropita/festa/material/clipping',
  ACHIROPITA_FESTA_MATERIAL_2: '/achiropita/festa/material/publicacoes',
  ACHIROPITA_FESTA_MATERIAL_3: '/achiropita/festa/material/cartazes',
  ACHIROPITA_FESTA_MATERIAL_4: '/achiropita/festa/material/logomarcas',
  ACHIROPITA_FESTA_MATERIAL_5: '/achiropita/festa/material/videos',

  ACHIROPITA_PROJETOS: '/achiropita/projetos',
  ACHIROPITA_PROJETOS_1: '/achiropita/projetos/apresentacao',
  ACHIROPITA_PROJETOS_2: '/achiropita/projetos/creche',
  ACHIROPITA_PROJETOS_3: '/achiropita/projetos/idosos',
  ACHIROPITA_PROJETOS_4: '/achiropita/projetos/cedo',
  ACHIROPITA_PROJETOS_5: '/achiropita/projetos/casa-rainha-da-paz',
  ACHIROPITA_PROJETOS_6: '/achiropita/projetos/casa-don-orione',
  ACHIROPITA_PROJETOS_6_EP1: '/achiropita/projetos/casa-don-orione/ep1',
  ACHIROPITA_PROJETOS_6_EP2: '/achiropita/projetos/casa-don-orione/ep2',
  ACHIROPITA_PROJETOS_6_EP3: '/achiropita/projetos/casa-don-orione/ep3',
  ACHIROPITA_PROJETOS_6_EP4: '/achiropita/projetos/casa-don-orione/ep4',
  ACHIROPITA_PROJETOS_6_EP5: '/achiropita/projetos/casa-don-orione/ep5',
  ACHIROPITA_PROJETOS_6_EP6: '/achiropita/projetos/casa-don-orione/ep6',
  ACHIROPITA_PROJETOS_7: '/achiropita/projetos/centro-juridico',
  ACHIROPITA_PROJETOS_8: '/achiropita/projetos/mova',

  ACHIROPITA_LIVROS: '/achiropita/livros',
  ACHIROPITA_LIVROS_1: '/achiropita/livros/novena',
  ACHIROPITA_LIVROS_2: '/achiropita/livros/maria-mae-de-deus',
  ACHIROPITA_LIVROS_3: '/achiropita/livros/livreto-maria',
  ACHIROPITA_LIVROS_3_INTRODUCAO: '/achiropita/livros/livreto-maria/intro',
  ACHIROPITA_LIVROS_3_DIVULGACAO: '/achiropita/livros/livreto-maria/divulgacao',
  ACHIROPITA_LIVROS_4: '/achiropita/livros/jesus-cristo',
  ACHIROPITA_LIVROS_5: '/achiropita/livros/clipping',

  ACHIROPITA_FOTOS: '/achiropita/fotos',
  ACHIROPITA_FOTOS_1: '/achiropita/fotos/celebracoes-pastorais',
  ACHIROPITA_FOTOS_2: '/achiropita/fotos/coroinhas-2019',

  ACHIROPITA_FILMES: '/achiropita/filmes',
  ACHIROPITA_FILMES_1: '/achiropita/filmes/beatriz-silva',
  ACHIROPITA_FILMES_2: '/achiropita/filmes/a-reliquia',
  ACHIROPITA_FILMES_2_SINOPSE: '/achiropita/filmes/a-reliquia-sinopse',
  ACHIROPITA_FILMES_3: '/achiropita/filmes/eugenio-mazenod',
  ACHIROPITA_FILMES_4: '/achiropita/filmes/socorra-meu-povo',
  ACHIROPITA_FILMES_5: '/achiropita/filmes/sao-jose-bom-carpinteiro',
  ACHIROPITA_FILMES_6: '/achiropita/filmes/sao-tarciso',
  ACHIROPITA_FILMES_7: '/achiropita/filmes/barbara-maix',
  ACHIROPITA_FILMES_8: '/achiropita/filmes/rosas-para-rita',
  ACHIROPITA_FILMES_9: '/achiropita/filmes/sangue-no-sertao',
  ACHIROPITA_FILMES_10: '/achiropita/filmes/santo-antonio',
  ACHIROPITA_FILMES_11: '/achiropita/filmes/vida-em-versos',
  ACHIROPITA_FILMES_12: '/achiropita/filmes/zilda-arns',
  ACHIROPITA_FILMES_13: '/achiropita/filmes/maria-mae-de-deus',
  ACHIROPITA_FILMES_14: '/achiropita/filmes/perfume-de-jasmin',
  ACHIROPITA_FILMES_14_EP1: '/achiropita/filmes/perfume-de-jasmin/ep1',
  ACHIROPITA_FILMES_14_EP2: '/achiropita/filmes/perfume-de-jasmin/ep2',
  ACHIROPITA_FILMES_14_EP3: '/achiropita/filmes/perfume-de-jasmin/ep3',
  ACHIROPITA_FILMES_14_EP4: '/achiropita/filmes/perfume-de-jasmin/ep4',
  ACHIROPITA_FILMES_14_EP5: '/achiropita/filmes/perfume-de-jasmin/ep5',
  ACHIROPITA_FILMES_14_EP6: '/achiropita/filmes/perfume-de-jasmin/ep6',
  ACHIROPITA_FILMES_14_EP7: '/achiropita/filmes/perfume-de-jasmin/ep7',
  ACHIROPITA_FILMES_14_EP8: '/achiropita/filmes/perfume-de-jasmin/ep8',
  ACHIROPITA_FILMES_14_EP9: '/achiropita/filmes/perfume-de-jasmin/ep9',
  ACHIROPITA_FILMES_14_EP10: '/achiropita/filmes/perfume-de-jasmin/ep10',
  ACHIROPITA_FILMES_14_EP11: '/achiropita/filmes/perfume-de-jasmin/ep11',
  ACHIROPITA_FILMES_14_EP12: '/achiropita/filmes/perfume-de-jasmin/ep12',
  ACHIROPITA_FILMES_14_EP13: '/achiropita/filmes/perfume-de-jasmin/ep13',
  ACHIROPITA_FILMES_15: '/achiropita/filmes/santa-luzia',

  ACHIROPITA_PATRIMONIO: '/achiropita/patrimonio-historico',
  ACHIROPITA_PATRIMONIO_IGREJA: '/achiropita/patrimonio-historico/igrejas',
  ACHIROPITA_PATRIMONIO_PINTURAS: '/achiropita/patrimonio-historico/pinturas',
  ACHIROPITA_PATRIMONIO_ESCULTURAS: '/achiropita/patrimonio-historico/esculturas',
  ACHIROPITA_PATRIMONIO_PAINEIS: '/achiropita/patrimonio-historico/paineis-cupula',

  // bixiga routes
  BIXIGA: '/bixiga',

  BIXIGA_HISTORIA: '/bixiga/historia',
  BIXIGA_HISTORIA_MIGRACAO: '/bixiga/movimento-migratorio',

  BIXIGA_CULTURA: '/bixiga/cultura',
  BIXIGA_CULTURA_ESPACOS: '/bixiga/cultura/espacos-culturais',
  BIXIGA_CULTURA_ESPACOS_1: '/bixiga/cultura/espacos-culturais/feirinha',
  BIXIGA_CULTURA_TEATROS: '/bixiga/cultura/teatros',

  BIXIGA_MUSICA: '/bixiga/musica',
  BIXIGA_MUSICA_VAIVAI: '/bixiga/musica/vai-vai',
  BIXIGA_MUSICA_BLOCOS: '/bixiga/musica/blocos-carnavalescos',

  BIXIGA_PERSONAGENS: '/bixiga/personagens',
  BIXIGA_PERSONAGENS_1: '/bixiga/personagens/dona-yaya',
  BIXIGA_PERSONAGENS_2: '/bixiga/personagens/adoniram-barbosa',
  BIXIGA_PERSONAGENS_2_VIDEO: '/bixiga/personagens/adoniram-barbosa/video',
  BIXIGA_PERSONAGENS_3: '/bixiga/personagens/antonio-rego',
  BIXIGA_PERSONAGENS_3_VIDEO: '/bixiga/personagens/antonio-rego/video',
  BIXIGA_PERSONAGENS_4: '/bixiga/personagens/silvio-santos',
  BIXIGA_PERSONAGENS_5: '/bixiga/personagens/emanuel-araujo',
  BIXIGA_PERSONAGENS_6: '/bixiga/personagens/sergio-mamberti',

  BIXIGA_PATRIMONIO: '/bixiga/patrimonio-historico',
  BIXIGA_PATRIMONIO_1: '/bixiga/patrimonio-historico/vila-itororo',
  BIXIGA_PATRIMONIO_2: '/bixiga/patrimonio-historico/casa-yaya',
};

export default ROUTES;
