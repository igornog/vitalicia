import React from 'react';

import './founders.scss';
import './founders-mb.scss';

const FounderCard = ({title, subtitle, subtitleStrong, img, alt, link}) => 
  <section className="founder-card-section">
    <figure>
      <img src={img} alt={alt}/>
    </figure>
    <article>
      <div>
        <h4>{title}</h4>
        <p>{subtitle}<strong>{subtitleStrong}</strong></p>
      </div>
      <a href={link}>
        <span>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
            <path d="M21.9945 22V21.9991H22V13.9306C22 9.98345 21.1503 6.94287 16.5358 6.94287C14.3174 6.94287 12.8288 8.1602 12.221 9.31429H12.1569V7.31137H7.78162V21.9991H12.3374V14.7263C12.3374 12.8114 12.7004 10.9597 15.0719 10.9597C17.4084 10.9597 17.4433 13.145 17.4433 14.8491V22H21.9945Z" fill="white"/>
            <path d="M0.362976 7.31226H4.92431V22H0.362976V7.31226Z" fill="white"/>
            <path d="M2.64183 0C1.18342 0 0 1.18342 0 2.64183C0 4.10025 1.18342 5.30842 2.64183 5.30842C4.10025 5.30842 5.28367 4.10025 5.28367 2.64183C5.28275 1.18342 4.09933 0 2.64183 0V0Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0">
            <rect width="22" height="22" fill="white"/>
            </clipPath>
            </defs>
          </svg>
        </span>
      </a>
    </article>    
  </section>

export default FounderCard;