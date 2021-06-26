import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Components/Home/Home';

// ORIONE
import Orione from './Components/Orione/Orione';
import Biografia from './Components/Orione/Biografia/Biografia';
import Obras from './Components/Orione/Obras/Obras';
import ObrasTxt from './Components/Orione/Obras/Fasc1';

import Achiropita from './Components/Achiropita/Achiropita';

import Bixiga from './Components/Bixiga/Bixiga';

import PhotosPage from './Components/PhotosPage/PhotosPage';

import ROUTES from './Components/constants/routes';

const AllRoutes = (props) => {
  console.log(props);

  const [ propsData, setPropsData ] = useState({});

  useEffect(() => {
    setPropsData(props);
  }, [props]);

  console.log(propsData);

  return (
    <>
      {/* <Navbar /> */}
      <Switch>
        <Route path={ROUTES.HOME} exact component={Home} />

        {/* ORIONE ROUTES */}
        {/* <Route path={ROUTES.ORIONE} exact component={Orione} /> */}
        <Route path={ROUTES.ORIONE} exact component={ObrasTxt} />
        {/* <Route path={ROUTES.ORIONE_BIOGRAFIA} exact component={Biografia} />
        <Route path={ROUTES.ORIONE_FILMES} exact component={Orione} />
        <Route path={ROUTES.ORIONE_FOTOS} exact component={Orione} />
        <Route path={ROUTES.ORIONE_ICONOLOGIA} exact component={Orione} />
        <Route path={ROUTES.ORIONE_OBRAS} exact component={Obras} />
        <Route path={ROUTES.ORIONE_OBRAS_TXT} exact component={ObrasTxt} />
        <Route path={ROUTES.ORIONE_PUBLICACOES} exact component={Orione} /> */}

        {/* ACHIROPITA ROUTES */}
        <Route path={ROUTES.ACHIROPITA} exact render={(props) => (
          <Achiropita historyData={propsData.historyData} addHistoryData={propsData.addHistoryData} {...props} />
        )} />
        {/* <Route path={ROUTES.ACHIROPITA} exact component={Achiropita} /> */}
        <Route path={ROUTES.ACHIROPITA_HISTORIA} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_FESTA} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_PROJETOS} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_LIVROS} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_FOTOS} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_FILMES} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_PATRIMONIO} exact component={Achiropita} />

        {/* BIXIGA ROUTES */}
        <Route path={ROUTES.BIXIGA} exact component={Bixiga} />
        <Route path={ROUTES.BIXIGA_HISTORIA} exact component={Bixiga} />
        <Route path={ROUTES.BIXIGA_CULTURA} exact component={Bixiga} />
        <Route path={ROUTES.BIXIGA_MUSICA} exact component={Bixiga} />
        <Route path={ROUTES.BIXIGA_PERSONAGENS} exact component={Bixiga} />
        <Route path={ROUTES.BIXIGA_PATRIMONIO} exact component={Bixiga} />


        {/* <Route path={ROUTES.MENU} exact render={(props) => (
          <Menu getOrderData={propsData.getOrderData} user={propsData.userSignIn} deliveryInfo={propsData.deliveryInfo} {...props} />
        )} /> */}
      </Switch>
    </>
  )
}

export default AllRoutes;


//   ORIONE_BIOGRAFIA_LINHA: '/orione/biografia/linha-do-tempo',
  
//   ORIONE_OBRAS: '/orione/obras',
//   ORIONE_OBRAS_BRASIL: '/orione/obras/brasil',
//   ORIONE_OBRAS_BRASIL_1: '/orione/obras/brasil/1906-1923',
//   ORIONE_OBRAS_BRASIL_2: '/orione/obras/brasil/1923-1934',
//   ORIONE_OBRAS_BRASIL_3: '/orione/obras/brasil/1934-1940',
//   ORIONE_OBRAS_BRASIL_4: '/orione/obras/brasil/1940-1947',
//   ORIONE_OBRAS_BRASIL_5: '/orione/obras/brasil/1972-2002',
//   ORIONE_OBRAS_BRASIL_6: '/orione/obras/brasil/pioneiros',

