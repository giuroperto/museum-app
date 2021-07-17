import PDFS from './pdfs';

// content types: pdf/text/photo/video

const CONTENT = {
  ORIONE: {
    title: "Orione",
    type: "",
    text: "",
    images: []
  },
  ORIONE_BIOGRAFIA: {
    title: "Linha do tempo da Vida, obra e canonização de Don Orione*",
    type: "text",
    text: "1872 - Em 23 de junho nasceu em Pontecurone, no Piemonte.\n\n1885 - Em 14 de setembro ingressa na ordem dos franciscanos de Voghera; mas retira-se em junho de 1886 devido a uma doença.\n\n1886 - Em 4 de outubro entra no Oratório de Valdocco (Torino), de orientação salesiana; ele ficou lá por três anos.\n\n1889 - Em 16 de outubro entra no seminário de sua diocese, Tortona (AL). Ele frequentou seus estudos com sucesso e trabalhou como zelador no Duomo.\n\n1892 - Em 2 de março começa o apostolado a favor dos jovens, reunindo os jovens para jogos e catecismo. No dia 3 de julho seguinte, inauguração do Oratório San Luigi.\n\n1893 - Em 15 de outubro o clérigo Orione, de 21 anos, abre o primeiro colégio no bairro de San Bernardino de Tortona.\n\n1894 - Em 15 de outubro o Colégio é transferido para a mais espaçosa 'Santa Chiara'; abertura de casas de estudantes em Gênova e Torino.\n\n1895 - Em 13 de abril Dom Luigi Orione é ordenado sacerdote.\n\n1896 - Em outubro ele funda uma casa em Mornico Losana.\n\n1898 - Em 5 de agosto começa a publicação de 'A Obra da Divina Providência'. Em setembro é chamado a Noto (Siracusa) por Dom Bandini; aqui ele aceita o Colégio Episcopal de San Luigi e posteriormente a Colônia Agrícola.\n\n1899 - Em 30 de julho são ordenados os primeiros Eremitas da Divina Providência. Em outubro, o Collegio San Romolo é inaugurado em Sanremo.1901-1902 Inicia as colônias agrícolas de Bagnorea, Cegni di Varzi e, em Roma, de Nunziatella, de S. Giuseppe alla Balduina, de Santa Maria a Monte Mario.\n\n1903 - Em 21 de março: aprovação diocesana da Pequena Obra de Dom Igino Bandi, bispo de Tortona.\n\n1904 - No mês de maio, em Tortona, é feita a transferência definitiva da Casa Mãe, denominada 'Convitto Paterno'. É confiada a guarda da Igreja de Sant'Anna dei Palafrenieri no Vaticano.\n\n1905 - Dom Orione abre sua primeira gráfica em Tortona.\n\n1908 - Em 25 de março: a pedido de Pio X, Dom Orione inicia seu ministério no bairro de Appio, em Roma, 'a Patagônia Romana'.\n\n1909 - Em 4 de janeiro, ele partiu para a Sicília para trazer os primeiros e urgentes esforços de socorro após o desastroso terremoto em Reggio e Messina; abre um orfanato em Cassano Ionio.\n\n1909 -  Em 15 de junho, Pio X o nomeia Vigário Geral da Diocese de Messina.\n\n1911 -  Em 8 de dezembro Don Orione compra a Villa Moffa, em Bra (CN): será o noviciado e a casa de estudos da Ópera Piccola.\n\n1912 - Em abril, Dom Orione retorna a Tortona, depois dos três anos que passou na Sicília. Em 19 de abril, durante uma audiência, emite os votos perpétuos nas mãos do Papa São Pio X.\n\n1913 - Em dezembro os primeiros Missionários orionitas partem para o Brasil.\n\n1915 - Em 13 de janeiro: outro terrível terremoto acontece em Avezzano; Dom Orione ajuda com presteza e generosidade heróica.\n\n1915 - Em 29 de junho, Dom Orione dá início à Congregação das Pequenas Irmãs Missionárias da Caridade. Ocorre a inauguração do primeiro Piccolo Cottolengo em Ameno (Novara).\n\n1918 - Em 29 de agosto, Don Orione implora pelo fim da grande guerra mundial, e jura, com o povo de Tortona, construir um santuário para a Madonna della Guardia.\n\n1921 - Em 4 de agosto, Dom Orione parte para a América do Sul, em viagem aos países: Brasil, Argentina e Uruguai. Novas obras na Colônia Agrícola de Rafat (Palestina); no Rio de Janeiro, a Casa da Preservação; em Puerto Mar del Plata, Paróquia e Colégio San Francesco; em Buenos Aires, Marcos Paz Reformatory. Retorna à Itália em 4 de julho de 1922.\n\n1923 - É fundada a primeira casa na Polônia, em Zdunska Wola; reabertura da Ermida de Sant'Alberto di Butrio onde chega Frate Ave Maria.\n\n1924 - Em 19 de março ocorre a fundação do genovês Piccolo Cottolengo.\n\n1925 - Em 30 de junho, Don Orione assume um orfanato em Acandia (Ilha de Rodes).\n\n1927 - Em 15 de agostoé fundado o ramo das Irmãs Sacramentinas cegas, em Tortona.\n\n1929 - Começa a publicação do periódico mariano 'Mater Dei'.\n\n1931 - Em 29 de agosto é inaugurado o Santuário Madonna della Guardia em Tortona.\n\n1933 - Em novembro, é aberto o Piccolo Cottolengo em Milão.\n\n1934 - Tem origem a primeira casa nos Estados Unidos, em Jasper, Indiana.\n\n1934 - No dia 24 de setembro, Don Orione parte para a segunda viagem à América Latina.\n\n1935 - Em 18 de abril começa o Piccolo Cottolengo Argentino, em Claypole (Buenos Aires).\n\n1936 - Começa a atuação da Ópera Piccola na Inglaterra, Cardiff e Gales do Sul para ajudar os emigrantes italianos. Também é inaugurado na Albânia, em Shijak, para assistência aos trabalhadores italianos.\n\n1937 - Em 24 de agosto Don Orione retornou à Itália, proveniente da América do Sul.\n\n1938 - São inaugurados os novos institutos 'San Filippo Neri' em Roma e 'Artigianelli' em Alexandria. Lançamento do Milanese Piccolo Cottolengo.\n\n1939 - Em 1 ° de abril, Dom Orione sofre uma grave crise de angina de peito em Alexandria. Ele está se recuperando. Em maio, inauguração da Villa Santa Caterina em Genoa-Molassana, para nobres caídas, inauguração do Santuário da Madonna di Caravaggio, em Fumo (Pavia).\n\n1940 - Em 9 de fevereiro, uma nova crise de angina de peito ameaça a vida de Dom Orione; recebe os últimos sacramentos; recupera-se um pouco. Ele passa seus últimos dias em Tortona. No dia 6 de março faz uma última visita ao Santuário da Guarda e às comunidades.\n\n1940 - No dia 8 de março com o último 'Boa noite' na Casa Mãe, saúda os confrades.\n\n1940 - Em 9 de março ele parte para Sanremo.\n\n1940 - No dia 12 de março: última Santa Missa e último telegrama ao Papa; às 22h45, com as palavras 'Jesus, Jesus, Jesus ... eu vou!', ele parte para o Senhor.\n\n1980 - Em 26 de outubro: Dom Orione é proclamado 'bem-aventurado' em Roma pelo Papa João Paulo II.\n\n2003 - Em 7 de julho de 2003 é promulgado o decreto que reconhece um milagre por intercessão de Dom Orione.\n\n2004 - No dia 19 de fevereiro, durante o Consistório dos Cardeais, anúncio da canonização de padre Luigi Orione.\n\n2004 - Em 16 de maio acontece a canonização de Dom Luigi Orione na Praça de São Pedro pelo Papa João Paulo II.\n\n*Traduzido a partir de texto extraído de “Don Orione – La Vita”. Sito Ufficiale della Piccola Opera della Divina Provvidenza, em http://www.donorione.org/Public/ContentPage/content.asp?hdnIdContent=38",
    images: []
  },
  ORIONE_OBRAS_BRASIL: {
    title: "Obra Orionita no Brasil",
    type: "",
    text: "",
    images: []
  },
  ORIONE_OBRAS_BRASIL_1: {
    title: "A motivação da evangelização e a vinda de São Orione ao Brasil – 1906 a 1923",
    type: "pdf",
    text: PDFS.ORIONE_OBRAS_BRASIL_1,
    images: []
  },
  ORIONE_OBRAS_BRASIL_2: {
    title: "A chegada ao Brasil e ação dos pioneiros – 1923-1934",
    type: "pdf",
    text: PDFS.ORIONE_OBRAS_BRASIL_2,
    images: []
  },
  ORIONE_OBRAS_BRASIL_3: {
    title: "Pequena Obra da Divina Providência de Don Orione no Brasil e a segunda estada do santo na América – 1934-1940",
    type: "pdf",
    text: PDFS.ORIONE_OBRAS_BRASIL_3,
    images: []
  },
  ORIONE_OBRAS_BRASIL_4: {
    title: "Consolidação da evangelização orionita no Brasil em SP, RJ e MG – 1940-1947",
    type: "pdf",
    text: PDFS.ORIONE_OBRAS_BRASIL_4,
    images: []
  },
  ORIONE_OBRAS_BRASIL_5: {
    title: "Casas de Don Orione no Rio Grande do Sul – 1972-2002",
    type: "pdf",
    text: PDFS.ORIONE_OBRAS_BRASIL_5,
    images: []
  },
  ORIONE_OBRAS_BRASIL_6: {
    title: "Missionários pioneiros no Brasil - Lista de Falecidos",
    type: "pdf",
    text: PDFS.ORIONE_OBRAS_BRASIL_6,
    images: []
  },
  ORIONE_OBRAS_BRASIL_7: {
    title: "Missionários pioneiros no Brasil",
    type: "pdf",
    text: PDFS.ORIONE_OBRAS_BRASIL_7,
    images: []
  },
  ORIONE_OBRAS_TXT: {
    title: "",
    type: "",
    text: "",
    images: []
  },
  ORIONE_PUBLICACOES: {
    title: "Publicações",
    type: "",
    text: "",
    images: []
  },
  ORIONE_PUBLICACOES_BOLETIM: {
    title: "Boletim Informativo Histórico da Pequena Obra da Providência",
    type: "pdf",
    text: PDFS.ORIONE_PUBLICACOES_BOLETIM,
    images: []
  },
  ORIONE_PUBLICACOES_LIVROS: {
    title: "Livros e publicações sobre Don Orione",
    type: "",
    text: "",
    images: []
  },
  ORIONE_PUBLICACOES_LIVROS_1: {
    title: "A vida de São Luís Orione em quadrinhos",
    type: "pdf",
    text: PDFS.ORIONE_PUBLICACOES_LIVROS_1,
    images: []
  },
  ORIONE_PUBLICACOES_LIVROS_2: {
    title: "Pérolas: pensamentos espirituais de São Luís Orione",
    type: "pdf",
    text: PDFS.ORIONE_PUBLICACOES_LIVROS_2,
    images: []
  },
  ORIONE_PUBLICACOES_LIVROS_3: {
    title: "Novena de Don Orione",
    type: "pdf",
    text: PDFS.ORIONE_PUBLICACOES_LIVROS_3,
    images: []
  },
  ORIONE_PUBLICACOES_LIVROS_4: {
    title: "Don Orione: Em nome da Divina Providência, as mais belas páginas",
    type: "pdf",
    text: PDFS.ORIONE_PUBLICACOES_LIVROS_4,
    images: []
  },
  ORIONE_PUBLICACOES_LIVROS_5: {
    title: "Don Orione o encantador da juventude",
    type: "pdf",
    text: PDFS.ORIONE_PUBLICACOES_LIVROS_5,
    images: []
  },
  ORIONE_PUBLICACOES_LIVROS_6: {
    title: "Grupo de estudos orionitas - Se Luis Orione vivesse em nossos dias",
    type: "pdf",
    text: PDFS.ORIONE_PUBLICACOES_LIVROS_6,
    images: []
  },
  ORIONE_PUBLICACOES_LIVROS_7: {
    title: "Grupo de estudos orionitas - A grande pescaria",
    type: "pdf",
    text: PDFS.ORIONE_PUBLICACOES_LIVROS_7,
    images: []
  },
  ORIONE_PUBLICACOES_LIVROS_8: {
    title: "Grupo de estudos orionitas - Caminhando nas terras do pau brasil",
    type: "pdf",
    text: PDFS.ORIONE_PUBLICACOES_LIVROS_8,
    images: []
  },
  ORIONE_PUBLICACOES_LIVROS_9: {
    title: "Grupo de estudos orionitas - Cem anos de história",
    type: "pdf",
    text: PDFS.ORIONE_PUBLICACOES_LIVROS_9,
    images: []
  },
  ORIONE_PUBLICACOES_LIVROS_10: {
    title: "Grupo de estudos orionitas - Dois pulmões e um só coração",
    type: "pdf",
    text: PDFS.ORIONE_PUBLICACOES_LIVROS_10,
    images: []
  },
  ORIONE_PUBLICACOES_LIVROS_11: {
    title: "Grupo de estudos orionitas - Os Orionitas no Brasil",
    type: "pdf",
    text: PDFS.ORIONE_PUBLICACOES_LIVROS_11,
    images: []
  },
  ORIONE_PUBLICACOES_LIVROS_12: {
    title: "Grupo de estudos orionitas - Reminiscências católicas e orionitas",
    type: "pdf",
    text: PDFS.ORIONE_PUBLICACOES_LIVROS_12,
    images: []
  },
  ORIONE_PUBLICACOES_LIVROS_13: {
    title: "Grupo de estudos orionitas - Século Orione",
    type: "pdf",
    text: PDFS.ORIONE_PUBLICACOES_LIVROS_13,
    images: []
  },
  ORIONE_PUBLICACOES_LIVROS_14: {
    title: "Grupo de estudos orionitas - Nossos santos a caminho do altar",
    type: "pdf",
    text: PDFS.ORIONE_PUBLICACOES_LIVROS_14,
    images: []
  },
  ORIONE_PUBLICACOES_LIVROS_15: {
    title: "Cartas de San Luis Orione (Espanhol)",
    type: "pdf",
    text: PDFS.ORIONE_PUBLICACOES_LIVROS_15,
    images: []
  },
  ORIONE_PUBLICACOES_LIVROS_16: {
    title: "Don Orione Un Profeta de Nuestro Tiempo (Espanhol)",
    type: "pdf",
    text: PDFS.ORIONE_PUBLICACOES_LIVROS_16,
    images: []
  },
  ORIONE_PUBLICACOES_LIVROS_17: {
    title: "El Espiritu de Don Orione (Espanhol)",
    type: "pdf",
    text: PDFS.ORIONE_PUBLICACOES_LIVROS_17,
    images: []
  },
  ORIONE_PUBLICACOES_LIVROS_18: {
    title: "Don Orione El Apóstol de la Caridad (Espanhol)",
    type: "pdf",
    text: PDFS.ORIONE_PUBLICACOES_LIVROS_18,
    images: []
  },
  ORIONE_PUBLICACOES_LIVROS_19: {
    title: "Tras los pasos de Don Orione (Espanhol)",
    type: "pdf",
    text: PDFS.ORIONE_PUBLICACOES_LIVROS_19,
    images: []
  },
  ORIONE_PUBLICACOES_LIVROS_20: {
    title: "Revista Moçambique",
    type: "pdf",
    text: PDFS.ORIONE_PUBLICACOES_LIVROS_20,
    images: []
  },
  ORIONE_FOTOS: {
    title: "Fotos",
    type: "",
    text: "",
    images: []
  },
  ORIONE_FOTOS_1: {
    title: "Galeria de fotos históricas",
    type: "photo",
    text: "",
    images: ["https://res.cloudinary.com/dxatyucj2/image/upload/v1626403379/museu-bixiga/orione%20historicq/16_pu3nef.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403378/museu-bixiga/orione%20historicq/15_supk1m.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403378/museu-bixiga/orione%20historicq/14_u4ogvy.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403377/museu-bixiga/orione%20historicq/12_tavvdy.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403376/museu-bixiga/orione%20historicq/11_ictb0q.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403376/museu-bixiga/orione%20historicq/10_fm10xq.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403377/museu-bixiga/orione%20historicq/13_dhzhh6.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403376/museu-bixiga/orione%20historicq/8_pynwa3.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403376/museu-bixiga/orione%20historicq/9_dg0mxi.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403375/museu-bixiga/orione%20historicq/7_dq8obk.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403372/museu-bixiga/orione%20historicq/6_gaqvag.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403369/museu-bixiga/orione%20historicq/5_tqzmjd.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403368/museu-bixiga/orione%20historicq/4_qr1p1y.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403368/museu-bixiga/orione%20historicq/2_j6f06c.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403368/museu-bixiga/orione%20historicq/3_snftzu.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403368/museu-bixiga/orione%20historicq/1_n1vev5.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403316/museu-bixiga/orione%20historicq/35_xj5r72.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403311/museu-bixiga/orione%20historicq/34_layxtt.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403309/museu-bixiga/orione%20historicq/33_qiaauw.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403309/museu-bixiga/orione%20historicq/32_xmr2hk.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403309/museu-bixiga/orione%20historicq/30_saediy.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403309/museu-bixiga/orione%20historicq/31_qo2bry.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403309/museu-bixiga/orione%20historicq/29_hsoc14.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403309/museu-bixiga/orione%20historicq/28_ibi233.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403308/museu-bixiga/orione%20historicq/26_fgbuve.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403308/museu-bixiga/orione%20historicq/27_kqnh4y.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403308/museu-bixiga/orione%20historicq/25_nk6n0c.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403307/museu-bixiga/orione%20historicq/24_qzdbek.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403304/museu-bixiga/orione%20historicq/23_boxx9u.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403302/museu-bixiga/orione%20historicq/18_afxxar.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403302/museu-bixiga/orione%20historicq/19_srn0qc.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403302/museu-bixiga/orione%20historicq/22_vbwp4a.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403302/museu-bixiga/orione%20historicq/20_i4e2um.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403302/museu-bixiga/orione%20historicq/21_vdcjr0.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403301/museu-bixiga/orione%20historicq/16_dknvxy.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403301/museu-bixiga/orione%20historicq/17_zihw0t.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403300/museu-bixiga/orione%20historicq/15_dusytq.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403298/museu-bixiga/orione%20historicq/13_lezlrc.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403299/museu-bixiga/orione%20historicq/14_ove4tq.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403298/museu-bixiga/orione%20historicq/12_ylyugw.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403297/museu-bixiga/orione%20historicq/11_phsfly.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403295/museu-bixiga/orione%20historicq/10_burway.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403294/museu-bixiga/orione%20historicq/9_zplpoy.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403293/museu-bixiga/orione%20historicq/7_pztgvo.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403293/museu-bixiga/orione%20historicq/8_jt0hme.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403286/museu-bixiga/orione%20historicq/6_cyhtw8.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403286/museu-bixiga/orione%20historicq/3_m0ujzp.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403286/museu-bixiga/orione%20historicq/5_feyc33.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403286/museu-bixiga/orione%20historicq/4_kva7q8.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403286/museu-bixiga/orione%20historicq/3bis_nh6nz2.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403286/museu-bixiga/orione%20historicq/2_tumukr.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403285/museu-bixiga/orione%20historicq/1_plhxec.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403268/museu-bixiga/orione%20historicq/21_zmofge.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403267/museu-bixiga/orione%20historicq/20_djbo2j.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403268/museu-bixiga/orione%20historicq/22_rtwxjo.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403268/museu-bixiga/orione%20historicq/23_hxbcyg.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403250/museu-bixiga/orione%20historicq/19_skvc37.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403250/museu-bixiga/orione%20historicq/15_iyhz8g.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403250/museu-bixiga/orione%20historicq/11_uirjiz.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403250/museu-bixiga/orione%20historicq/18_secjls.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403249/museu-bixiga/orione%20historicq/07_q8mlnq.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403250/museu-bixiga/orione%20historicq/14_phv9jd.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403250/museu-bixiga/orione%20historicq/17_mwrdnm.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403250/museu-bixiga/orione%20historicq/13_cnrfbs.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403250/museu-bixiga/orione%20historicq/16_ptbpwm.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403250/museu-bixiga/orione%20historicq/12_wi3wg3.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403249/museu-bixiga/orione%20historicq/10_trhezp.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403249/museu-bixiga/orione%20historicq/09_hbz8nm.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403249/museu-bixiga/orione%20historicq/06_skikad.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403249/museu-bixiga/orione%20historicq/08_wy3tbb.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403249/museu-bixiga/orione%20historicq/01_ux6afz.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403249/museu-bixiga/orione%20historicq/02_dnqjni.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403249/museu-bixiga/orione%20historicq/05_zm6nsz.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403249/museu-bixiga/orione%20historicq/04_zy00lz.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626403248/museu-bixiga/orione%20historicq/03_mux1cq.jpg"]
  },
  ORIONE_FOTOS_2: {
    title: "Galeria Don Orione no Brasil",
    type: "photo",
    text: "",
    images: ["https://res.cloudinary.com/dxatyucj2/image/upload/v1626314072/museu-bixiga/orione%20no%20brasil/img815_y8yyhm.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626314071/museu-bixiga/orione%20no%20brasil/img557_brizgw.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626314071/museu-bixiga/orione%20no%20brasil/IMG_0002_v0akcf.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626314071/museu-bixiga/orione%20no%20brasil/orione_com_orfa%CC%83os_am_erica_do_sul_n0dvrh.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626314066/museu-bixiga/orione%20no%20brasil/Don_Orione_con_bambini_Casa_di_Preservacao_Rio_de_Jainero_1921_ht05ml.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626314065/museu-bixiga/orione%20no%20brasil/Don_Orione_Rio_de_Janeiro_1936_jsjqbg.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626314065/museu-bixiga/orione%20no%20brasil/D11_vklgte.bmp", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626314065/museu-bixiga/orione%20no%20brasil/30_noruig.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626314064/museu-bixiga/orione%20no%20brasil/Abp_Arrigo_i1hxpp.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626314065/museu-bixiga/orione%20no%20brasil/33_gb0s5r.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626314796/museu-bixiga/orione%20no%20brasil/Don_Orione_Brasile._c2ridf.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626314804/museu-bixiga/orione%20no%20brasil/Don_Orione_con_bambini_Brasile_febbraio_1936_xtpp3k.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626314814/museu-bixiga/orione%20no%20brasil/Don_Orione_partenza_missionari_per_il_Brasile_13.12.1913_zcrnlr.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626314819/museu-bixiga/orione%20no%20brasil/Don_Orione_Brasile_San_Paolo_Cappella_della_Gioventu%CC%80_del_SS.Sacramento._famiglia_De_Azevedo_9.4.1937_sf1syr.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626314822/museu-bixiga/orione%20no%20brasil/Don_Orione_Brasile_Rio_de_Jainero_preservacao_mons_Gasparri_mons_Leme._31.10.1921_snaqfw.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626314829/museu-bixiga/orione%20no%20brasil/31_uhwwu5.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626314834/museu-bixiga/orione%20no%20brasil/8_kpeygu.jpg"]
  },
  ORIONE_FOTOS_3: {
    title: "Galeria de fotos de relíquias de Don Orione no Brasil",
    type: "photo",
    text: "",
    images: ["https://res.cloudinary.com/dxatyucj2/image/upload/v1626315102/museu-bixiga/reliquias%20orione/relicario_-_conduta_-_7_jekgsq.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315102/museu-bixiga/reliquias%20orione/unnamed_nnfrtf.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315102/museu-bixiga/reliquias%20orione/unnamed_15_-_C_pia_pjddnp.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315100/museu-bixiga/reliquias%20orione/IMG_0088_hhyexc.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315099/museu-bixiga/reliquias%20orione/IMG_0085_vpuutw.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315099/museu-bixiga/reliquias%20orione/IMG_0053_jwsaow.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315098/museu-bixiga/reliquias%20orione/IMG_0065_sc8t3u.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315094/museu-bixiga/reliquias%20orione/foto_claretiano_-_jfdl2m.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315094/museu-bixiga/reliquias%20orione/DSC00704_mtifxt.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315093/museu-bixiga/reliquias%20orione/DSC00645_phit9q.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315092/museu-bixiga/reliquias%20orione/DSC00600_ttyjrn.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315092/museu-bixiga/reliquias%20orione/DSC_5547_pouyob.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315091/museu-bixiga/reliquias%20orione/DSC00598_vmngoy.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315085/museu-bixiga/reliquias%20orione/DSC_5538_ayy76o.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315085/museu-bixiga/reliquias%20orione/DSC_5543_vjgxfo.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315084/museu-bixiga/reliquias%20orione/1656313_10201402785411739_1737523892_n_pxllrn.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315083/museu-bixiga/reliquias%20orione/1003075_10201402780611619_2057936460_n_h8pdbi.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315083/museu-bixiga/reliquias%20orione/3.Rel__quias_SLO_02.03.14_vfqcxb.jpg"]
  },
  ORIONE_FOTOS_4: {
    title: "Galeria de fotos do Encontro Latino Americano de Jovens Orionitas",
    type: "photo",
    text: "",
    images: ["https://res.cloudinary.com/dxatyucj2/image/upload/v1626315688/museu-bixiga/missao%20jovens%20orionitas/DSC04800_gsyzle.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315687/museu-bixiga/missao%20jovens%20orionitas/DSC04586_nd9qlj.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315686/museu-bixiga/missao%20jovens%20orionitas/DSC04585_vg52fj.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315686/museu-bixiga/missao%20jovens%20orionitas/DSC_0001_nwr9mw.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315686/museu-bixiga/missao%20jovens%20orionitas/DSC04584_myi2cw.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315686/museu-bixiga/missao%20jovens%20orionitas/DSC04571_giyuvl.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315685/museu-bixiga/missao%20jovens%20orionitas/DSC04570_ikrlf4.jpg"]
  },
  ORIONE_ICONOLOGIA: {
    title: "Iconologia e Iconografia de Don Orione no Brasil",
    type: "",
    text: "",
    images: []
  },
  ORIONE_ICONOLOGIA_GALERIA: {
    title: "Galeria de imagens em agendas e fotos",
    type: "photo",
    text: "",
    images: ["https://res.cloudinary.com/dxatyucj2/image/upload/v1626315495/museu-bixiga/iconologia%20imagens/EJO_-_ORIONE_-_GRUPO_7_uqqick.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315494/museu-bixiga/iconologia%20imagens/Orione_-_glo%CC%81ria_1_upanyk.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315487/museu-bixiga/iconologia%20imagens/EJO_-_ORIONE_-_GRUPO_5_y02rj7.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315487/museu-bixiga/iconologia%20imagens/EJO_-_ORIONE_-_GRUPO_4_dkasvl.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315486/museu-bixiga/iconologia%20imagens/EJO_-_ORIONE_-_GRUPO_3_ari3cc.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315486/museu-bixiga/iconologia%20imagens/EJO_-_ORIONE_-_GRUPO_2_xf8nxg.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315486/museu-bixiga/iconologia%20imagens/EJO_-_ORIONE_-_GRUPO_1_klws3y.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315485/museu-bixiga/iconologia%20imagens/agenda_2018_-CAPA_-_D_vy679l.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315485/museu-bixiga/iconologia%20imagens/agenda_2018_-contra_capa_D_yt4lyd.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315485/museu-bixiga/iconologia%20imagens/agenda_2018_-_Meses_-_11_-_novembro_D_tiab8e.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315485/museu-bixiga/iconologia%20imagens/agenda_2018_-_Meses_-_12_-_dezembro_D_arpyib.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315484/museu-bixiga/iconologia%20imagens/agenda_2018_-_Meses_-_10_-_OUTUBRO_D_jtithf.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315480/museu-bixiga/iconologia%20imagens/agenda_2018_-_Meses_-_09_-_setembro_D_cbfadz.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315480/museu-bixiga/iconologia%20imagens/agenda_2018_-_Meses_-_08_-_agosto_D_xudl6w.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315480/museu-bixiga/iconologia%20imagens/agenda_2018_-_Meses_-_07_-_julho_-_D_gcz9an.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315479/museu-bixiga/iconologia%20imagens/agenda_2018_-_Meses_-_06_-_junho_D_cnp2cb.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315479/museu-bixiga/iconologia%20imagens/agenda_2018_-_Meses_-_03_-_marc%CC%A7o_D_o8msm6.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315479/museu-bixiga/iconologia%20imagens/agenda_2018_-_Meses_-_04_-_Abril_D_l8qusq.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315479/museu-bixiga/iconologia%20imagens/agenda_2018_-_Meses_-_05_-_maio_D_kpxsyi.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315479/museu-bixiga/iconologia%20imagens/agenda_2018_-_Meses_-_02_-_fevereiro_D_cm4zxy.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315479/museu-bixiga/iconologia%20imagens/agenda_2018_-_Meses_-_01_-_janeiro_D_didp9d.jpg"]
  },
  ORIONE_ICONOLOGIA_CARTAZES: {
    title: "Cartazes de eventos orionitas",
    type: "photo",
    text: "",
    images: ["https://res.cloudinary.com/dxatyucj2/image/upload/v1626315607/museu-bixiga/iconologia%20cartazes/tarcisio_-_cartaz_5_copy_ttzeem.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315605/museu-bixiga/iconologia%20cartazes/tarcisio_-_cartaz_4_copy_pghefp.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315603/museu-bixiga/iconologia%20cartazes/tarcisio_-_cartaz_2-B_copy_oxxqmm.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315602/museu-bixiga/iconologia%20cartazes/Sa%CC%83o_Lui%CC%81s_Orione_-_6_copy_spi4pe.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315601/museu-bixiga/iconologia%20cartazes/Orato%CC%81rio_125_-001_o76p6n.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315601/museu-bixiga/iconologia%20cartazes/PODP_-_selos_1_-_21_MAR_13_co%CC%81pia_b4ysof.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315601/museu-bixiga/iconologia%20cartazes/PODP_-_selos_3_-_MAR_13_co%CC%81pia_jhnx7e.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315600/museu-bixiga/iconologia%20cartazes/cententa%CC%81rio_-_cartaz_5_-_2013_ojmelm.png", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315600/museu-bixiga/iconologia%20cartazes/Missao_Campo_Grande_-_cartaz_agfckv.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315599/museu-bixiga/iconologia%20cartazes/cententa%CC%81rio_-_cartaz_3_-_2013_zelqkd.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315599/museu-bixiga/iconologia%20cartazes/cartaznavegantes_gh7jvi.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315599/museu-bixiga/iconologia%20cartazes/imagesCA2KYE0F_hu3rw1.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626315599/museu-bixiga/iconologia%20cartazes/cententa%CC%81rio_-_cartaz_2_-_2013_cqbff6.jpg"]
  },
  ORIONE_FILMES: {
    title: "Filmes e Vídeos",
    type: "",
    text: "",
    images: []
  },
  ORIONE_FILMES_BOGAZ: {
    title: "Produções de Pe Antônio Bogaz",
    type: "",
    text: "",
    images: []
  },
  ORIONE_FILMES_BOGAZ_1: {
    title: "A vida é como um rio",
    type: "",
    text: "",
    images: []
  },
  ORIONE_FILMES_BOGAZ_2: {
    title: "Universo Orione",
    type: "",
    text: "",
    images: []
  },
  ORIONE_FILMES_BOGAZ_3: {
    title: "Memórias de uma aliança",
    type: "",
    text: "",
    images: []
  },
  ORIONE_FILMES_BOGAZ_4: {
    title: "Perfume de Jasmim",
    type: "",
    text: "",
    images: []
  },
  ORIONE_FILMES_BOGAZ_5: {
    title: "Qualquer coisa de Don Orione",
    type: "",
    text: "",
    images: []
  },
  ORIONE_FILMES_BOGAZ_6: {
    title: "Vocação: tocar na orquestra de Deus",
    type: "",
    text: "",
    images: []
  },
  ORIONE_FILMES_BOGAZ_7: {
    title: "Orione Apóstolo da Caridade",
    type: "",
    text: "",
    images: []
  },
  ORIONE_FILMES_BOGAZ_8: {
    title: "Recordações de um santo",
    type: "",
    text: "",
    images: []
  },
  ORIONE_FILMES_ORIONITAS: {
    title: "Produções do Grupo de Estudos Orionitas",
    type: "",
    text: "",
    images: []
  },
  ORIONE_FILMES_ORIONITAS_1: {
    title: "A grande pescaria",
    type: "",
    text: "",
    images: []
  },
  ORIONE_FILMES_ORIONITAS_2: {
    title: "Caminhando nas terras do pau-brasil",
    type: "",
    text: "",
    images: []
  },
  ORIONE_FILMES_ORIONITAS_3: {
    title: "Se Don Orione vivesse em nossos dias",
    type: "",
    text: "",
    images: []
  },
  ACHIROPITA: {
    title: "Achiropita",
    type: "",
    text: "",
    images: []
  },
  ACHIROPITA_HISTORIA: {
    title: "História",
    type: "text",
    text: "A Paróquia Achiropita tem sua origem ligada aos imigrantes italianos que estabeleceram-se no Bixiga, e que trabalharam para constituir um espaço sagrado para cultuar os santos de sua devoção. Do altar na casa dos fiéis, passando pela capelinha pioneira até a igreja atual, sua evolução perpassa pelos pioneiros na fé, padres, irmãos e religiosas, que se esmeraram na evangelização e na guia da comunidade e os clãs oriundos da Bela Itália, da Bela África, do Belo Nordeste, dos rincões do Sul e de tantos lugares.",
    images: [],
  },  
  ACHIROPITA_HISTORIA_1: {
    title: "Culto à Achiropita: uma longa história",
    type: "text",
    text: "Corria o ano de 580 da era cristã. Um capitão estava navegando no Mar Mediterrâneo, quando foi surpreendido por uma grande tempestade. No meio das labutas e do desespero de todos seus marinheiros e na eminência de morrerem afogados, tal capitão elevou aos braços ao céu e clamou por um milagre.\n- Se eu chegar à costa da península, com toda tripulação, ergueremos com nossos braços e nossas mãos um santuário para a Mãe de Deus. \nRecordamos que poucas décadas antes, a Igreja tinha proclamado o Dogma Theotókos – Mãe de Deus, no Concílio de Éfeso (451). \nEm poucos instantes, a tempestade desapareceu, o céu serenou e as águas se acalmaram.\nNavegaram e aportaram num vilarejo ribamar, Rossano Cálabro. Na região, numa gruta silenciosa e afastada na montanha, morava um monge, nominado Éfrem. Chegou ao mesmo tempo naquela praia abandonada e distante e deparou-se com os marinheiros na praia, famintos e esfarrapados.\nSua expressão ficou registrada na memória dos tempos: 'Não foram os ventos que lhes trouxeram até aqui, mas Maria, a Mãe de Deus'. Então, o referido monge conduziu ao centro do vilarejo os tripulantes salvos da tempestade marítima e lhes apontou o lugar exato da construção do novo santuário, conforme tinha-se revelado em sonho. Neste sonho, Maria lhe aparecera e indicara o lugar exato daquela construção.\nForam longos meses de construção e depois de tanto trabalho deu-se a consagração do novo templo, com uma grande festa. Na ocasião, o tal Capitão tinha sido coroado Imperador daquela porção do Império, com grande festa. Assim, a região foi cristianizada pela graça de um imperador cristão e católico.\nCom seu poder e sua crença, procurou em toda região grandes pintores para retratar a imagem de Nossa Senhora, conforme a descrição do sonho do Monge Éfrem. Entre tantos pintores, um velho ancião, com tanta experiência e tanta fama de grande pintor, iniciou a pintura, sob a vigilância do monge. A pintura tinha que ser perfeita, como na sua visão. \nE, no entanto, algo estranho aconteceu. Melhor, acontecia; todo trabalho de pintura do artista durante o dia, a cada dia, desaparecia durante a noite. Como a cena se repetia, o artista procurou o Imperador Maurício e o Monge Éfrem para narrar o fato. Estes começaram a acompanhar os acontecimentos curiosos e estranhos e constataram que ocorriam estes fatos tão inexplicáveis.\nPara estancar o acontecimento e considerando que se tratava talvez de algum malfeitor que apagasse a obra, como forma de despeito e profanação, reuniram todas as autoridades do vilarejo.\nNão tinha jeito, mesmo sem ninguém entrar no templo depois do anoitecer, a figura desaparecia na calada da noite. E assim, repetidas vezes.\n- Temos que fazer algo, dizia o imperador. Não consigo entender o que está acontecendo.\nMais místico, o monge retrucava com paciência e com jeito:\n- Deve ter algo misterioso, mais que isso, algo milagroso. Deve ter as mãos dos anjos.\nPassaram os dias e estava chegando o dia da bênção da esperada imagem da Mãe de Deus. E a imagem sempre desaparecia. Contrataram guardiões e cuidaram da porta da Igreja. Ninguém poderia entrar, vinte e quatro horas por dia, sete dias por semana. Ninguém podia entrar.\nNum entardecer, surge uma senhora, muito singela, com uma criança nos braços e pediu para rezar no templo. Depois de muita insistência e resistência dos guardiões, compreenderam que a jovem senhora não podia fazer nada de mal no templo. Não tinha jeito de malfeitor e ainda mais, com uma criancinha angelical nos braços.\nEntrou e os guardiões ficaram ansiosos. Ficaram na expectativa e a senhora não saia, conforme prometido. Passavam os minutos e pequenas horas e anoitecia. A mulher não saia nunca.\n- Será que fomos enganados? Ludibriados por uma gentil senhora.\n- Aquele rosto muito angelical... Será que...\nE decidiram entrar, na escuridão do templo e estavam muito assustados. Gritavam por ela sofregamente. Gritavam e nenhuma resposta. Gritavam mais e mais.\nNum instante, diante de seus olhos assustados, uma luz se iluminou, iluminou celestialmente.\nE viram com grande espanto e emoção uma imagem tão linda, tão formosa.\nSó poderia ser a Mãe de Deus. A Mãe de Deus, Nossa Senhora. \n Saíram gritando pelas ruas. Felizes como crianças encantadas.\n - Madona, Madona Achiropita. Madona, Madona Achiropita.\n O povo acorreu ao templo e viram o grande milagre, que se desvelou aos olhos de todo povo, especialmente o grande Imperador Maurício. Ninguém continha o Monge Efrém de tanta alegria, de tanta felicidade. Era a própria imagem celestial da Mãe de Deus, de Nossa Senhora Achiropita. \nEspalhou-se a devoção do grande milagre. Madona Achiropita; Nossa Senhora A-Kirós-Pita. Nossa Senhora A (não) Kirós (mãos humanas) Pita (pintada). Eis a grande devoção, secular, que toca tantos corações de cristãos ao longo dos séculos. Nossa Senhora não pintada por mãos humanas. \nEis a devoção que o povo italiano trouxe para nossa cidade de São Paulo e que se espalhou para tantos lugares. Seu olhar bonito e celestial retrata a ternura da Mãe de Jesus e o jeito de ser das mulheres calabresas.",
    images: [],
  },  
  ACHIROPITA_HISTORIA_2: {
    title: "Significado do ícone Achiropita",
    type: "text",
    text: "A imagem original de Nossa Senhora Achiropita se encontra no grande templo-basílica de Rossano Cálabro e é forte em reverência. Trata-se de uma imagem em afresco, com  traços suaves e firmes, do jeito das mulheres camponeses calabreses. Sua conservação é muito cuidadosa e tratada com esmero e atenção, para não ser destruída pelos séculos longos. \nA imagem que é venerada na Paróquia Nossa Senhora Achiropita, na Bela Vista, em São Paulo, é um fac-símile de uma estátua em ouro e prata que está na Igreja da cidade original. Em nossa igreja paulistana sua imagem é de uma grande beleza artística, com um olhar penetrante e terno. As cores de seu manto representam o azul celestial e a leveza alva dos anjos.  Carregando o menino Jesus em seus braços, manifesta a grandeza de uma mãe, tão cuidadosa e atenta, que olha para seu Filho, sem desviar seu olhar dos fiéis que estão sob seu olhar.\nA figuração da imagem representa as formas estéticas das mulheres da sua região, inclusiva o biótipo mais próximo das etnias árabes.  Trata-se da herança da presença dos povos otomanos e árabes na região, nos séculos anteriores.\nMais interessante ainda é um detalhe que chama muito a atenção dos fiéis: o uso de brincos. Seus brincos são singelos e muito valiosos; não no sentido econômico, mas como relíquia que é tocada pelos fiéis, suplicando proteção e graças divinas.\nTodos que acorrem à Mãe de Deus na Paróquia Nossa Senhora Achiropita, se emocionam com este ícone celestial, expressão artística de uma comunidade de fé, que procura seguir os caminhos de Jesus.",
    images: [],
  },
  ACHIROPITA_HISTORIA_3:{
      title: "Devoção à N.Sra Achiropita no Bixiga",
      type: "text",
      text: "A devoção a Nossa Senhora Achiropita é uma surpresa para muitos católicos e para muitos paulistanos não passa de uma grande festa no Bairro do Bixiga, na grande metrópole de São Paulo. No entanto, é um título muito importante e tradicional dentre todas as ladainhas de nossa devoção mariana. Sua tradição remonta muitos séculos e atravessou a história da Igreja até ser trazida pelas famílias italianas que emigraram para o Brasil na segunda metade do século XIX. Os italianos que trouxeram a devoção se instalaram na periferia da cidade de São Paulo, sobretudo na Chácara de um senhor cognominado 'Seu Bixiga'; talvez seu apelido, talvez simplesmente por marcas no corpo, devido a uma epidemia de varíola que também o acometera, naqueles tempos. São histórias contadas, não tanto comprovadas ou registradas documentalmente. \nAs famílias trouxeram esta tradição e quando se instalaram naquela região, iniciou-se a expandir a devoção, que foi ganhando novos espaços na religiosidade popular da comunidade católica da cidade. Entre outras devoções que foram trazidas, a mais importante e que mais se firmou foi a devoção a Nossa Senhora Achiropita. \nRegistramos, no entanto, as devoções a São José, ao qual foi dedicada uma pequena capela, próxima à atual sede paroquial. Esta devoção foi o primeiro titulo da comunidade, sendo substituída mais tarde pela titulação atual. São José ainda é muito venerado na comunidade e na sua festa distribui-se um quitute italiano chamado 'zeppoli', que é muito apreciada e recorda as tradições longínquas das cidades da região da Calábria, na Itália.  \nVieram ainda outras tradições, seja a devoção a San Fillipo D´Agira, que é celebrado pela comunidade de sua cidade natal, Laurito, sul da Itália. Ainda existem muitos descendentes destas famílias e que se encontram para confraternizar com comidas e danças folclóricas, além da celebração eucarística, como cantos e textos em língua autóctone. Ainda foi trazida a devoção a Nossa Senhora da Ripalta, que foi trazida pelos italianos emigrantes da região de Cerignola, também no sul da península itálica. Ela tem um altar especial na Igreja Achiropita. \nMais tarde, para registrar a totalidade das devoções, os padres orionitas, filhos da Divina Providência, trouxeram a devoção a São Luís Orione, que alargou o campo das devoções e marca fortemente a comunidade paroquial com as atividades caritativas e sociais. Neste campo de caridade e promoção social são atendidas mais de 1000 pessoas diariamente, sejam crianças, jovens, adultos, idosos, tóxico-dependentes e moradores de rua. Os padres de São Luís Orione animam, desde a instituição paroquial, na década de 30, do século XX, as atividades pastorais e sociais, tornando-se uma referência para a ação concreta da mensagem evangélica.",
      images: [],
    }, 
    ACHIROPITA_HISTORIA_4: {
      title: "Imagem da Madonna aporta no Brasil: memória oral",
      type: "text",
      text: "São dois testemunhos diferentes, que rememoram a chegada da imagem que é venerada na Igreja Achiropita. Registramos os dois testemunhos. Primeiramente o testemunho do casal Armando Mellita e Yolanda de Almeida Mellita.\n'O Sr. Isidoro Melito contou para seu filho Armando e sua Nora como foi a vinda da imagem de Nossa Senhora Achiropita ao Brasil.  Ele já estava no Brasil alguns anos antes  e os calabreses queriam ter aqui a imagem da madona Achiropita. Mandaram fazer uma réplica em 1904. Quando ficou pronta o Sr. Benedito Biaggio Mellita e Angelina Mellita (irmão do Sr. Isidoro) colocaram a imagem numa caixa feita de caixotes de cebola toda envolvida de palhas porque eles tinham medo que quebrasse. Embarcaram no navio e ficaram junto com a imagem no porão até  desembarcarem no porto de Santos. Depois foi trazida até o Bixiga. Quando aqui chegou os calabreses se reuniram para receber e desencaixotar a imagem, e eles foram tomados de profunda emoção ao ver que esta não sofreu nenhum arranhão, estava perfeita e linda. Os calabreses trouxeram esta imagem e nos ensinaram esta devoção que nós cultuamos até os dias de hoje.' \n\nO segundo testemunho é da Sra. Anna Arnone, que assim descreve: \n'O vovô Antônio Sapia contava que os calabreses sentiam muita falta de ter aqui Nossa Senhora Achiropita, e pediram aos patrícios que mandassem uma réplica da pintura. Depois de algum tempo aqui chegou uma estampa num rolo com um laço de fita.\nSua tia Achiropita Sapia era encarregada de todos os dias abrir a pequena capela, (que nada mais era que um quarto), com uma chave muito grande que era guardada em sua casa, e acender as lamparinas de óleo. Nesta capela tinha um quadro de São José no centro, depois foram colocados os quadros de Nossa Senhora Achiropita com a estampa recebida da Calábria, e o de Nossa Senhora da Ripalta que veio de Cirignola.\nSeu Antônio Sapia ia às feiras para arrecadar donativos, e entregava ao Sr. Luiz Tenalia que era empreiteiro, e este tocava a construção da igreja. Quando o dinheiro terminava as obras paravam, até que conseguissem mais doações para continuar'.\n\nSão histórias distintas, difíceis de ser definida como de fatos ocorreram os acontecimentos, dada a distância do tempo e as pessoas envolvidas estão no paraíso. Assim, registramos os fatos para que possam ser preservadas suas memórias. ",
      images: [],
    }, 
    ACHIROPITA_HISTORIA_5: {
      title: "Da capelinha à igreja",
      type: "text",
      text: "A devoção à Mãe Achiropita, cuja festa é celebrada no dia 15 de agosto, surgiu em Rossano Cálabro e data do século XII. Veio com os italianos que deixaram seu país em busca de melhores condições e se estabeleceram em São Paulo, mais precisamente no bairro do Bixiga. A imagem da N. Sra. Achiropita foi trazida pelos imigrantes calabreses nos primeiros anos deste século.\nFicava na casa de José Falcone, onde várias pessoas se reuniam para fazer novenas à Santa, e saía somente durante os festejos de agosto. Era colocada em um altar de madeira erguido na rua Treze de Maio, no qual as missas dos dias 13, 14 e 15 costumavam ser celebradas, e depois voltava ao seu lugar de origem. Essas primeiras manifestações de rua em louvor à Madonna Achiropita começaram em 1910, quando a primeira comissão de festas foi formada. Os calabreses haviam decidido comprar um terreno para construir uma capela para Nossa Senhora e precisavam angariar os recursos necessários. Deu-se início às quermesses de rua e à procissão de N. Sra. Achiropita. A imagem da santa percorria as ruas com fitas nas mãos e os fiéis colocavam sua contribuição, pregando as cédulas de dinheiro com alfinetes.\nEm 1918, com o dinheiro arrecadado nas comemorações de agosto foi erguida uma capelinha de construção simples, sem qualquer imagem, que mais parecia um quarto grande. Quase não havia lugar para sentar; por isso, quando se realizavam novenas, geralmente as mulheres levavam seus banquinhos de dois pés. Posteriormente, os festeiros compraram uma casa ao lado da pequena capela e puderam ampliar o espaço. Faltava à construção grande parte do telhado, somente a nave central estava coberta. Não havia vidros na maioria das janelas. Durante alguns anos, a comissão encarregada das obras, dividida, não deu continuidade aos trabalhos.\nGraças à doação de 500 réis feita por uma senhora do bairro e um laudo precatório que rendeu mais 500 réis, reiniciaram-se as obras e o telhado foi concluído. A imagem de N. Sra. Achiropita, que antes ficava nas casas dos fiéis, foi então instalada no pequeno altar e missas começaram a ser celebradas na igrejinha. Com o decreto de 4 de março de 1926 e elevada à condição de paróquia, a igreja obteve o direito de ter sacrário, batistério, pia batismal, livro do tombo e livro de registros de batizados, casamentos e óbitos. O lucro resultante dos festejos daquele ano serviu para saldar as dívidas anteriores. Um grupo de calabreses fez a doação do altar-mór de mármore. Dois anos mais tarde, comprou-se a casa atrás da igreja, que também seria usada nas funções paroquiais. Em junho de 29, foi colocada a pedra fundamental da fachada da igreja e o sino. Aos poucos foram sendo doadas diversas imagens de santos.\nA igreja foi perdendo os ares de capela e ganhando altares e novas construções. São José era oficialmente o padroeiro, mas o altar principal continuava a ser ocupado por N. Sra. Achiropita. A Santa da devoção dos cerignolanos, N. Sra. da Ripalta, ganhou o altar lateral. Importantes movimentos começaram a se formar na paróquia a partir de 1931 e a revigorar a espiritualidade. Foram fundados a Congregação Mariana de rapazes e, mais tarde, a de moças, a Pia União das Filhas de Maria e a Obras das Vocações Sacerdotais, que vieram juntar-se ao Apostolado da Oração. A Sociedade de São Vicente de Paulo, que existia desde 1916 no bairro, teve inaugurada sua nova sede do Conselho Particular na paróquia no final de 1948. Dom Orione, fundador da congregação responsável pela paróquia, esteve no Bixiga pela segunda vez em 1937 e impulsionou o trabalho desenvolvido pelos padres orionitas desde o começo da década de 20. A comunidade estava ganhando forças. Procissões, romarias e retiros eram realizados freqüentemente e mostravam que a fé do povo continuava a crescer.",
      images: ["https://res.cloudinary.com/dxatyucj2/image/upload/v1624679676/museu-bixiga/Screen_Shot_2021-06-26_at_00.54.28_v7f5ms.png"],
    }, 
    ACHIROPITA_PAROQUIA: {
      title: "A Paróquia",
      type: "text",
      text: "Nossa comunidade que foi frágil em suas origens e que hoje é fortalecida na fé pela tradição, pelos nossos santos de comunidade e pelas histórias de fé e dedicação aos pobres, nunca pode se esquecer daqueles que foram erigindo nossa comunidade. Foram pedras vivas, gente corajosa e sem preguiça, dispostas a dedicarem longas horas e finais de semana para a evangelização. Antes de tudo, fiéis assinalados por uma fé verdadeira e sem limites. Gente com capacidade de doar e ofertar seus bens, para que Maria fosse exaltada com mais alegria e Jesus Cristo fosse acreditado com entusiasmo.",
      images: [],
    }, 
    ACHIROPITA_PAROQUIA_HINO: {
      title: "Hino da Comunidade Achiropita",
      type: "text",
      text: "Apresentamos os versos de Luiz Antonio Bordini, que compôs em ritmo de tarantela, estilo típico italiano,  que resume magistralmente a história, a devoção e a espiritualidade de Nossa Senhora, não pintada por mãos humanas.\n\nNossa história vamos todos relembrar\nFoi um passado de coragem e de amor\nDo sul da Itália pelo mar a navegar\nO imigrante italiano aqui chegou\nE no Brasil de tantas raças, tantas cores\nO arco íris da aliança Deus formou\nNesta São Paulo da garoa, no Bixiga\nA caridade Orione ensinou.\n\nAve Maria, Ave Maria e avante\nNossa Senhora Achiropita está radiante\nAve Maria, Ave Maria e avante\nTantas  estrelas todas de diamante.\n\nAve Maria, Ave Maria e avante\nCom a Madona da Ripalta e São José\nCaminhando sempre em frente\nSob a luz de nossa fé\nFazendo o bem, sempre o bem,\nO mal nunca a ninguém.\n\nE no princípio era só a capelinha\nE a quermesse que o povo alegrava\nA Pia União, os Vicentinos e Marianos\nAchiropita passo a passo se firmava\nE a Divina Providência vendo o esforço\nLá do alto a nossa gente abençoou\nA sementinha com carinho foi tratada.\nA mão de Deus as nossas vidas transformou\n\nAve Maria, Ave Maria e avante...\n\nAmar ao próximo sempre foi o nosso lema.\nAjudando com alegria nosso irmão\nVendo Jesus em cada rosto em cada dia\nSeguimos sempre caminhando com Maria Nossa Senhora Mãe\nQuerida abençoada.\nEste é o presente que hoje queremos te dar.\nAmar Jesus com muita fé por toda vida.\nE aos mais carentes sempre, sempre ajudar.\n",
      images: [],
    }, 
    ACHIROPITA_PAROQUIA_PASTORAL: {
      title: "Pastoral",
      type: "",
      text: "",
      images: []
    },
    ACHIROPITA_PAROQUIA_PASTORAL_1: {
      title: "Horário de Missas e terços",
      type: "text",
      text: "Segunda a sexta-feira às 19:30\nSábados às 18:00\nDomingos às 10:00 e às 19:00\n\nTodos os dias acontece reza do terço antes das missas, de 2ª a 6ª feiras às 19:00 e aos sábados às 17:30.",
      images: []
    },
    ACHIROPITA_PAROQUIA_PASTORAL_2: {
      title: "Sementeira Achiropita Orione",
      type: "photo",
      text: "",
      images: ["https://res.cloudinary.com/dxatyucj2/image/upload/v1621007656/museu-bixiga/achiropita_-_sementeira_-_29_jan_19_-_B_kk78kr.png", "https://res.cloudinary.com/dxatyucj2/image/upload/v1621007656/museu-bixiga/achiropita_-_sementeira_-_29_jan_19_-_C_d9cssy.png"]
    },
    ACHIROPITA_PAROQUIA_PASTORAL_3: {
      title: "Pastoral da Pessoa Idosa",
      type: "",
      text: "",
      images: []
    },
    ACHIROPITA_PAROQUIA_PASTORAL_4: {
      title: "Pastoral Afro",
      type: "",
      text: "",
      images: []
    },
    ACHIROPITA_PAROQUIA_PASTORAL_5: {
      title: "Pastoral do Batismo",
      type: "",
      text: "",
      images: []
    },
    ACHIROPITA_PAROQUIA_PASTORAL_6: {
      title: "Pastoral da Animação Bíblico Catequética",
      type: "",
      text: "",
      images: []
    },
    ACHIROPITA_PAROQUIA_PASTORAL_7: {
      title: "Pastoral da Criança",
      type: "",
      text: "",
      images: []
    },
    ACHIROPITA_PAROQUIA_PASTORAL_8: {
      title: "Pastoral da Comunicação",
      type: "",
      text: "",
      images: []
    },
    ACHIROPITA_PAROQUIA_PASTORAL_9: {
      title: "Pastoral do Dizimo",
      type: "",
      text: "",
      images: []
    },
    ACHIROPITA_PAROQUIA_PASTORAL_10: {
      title: "Pastoral da Juventude",
      type: "",
      text: "",
      images: []
    },
    ACHIROPITA_PAROQUIA_PASTORAL_11: {
      title: "Pastoral da Saúde",
      type: "",
      text: "",
      images: []
    },
    ACHIROPITA_PAROQUIA_PASTORAL_12: {
      title: "Apostolado da Oração",
      type: "",
      text: "",
      images: []
    },
    ACHIROPITA_FESTA: {
      title: "Festa da Achiropita",
      type: "text",
      text: "A Festa da Achiropita faz parte da tradição comunitária de mobilizar-se entorno de um objetivo a ser concretizado; iniciou como uma pequena quermesse para formar a igreja, e hoje é uma grande festa que gera renda para as muitas ações e projetos da ativa Paróquia. Fazem parte da festa barracas de comidas típicas, brincadeiras e jogos, apresentações artísticas, novenas e procissões pelas ruas entorno da igreja. ",
      images: [],
    }, 
    ACHIROPITA_FESTA_APRESENTACAO: {
      title: "Apresentação da Festa",
      type: "text",
      text: "Sobre a grande festa d´Achiropita\n\nTodas as pessoas da comunidade gostam de afirmar que nossa comunidade é muito festiva. Como uma paróquia que une DNA de italianos, caipiras, nordestinos e negros não seria festiva. São muitas as nossas festas. Festas juninas, festas das mães, dos pais, festas de aniversário, festa dos padroeiros e mais e mais.\nDocumentamos as festas, pois elas são muito importantes para nossas comunidades. As  festas são promoções para dinamizar nossos trabalhos, restaurar a igreja, sustentar os trabalhos sociais e, sobretudo, para iniciar novas atividades (creche, espaço social e espaço cultural). As festas são atividades para unir a comunidade, fortalecer os laços, completar s forças e, assim sentir sempre mais a família d’Achiropita.\nAs festas são momentos de crescimento no amor de Deus e todos se sentem parte da família, pois a energia não é um delírio, mas uma mística que nos filia a Deus, sob o manto de Maria.\nDescrevamos as  festas. Festas coloridas e festas em preto e branco, pois nas festas, em todos os tempos, a comunidade se fortaleceu e se sentiu sempre mais família, família cristã, na diversidade cultural, étnica e social.\nÉ uma grande festa, talvez não exista uma festa religiosa mais grandiosa  que a Festa Nossa Senhora Achiropita. A palavra fenômeno tem sido banalizada, mas com certeza esta palavra pode designar nossa festa. A quantidade impressionante de fiéis devotos trabalhando, as equipes, as barracas, a quantidade enorme de todos os quitutes da gastronomia italiana faz de nossa festa a “grande festa”. Podemos mesmo dizer que esta é “a festa” de São Paulo.\nÉ como uma grande engrenagem. À frente, os padres, orientadores espirituais da festa. Com eles, os cinco casais, nos setores da festa. Depois os chamados apoios, que subdividem estes setores, depois os responsáveis de barracas e núcleos e os voluntários. A camiseta com seu símbolo, os bonés e os crachás é a efígie de um exército de Maria que, pelas comilanças, pelas simpatias, pela oração encantam os milhares de convidados.",
      images: [],
    }, 
    ACHIROPITA_FESTA_HISTORICO: {
      title: "Breve Histórico",
      type: "text",
      text: "*Fonte: https://avidanocentro.com.br/o_que_fazer/festa-da-achiropita-comida-italiana-e-muita-diversao-no-centro-do-bixiga/ 05/08/2017\n\nA origem da Festa da N. Sra. Achiropita remonta ao início do século 20, quando os primeiros imigrantes italianos chegaram ao Bixiga trazendo uma imagem da santa. Ela começou a ser venerada pelos fiéis em 1908 na casa de João Falcone, no número 100 da Rua 13 de Maio. Foi erguido um altar de madeira na rua que na época era de terra batida, e nos dias 13, 14 e 15 de agosto eram celebradas missas e realizadas festas em homenagem à santa, com o objetivo de comprar um terreno para construir uma capela.\nCom o passar dos anos, a capela acabou ficando pequena para abrigar toda a comunidade, e era preciso construir uma igreja maior. Naquela época haviam barracas com sorteios das prendas arrecadadas, leilões sobre carroças, um pau de sebo e a animada banda dos Bersaglieri, vinda da Itália. Havia também uma procissão levando a imagem de N. Sra Achiropita e N. Sra da Ripalta. Sacadas eram enfeitadas com colchas e toalhas, e famílias faziam doações em dinheiro para ajudar na construção da igreja.\nDurante a segunda guerra a quermesse foi suspensa devido a perseguição dos italianos pelo governo de Getúlio Vargas, mas a parte religiosa continuou com missa, novena e procissão. Na década de 50 as festas voltaram e foi feita a primeira barraca da comida: o sanduíche de pernil feito por senhoras da comunidade. Nesta época, as ruas eram enfeitadas com cordões de lâmpadas coloridas.\n\nA FAMOSA FOGAZZA\n\nA partir de 1975 as famílias traziam pratos doces e salgados para vender na festa, que era realizada no pátio atrás da igreja. Em 1979 a festa foi definitivamente para a rua e em 1980 firmou-se com a devida autorização da prefeitura. Neste ano existiam treze barracas e cerca de 200 voluntários. Neste mesmo ano a grande novidade foi a barraca de fogazza que começou a ser feita apenas com 2kg de farinha como experiência.\nA fogazza é uma das grandes atrações da festa no Bixiga.\n\nEm 2003 já eram nove toneladas de farinha. Outra inovação na década de 80 foi a Cantina di Napoli, montada no terreno ao lado da igreja. Mesões foram instalados e um palco feito pela Paulistur para os cantores das cantinas do bairro animar a festa.\nEm 1983 eram 22 barracas com 350 voluntários. Neste ano foi lançada a pedra fundamental das obras sociais. Em 1985 a cantina passa a ser montada no prédio das obras sociais e um palco definitivo foi feito com um conjunto tocando músicas típicas italianas.\nForam colocadas mesas com lugares numerados para cerca de 850 pessoas. Surgia a Cantina Madona Achiropita. Outro costume passou a ser o provolone de dois metros e cerca de 100 quilos, um dos símbolos da festa.\nNa década de 90 a festa teve um grande avanço em relação a patrocinadores, colaboradores e benfeitores. Atualmente visitam a festa mais de 200 mil pessoas vindas de São. Paulo e de todo o Brasil. São 30 barracas e mais de mil voluntários, que trabalham para toda a renda da festa seja revertida para as obras assistenciais.",
      images: [],
    }, 
    ACHIROPITA_FESTA_PRESENCIAL: {
      title: "Festa Presencial e Delivery",
      type: "",
      text: "",
      images: []
    },
    ACHIROPITA_FESTA_MATERIAL: {
      title: "Material Promocional",
      type: "",
      text: "",
      images: []
    },
    ACHIROPITA_FESTA_MATERIAL_1: {
      title: "Clipping",
      type: "",
      text: "",
      images: []
    },
    ACHIROPITA_FESTA_MATERIAL_2: {
      title: "Publicações",
      type: "photo",
      text: "",
      images: ["https://res.cloudinary.com/dxatyucj2/image/upload/v1626402008/museu-bixiga/festa%20achiropita/Revista_201716_potgkc.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626402007/museu-bixiga/festa%20achiropita/Revista_201715_ylgcpc.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626402007/museu-bixiga/festa%20achiropita/Revista_201714_hqjsgl.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626402007/museu-bixiga/festa%20achiropita/Revista_201713_ehakmp.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626402006/museu-bixiga/festa%20achiropita/Revista_201712_p1iqhz.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626402000/museu-bixiga/festa%20achiropita/Revista_201711_uwwuzr.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626401997/museu-bixiga/festa%20achiropita/Revista_20178_r3hdyo.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626401998/museu-bixiga/festa%20achiropita/Revista_201710_ayera3.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626401998/museu-bixiga/festa%20achiropita/Revista_20179_brmynu.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626401996/museu-bixiga/festa%20achiropita/Revista_20176_ckf1nu.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626401995/museu-bixiga/festa%20achiropita/Revista_20174_q7kdmp.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626401996/museu-bixiga/festa%20achiropita/Revista_20177_ls5hju.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626401995/museu-bixiga/festa%20achiropita/Revista_20173_xpsebg.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626401995/museu-bixiga/festa%20achiropita/Revista_20175_cdrqsn.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626401994/museu-bixiga/festa%20achiropita/Revista_20172_mnf0on.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626401994/museu-bixiga/festa%20achiropita/Revista_2017_ehrocp.jpg"]
    },
    ACHIROPITA_FESTA_MATERIAL_3: {
      title: "Cartazes",
      type: "photo",
      text: "",
      images: ["https://res.cloudinary.com/dxatyucj2/image/upload/v1626402306/museu-bixiga/achiropita/Capa_Programac%CC%A7a%CC%83o_2019_tanqp0.png"]
    },
    ACHIROPITA_FESTA_MATERIAL_4: {
      title: "Logomarcas",
      type: "photo",
      text: "",
      images: ["https://res.cloudinary.com/dxatyucj2/image/upload/v1626402409/museu-bixiga/achiropita/logo_achiropita_-_BASE_-_1_ppd04r.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626402408/museu-bixiga/achiropita/24311-90-edicao-da-festa-de-nossa-senhora-da-achiropita_c5kdov.jpg"]
    },
    ACHIROPITA_FESTA_MATERIAL_5: {
      title: "Vídeos",
      type: "",
      text: "",
      images: []
    },
    ACHIROPITA_PROJETOS: {
      title: "Projetos",
      type: "",
      text: "",
      images: []
    },
    ACHIROPITA_PROJETOS_1: {
      title: "Creche Mãe Achiropita",
      type: "text",
      text: "O Centro de Educação Infantil Mãe Achiropita acolhe a necessidade dos pais que precisam de um lugar para deixar seus bebês enquanto trabalham e buscam sustento à família. Atende diariamente 194 crianças, de 01 à 04 anos de idade, das 07h às 17h. Na Creche Mãe Achiropita as crianças encontram um lugar seguro e acolhedor, recebem cinco refeições diárias, hábitos saudáveis de higiene e saúde, linguagem oral e escrita, noções de matemática, conhecimentos sobre natureza e sociedade, iniciação musical, artes visuais, festas comemorativas, passeios temáticos, contos infantis, desenvolvimento da espiritualidade, e o brincar , constante em nosso trabalho, que é fundamental para o desenvolvimento global da criança.\nA cada dois meses a coordenação se reúne às famílias para reunião de pais e acompanhamento do desenvolvimento da criança. A família possui disponível o grupo terapêutico com psicólogo, se necessário.\nTemos a alegria de cuidar da saúde das crianças com a parceria do Hospital Menino Jesus, Ambulatório de Pediatria Social do Hospital Sírio Libanês e Posto de Saúde Nossa Senhora do Brasil, que possibilitam o atendimento aos pequeninos.\n\n“No sorriso de cada criança, encontramos a confirmação do amor de Deus por nós”\n\nENDEREÇO\nRua Dr. Luiz Barreto, 214 - CEP: 01328-020\nE-mail: contato@achiropita.org.br",
      images: ["https://res.cloudinary.com/dxatyucj2/image/upload/v1626316562/museu-bixiga/creche/FormatFactoryIMG-20190515-WA0049_cyg4tt.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626316561/museu-bixiga/creche/FormatFactoryIMG-20190515-WA0050_qc6af5.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626316561/museu-bixiga/creche/FormatFactoryIMG-20190515-WA0051_vht65x.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626316561/museu-bixiga/creche/FormatFactoryIMG-20190515-WA0047_fuftfs.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626316561/museu-bixiga/creche/FormatFactoryIMG-20190226-WA0042_rcssi7.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626316561/museu-bixiga/creche/FormatFactoryIMG-20190515-WA0048_rsnosj.jpg"]
    },
    ACHIROPITA_PROJETOS_2: {
      title: "Núcleo de convivência para Idosos",
      type: "text",
      text: "Com ofertas que propiciem a convivência objetivando um envelhecimento saudável e ativo, o Núcleo de Convivência para idosos Dom Orione, sob a orientação do Plano Municipal de Assistência Social - parceria com a Prefeitura de São Paulo - atende cerca de 180 idosos mensais em situação de vulnerabilidade social, física e financeira.\nAtravés de atividades que favoreçam a inclusão, a proteção social, o fortalecimento dos vínculos pessoais e familiares, a autonomia, o respeito por si mesmo, todas as tardes, idosos se reúnem para realizar:\n-atividades sócio-educativas: Biodança, Musicoterapia, Envelhecimento e Cidadania, Lazer e Leitura;\n-atividades Corporais: Ginástica, Dança de Salão e Ioga;\n-atividades recreativas: tarde de convivência, bailes temáticos, passeios, Projeto Co-Gerações; cinema, participação na Festa de Nossa Senhora Achiropita, participação na Rede de Proteção e Defesa da Pessoa Idosa – RPDI\n-atividades artesanais; e ainda:\n- Acolhida: escuta individual e de grupo;\n- Atendimento jurídico, Psicológico e Social e Espiritualidade.\n\nENDEREÇO\nRua Treze de Maio, 430 - CEP: 01327-000\nE-mail: nci@achiropita.org.br\nTel.: (11) 2667-1303",
      images: ["https://res.cloudinary.com/dxatyucj2/image/upload/v1626316395/museu-bixiga/projeto%20idosos/IMG-20190317-WA0028_ipj15x.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626316394/museu-bixiga/projeto%20idosos/FormatFactoryIMG-20190515-WA0008_xghduv.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626316394/museu-bixiga/projeto%20idosos/IMG-20190317-WA0027_uhhc1h.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626316394/museu-bixiga/projeto%20idosos/FormatFactoryIMG-20190317-WA0033_xwrzms.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626316394/museu-bixiga/projeto%20idosos/FormatFactoryIMG-20190317-WA0032_jtzrte.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626316389/museu-bixiga/projeto%20idosos/FormatFactoryIMG-20190629-WA0006_ztoqy3.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626316383/museu-bixiga/projeto%20idosos/FormatFactoryIMG-20190629-WA0005_i1hxi8.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626316383/museu-bixiga/projeto%20idosos/FormatFactoryIMG-20190629-WA0003_cntmp9.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626316383/museu-bixiga/projeto%20idosos/FormatFactoryIMG-20190629-WA0002_tlblsk.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626316383/museu-bixiga/projeto%20idosos/FormatFactoryIMG-20190629-WA0001_qejoig.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626316382/museu-bixiga/projeto%20idosos/FormatFactoryIMG-20190629-WA0000_1_osm8iu.jpg"]
    },
    ACHIROPITA_PROJETOS_3: {
      title: "C.E.D.O. – Centro Educacional Don Orione",
      type: "text",
      text: "O Centro Educacional Dom Orione - CEDO, núcleo das Obras Sociais Nossa Senhora Achiropita, atende a 360 crianças e adolescentes no contra turno escolar, com idade entre 6 e 18 anos. Essas crianças vêm de famílias de baixa renda e necessitam de um respaldo enquanto os pais trabalham, pois durante o dia ficariam sozinhas em casa ou soltas nas ruas em total vulnerabilidade.\nNosso projeto é essencialmente preventivo, e desenvolve várias atividades que proporcionam um crescimento, pessoal, social, cultural, espiritual e profissional, encaminhando e incluindo adolescentes a partir de 15 anos de idade no mercado de trabalho, com o programa Jovem Aprendiz.\nNo CEDO os jovens têm a oportunidade de obter conhecimento e prática com instrumentos de orquestra, coral, iniciação e teoria musical; esportes em geral; orientação nas atividades escolares; literatura; raciocínio lógico; artes e artesanato, entre outras atividades. Recebem também 2 refeições por período.\nUma das principais marcas do projeto CEDO é o trabalho de reflexão em filosofia e espiritualidade, realizado diariamente, buscando fortalecer a ligação de todos os educadores e alunos com os valores cristãos. Promover uma cidadania responsável com uma educação reflexiva, desenvolvendo a boa auto-estima, auto-conhecimento e autonomia do pensar, podendo através do senso crítico, antecipar e escolher sempre o que for melhor para si.\nSobre a famosa frase de São Luís Orione, queremos que estes jovens sejam o sol do amanhã e que este sol venha a iluminar a vida de tantos outros.\n\nENDEREÇO\nRua Dr. Luiz Barreto, 315 - CEP: 01328-020\nE-mail: contato@achiropita.org.br",
      images: []
    },
    ACHIROPITA_PROJETOS_4: {
      title: "Casa Rainha da Paz",
      type: "text",
      text: "Criada no início 2013 a Casa Rainha da Paz é um espaço que abriga e auxilia homens livres da situação de dependência química, por vontade própria e buscam apoio para um retorno digno às suas famílias e sociedade. Situada em Campos do Jordão, a casa é parte das Obras Sociais Nossa Senhora Achiropita, do bairro do Bexiga, em São Paulo.\nO projeto abriga em média 30 pessoas em um complexo de 12 casas, além de área social, capela, refeitório, espaço de artesanato, horta comunitária e muito verde.\nDiante de tantos desafios, as drogas vêm fazendo parte da dura realidade, não só de nossa cidade, mas também de todo o país. Assim, nossa casa acolhe ex-dependentes químicos desejosos de uma nova oportunidade. Nosso objetivo é integrá-los junto aos seus familiares em um novo contexto social, educacional e familiar, visando sua reintegração através de acompanhamento e aconselhamento, prática de atividades de lazer e esporte, participação em oficinas com diversos temas, reflexão e espiritualidade. A adesão ao acolhimento se dá de forma voluntária, pois a conscientização dele é parte fundamental em sua recuperação.\nO projeto nasce e ganha forma graças à generosidade e trabalho de muitos benfeitores e amigos. Uma verdadeira corrente de esperança e fé. Um presente que Deus nos confia.\nBuscamos parceiros que compartilhem deste nosso sonho. Entre em contato conosco e saiba como ajudar.",
      images: ["https://res.cloudinary.com/dxatyucj2/image/upload/v1626316495/museu-bixiga/rainha%20da%20paz/Screen_Shot_2021-07-14_at_23.34.28_qqnmq5.png", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626316430/museu-bixiga/rainha%20da%20paz/IMG-20190512-WA0059_rxyzvj.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626316430/museu-bixiga/rainha%20da%20paz/IMG-20190512-WA0061_dskpdn.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626316429/museu-bixiga/rainha%20da%20paz/IMG-20190512-WA0058_jgxuz4.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626316429/museu-bixiga/rainha%20da%20paz/IMG-20190512-WA0054_o74apx.jpg"]
    },
    ACHIROPITA_PROJETOS_5: {
      title: "Casa Don Orione",
      type: "",
      text: "",
      images: []
    },
    ACHIROPITA_PROJETOS_6: {
      title: "Centro Jurídico",
      type: "",
      text: "",
      images: []
    },
    ACHIROPITA_PROJETOS_7: {
      title: "MOVA – Movimento de Alfabetização para adultos",
      type: "",
      text: "",
      images: []
    },
    ACHIROPITA_LIVROS: {
      title: "Livros & publicações",
      type: "",
      text: "",
      images: []
    },
    ACHIROPITA_LIVROS_1: {
      title: "Nossa Sra Achiropita – Novena",
      type: "pdf",
      text: PDFS.ACHIROPITA_LIVROS_1,
      images: []
    },
    ACHIROPITA_LIVROS_2: {
      title: "Maria Mãe de Deus, beleza infinita",
      type: "",
      text: "",
      images: []
    },
    ACHIROPITA_LIVROS_3: {
      title: "Livreto Maria - poemas",
      type: "",
      text: "",
      images: []
    },
    ACHIROPITA_LIVROS_4: {
      title: "Jesus Cristo, Filho de Deus, beleza infinita",
      type: "pdf",
      text: PDFS.ACHIROPITA_LIVROS_4,
      images: []
    },
    ACHIROPITA_LIVROS_5: {
      title: "Clipping",
      type: "photo",
      text: "",
      images: ["https://res.cloudinary.com/dxatyucj2/image/upload/v1626400872/museu-bixiga/achiropita/Revista_Achiro_OUT_2019_-_contra_capa_-_massarioli_-_B_d6nsix.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626400872/museu-bixiga/achiropita/Revista_Achiro_OUT_2019_-_contra_capa_-_massarioli_-_C_ztobev.jpg"]
    },
    ACHIROPITA_FOTOS: {
      title: "Fotos",
      type: "",
      text: "",
      images: []
    },
    ACHIROPITA_FOTOS_1: {
      title: "Celebrações 2019",
      type: "",
      text: "",
      images: []
    },
    ACHIROPITA_FOTOS_2: {
      title: "Coroinhas 2019",
      type: "photo",
      text: "",
      images: ["https://res.cloudinary.com/dxatyucj2/image/upload/v1626400426/museu-bixiga/coroinhas/IMG-20190529-WA0028_ruficu.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626400426/museu-bixiga/coroinhas/IMG-20190529-WA0026_xcprs2.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626400426/museu-bixiga/coroinhas/IMG-20190529-WA0013_maifan.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626400426/museu-bixiga/coroinhas/IMG-20190529-WA0025_lccw5s.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626400426/museu-bixiga/coroinhas/IMG-20190529-WA0027_isqzhh.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626400426/museu-bixiga/coroinhas/IMG-20190529-WA0023_tmogr6.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626400426/museu-bixiga/coroinhas/IMG-20190529-WA0010_rammx0.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626400426/museu-bixiga/coroinhas/IMG-20190529-WA0012_ufz4ma.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626400426/museu-bixiga/coroinhas/IMG-20190529-WA0015_czf3mb.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626400425/museu-bixiga/coroinhas/IMG-20190529-WA0009_c1qnxb.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626400426/museu-bixiga/coroinhas/IMG-20190529-WA0014_c54py5.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626400426/museu-bixiga/coroinhas/IMG-20190529-WA0029_oxun2z.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626400426/museu-bixiga/coroinhas/IMG-20190529-WA0024_ahhjvo.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626400425/museu-bixiga/coroinhas/IMG-20190529-WA0022_bue0ou.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626400425/museu-bixiga/coroinhas/IMG-20190529-WA0011_xajekk.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626400425/museu-bixiga/coroinhas/IMG-20190529-WA0021_kc62ka.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626400425/museu-bixiga/coroinhas/IMG-20190529-WA0008_fseu3a.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626400425/museu-bixiga/coroinhas/IMG-20190529-WA0020_w2cyrv.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626400425/museu-bixiga/coroinhas/IMG-20190529-WA0019_xhmcl8.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626400424/museu-bixiga/coroinhas/IMG-20190528-WA0115_rarelb.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626400424/museu-bixiga/coroinhas/IMG-20190529-WA0018_wdviuw.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626400424/museu-bixiga/coroinhas/IMG-20190529-WA0003_hbd9st.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626400424/museu-bixiga/coroinhas/IMG-20190528-WA0150_bzucxu.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626400424/museu-bixiga/coroinhas/IMG-20190529-WA0017_qno5oq.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626400424/museu-bixiga/coroinhas/IMG-20190529-WA0016_kbhjnk.jpg"]
    },
    ACHIROPITA_FOTOS_3: {
      title: "Pastorais",
      type: "",
      text: "",
      images: []
    },
    ACHIROPITA_FILMES: {
      title: "Filmes e vídeos",
      type: "",
      text: "",
      images: []
    },
    ACHIROPITA_FILMES_1: {
      title: "Estrela Luminosa, Vida e Milagres de Santa Beatriz da Silva",
      type: "video",
      text: "https://www.youtube.com/embed/k0QjfIXFHlY",
      images: []
    },
    ACHIROPITA_FILMES_2: {
      title: "A relíquia",
      type: "video",
      text: "https://www.youtube.com/embed/D7MuNzYf1vM",
      images: []
    },
    ACHIROPITA_FILMES_2_SINOPSE: {
      title: "Sinopse de A Relíquia",
      type: "text",
      text: "Para maior conhecimento da devoção e da história de Nossa Senhora Achiropita, sob a direção do Pe. Antônio S. Bogaz, foi realizado um filme, contando a história de forma poética e envolvente.  O roteiro conta a história de um menininho que é criado por sua vovó Luiza, uma vez que foi rejeitado por sua mãe desde o nascimento. Ele vê sua querida vovó em grande enfermidade e pede socorro ao padre Giuseppe pedindo um milagre para salvar a mulher. O padre conta-lhe uma lenda que diz que para conseguir um milagre, o interessado deveria encontrar a relíquia de Nossa Senhora Achiropita. O menino fica impressionado e quer saber quais são as relíquias, mas tampouco o sacerdote a conhece. Ele adormece e acorda num lugar desconhecido, onde se depara com uma senhora, com uma criança no colo. Era a cidade de Rossano Cálabro, na Calábria/Itália, que o ajuda na busca da relíquia. Assim, caminha e revive a história da santa, com seus personagens num tempo e lugar distante. Haverá de encontrar a relíquia, mas o milagre é a grande surpresa do filme.  O filme pode ser visto e adquirido na comunidade Achiropita da Bela Vista.",
      images: []
    },
    ACHIROPITA_FILMES_3: {
      title: "Memórias do Coração, Vida e Obra de Santo Eugênio de Mazenod",
      type: "video",
      text: "https://www.youtube.com/embed/pzfH7hX0ors",
      images: []
    },
    ACHIROPITA_FILMES_4: {
      title: "Socorra meu povo",
      type: "",
      text: "",
      images: []
    },
    ACHIROPITA_FILMES_5: {
      title: "São José, o bom carpinteiro",
      type: "video",
      text: "https://www.youtube.com/embed/7BHymPboKp0",
      images: []
    },
    ACHIROPITA_FILMES_6: {
      title: "São Tarciso",
      type: "video",
      text: "https://www.youtube.com/embed/psmpQQpfoKs",
      images: []
    },
    ACHIROPITA_FILMES_7: {
      title: "Coração Imaculado - A Vida e a Obra de Bárbara Maix",
      type: "video",
      text: "https://www.youtube.com/embed/HlgMoYdOHUM",
      images: []
    },
    ACHIROPITA_FILMES_8: {
      title: "Rosas para Rita",
      type: "video",
      text: "https://www.youtube.com/embed/H1Snv0pJw7A",
      images: []
    },
    ACHIROPITA_FILMES_9: {
      title: "Sangue no Sertão",
      type: "",
      text: "",
      images: []
    },
    ACHIROPITA_FILMES_10: {
      title: "Santo Antônio e o milagre eucarístico",
      type: "video",
      text: "https://www.youtube.com/embed/9ybib9IS6V4",
      images: []
    },
    ACHIROPITA_FILMES_11: {
      title: "Vida em versos: autobiográfico",
      type: "video",
      text: "https://www.youtube.com/embed/-OJsb1q98ls",
      images: []
    },
    ACHIROPITA_FILMES_12: {
      title: "Zilda Arns: via sacra da solidariedade",
      type: "",
      text: "",
      images: []
    },
    ACHIROPITA_FILMES_13: {
      title: "Maria Mãe de Deus",
      type: "",
      text: "",
      images: []
    },
    ACHIROPITA_FILMES_14: {
      title: "Perfume de Jasmim",
      type: "",
      text: "",
      images: []
    },
    ACHIROPITA_FILMES_14_PT: {
      title: "Versão português",
      type: "",
      text: "",
      images: []
    },
    ACHIROPITA_FILMES_14_ES: {
      title: "Versão espanhol",
      type: "",
      text: "",
      images: []
    },
    ACHIROPITA_FILMES_15: {
      title: "Santa Luzia",
      type: "video",
      text: "https://www.youtube.com/embed/lYSY4U-hLeo",
      images: []
    },
    ACHIROPITA_PATRIMONIO: {
      title: "Patrimônio Histórico e Artístico",
      type: "",
      text: "",
      images: []
    },
    ACHIROPITA_PATRIMONIO_IGREJA: {
      title: "Igreja",
      type: "",
      text: "",
      images: []
    },
    ACHIROPITA_PATRIMONIO_PINTURAS: {
      title: "Pinturas",
      type: "photo",
      text: "",
      images: ["https://res.cloudinary.com/dxatyucj2/image/upload/v1626230934/museu-bixiga/Pinturas/visita_2_ukkilb.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626230934/museu-bixiga/Pinturas/visita_nkmcu3.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626230992/museu-bixiga/Pinturas/DSC_0558-2_k5chm7.jpg"]
    },
    ACHIROPITA_PATRIMONIO_ESCULTURAS: {
      title: "Esculturas",
      type: "photo",
      text: "",
      images: ["https://res.cloudinary.com/dxatyucj2/image/upload/v1626231621/museu-bixiga/Esculturas/IMG_9482_cinbo7.jpg"]
    },
    ACHIROPITA_PATRIMONIO_PAINEIS: {
      title: "Painéis da Cúpula",
      type: "photo",
      text: "",
      images: ["https://res.cloudinary.com/dxatyucj2/image/upload/v1626231681/museu-bixiga/Pain%C3%A9is%20da%20Cupula/DSC_0222_lmpyia.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626231697/museu-bixiga/Pain%C3%A9is%20da%20Cupula/DSC_0252_dhidf9.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626231720/museu-bixiga/Pain%C3%A9is%20da%20Cupula/DSC_0241_genufq.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626231721/museu-bixiga/Pain%C3%A9is%20da%20Cupula/DSC_0242_kkhijb.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626231744/museu-bixiga/Pain%C3%A9is%20da%20Cupula/DSC_0245_sfwib1.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626231749/museu-bixiga/Pain%C3%A9is%20da%20Cupula/DSC_0247_mlyf2l.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626231749/museu-bixiga/Pain%C3%A9is%20da%20Cupula/DSC_0249_lu6vkf.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626231749/museu-bixiga/Pain%C3%A9is%20da%20Cupula/DSC_0248_exetat.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626231749/museu-bixiga/Pain%C3%A9is%20da%20Cupula/DSC_0246_xmdtu1.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626231758/museu-bixiga/Pain%C3%A9is%20da%20Cupula/DSC_0250_i2s1a2.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626231762/museu-bixiga/Pain%C3%A9is%20da%20Cupula/DSC_0254_fwumwh.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626231799/museu-bixiga/Pain%C3%A9is%20da%20Cupula/DSCF2690_tucayw.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626231799/museu-bixiga/Pain%C3%A9is%20da%20Cupula/DSCF2686_g3hble.jpg"]
    },
    BIXIGA: {
      title: "",
      type: "",
      text: "",
      images: []
    },
    BIXIGA_HISTORIA: {
      title: "História do Bairro",
      type: "text",
      text: "Texto de Cristina Oka retirado do Guia do Bixiga 2013/2014\n\nA História de um bairro com alma e coração\n\nA origem do Bixiga remonta à Sesmaria do Capão (que significa mata isolada no meio do campo), dotada à Antônio Pinto em 1559 e passando desde então às mãos de diferentes proprietários. No Bixiga antigo, existiam importantes pontos de abastecimento de água e de gêneros de São Paulo. Entre 1773/1774 o Matadouro Público (ou Curral do Concelho) ficava na hoje rua Santo Antônio e comercializava bexigas de boi – daí vem uma das explicações para a origem do nome da localidade. Uma das primeiras referências ao nome Bixiga vem de um decreto municipal de 1793, indicando que os proprietários deveriam carrear camadas de pedra do Bixiga para o chafariz da Misericórdia. Outras versão que explica o nome do território tem registro em 1819, sobre a existência de uma hospedaria para tropeiros no Largo do Piques, cujo proprietário era conhecido como Antônio Bexiga, pois apresentava notórias marcas no rosto, da epidemia varíola, também conhecida como bexiga, o que teria alcunhado o hospedeiro e suas terras. Em 1878 os campos do Bexiga são comercializados em lotes, iniciando a formação do bairro. A São Paulo da riqueza do café sofreu um processo acelerado de urbanização a partir de 1890, quando imigrantes europeus, principalmente italianos calabreses, se estabeleceram nos campos do Bixiga. A parte baixa do território já encontrava-se ocupado, próximo ao Riacho Saracura, por ex-escravos e pessoas humildes provenientes da zona rural. A diversidade étnica do bairro desde suas origens desenvolveu tradições presentes no Bixiga atual.",
      images: [],
    }, 
    BIXIGA_HISTORIA_MIGRACAO: {
      title: "O MOVIMENTO MIGRATÓRIO NO BRASIL",
      type: "text",
      text: "No segunda metade do século XIX, houve um grande movimento imigratório da Europa, na direção de vários países. Muitos países receberam milhares de imigrantes, vindos da Itália, da Alemanha, Espanha, Polônia e França. Os países da emigração foram, sobretudo os Estados Unidos e Canadá, a Austrália, alguns países da África e particularmente  o Uruguai, Argentina e Brasil, na América do Sul.\nNeste mesmo período, surgiram inúmeras congregações religiosas, especialmente na França e na Itália, como esforço da Igreja atender as massas populares que se aglomeravam nas cidades e que abandonavam a Igreja, fascinadas pelos movimentos socialistas antirreligiosos.\nUma grande massa de imigrantes veio para as terras brasileiras, particularmente nos estados do Sul. Quando estes imigrantes eram protestantes, fundavam cidades, com igrejas protestantes. Na maioria das vezes, estas comunidades eram italianas e traziam o catolicismo como religião tradicional.\nNeste período, muitos religiosos, pertencentes a estas congregações religiosas vêm para o Brasil e para a América Latina. Na verdade, grande é também o contingente de sacerdotes do clero secular. Estas congregações são muito importantes na formação dos filhos de imigrantes, no amparo das crianças abandonadas, nos cuidados dos hospitais e nos asilos de idosos.\nAlgumas congregações vieram com o objetivo de proteger e educar na fé as famílias dos imigrantes. Em terras brasileiras, dedicavam-se às instruções dos filhos de escravos, expulsos das fazendas de cana de açúcar e café e jogados nas periferias das cidades.\nDestacamos algumas destas famílias religiosas, como os salesianos, na educação dos jovens, as irmãs de Villeneuve, na defesa das mulheres, os escalabrinianos, na defesa dos imigrantes, os camilianos no socorro dos doentes, os dominicanos, na evangelização dos filhos do povo.  Reconhecemos a presença das Irmãs da Caridade de Santa Paulina. Em todas as igrejas, nota-se a presença dos religiosos ou leigos vicentinos, socorrendo os pobres em suas primeiras necessidades.\nDestacamos a presença dos Filhos e Filhas de São Luís Orione, que se dedicaram à educação dos filhos de escravos, camponeses, caboclos e particularmente os deficientes físicos e mentais. Os religiosos lazaristas e os maristas dedicaram-se às escolas e ao amparo dos jovens mais pobres.\nEstas congregações continuam sendo uma presença importante na Igreja e na sociedade brasileira, servindo sempre no socorro aos pobres e na defesa dos direitos dos povos mais empobrecidos (Bogaz – Thomazella, 2005, p. 78).\nNeste período, uma grande multidão de imigrantes europeus, sobretudo italianos, veio para o Brasil, fugindo das guerras internas e da grande miséria que assolava as várias regiões da Itália, em constante conflito entre si, antes e depois da unificação, em 1870. Os italianos ocuparam as regiões sul do Brasil, constituindo cidades e novos povoados e desenvolvendo a agricultura e as pequenas propriedades. Para as regiões do sudeste, especialmente interior de São Paulo, vieram italianos do norte do país, tornando-se a mão de obra mais especializada das plantações de café e agricultura de subsistência. Ainda hoje, seus descendentes ocupam estas terras e povoam estas regiões, deixando grande herança cultural e religiosa.\nEm São Paulo, particularmente nas regiões da Mooca, Campos Elísios, Brás e Bela Vista (Bixiga) se instalaram os italianos que vieram do sul da Itália, especialmente da Calábria. Vieram para trabalhar nas fábricas e desenvolveram a gastronomia. Neste universo migratório, vieram os imigrantes da região da Calábria, que trouxeram a devoção dos santos mais populares, especialmente Nossa Senhora Achiropita. Trata-se de uma história maravilhosa e cheia de encantamento que ainda hoje é narrada por seus descendentes mais tradicionais. A história merece ser contada e transmitida às gerações futuras, para que não se percam as suas raízes culturais e religiosas.",
      images: [],
    }, 
    BIXIGA_CULTURA: {
      title: "Artes e Cultura",
      type: "",
      text: "",
      images: []
    },
    BIXIGA_CULTURA_ESPACOS: {
      title: "Espaços culturais",
      type: "",
      text: "",
      images: []
    },
    BIXIGA_CULTURA_TEATROS: {
      title: "Teatros",
      type: "",
      text: "",
      images: []
    },
    BIXIGA_MUSICA: {
      title: "Música",
      type: "",
      text: "",
      images: []
    },
    BIXIGA_MUSICA_VAIVAI: {
      title: "Vai-vai",
      type: "",
      text: "",
      images: []
    },
    BIXIGA_MUSICA_BLOCOS: {
      title: "Blocos Carnavalescos",
      type: "",
      text: "",
      images: []
    },
    BIXIGA_PERSONAGENS: {
      title: "Personagens",
      type: "",
      text: "",
      images: []
    },
    BIXIGA_PERSONAGENS_1: {
      title: "Dona Yayá",
      type: "text",
      text: "Dona Sebastiana de Mello Freire, conhecida por Dona Yayá, habitou a casa por 40 anos, de 1921 até a sua morte em 1961.\nMoradores antigos do bairro alegavam que o casarão era mal assombrado: ouvia-se por toda a redondeza gritos que possivelmente viriam do fantasma de D. Yayá, toda de branco a embalar um bebê! Na verdade, a casa durante 40 anos foi um hospício privado para sua rica moradora, considerada alienada numa época de parcos conhecimentos psiquiátricos e extremamente preconceituosa em relação às mulheres que ousavam. Considerada independente e avançada, Yayá quando jovem era uma descontraida e alegre protetora dos artistas.\n\nInfância\n\nFilha de Manoel Almeida Mello Freire e Josephina Augusta de Almeida Mello, Yayá nasceu em 21 de janeiro de 1887, em um palacete de dois andares à Rua Sete de Abril. Seu pai foi bacharel em direito, deputado e senador e possuia fazendas em Mogi das Cruzes e Guararema. Tinha apenas um irmão vivo (outros três haviam morrido), Manoel Junior, quatro anos mais velho. Muito unidos, bricavam pelos jardins da mansão e estudavam em casa. Sua prima Elisa de Mello Freire e sua grande amiga Rosa Masullo moravam com eles na mansão da Sete de Abril.\n\nPrimeira tragédia\n\nEm 1900, seus pais morrem com diferença de dois dias! Os orfãos de 14 e 18 anos ficam sob os cuidados da madrinha Eliza Grant e como tutor é nomeado Manoel Joaquim de Albuquerque Lins. Yayá vai estudar no internato do tradicional colégio Nossa Senhora de Sion (permanecendo até 20 anos). Yayá era fluente em francês, escrevia bem, tocava piano, adorava as artes plásticas e praticava fotografia, revelando e ampliando suas próprias fotos em seu laboratório. Religiosa, adorava fotografar santos. Sua colega de Sion, Eliza Grant acabou por acompanhá-la até sua morte em 1944.\n\nSegunda tragédia\n\nEm 1905, fazendo uma viagem à Argentina de navio, o irmão Manoel desaparece misteriosamente de seu camarote. Yáya se torna herdeira única de imensa fortuna. Yayá vestia-se com elegância e discrição. Possuia dois carros e costumava dirigir até sua fazenda em Guararema onde gostava de passear pelos bosques a cavalo.\n\nTerceira tragédia\n\nNão se sabe se devido sua personalidade forte, temperamento fechado e hábitos ousados para uma preconceituosa e recatada sociedade ou, a reais disturbios mentais aflorados pelas provações que foi submetida ainda jovem ou até movido por interesses de terceiros, D. Yayá em 1921 já é considerada insana. Os primeiros sintomas surgiram em 1918 quando achando que ia morrer, redigiu a lápiz seu testamento e começou a distribuir jóias para os empregados (com Rosa recolhendo-as em seguida). Em 1919 novo surto: achava que todos queriam violentá-la e matá-la. Não comia e tentou o suicídio. Internada no Hospital Homem de Melo, foi examinada e considerada incapaz. A interdição foi oficializada em abril de 1919, como curador Sousa Queirós e internada no sanatório do Instituto Paulista por um ano. Especialistas aconselharam que ela fosse removida para um lugar melhor que o sanatório pois tinha recursos para tal. Em 1920 é levada para o imóvel da Rua Major Diogo, que sofre uma reforma para abrigá-la, permanece lá até sua morte em 1961, aos 74 anos, por insuficiencia cardíaca. A reforma acrescentou um solário, bem como obras visando sua segurança. Acompanharam Eliza Grant, Elisa Freira, Georgina Tavolaro, empregados e dois enfermeiros.\nSolitária, D. Yayá estava confinada a um setor da casa onde podia olhar as outras dependencias do imóvel através de uma pequena abertura existente na porta de seu quarto. O solário era aberto de vez em quando para um rápido passeio no início. Posteriormente nem este prazer era possível.\nDurante os delírios, Yayá batia-se contra as paredes, feria-se com objetos e farpas, dizia impropérios, proclamava-se partidária dos aliados da 1a. Guerra, repetia continuamente ser católica apostólica romana, rasgava suas roupas, chorava, cantava, queixava-se de ser ameaçada de morte e de violações, pedia o filho que julgava ter tido, imaginava amamentá-lo e embalá-lo. Com o passar dos anos os delírios diminuiram. Em 1952 atingiu o período demencial sua fase crônica final: embora tendo ainda algumas manifestações agressivas, estava abúlica, apática, quase inerte. Faleceu em 4 de setembro de 1961, no Hospital São Camilo, onde fora submetida a uma operação de câncer.\nMuito se comentou na imprensa da época: boatos, artigos recheados de mistério, ingratidão, cobiça até cárcere privado eram editados no semanário Parafuso. Em realidade, houve disputa entre os parentes de Mogi das Cruzes visando abocanhar parte da fortuna e para isso, atacavam os que cuidavam de Yayá. Quando D. Yayá morreu, seus parentes ambiciosos já estavam mortos!\n\nFonte:http://www.bixiga.com.br/bixiga/yaya_hist.html",
      images: ["https://res.cloudinary.com/dxatyucj2/image/upload/v1626404476/museu-bixiga/yaya/casa_yaya_03_jkl3ab.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626404473/museu-bixiga/yaya/casa_yaya_02_lfpdgv.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626404472/museu-bixiga/yaya/casa_yaya_04_al4jwt.jpg", "https://res.cloudinary.com/dxatyucj2/image/upload/v1626404469/museu-bixiga/yaya/casa_yaya_05_yfcapw.jpg"]
    },
    BIXIGA_PERSONAGENS_2: {
      title: "Adoniram Barbosa",
      type: "",
      text: "",
      images: []
    },
    BIXIGA_PERSONAGENS_3: {
      title: "Antonio Rago",
      type: "",
      text: "",
      images: []
    },
    BIXIGA_PERSONAGENS_4: {
      title: "Sílvio Santos",
      type: "",
      text: "",
      images: []
    },
    BIXIGA_PERSONAGENS_5: {
      title: "Emanuel Araújo",
      type: "",
      text: "",
      images: []
    },
    BIXIGA_PERSONAGENS_6: {
      title: "Sérgio Mamberti",
      type: "",
      text: "",
      images: []
    },
    BIXIGA_PATRIMONIO: {
      title: "Patrimônio histórico",
      type: "",
      text: "",
      images: []
    },
    

  // {
  //   title: "",
  //   type: "",
  //   text: "",
  //   images: []
  // }, 
  // {
  //   title: "",
  //   type: "",
  //   text: "",
  //   images: []
  // }, 
};

export default CONTENT;
