import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Simple SEO component.
 * Props:
 *   title – page title (appears in <title> and as Open Graph title)
 *   description – meta description and Open Graph description
 */
const SEO = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    {/* Open Graph */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
  </Helmet>
);

export default SEO;