//   ORIONE_OBRAS_TXT: '/orione/obras/pdf',

//   ORIONE_PUBLICACOES: '/orione/publicacoes',
//   ORIONE_PUBLICACOES_BOLETIM: '/orione/publicacoes/boletim',

//   ORIONE_PUBLICACOES_LIVROS: '/orione/publicacoes/livros',
//   ORIONE_PUBLICACOES_LIVROS_1: '/orione/publicacoes/livros/quadrinho',
//   ORIONE_PUBLICACOES_LIVROS_2: '/orione/publicacoes/livros/perolas',
//   ORIONE_PUBLICACOES_LIVROS_3: '/orione/publicacoes/livros/novena',
//   ORIONE_PUBLICACOES_LIVROS_4: '/orione/publicacoes/livros/don-orione',
//   ORIONE_PUBLICACOES_LIVROS_5: '/orione/publicacoes/livros/juventude',
//   ORIONE_PUBLICACOES_LIVROS_6: '/orione/publicacoes/livros/orionitas',
//   ORIONE_PUBLICACOES_LIVROS_7: '/orione/publicacoes/livros/idiomas',
//   ORIONE_PUBLICACOES_LIVROS_8: '/orione/publicacoes/livros/mocambique',

//   ORIONE_FOTOS: '/orione/fotos',
//   ORIONE_FOTOS_1: '/orione/fotos/historicas',
//   ORIONE_FOTOS_2: '/orione/fotos/brasil',
//   ORIONE_FOTOS_3: '/orione/fotos/reliquias',
//   ORIONE_FOTOS_4: '/orione/fotos/orionitas',

//   ORIONE_ICONOLOGIA: '/orione/iconologia',
//   ORIONE_ICONOLOGIA_GALERIA: '/orione/iconologia/galeria',
//   ORIONE_ICONOLOGIA_CARTAZES: '/orione/iconologia/cartazes',
  
//   ORIONE_FILMES: '/orione/filmes',

//   ORIONE_FILMES_BOGAZ: '/orione/filmes/bogaz',
//   ORIONE_FILMES_BOGAZ_1: '/orione/filmes/bogaz/a-vida-e-como-um-rio',
//   ORIONE_FILMES_BOGAZ_2: '/orione/filmes/bogaz/universo-orione',
//   ORIONE_FILMES_BOGAZ_3: '/orione/filmes/bogaz/memorias-de-uma-alianca',
//   ORIONE_FILMES_BOGAZ_4: '/orione/filmes/bogaz/perfume-de-jasmin',
//   ORIONE_FILMES_BOGAZ_5: '/orione/filmes/bogaz/qualquer-coisa-de-don-orione',
//   ORIONE_FILMES_BOGAZ_6: '/orione/filmes/bogaz/vocacao',
//   ORIONE_FILMES_BOGAZ_7: '/orione/filmes/bogaz/orione-apostolo-da-caridade',
//   ORIONE_FILMES_BOGAZ_8: '/orione/filmes/bogaz/recordacoes-de-um-santo',

//   ORIONE_FILMES_ORIONITAS: '/orione/filmes/orionitas',
//   ORIONE_FILMES_ORIONITAS_1: '/orione/filmes/orionitas/a-grande-pescaria',
//   ORIONE_FILMES_ORIONITAS_2: '/orione/filmes/orionitas/caminhando-nas-terras-do-pau-brasil',
//   ORIONE_FILMES_ORIONITAS_3: '/orione/filmes/orionitas/se-don-orione-vivesse-em-nossos-dias',

  
//   ACHIROPITA_HISTORIA_1: '/achiropita/historia/culto-a-achiropita',
//   ACHIROPITA_HISTORIA_2: '/achiropita/historia/significado-do-icone-achiropita',
//   ACHIROPITA_HISTORIA_3: '/achiropita/historia/devocao-a-achiropita-no-bixiga',
//   ACHIROPITA_HISTORIA_4: '/achiropita/historia/imagem-da-madonna-aporta-no-brasil',
//   ACHIROPITA_HISTORIA_5: '/achiropita/historia/da-capelinha-a-igreja',

