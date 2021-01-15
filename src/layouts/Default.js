import PropTypes from 'prop-types';
import React from 'react';

import { Main } from './styles';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Main>{children}</Main>
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default DefaultLayout;
