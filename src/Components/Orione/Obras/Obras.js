import { Link } from "react-router-dom";
import { Card, Button, CardColumns } from "react-bootstrap";

import ROUTES from '../../constants/routes';
import "./Obras.css";
import Navbar from '../../Navbar/Navbar';

const Obras = () => {
  return (
    <>
      <Navbar />
      <div className="obras-container">
        <h2 className="obras-title">No Brasil</h2>
        <CardColumns>
          <Card>
            <Card.Body>
              <Card.Title>1906-1923</Card.Title>
              <Card.Text>
              A motivação da evangelização e a vinda de São Orione ao Brasil.
              </Card.Text>
              <Link to={ROUTES.ORIONE_OBRAS_TXT}>
                <Button variant="secondary">Acessar</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>1923-1934</Card.Title>
              <Card.Text>
              A chegada ao Brasil e ação dos pioneiros.{' '}
              </Card.Text>
              <Button variant="secondary">Acessar</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>1934-1940</Card.Title>
              <Card.Text>
              Pequena Obra da Divina Providência de Don Orione no Brasil e a segunda estada do santo na América.
              </Card.Text>
              <Button variant="secondary">Acessar</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>1940-1947</Card.Title>
              <Card.Text>
              Consolidação da evangelização orionita no Brasil em SP, RJ e MG.
              </Card.Text>
              <Button variant="secondary">Acessar</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>1972-2002</Card.Title>
              <Card.Text>
              Casas de Don Orione no Rio Grande do Sul.
              </Card.Text>
              <Button variant="secondary">Acessar</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Missionários pioneiros no Brasil</Card.Title>
              <Card.Text>
              Lista dos falecidos.
              </Card.Text>
              <Button variant="secondary" className="mb-3">Ver lista Falecidos</Button>
              <Button variant="secondary">Ver lista Falecidos no Brasil</Button>
            </Card.Body>
          </Card>
        </CardColumns>
      </div>
    </>
  )
};

export default Obras;