//   ACHIROPITA_PAROQUIA_HINO: '/achiropita/paroquia/hino',
//   ACHIROPITA_PAROQUIA_PASTORAL: '/achiropita/paroquia/pastoral',
//   ACHIROPITA_PAROQUIA_PASTORAL_1: '/achiropita/paroquia/pastoral/horarios',
//   ACHIROPITA_PAROQUIA_PASTORAL_2: '/achiropita/paroquia/pastoral/sementeira',
//   ACHIROPITA_PAROQUIA_PASTORAL_3: '/achiropita/paroquia/pastoral/pastoral-da-pessoa-idosa',
//   ACHIROPITA_PAROQUIA_PASTORAL_4: '/achiropita/paroquia/pastoral/pastoral-afro',
//   ACHIROPITA_PAROQUIA_PASTORAL_5: '/achiropita/paroquia/pastoral/pastoral-batismo',
//   ACHIROPITA_PAROQUIA_PASTORAL_6: '/achiropita/paroquia/pastoral/pastoral-animacao-biblico-catequetica',
//   ACHIROPITA_PAROQUIA_PASTORAL_7: '/achiropita/paroquia/pastoral/pastoral-crianca',
//   ACHIROPITA_PAROQUIA_PASTORAL_8: '/achiropita/paroquia/pastoral/pastoral-comunicacao',
//   ACHIROPITA_PAROQUIA_PASTORAL_9: '/achiropita/paroquia/pastoral/pastoral-dizimo',
//   ACHIROPITA_PAROQUIA_PASTORAL_10: '/achiropita/paroquia/pastoral/pastoral-juventude',
//   ACHIROPITA_PAROQUIA_PASTORAL_11: '/achiropita/paroquia/pastoral/pastoral-saude',
//   ACHIROPITA_PAROQUIA_PASTORAL_12: '/achiropita/paroquia/pastoral/apostolado-oracao',

//   ACHIROPITA_FESTA_APRESENTACAO: '/achiropita/festa/apresentacao',
//   ACHIROPITA_FESTA_HISTORICO: '/achiropita/festa/historico',
//   ACHIROPITA_FESTA_PRESENCIAL: '/achiropita/festa/festa-presencial-delivery',
//   ACHIROPITA_FESTA_MATERIAL: '/achiropita/festa/material',
//   ACHIROPITA_FESTA_MATERIAL_1: '/achiropita/festa/material/clipping',
//   ACHIROPITA_FESTA_MATERIAL_2: '/achiropita/festa/material/publicacoes',
//   ACHIROPITA_FESTA_MATERIAL_3: '/achiropita/festa/material/cartazes',
//   ACHIROPITA_FESTA_MATERIAL_4: '/achiropita/festa/material/logomarcas',
//   ACHIROPITA_FESTA_MATERIAL_5: '/achiropita/festa/material/videos',

//   ACHIROPITA_PROJETOS_1: '/achiropita/projetos/creche',
//   ACHIROPITA_PROJETOS_2: '/achiropita/projetos/idosos',
//   ACHIROPITA_PROJETOS_3: '/achiropita/projetos/cedo',
//   ACHIROPITA_PROJETOS_4: '/achiropita/projetos/casa-rainha-da-paz',
//   ACHIROPITA_PROJETOS_5: '/achiropita/projetos/casa-don-orione',
//   ACHIROPITA_PROJETOS_6: '/achiropita/projetos/centro-juridico',
//   ACHIROPITA_PROJETOS_7: '/achiropita/projetos/mova',

//   ACHIROPITA_LIVROS_1: '/achiropita/livros/novena',
//   ACHIROPITA_LIVROS_2: '/achiropita/livros/maria-mae-de-deus',
//   ACHIROPITA_LIVROS_3: '/achiropita/livros/livreto-maria',
//   ACHIROPITA_LIVROS_4: '/achiropita/livros/jesus-cristo',
//   ACHIROPITA_LIVROS_5: '/achiropita/livros/clipping',

