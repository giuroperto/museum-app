import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import "./Biografia.css";
// import Footer from '../Footer/Footer';
import Navbar from '../../Navbar/Navbar';

const Biografia = () => {
  return (
    <>
      <Navbar />
      <div className="biografia-container">
        <h2>Linha do Tempo da Vida, Obra e Canonização de Don Orione*</h2>
        <span className="subtitle">* Traduzido a partir de texto extraído de “Don Orione – La Vita”. Sito Ufficiale della Piccola Opera della Divina Provvidenza, em http://www.donorione.org/Public/ContentPage/content.asp?hdnIdContent=38</span>
        <div className="biografia-block">
          <div className="date-container">
            <span className="txt-date">1872</span>
            <p>Em 23 de junho nasceu em Pontecurone, no Piemonte.</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1885</span>
            <p>Em 14 de setembro ingressa na ordem dos franciscanos de Voghera; mas retira-se em junho de 1886 devido a uma doença.</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1886</span>
            <p>Em 4 de outubro entra no Oratório de Valdocco (Torino), de orientação salesiana; ele ficou lá por três anos.</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1889</span>
            <p>Em 16 de outubro entra no seminário de sua diocese, Tortona (AL). Ele frequentou seus estudos com sucesso e trabalhou como zelador no Duomo.</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1892</span>
            <p>Em 2 de março começa o apostolado a favor dos jovens, reunindo os jovens para jogos e catecismo. No dia 3 de julho seguinte, inauguração do Oratório San Luigi.</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1893</span>
            <p>Em 15 de outubro o clérigo Orione, de 21 anos, abre o primeiro colégio no bairro de San Bernardino de Tortona.</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1894</span>
            <p>Em 15 de outubro o Colégio é transferido para a mais espaçosa "Santa Chiara"; abertura de casas de estudantes em Gênova e Torino. </p>
          </div>
          <div className="date-container">
            <span className="txt-date">1895</span>
            <p>Em 13 de abril Dom Luigi Orione é ordenado sacerdote.</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1896</span>
            <p>Em outubro ele funda uma casa em Mornico Losana.</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1898</span>
            <p>Em 5 de agosto começa a publicação de "A Obra da Divina Providência". Em setembro é chamado a Noto (Siracusa) por Dom Bandini; aqui ele aceita o Colégio Episcopal de San Luigi e posteriormente a Colônia Agrícola.</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1899</span>
            <p>Em 30 de julho são ordenados os primeiros Eremitas da Divina Providência. Em outubro, o Collegio San Romolo é inaugurado em Sanremo.</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1901-1902</span>
            <p>Inicia as colônias agrícolas de Bagnorea, Cegni di Varzi e, em Roma, de Nunziatella, de S. Giuseppe alla Balduina, de Santa Maria a Monte Mario.</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1903</span>
            <p>Em 21 de março: aprovação diocesana da Pequena Obra de Dom Igino Bandi, bispo de Tortona.</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1904</span>
            <p>No mês de maio, em Tortona, é feita a transferência definitiva da Casa Mãe, denominada "Convitto Paterno". É confiada a guarda da Igreja de Sant'Anna dei Palafrenieri no Vaticano.</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1905</span>
            <p>Dom Orione abre sua primeira gráfica em Tortona.</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1908</span>
            <p>Em 25 de março: a pedido de Pio X, Dom Orione inicia seu ministério no bairro de Appio, em Roma, "a Patagônia Romana".</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1909</span>
            <p>Em 4 de janeiro, ele partiu para a Sicília para trazer os primeiros e urgentes esforços de socorro após o desastroso terremoto em Reggio e Messina; abre um orfanato em Cassano Ionio.</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1909</span>
            <p>Em 15 de junho, Pio X o nomeia Vigário Geral da Diocese de Messina.</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1911</span>
            <p>Em 8 de dezembro Don Orione compra a Villa Moffa, em Bra (CN): será o noviciado e a casa de estudos da Ópera Piccola.</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1912</span>
            <p>Em abril, Dom Orione retorna a Tortona, depois dos três anos que passou na Sicília. Em 19 de abril, durante uma audiência, emite os votos perpétuos nas mãos do Papa São Pio X.</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1913</span>
            <p>Em dezembro os primeiros Missionários orionitas partem para o Brasil.</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1915</span>
            <p>Em 13 de janeiro: outro terrível terremoto acontece em Avezzano; Dom Orione ajuda com presteza e generosidade heróica.</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1915</span>
            <p>Em 29 de junho, Dom Orione dá início à Congregação das Pequenas Irmãs Missionárias da Caridade. Ocorre a inauguração do primeiro Piccolo Cottolengo em Ameno (Novara).</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1918</span>
            <p>Em 29 de agosto, Don Orione implora pelo fim da grande guerra mundial, e jura, com o povo de Tortona, construir um santuário para a Madonna della Guardia.</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1921</span>
            <p>Em 4 de agosto, Dom Orione parte para a América do Sul, em viagem aos países: Brasil, Argentina e Uruguai. Novas obras na Colônia Agrícola de Rafat (Palestina); no Rio de Janeiro, a Casa da Preservação; em Puerto Mar del Plata, Paróquia e Colégio San Francesco; em Buenos Aires, Marcos Paz Reformatory. Retorna à Itália em 4 de julho de 1922.</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1923</span>
            <p>É fundada a primeira casa na Polônia, em Zdunska Wola; reabertura da Ermida de Sant'Alberto di Butrio onde chega Frate Ave Maria.</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1924</span>
            <p>Em 19 de março ocorre a fundação do genovês Piccolo Cottolengo.</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1925</span>
            <p>Em 30 de junho, Don Orione assume um orfanato em Acandia (Ilha de Rodes).</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1927</span>
            <p>Em 15 de agostoé fundado o ramo das Irmãs Sacramentinas cegas, em Tortona.</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1929</span>
            <p>Começa a publicação do periódico mariano "Mater Dei".</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1931</span>
            <p>Em 29 de agosto é inaugurado o Santuário Madonna della Guardia em Tortona.</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1933</span>
            <p>Em novembro, é aberto o Piccolo Cottolengo em Milão.</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1934</span>
            <p>Tem origem a primeira casa nos Estados Unidos, em Jasper, Indiana.</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1934</span>
            <p>No dia 24 de setembro, Don Orione parte para a segunda viagem à América Latina.</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1935</span>
            <p>Em 18 de abril começa o Piccolo Cottolengo Argentino, em Claypole (Buenos Aires).</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1936</span>
            <p>Começa a atuação da Ópera Piccola na Inglaterra, Cardiff e Gales do Sul para ajudar os emigrantes italianos. Também é inaugurado na Albânia, em Shijak, para assistência aos trabalhadores italianos.</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1937</span>
            <p>Em 24 de agosto Don Orione retornou à Itália,proveniente da América do Sul.</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1938</span>
            <p>São inaugurados os novos institutos "San Filippo Neri" em Roma e "Artigianelli" em Alexandria. Lançamento do Milanese Piccolo Cottolengo.</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1939</span>
            <p>Em 1 ° de abril, Dom Orione sofre uma grave crise de angina de peito em Alexandria. Ele está se recuperando. Em maio, inauguração da Villa Santa Caterina em Genoa-Molassana, para nobres caídas, inauguração do Santuário da Madonna di Caravaggio, em Fumo (Pavia).</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1940</span>
            <p>Em 9 de fevereiro, uma nova crise de angina de peito ameaça a vida de Dom Orione; recebe os últimos sacramentos; recupera-se um pouco. Ele passa seus últimos dias em Tortona. No dia 6 de março faz uma última visita ao Santuário da Guarda e às comunidades;</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1940</span>
            <p>No dia 8 de março com o último "Boa noite" na Casa Mãe, saúda os confrades;</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1940</span>
            <p>Em 9 de março ele parte para Sanremo.</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1940</span>
            <p>No dia 12 de março: última Santa Missa e último telegrama ao Papa; às 22h45, com as palavras "Jesus, Jesus, Jesus ... eu vou!", ele parte para o Senhor.</p>
          </div>
          <div className="date-container">
            <span className="txt-date">1980</span>
            <p>Em 26 de outubro: Dom Orione é proclamado "bem-aventurado" em Roma pelo Papa João Paulo II.</p>
          </div>
          <div className="date-container">
            <span className="txt-date">2003</span>
            <p>Em 7 de julho de 2003 é promulgado o decreto que reconhece um milagre por intercessão de Dom Orione.</p>
          </div>
          <div className="date-container">
            <span className="txt-date">2004</span>
            <p>No dia 19 de fevereiro, durante o Consistório dos Cardeais, anúncio da canonização de padre Luigi Orione.</p>
          </div>
          <div className="date-container">
            <span className="txt-date">2004</span>
            <p>Em 16 de maio acontece a canonização de Dom Luigi Orione na Praça de São Pedro pelo Papa João Paulo II.</p>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  )
};

export default Biografia;
