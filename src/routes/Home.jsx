import Container from 'react-bootstrap/Container';

import Header from '../components/Header';
import CountriesList from '../components/CountriesList';

import styes from '../styles/Home.module.scss';
import heroImg from '../Images/screaming-earth.jpg';

const Home = () => (
  <>
    <Header isHome="home" />
    <section className={styes.hero}>
      <figure>
        <div className={styes.hero_backdrop}>
          <div className={styes.hero_title}>
            <h1>
              Air Pollution
              <span>Europe | Metrics</span>
            </h1>
          </div>
          <img className={styes.hero_Img} src={heroImg} alt="Screeming earth art" />
        </div>
        <figcaption>
          <Container>
            <span>
              <span>Image by </span>
              <a
                className={styes.hero_link}
                href="https://www.freepik.com/free-vector/sick-earth-from-pollution-concept_4485459.htm#query=air%20pollution&position=24&from_view=search&track=ais"
              >
                brgfx
              </a>
              <span> on Freepik</span>
            </span>
          </Container>
        </figcaption>
      </figure>
    </section>
    <CountriesList />
  </>
);
export default Home;
