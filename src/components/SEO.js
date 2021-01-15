import NextHead from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

const BASE_URL = base => {
  return !/^(https|http):\/\/+/.test(base)
    ? `https://nextjs-template.now.sh/${base}`
    : base;
};
const HeadComponent = ({ title, description, image, url, children }) => {
  const metaImage = BASE_URL(image);

  return (
    <NextHead>
      <title>{title}</title>

      <link itemProp="url" href="https://nextjs-template.now.sh" />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />

      <meta name="image" content={metaImage} />
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:url" content={BASE_URL(url)} />
      <meta property="og:description" content={description} />

      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />

      <meta property="og:image" content={metaImage} />
      <meta property="og:image:secure_url" content={metaImage} />

      <meta name="twitter:site" content="aa" />
      <meta name="twitter:creator" content="aa" />
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:image:src" content={metaImage} />

      {children}
    </NextHead>
  );
};

HeadComponent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  children: PropTypes.node,
};

HeadComponent.defaultProps = {
  title: 'NextJS Free Tamplate',
  description: 'Um tamplate e base configurada para novos projetos em NextJS',
  image: 'assets/images/main-logo.png',
  url: '',
  children: null,
};

export default HeadComponent;
