import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import styles from "./Home.module.css";

function Home2() {
  return (
    <Container fluid className={styles.homeAboutSection} id="about">
      <Container>
        <Row>
          <Col md={8} className={styles.homeAboutDescription}>
            <h1 style={{ fontSize: "2.6em" }}>
              A <span className="purple"> PROPOS </span> DE MOI
            </h1>
            <p className={styles.homeAboutBody}>
Je ne me presente pas seulement comme un freelance.             <br />
              <br />Je construis des experiences digitales qui aident les entreprises a mieux vendre, mieux expliquer leur offre et gagner du temps.
              <i>
                <b className="purple"> Mon approche melange design, performance et automatisation utile.  </b>
              </i>
              <br />
              <br />
              Mes domaines d'expertise couvrent la creation de &nbsp;
              <i>
                <b className="purple">sites vitrines, applications web, experiences utilisateur plus fluides et integrations IA concretes. </b> ainsi que
                des sujets lies au{" "}
                <b className="purple">
                  cloud et a l'automatisation.
                </b>
              </i>
              <br />
              <br />
            
              Ma valeur ne se limite pas au code : elle se mesure a l'<b className="purple">impact</b>, a la clarte du message et a la qualite d'execution.
              <i>
                <b className="purple">
                  {" "}
                  Je livre, j'itere et j'ameliore chaque projet avec exigence.
                </b>
              </i>
              <i>
                <b className="purple"> Chaque projet doit etre utile, credible et orienté resultat.
</b>
              </i>
            </p>
          </Col>
          <Col md={4} className={styles.myAvatar}>
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className={styles.homeAboutSocial}>
            <h1>RETROUVEZ-MOI</h1>
            <p>
              N'hesitez pas a <span className="purple">me contacter </span>ou a suivre mon travail
            </p>
            <ul className={styles.homeAboutSocialLinks}>
              <li className="social-icons">
                <a
                  href="https://github.com/Dakster-z"
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles.homeSocialIcons} icon-colour`}
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/ZaidDakir79416"
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles.homeSocialIcons} icon-colour`}
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/zaid-dakir-31253a26a/"
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles.homeSocialIcons} icon-colour`}
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="--"
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles.homeSocialIcons} icon-colour`}
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
