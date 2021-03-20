import React from 'react';

import './third-section.scss';
import './third-section-mb.scss';
import MemberCard from '../../../sub-components/memberCard/memberCard';

import taynaImg from '../../../assets/tayna.png' 
import evandroImg from '../../../assets/evandro.png' 
import victorImg from '../../../assets/victor.png' 

const thirdSection = ({title, title2, subtitle}) => 
  <section className="about-us third-section">
    <div>
      <h3>{subtitle}</h3>
      <div className="subtitle-border">
        <span></span>
      </div>
      <h2>{title}</h2>
      <h2>{title2}</h2>
    </div>
    <div className="content">
      <MemberCard
        title="Tayná Fujishima"
        subtitle="Design & Produto"
        img={taynaImg}
        alt="Tayná Fujishima"
      />
      <MemberCard
        title="Evandro Neder"
        subtitle="Tecnologia"
        img={evandroImg}
        alt="Evandro Neder"
      />
      <MemberCard
        title="Victor Rafael"
        subtitle="Tecnologia"
        img={victorImg}
        alt="Victor Rafael"
      />
    </div>
  </section>


export default thirdSection;