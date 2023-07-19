import * as React from "react";
import styled from '@emotion/styled/macro';
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";
import { BsBookmark } from 'react-icons/bs';

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <HeaderLogo to={ROUTES.HOME}>WeeAnime</HeaderLogo>
        <HeaderRight>
          <HeaderUl>
            <HeaderList to={ROUTES.COLLECTION}><Collectionlogo/></HeaderList>
          </HeaderUl>
        </HeaderRight>
      </HeaderContent>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  flex: 0 0 3.75rem;
  min-width: 20rem;
  position: relative;
`;

const HeaderContent = styled.div`
  align-items: stretch;
  background-color: #333533;
  display: flex;
  height: 3.75rem;
  justify-content: space-between;
  left: 0;
  min-width: 20rem;
  position: fixed;
  right: 0;
  z-index: 100;
`;

const HeaderLogo = styled(Link)`
  display: flex;
  height: inherit;
  flex: 0 2 15rem;
  justify-content: flex-end;

  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
  color: #F5CB5C;
  padding-top: 0.8rem;

  :hover{
    color: #E8EDDF;
  }

  @media (max-width: 650px) {
    flex: 0 2 10rem;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  flex: 0 2 15rem;
  height: inherit;
  justify-content: flex-start;

  @media (max-width: 1390px) {
    flex: 0 2 10rem;
  }

  @media (max-width: 650px) {
    flex: 0 2 5rem;
  }
`;

const HeaderUl = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
`;

const Collectionlogo = styled(BsBookmark)`
  color: #E8EDDF;
  width: 1.5rem;
  height: 1.5rem;
`;

const HeaderList = styled(Link)`
  align-items: stretch;
  display: flex;
  position: relative;
  text-decoration: none;
  padding: 1rem 1rem 0 1rem;

  :hover{
    background-color: #242423;
  }

  :hover ${Collectionlogo}{
    color: #F5CB5C;
  }
`;


