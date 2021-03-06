import './about-us.scss';
import './about-us-mb.scss';
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import FooterMobile from '../../components/footer/footer-mb'

import FirstSection from '../../components/aboutus-components/first-section/FirstSection'
import SecondSection from '../../components/aboutus-components/second-section/SecondSection'
import ThirdSection from '../../components/aboutus-components/third-section/ThirdSection'
import aboutusImg from "../../../src/assets/about-us-img.png"

function AboutUs() {
  return (
    <div className="App">
    <Header/>
    <FirstSection
      img={aboutusImg}
      alt="Sobre nós"
    />
    <SecondSection
      title="Fundadores"
      subtitle="quem faz acontecer"
    />
    <ThirdSection
      title="Nosso time"
      subtitle="quem faz acontecer"
    />
    <Footer/>
    <FooterMobile/>
    </div>
  );
}

export default AboutUs;
