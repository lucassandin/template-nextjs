import React from 'react';

import SEO from '@app/components/SEO';

import Layout from '../layouts/Default';

import { Container } from '../styles/pages/index';

const HomePage = () => (
  <>
    <Layout>
      <SEO />

      <Container>
        <h1>NextJS Tamplate</h1>
        <h2>Base pré-configurada em SSR(NextJS)</h2>
        <p>Autor: Gabriel Hijazi</p>
      </Container>
    </Layout>
  </>
);
export default HomePage;
