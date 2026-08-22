import React from 'react';
import styles from './Ugc.module.css';

const whatsappAudit = 'https://wa.me/212620001002?text=Bonjour%2C%20je%20souhaite%20un%20audit%20de%20mon%20site.';

const projects = [
  { tag: 'Etude de cas · clinique laser', title: 'Rassurer avant le rendez-vous', text: 'Services, prise de RDV, presence et equipement valide.', file: 'laser_clinic_case_study_ugc_9x16.mp4' },
  { tag: 'Etude de cas · voyage', title: "Passer de l'envie a la reservation", text: 'Recherche, destinations et formats de voyage.', file: 'dak_travel_3d_ugc_9x16.mp4' },
  { tag: 'Etude de cas · dentaire', title: 'Rendre le parcours patient evident', text: 'Rendez-vous, services et presentation du cabinet.', file: 'dental_clinicv2_corrected_ugc_9x16.mp4' },
];

const offers = [
  { label: 'Pour tester', title: 'Reel de conversion', text: 'Une video courte, prete a publier.', price: 'Des 1 500 MAD', items: ['1 Reel 20-25 s', 'Script + voix + sous-titres', '1 correction'] },
  { label: 'Le plus demande', title: 'Pack lancement', text: 'Trois angles pour presenter votre site.', price: 'Des 4 200 MAD', items: ['3 Reels distincts', 'Hooks varies', 'Legendes incluses'], featured: true },
  { label: 'Pour publier', title: 'Contenu mensuel', text: 'Une presence reguliere sans repartir de zero.', price: 'Des 6 500 MAD/mois', items: ['4 Reels / mois', 'Angles renouveles', 'Planification mensuelle'] },
  { label: 'Pour lancer', title: 'Site + social', text: 'Votre site et son kit de contenu reunis.', price: 'Sur devis', items: ['Site ou landing page', 'Pack lancement', 'CTA optimises'] },
];

const faqs = [
  ['Utilisez-vous de vraies captures de mon site ?', 'Oui. Les sections affichees viennent de votre site et sont presentees dans un mockup navigateur propre. Aucun faux ecran n’est cree.'],
  ['Quelles langues sont possibles ?', 'Francais, Darija et anglais. Le ton et la voix sont choisis selon votre audience et votre plateforme.'],
  ['Combien de retours sont inclus ?', 'Le nombre est defini dans chaque offre. Regrouper vos retours en une seule fois accelere la livraison.'],
  ['Pouvez-vous aussi creer ou ameliorer le site ?', 'Oui. La video peut etre vendue seule, ou integree a une landing page, une refonte de site ou une solution IA sur mesure.'],
  ['Les videos garantissent-elles des ventes ?', 'Non. Elles rendent l’offre et le parcours plus clairs. Les resultats dependent aussi de l’offre, du trafic, du ciblage et de la diffusion.'],
];

