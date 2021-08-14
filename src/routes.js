import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Components/Home/Home';

import Orione from './Components/Orione/Orione';

import Achiropita from './Components/Achiropita/Achiropita';

import Bixiga from './Components/Bixiga/Bixiga';

import ROUTES from './Components/constants/routes';

const AllRoutes = (props) => {
  return (
    <>
      <Switch>
        <Route path={ROUTES.HOME} exact render={(props2) => (
            <Home getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
          )} />

        {/* ORIONE ROUTES */}
        <Route path={ROUTES.ORIONE} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />

        <Route path={ROUTES.ORIONE_BIOGRAFIA} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />

        <Route path={ROUTES.ORIONE_OBRAS_BRASIL} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_OBRAS_BRASIL_1} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_OBRAS_BRASIL_2} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_OBRAS_BRASIL_3} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_OBRAS_BRASIL_4} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_OBRAS_BRASIL_5} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_OBRAS_BRASIL_6} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_OBRAS_BRASIL_7} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_OBRAS_TXT} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />

        <Route path={ROUTES.ORIONE_PUBLICACOES} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_BOLETIM} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS_1} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS_2} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS_3} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS_4} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS_5} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS_6} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS_7} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS_8} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS_9} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS_10} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS_11} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS_12} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS_13} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS_14} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS_15} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS_16} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS_17} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS_18} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS_19} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_PUBLICACOES_LIVROS_20} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />

        <Route path={ROUTES.ORIONE_FOTOS} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_FOTOS_1} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_FOTOS_2} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_FOTOS_3} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_FOTOS_4} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />

        <Route path={ROUTES.ORIONE_FILMES} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_FILMES_BOGAZ} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_FILMES_BOGAZ_1} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_FILMES_BOGAZ_2} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_FILMES_BOGAZ_3} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_FILMES_BOGAZ_4} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_FILMES_BOGAZ_5} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_FILMES_BOGAZ_6} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_FILMES_BOGAZ_7} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_FILMES_BOGAZ_8} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_FILMES_ORIONITAS} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_FILMES_ORIONITAS_1} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_FILMES_ORIONITAS_2} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_FILMES_ORIONITAS_3} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />

        <Route path={ROUTES.ORIONE_ICONOLOGIA} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_ICONOLOGIA_CARTAZES} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ORIONE_ICONOLOGIA_GALERIA} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />

        <Route path={ROUTES.ORIONE_OBRAS_TXT} exact render={(props2) => (
          <Orione getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />

        {/* ACHIROPITA ROUTES */}
        <Route path={ROUTES.ACHIROPITA} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />

        <Route path={ROUTES.ACHIROPITA_HISTORIA} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_HISTORIA_1} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_HISTORIA_2} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_HISTORIA_3} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_HISTORIA_4} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_HISTORIA_5} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />

        <Route path={ROUTES.ACHIROPITA_PAROQUIA} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_HINO} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_HORARIOS} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_SEMENTEIRA} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_ORATORIO} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_CONGREGACAO} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_PASTORAL} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_1} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_2} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_3} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_4} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_5} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_6} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_7} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_8} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_9} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_10} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_11} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_12} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_13} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_14} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_15} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_16} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_17} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_18} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_19} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_20} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_21} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PAROQUIA_PASTORAL_22} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />

        <Route path={ROUTES.ACHIROPITA_FESTA} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_FESTA_APRESENTACAO} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_FESTA_HISTORICO} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_FESTA_PRESENCIAL} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_FESTA_MATERIAL} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_FESTA_MATERIAL_1} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_FESTA_MATERIAL_2} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_FESTA_MATERIAL_3} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_FESTA_MATERIAL_4} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_FESTA_MATERIAL_5} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />

        <Route path={ROUTES.ACHIROPITA_PROJETOS} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PROJETOS_1} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PROJETOS_2} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PROJETOS_3} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PROJETOS_4} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PROJETOS_5} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PROJETOS_6} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PROJETOS_6_EP1} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PROJETOS_6_EP2} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PROJETOS_6_EP3} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PROJETOS_6_EP4} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PROJETOS_6_EP5} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PROJETOS_6_EP6} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PROJETOS_7} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PROJETOS_8} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />

        <Route path={ROUTES.ACHIROPITA_LIVROS} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_LIVROS_1} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_LIVROS_2} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_LIVROS_3} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_LIVROS_3_INTRODUCAO} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_LIVROS_3_DIVULGACAO} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_LIVROS_4} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_LIVROS_5} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />

        <Route path={ROUTES.ACHIROPITA_FOTOS} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_FOTOS_1} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_FOTOS_2} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />

        <Route path={ROUTES.ACHIROPITA_FILMES} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_FILMES_1} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_FILMES_2} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_FILMES_2_SINOPSE} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_FILMES_3} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_FILMES_4} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_FILMES_5} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_FILMES_6} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_FILMES_7} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_FILMES_8} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_FILMES_9} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_FILMES_10} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_FILMES_11} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_FILMES_12} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_FILMES_13} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_FILMES_14} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_FILMES_14_EP1} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_FILMES_14_EP2} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_FILMES_14_EP3} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_FILMES_14_EP4} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_FILMES_14_EP5} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_FILMES_14_EP6} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_FILMES_14_EP7} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_FILMES_14_EP8} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_FILMES_14_EP9} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_FILMES_14_EP10} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_FILMES_14_EP11} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_FILMES_14_EP12} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_FILMES_14_EP13} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_FILMES_15} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />

        <Route path={ROUTES.ACHIROPITA_PATRIMONIO} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PATRIMONIO_IGREJA} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PATRIMONIO_PINTURAS} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.ACHIROPITA_PATRIMONIO_ESCULTURAS} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />

        <Route path={ROUTES.ACHIROPITA_PATRIMONIO_PAINEIS} exact render={(props2) => (
          <Achiropita getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />

        {/* BIXIGA ROUTES */}
        <Route path={ROUTES.BIXIGA} exact render={(props2) => (
          <Bixiga getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />

        <Route path={ROUTES.BIXIGA_HISTORIA} exact render={(props2) => (
          <Bixiga getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.BIXIGA_HISTORIA_MIGRACAO} exact render={(props2) => (
          <Bixiga getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />

        <Route path={ROUTES.BIXIGA_CULTURA} exact render={(props2) => (
          <Bixiga getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.BIXIGA_CULTURA_ESPACOS} exact render={(props2) => (
          <Bixiga getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.BIXIGA_CULTURA_ESPACOS_1} exact render={(props2) => (
          <Bixiga getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.BIXIGA_CULTURA_TEATROS} exact render={(props2) => (
          <Bixiga getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />

        <Route path={ROUTES.BIXIGA_MUSICA} exact render={(props2) => (
          <Bixiga getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.BIXIGA_MUSICA_VAIVAI} exact render={(props2) => (
          <Bixiga getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.BIXIGA_MUSICA_BLOCOS} exact render={(props2) => (
          <Bixiga getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />

        <Route path={ROUTES.BIXIGA_PERSONAGENS} exact render={(props2) => (
          <Bixiga getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.BIXIGA_PERSONAGENS_1} exact render={(props2) => (
          <Bixiga getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.BIXIGA_PERSONAGENS_2} exact render={(props2) => (
          <Bixiga getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.BIXIGA_PERSONAGENS_2_VIDEO} exact render={(props2) => (
          <Bixiga getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.BIXIGA_PERSONAGENS_3} exact render={(props2) => (
          <Bixiga getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.BIXIGA_PERSONAGENS_3_VIDEO} exact render={(props2) => (
          <Bixiga getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.BIXIGA_PERSONAGENS_4} exact render={(props2) => (
          <Bixiga getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.BIXIGA_PERSONAGENS_5} exact render={(props2) => (
          <Bixiga getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.BIXIGA_PERSONAGENS_6} exact render={(props2) => (
          <Bixiga getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />

        <Route path={ROUTES.BIXIGA_PATRIMONIO} exact render={(props2) => (
          <Bixiga getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.BIXIGA_PATRIMONIO_1} exact render={(props2) => (
          <Bixiga getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />
        <Route path={ROUTES.BIXIGA_PATRIMONIO_2} exact render={(props2) => (
          <Bixiga getHistory={props.getHistory} historyObject={props.historyObject} {...props2} />
        )} />

      </Switch>
    </>
  )
}

export default AllRoutes;
