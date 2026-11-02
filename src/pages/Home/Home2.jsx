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
            <h2 style={{ fontSize: "2.6em" }}>
              À <span className="purple">PROPOS</span> DE MOI
            </h2>
            <p className={styles.homeAboutBody}>
              Je ne me présente pas seulement comme un freelance : je construis
              des parcours qui transforment l'attention en demandes concrètes.
              <br /><br />
              J'accompagne les PME sur leur visibilité Instagram, leurs publicités,
              leur site web et leurs chatbots IA, avec un objectif simple : plus de
              prospects qualifiés et plus de rendez-vous.
              <br /><br />
              <i><b className="purple">Une approche orientée résultat : un message clair, des actions mesurables et des améliorations continues.</b></i>
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
            <h2>RETROUVEZ-MOI</h2>
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