//   ACHIROPITA_FOTOS_1: '/achiropita/fotos/celebracoes-2019',
//   ACHIROPITA_FOTOS_2: '/achiropita/fotos/coroinhas-2019',
//   ACHIROPITA_FOTOS_3: '/achiropita/fotos/pastorais',

//   ACHIROPITA_FILMES_1: '/achiropita/filmes/nossa-senhora-achiropita',
//   ACHIROPITA_FILMES_2: '/achiropita/filmes/a-reliquia',
//   ACHIROPITA_FILMES_2_SINOPSE: '/achiropita/filmes/a-reliquia-sinopse',
//   ACHIROPITA_FILMES_3: '/achiropita/filmes/a-reliquia-e-o-milagre',
//   ACHIROPITA_FILMES_4: '/achiropita/filmes/socorra-meu-povo',
//   ACHIROPITA_FILMES_5: '/achiropita/filmes/sao-jose-bom-carpinteiro',
//   ACHIROPITA_FILMES_5_EN: '/achiropita/filmes/sao-jose-bom-carpinteiro/en',
//   ACHIROPITA_FILMES_5_PT: '/achiropita/filmes/sao-jose-bom-carpinteiro/pt',
//   ACHIROPITA_FILMES_6: '/achiropita/filmes/sao-tarciso',
//   ACHIROPITA_FILMES_7: '/achiropita/filmes/emanuel',
//   ACHIROPITA_FILMES_8: '/achiropita/filmes/rosas-para-rita',
//   ACHIROPITA_FILMES_9: '/achiropita/filmes/sangue-no-sertao',
//   ACHIROPITA_FILMES_10: '/achiropita/filmes/santo-antonio',
//   ACHIROPITA_FILMES_11: '/achiropita/filmes/vida-em-versos',
//   ACHIROPITA_FILMES_12: '/achiropita/filmes/zilda-arns',
//   ACHIROPITA_FILMES_13: '/achiropita/filmes/maria-mae-de-deus',
//   ACHIROPITA_FILMES_14: '/achiropita/filmes/perfume-de-jasmin',
//   ACHIROPITA_FILMES_14_PT: '/achiropita/filmes/perfume-de-jasmin/pt',
//   ACHIROPITA_FILMES_14_ES: '/achiropita/filmes/perfume-de-jasmin/es',
//   ACHIROPITA_FILMES_15: '/achiropita/filmes/santa-luzia',

//   ACHIROPITA_PATRIMONIO: '/achiropita/patrimonio-historico',
//   ACHIROPITA_PATRIMONIO_IGREJA: '/achiropita/patrimonio-historico/igrejas',
//   ACHIROPITA_PATRIMONIO_PINTURAS: '/achiropita/patrimonio-historico/pinturas',
//   ACHIROPITA_PATRIMONIO_ESCULTURAS: '/achiropita/patrimonio-historico/esculturas',
//   ACHIROPITA_PATRIMONIO_PAINEIS: '/achiropita/patrimonio-historico/paineis-cupula',


//   BIXIGA_HISTORIA_MIGRACAO: '/bixiga/movimento-migratorio',

//   BIXIGA_CULTURA_ESPACOS: '/bixiga/cultura/espacos-culturais',
//   BIXIGA_CULTURA_TEATROS: '/bixiga/cultura/teatros',

//   BIXIGA_MUSICA_VAIVAI: '/bixiga/musica/vai-vai',
//   BIXIGA_MUSICA_BLOCOS: '/bixiga/musica/blocos-carnavalescos',

//   BIXIGA_PERSONAGENS_1: '/bixiga/personagens/dona-yaya',
//   BIXIGA_PERSONAGENS_2: '/bixiga/personagens/adoniram-barbosa',
//   BIXIGA_PERSONAGENS_3: '/bixiga/personagens/antonio-rego',
//   BIXIGA_PERSONAGENS_4: '/bixiga/personagens/silvio-santos',
//   BIXIGA_PERSONAGENS_5: '/bixiga/personagens/emanuel-araujo',
//   BIXIGA_PERSONAGENS_6: '/bixiga/personagens/sergio-mamberti',
