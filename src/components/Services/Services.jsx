import React from 'react';
import styles from './Services.module.css';

import portfolioImage from '../../Assets/Services/uiux-portfolio.png';
import automationImage from '../../Assets/Services/automation-uiux.png';
import ugcImage from '../../Assets/Services/ugc-uiux.png';

const services = [
  {
    number: '01',
    image: portfolioImage,
    alt: 'Interface de portfolio et landing page orientée conversion',
    title: "Un site web qui transforme les visites en demandes",
    description: "Landing pages et sites vitrines pensés pour rendre votre offre compréhensible et faciliter les demandes de devis, les rendez-vous et les commandes.",
    bullets: ['Landing pages et sites vitrines', "Parcours mobile et appels à l'action clairs", 'Demandes de devis et rendez-vous simplifiés'],
    cta: 'PARLER DE MON SITE',
    href: 'https://wa.me/212620001002?text=Bonjour%20Digitalwebcraft%2C%20je%20souhaite%20discuter%20de%20mon%20site.',
    external: true,
  },
  {
    number: '02',
    image: automationImage,
    alt: 'Interface d’automatisation et de suivi des demandes',
    title: 'Instagram et publicités pour attirer les bons prospects',
    description: "Je gère vos publications et vos campagnes pour amener des personnes réellement intéressées, puis je suis les demandes jusqu'au rendez-vous.",
    bullets: ['Gestion et calendrier éditorial', 'Campagnes ciblées et suivi des demandes', "Messages qui donnent envie d'agir"],
    cta: 'PARLER DE MA VISIBILITÉ',
    href: 'https://wa.me/212620001002?text=Bonjour%20Digitalwebcraft%2C%20je%20souhaite%20discuter%20d%27une%20solution%20IA%20ou%20d%27automatisation.',
    external: true,
  },
  {
    number: '03',
    image: ugcImage,
    alt: 'Aperçu d’un Reel vertical créé à partir d’un site web',
    title: 'Des vidéos courtes qui donnent envie de vous contacter',
    description: "Je transforme vos pages en vidéos verticales pour Instagram et TikTok : hook, script, voix off, sous-titres et appel à l'action prêt à publier.",
    bullets: ['Captures réelles de votre site', 'Voix en français, darija ou anglais', "Appel à l'action prêt à publier"],
    cta: 'DÉCOUVRIR L’OFFRE UGC',
    href: '/ugc',
    external: false,
  },
];

function Services() {
  return (
    <section className={styles.servicesSection} id="services" aria-labelledby="services-title">
      <div className={styles.servicesContainer}>
        <div className={styles.servicesHeader}>
          <p className={styles.eyebrow}>SERVICES DIGITALWEBCRAFT</p>
          <h2 className={styles.servicesTitle} id="services-title">Ce que je mets en place pour amener plus de clients.</h2>
          <p className={styles.servicesIntro}>
            Chaque service poursuit le même objectif : amener plus de prospects qualifiés et transformer leurs demandes en rendez-vous.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <article className={styles.serviceCard} key={service.number}>
              <div className={styles.imageWrap}>
                <img src={service.image} alt={service.alt} className={styles.serviceImage} />
                <span className={styles.numberBadge} aria-label={`Service ${service.number}`}>{service.number}</span>
              </div>
              <div className={styles.cardContent}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
                <a
                  href={service.href}
                  className={styles.ctaButton}
                  target={service.external ? '_blank' : undefined}
                  rel={service.external ? 'noreferrer' : undefined}
                >
                  {service.cta}<span aria-hidden="true"> →</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
      </section>
  );
}

export default Services;