function Ugc() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <section className={styles.hero}>
          <div className={styles.glow} />
          <p className={styles.eyebrow}>Web design x contenu vertical</p>
          <h1>Votre site mérite plus qu’une mise en ligne.<br /><em>Il mérite d’être compris.</em></h1>
          <p className={styles.heroText}>Je transforme votre site en Reels courts, crédibles et prêts à publier, avec vos vraies pages, un script orienté conversion et une voix off en français, Darija ou anglais.</p>
          <div className={styles.actions}>
            <a className={styles.button} href="#offres">VOIR LES OFFRES</a>
            <a className={`${styles.button} ${styles.buttonDark}`} href="#projets">VOIR LES ÉTUDES DE CAS</a>
          </div>
          <div className={styles.trust}><span>✓ Screenshots réels du site</span><span>✓ TikTok & Instagram Reels</span><span>✓ 20-25 secondes</span><span>✓ FR · Darija · EN</span></div>
        </section>

        <section className={styles.section}>
          <p className={styles.eyebrow}>Le problème</p>
          <h2>Un beau site ne convertit pas si personne ne comprend quoi faire ensuite.</h2>
          <p className={styles.intro}>Services difficiles à repérer, formulaire invisible, parcours peu clair : vos futurs clients hésitent. Une vidéo courte montre l’essentiel avant même le premier appel.</p>
          <div className={styles.grid}>
            {[
              ['01 / CLARTÉ', 'Votre offre, en quelques secondes', 'Un hook direct, puis les sections concrètes du site qui expliquent le service, le produit ou le parcours.'],
              ['02 / CRÉDIBILITÉ', 'Vos vraies pages, pas une fausse interface', 'Le montage utilise des captures réelles dans un mockup navigateur propre. Le prospect reconnaît votre univers.'],
              ['03 / ACTION', 'Un seul CTA, facile à suivre', 'Demande de devis, prise de rendez-vous, réservation ou DM : chaque vidéo mène vers une action précise.'],
            ].map(([number, title, text]) => <article className={styles.card} key={number}><span className={styles.number}>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>

        <section className={styles.section} id="projets">
          <p className={styles.eyebrow}>Études de cas</p>
          <h2>Des formats pensés pour les sites qui doivent convaincre vite.</h2>
          <p className={styles.intro}>Ces exemples sont identifiés comme études de cas. Les interfaces montrées dans les vidéos proviennent des captures des projets correspondants.</p>
          <div className={styles.workGrid}>
            {projects.map((project) => <article className={styles.workCard} key={project.file}><video className={styles.videoPlaceholder} style={{ width: '100%', objectFit: 'cover' }} controls preload="metadata" aria-label={project.title}><source src={`/videos/${project.file}`} type="video/mp4" />Votre navigateur ne prend pas en charge la lecture vidéo.</video><span className={styles.tag}>{project.tag}</span><h3>{project.title}</h3><p>{project.text}</p></article>)}
          </div>
          <p className={styles.note}>Remplacez ou retirez toute étude de cas pour laquelle vous n’avez pas l’autorisation d’afficher la marque ou les visuels publiquement.</p>
        </section>

        <section className={styles.section} id="offres">
          <p className={styles.eyebrow}>Offres simples</p>
          <h2>Choisissez le volume adapté à votre lancement.</h2>
          <div className={styles.offerGrid}>{offers.map((offer) => <article className={`${styles.offer} ${offer.featured ? styles.offerFeatured : ''}`} key={offer.title}><span className={styles.number}>{offer.label}</span><h3>{offer.title}</h3><p>{offer.text}</p><strong>{offer.price}</strong><ul>{offer.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
          <p className={styles.note}>Tarifs indicatifs : adaptez-les selon la langue, le volume, la complexité et les droits des assets fournis.</p>
        </section>

        <section className={styles.section} id="process">
          <p className={styles.eyebrow}>Process clair</p>
          <h2>De votre URL à un Reel prêt à publier.</h2>
          <div className={styles.process}>{[['01', 'Vous envoyez l’URL', 'Je repère les sections qui expliquent votre offre et font passer à l’action.'], ['02', 'Je construis l’angle', 'Script court, hook précis, CTA unique et informations uniquement vérifiables.'], ['03', 'Je monte votre étude de cas', 'Captures réelles, fenêtre navigateur nette, voix off et sous-titres.'], ['04', 'Vous publiez', 'Vidéo verticale livrée pour Reels et TikTok, avec légende prête à adapter.']].map(([step, title, text]) => <article className={styles.step} key={step}><span>{step}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </section>

        <section className={styles.section}>
          <p className={styles.eyebrow}>Pour qui ?</p>
          <h2>Les niches à travailler maintenant.</h2>
          <div className={styles.niches}>{[['Cliniques · esthétique · dentaire', 'Services, réassurance, technologie validée et prise de rendez-vous.'], ['Voyage · hôtels · activités', 'Destinations, séjours, réservation, groupes et sur mesure.'], ['E-commerce DTC', 'Collections, produit, panier, bénéfices et parcours de commande.'], ['Agences web en white-label', 'Vous livrez les Reels sous leur marque, elles gardent la relation client.']].map(([title, text]) => <article className={styles.niche} key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </section>

        <section className={styles.section}>
          <p className={styles.eyebrow}>Ce que vous recevez</p>
          <h2>Un contenu prêt à publier, pas seulement un fichier vidéo.</h2>
          <div className={styles.dual}><article className={styles.deliverable}><h3>Votre kit de conversion</h3><ul><li>Analyse de l’URL et des sections qui comptent</li><li>Script court avec hook, preuve et CTA</li><li>Reel vertical optimisé 9:16</li><li>Voix off, sous-titres et musique discrète</li><li>Légende prête à adapter</li><li>Fichiers prêts pour Reels et TikTok</li></ul></article><article className={styles.agency}><p className={styles.eyebrow}>Pour les agences</p><h3>Production white-label</h3><p>Vous créez les sites ou gérez les campagnes ? Je fournis les scripts et Reels de démonstration sous votre marque. Vous gardez la relation client ; je livre le contenu prêt à publier.</p><a className={styles.textLink} href={`${whatsappAudit}&source=white-label`} target="_blank" rel="noreferrer">PARLER DU WHITE-LABEL →</a></article></div>
        </section>

        <section className={styles.section} id="faq">
          <p className={styles.eyebrow}>Questions fréquentes</p>
          <h2>Tout est clair avant de commencer.</h2>
          <div className={styles.faqLayout}><div>{faqs.map(([question, answer], index) => <details className={styles.faq} open={index === 0} key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div><form className={styles.auditForm} action="https://formsubmit.co/zaid.dakengineer@gmail.com" method="POST"><input type="hidden" name="_subject" value="Nouvelle demande audit UGC" /><input type="hidden" name="_captcha" value="false" /><h3>Recevez un angle pour votre premier Reel.</h3><p>Envoyez votre URL et votre objectif. Je vous répondrai avec la section à mettre en avant.</p><label htmlFor="nom">Nom / entreprise</label><input required id="nom" name="nom" placeholder="Votre nom ou votre entreprise" /><label htmlFor="url">URL du site</label><input required id="url" type="url" name="url" placeholder="https://" /><label htmlFor="objectif">Objectif principal</label><select id="objectif" name="objectif"><option>Prise de rendez-vous</option><option>Demande de devis</option><option>Réservation</option><option>Vente e-commerce</option><option>Autre</option></select><label htmlFor="langue">Langue souhaitée</label><select id="langue" name="langue"><option>Français</option><option>Darija</option><option>Anglais</option></select><label htmlFor="message">Message (facultatif)</label><textarea id="message" name="message" placeholder="Parlez-moi de votre offre ou de votre besoin." /><button className={styles.button} type="submit">DEMANDER MON AUDIT</button></form></div>
        </section>
      </div>
      <section className={styles.cta}><div className={styles.shell}><p className={styles.eyebrow}>Prêt à utiliser votre site autrement ?</p><h2>Montrez votre offre.<br />Donnez envie d’agir.</h2><p>Envoyez-moi votre URL. Je vous dirai quelle section peut devenir votre premier Reel de conversion.</p><a className={styles.button} href={whatsappAudit} target="_blank" rel="noreferrer">DM AUDIT</a></div></section>
      <a className={`${styles.button} ${styles.floating}`} href={whatsappAudit} target="_blank" rel="noreferrer">DM AUDIT</a>
    </main>
  );
}

export default Ugc;
