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
    title: "Sites web qui guident vers l'action",
    description: "Landing pages, sites vitrines et expériences e-commerce pensés pour rendre votre offre compréhensible et faciliter les demandes de devis, rendez-vous ou commandes.",
    bullets: ['Landing pages de conversion', 'Sites vitrines et e-commerce', 'Parcours mobile et CTA clairs'],
    cta: 'PARLER DE MON SITE',
    href: 'https://wa.me/212620001002?text=Bonjour%20Digitalwebcraft%2C%20je%20souhaite%20discuter%20de%20mon%20site.',
    external: true,
  },
  {
    number: '02',
    image: automationImage,
    alt: 'Interface d’automatisation et de suivi des demandes',
    title: 'Des systèmes qui font gagner du temps',
    description: "J’automatise les tâches répétitives et les parcours de demandes : formulaires connectés, suivi de leads, FAQ assistées et solutions IA adaptées à votre fonctionnement.",
    bullets: ['Formulaires, WhatsApp et outils métier', 'Qualification et suivi des demandes', 'Solutions IA sur mesure'],
    cta: 'EXPLORER UNE SOLUTION IA',
    href: 'https://wa.me/212620001002?text=Bonjour%20Digitalwebcraft%2C%20je%20souhaite%20discuter%20d%27une%20solution%20IA%20ou%20d%27automatisation.',
    external: true,
  },
  {
    number: '03',
    image: ugcImage,
    alt: 'Aperçu d’un Reel vertical créé à partir d’un site web',
    title: 'Reels qui transforment votre site en contenu',
    description: 'Je transforme vos vraies pages en vidéos verticales pour Instagram et TikTok : hook, script, voix off, sous-titres et CTA prêt à publier.',
    bullets: ['Captures réelles de votre site', 'Voix en français, Darija ou anglais', 'Format 9:16 prêt pour Reels et TikTok'],
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
          <h2 className={styles.servicesTitle} id="services-title">Ce que Digitalwebcraft peut construire pour votre activité.</h2>
          <p className={styles.servicesIntro}>
            Chaque service a un objectif simple : rendre votre offre plus claire, vos demandes plus faciles à gérer et votre présence digitale plus utile.
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