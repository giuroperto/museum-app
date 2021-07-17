import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Components/Home/Home';

import Orione from './Components/Orione/Orione';

import Achiropita from './Components/Achiropita/Achiropita';

import Bixiga from './Components/Bixiga/Bixiga';

import ROUTES from './Components/constants/routes';

const AllRoutes = (props) => {
  console.log(props);

  const [ propsData, setPropsData ] = useState({});

  useEffect(() => {
    setPropsData(props);
  }, [props]);

  return (
    <>
      <Switch>
        <Route path={ROUTES.HOME} exact component={Home} />

        {/* ORIONE ROUTES */}
        <Route path={ROUTES.ORIONE} exact component={Orione} />

        <Route path={ROUTES.ORIONE_BIOGRAFIA} exact component={Orione} />

        <Route path={ROUTES.ORIONE_OBRAS_BRASIL} exact component={Orione} />
        <Route path={ROUTES.ORIONE_OBRAS_BRASIL_1} exact component={Orione} />
        <Route path={ROUTES.ORIONE_OBRAS_BRASIL_2} exact component={Orione} />
        <Route path={ROUTES.ORIONE_OBRAS_BRASIL_3} exact component={Orione} />
        <Route path={ROUTES.ORIONE_OBRAS_BRASIL_4} exact component={Orione} />
        <Route path={ROUTES.ORIONE_OBRAS_BRASIL_5} exact component={Orione} />
        <Route path={ROUTES.ORIONE_OBRAS_BRASIL_6} exact component={Orione} />
        <Route path={ROUTES.ORIONE_OBRAS_BRASIL_7} exact component={Orione} />
        <Route path={ROUTES.ORIONE_OBRAS_TXT} exact component={Orione} />

        <Route path={ROUTES.ORIONE_PUBLICACOES} exact component={Orione} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_BOLETIM} exact component={Orione} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS} exact component={Orione} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS_1} exact component={Orione} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS_2} exact component={Orione} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS_3} exact component={Orione} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS_4} exact component={Orione} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS_5} exact component={Orione} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS_6} exact component={Orione} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS_7} exact component={Orione} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS_8} exact component={Orione} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS_9} exact component={Orione} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS_10} exact component={Orione} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS_11} exact component={Orione} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS_12} exact component={Orione} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS_13} exact component={Orione} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS_14} exact component={Orione} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS_15} exact component={Orione} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS_16} exact component={Orione} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS_17} exact component={Orione} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS_18} exact component={Orione} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS_19} exact component={Orione} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS_20} exact component={Orione} />

        <Route path={ROUTES.ORIONE_FOTOS} exact component={Orione} />
        <Route path={ROUTES.ORIONE_FOTOS_1} exact component={Orione} />
        <Route path={ROUTES.ORIONE_FOTOS_2} exact component={Orione} />
        <Route path={ROUTES.ORIONE_FOTOS_3} exact component={Orione} />
        <Route path={ROUTES.ORIONE_FOTOS_4} exact component={Orione} />

        <Route path={ROUTES.ORIONE_FILMES} exact component={Orione} />
        <Route path={ROUTES.ORIONE_FILMES_BOGAZ} exact component={Orione} />
        <Route path={ROUTES.ORIONE_FILMES_BOGAZ_1} exact component={Orione} />
        <Route path={ROUTES.ORIONE_FILMES_BOGAZ_2} exact component={Orione} />
        <Route path={ROUTES.ORIONE_FILMES_BOGAZ_3} exact component={Orione} />
        <Route path={ROUTES.ORIONE_FILMES_BOGAZ_4} exact component={Orione} />
        <Route path={ROUTES.ORIONE_FILMES_BOGAZ_5} exact component={Orione} />
        <Route path={ROUTES.ORIONE_FILMES_BOGAZ_6} exact component={Orione} />
        <Route path={ROUTES.ORIONE_FILMES_BOGAZ_7} exact component={Orione} />
        <Route path={ROUTES.ORIONE_FILMES_BOGAZ_8} exact component={Orione} />
        <Route path={ROUTES.ORIONE_FILMES_ORIONITAS} exact component={Orione} />
        <Route path={ROUTES.ORIONE_FILMES_ORIONITAS_1} exact component={Orione} />
        <Route path={ROUTES.ORIONE_FILMES_ORIONITAS_2} exact component={Orione} />
        <Route path={ROUTES.ORIONE_FILMES_ORIONITAS_3} exact component={Orione} />

        <Route path={ROUTES.ORIONE_ICONOLOGIA} exact component={Orione} />
        <Route path={ROUTES.ORIONE_ICONOLOGIA_CARTAZES} exact component={Orione} />
        <Route path={ROUTES.ORIONE_ICONOLOGIA_GALERIA} exact component={Orione} />

        <Route path={ROUTES.ORIONE_OBRAS_TXT} exact component={Orione} />

        {/* ACHIROPITA ROUTES */}
        <Route path={ROUTES.ACHIROPITA} exact render={(props) => (
          <Achiropita historyData={propsData.historyData} getHistory={propsData.getHistory} updateHistory={propsData.updateHistory} historyItems={propsData.historyItems} {...props} />
        )} />

        <Route path={ROUTES.ACHIROPITA_HISTORIA} exact render={(props) => (
          <Achiropita historyData={propsData.historyData} getHistory={propsData.getHistory} updateHistory={propsData.updateHistory} historyItems={propsData.historyItems} {...props} />
        )} />

        <Route path={ROUTES.ACHIROPITA_HISTORIA_1} exact render={(props) => (
          <Achiropita historyData={propsData.historyData} getHistory={propsData.getHistory} updateHistory={propsData.updateHistory} historyItems={propsData.historyItems} {...props} />
        )} />

        {/* <Route path={ROUTES.ACHIROPITA} exact component={Achiropita} /> */}
        {/* <Route path={ROUTES.ACHIROPITA_HISTORIA} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_HISTORIA_1} exact component={Achiropita} /> */}
        <Route path={ROUTES.ACHIROPITA_HISTORIA_2} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_HISTORIA_3} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_HISTORIA_4} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_HISTORIA_5} exact component={Achiropita} />

        <Route path={ROUTES.ACHIROPITA_PAROQUIA} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_HINO} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_PASTORAL} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_1} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_2} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_3} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_4} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_5} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_6} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_7} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_8} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_9} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_10} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_11} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_12} exact component={Achiropita} />

        <Route path={ROUTES.ACHIROPITA_FESTA} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_FESTA_APRESENTACAO} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_FESTA_HISTORICO} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_FESTA_PRESENCIAL} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_FESTA_MATERIAL} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_FESTA_MATERIAL_1} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_FESTA_MATERIAL_2} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_FESTA_MATERIAL_3} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_FESTA_MATERIAL_4} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_FESTA_MATERIAL_5} exact component={Achiropita} />

        <Route path={ROUTES.ACHIROPITA_PROJETOS} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_PROJETOS_1} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_PROJETOS_2} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_PROJETOS_3} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_PROJETOS_4} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_PROJETOS_5} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_PROJETOS_6} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_PROJETOS_7} exact component={Achiropita} />

        <Route path={ROUTES.ACHIROPITA_LIVROS} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_LIVROS_1} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_LIVROS_2} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_LIVROS_3} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_LIVROS_4} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_LIVROS_5} exact component={Achiropita} />

        <Route path={ROUTES.ACHIROPITA_FOTOS} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_FOTOS_1} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_FOTOS_2} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_FOTOS_3} exact component={Achiropita} />

        <Route path={ROUTES.ACHIROPITA_FILMES} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_FILMES_1} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_FILMES_2} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_FILMES_2_SINOPSE} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_FILMES_3} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_FILMES_4} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_FILMES_5} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_FILMES_6} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_FILMES_7} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_FILMES_8} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_FILMES_9} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_FILMES_10} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_FILMES_11} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_FILMES_12} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_FILMES_13} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_FILMES_14} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_FILMES_14_ES} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_FILMES_14_PT} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_FILMES_15} exact component={Achiropita} />

        <Route path={ROUTES.ACHIROPITA_PATRIMONIO} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_PATRIMONIO_IGREJA} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_PATRIMONIO_PINTURAS} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_PATRIMONIO_ESCULTURAS} exact component={Achiropita} />
        <Route path={ROUTES.ACHIROPITA_PATRIMONIO_PAINEIS} exact component={Achiropita} />

        {/* BIXIGA ROUTES */}
        <Route path={ROUTES.BIXIGA} exact component={Bixiga} />

        <Route path={ROUTES.BIXIGA_HISTORIA} exact component={Bixiga} />
        <Route path={ROUTES.BIXIGA_HISTORIA_MIGRACAO} exact component={Bixiga} />

        <Route path={ROUTES.BIXIGA_CULTURA} exact component={Bixiga} />
        <Route path={ROUTES.BIXIGA_CULTURA_ESPACOS} exact component={Bixiga} />
        <Route path={ROUTES.BIXIGA_CULTURA_TEATROS} exact component={Bixiga} />

        <Route path={ROUTES.BIXIGA_MUSICA} exact component={Bixiga} />
        <Route path={ROUTES.BIXIGA_MUSICA_VAIVAI} exact component={Bixiga} />
        <Route path={ROUTES.BIXIGA_MUSICA_BLOCOS} exact component={Bixiga} />

        <Route path={ROUTES.BIXIGA_PERSONAGENS} exact component={Bixiga} />
        <Route path={ROUTES.BIXIGA_PERSONAGENS_1} exact component={Bixiga} />
        <Route path={ROUTES.BIXIGA_PERSONAGENS_2} exact component={Bixiga} />
        <Route path={ROUTES.BIXIGA_PERSONAGENS_3} exact component={Bixiga} />
        <Route path={ROUTES.BIXIGA_PERSONAGENS_4} exact component={Bixiga} />
        <Route path={ROUTES.BIXIGA_PERSONAGENS_5} exact component={Bixiga} />
        <Route path={ROUTES.BIXIGA_PERSONAGENS_6} exact component={Bixiga} />

        <Route path={ROUTES.BIXIGA_PATRIMONIO} exact component={Bixiga} />

      </Switch>
    </>
  )
}

export default AllRoutes;
