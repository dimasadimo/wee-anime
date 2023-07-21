import * as React from "react";
import styled from '@emotion/styled/macro';
import { Layout } from "../../layout";
import { HomeList } from "./containers";

export const HomePage = () => {
  return (
    <Layout>
      <HomeWrapper>
        <HomeHeader>
          <HeaderContent>
            <HeaderContentWrapper>
              <HeaderContentComponent>
                <HeaderContentComponentOne>Most Popular Anime</HeaderContentComponentOne>
                <HeaderContentComponentUl>
                  
                </HeaderContentComponentUl>
              </HeaderContentComponent>
            </HeaderContentWrapper>
          </HeaderContent>
        </HomeHeader>
        <HomeList />
      </HomeWrapper>
    </Layout>
  );
};

const HomeWrapper = styled.div`
  flex: 1 1 0;
  padding: 3.75rem 0 3.75rem 0;
`;

const HomeHeader = styled.div`
  height: 8.75rem;  
`;

const HeaderContent = styled.div`
  padding-top: 3.75rem;
`;

const HeaderContentWrapper = styled.div`
  --content-wrapper-padding-inline: 1.25rem;
  --content-width: 75.625rem;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: calc(var(--content-width) + var(--content-wrapper-padding-inline)*2);
  padding-left: var(--content-wrapper-padding-inline);
  padding-right: var(--content-wrapper-padding-inline);

  @media (max-width: 1350px) {
    --content-width: 55.625rem;
  }

  @media (max-width: 1000px) {
    --content-width: 35.625rem;
  }

  @media (max-width: 700px) {
    --content-width: 25.625rem;
  }

  @media (max-width: 450px) {
    --content-width: 15.625rem;
  }
`;

const HeaderContentComponent = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  min-width: 0;
`;

const HeaderContentComponentOne = styled.h1`
  align-self: center;
  margin-right: 1.5rem;
`;

const HeaderContentComponentUl = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
`;

const HeaderContentComponentLi = styled.li`
  align-items: stretch;
  display: flex;
  position: relative;
  padding: 2.5rem 1rem 0 1rem;

  list-style-type: none;
`;
