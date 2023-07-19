import * as React from "react";
import styled from '@emotion/styled/macro';
import { Header } from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ContentWrapper id='content'>
      <PageWrapper>
        <Header />
        {children}
      </PageWrapper>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  height: 100%;
  min-width: 20rem;
  visibility: visible;
`;

const PageWrapper = styled.div`
  #content > div {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100%;
  }
`;
