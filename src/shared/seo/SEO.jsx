import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_TITLE, SITE_DESCRIPTION } from './seoConfig';

/**
 * Métadonnées par page. Les valeurs par défaut sont celles de l'accueil et
 * doivent rester alignées sur le <head> statique de index.html (SEO no-JS).
 * Les autres pages passent leur propre title / description.
 */
const SEO = ({ title = SITE_TITLE, description = SITE_DESCRIPTION }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
  </Helmet>
);

export default SEO;
