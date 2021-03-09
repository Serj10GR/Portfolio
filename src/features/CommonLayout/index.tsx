import { MainLayoutWrapper } from './styled';
import { NavBar } from '../NabBar';
import { Footer } from '../Footer';
import { GlobalStyle } from '../../globalStyle';
import React, { ReactNode, Fragment } from 'react';

type TLayout = {
  children: ReactNode
}

export const CommonLayout = ({ children }: TLayout) => {
  return (
    <Fragment>
      <GlobalStyle />
      <MainLayoutWrapper>
        <NavBar />
        {children}
        <Footer />
      </MainLayoutWrapper>
    </Fragment>

  );
};

