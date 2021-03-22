import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const SEO = ({ headTitle }) => {
  const baseTitle = process.env.NEXT_PUBLIC_TITLE_PAGE;
  const hasHeadTitle = Boolean(headTitle);
  const title = hasHeadTitle ? `${headTitle} | ${baseTitle}` : baseTitle;

  const description =
    'Portifólios de projetos Web desenvolvidos por Pedro de Paula';
  const image = '/images/seo.jpg';
  const urlBase = 'https://portifolio-pmdpaula.vercel.app/';

  return (
    <Head>
      <title>{title}</title>

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={urlBase} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={urlBase} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
};

export default SEO;

SEO.defaultProps = {
  headTitle: '',
};

SEO.propTypes = {
  headTitle: PropTypes.string,
};
