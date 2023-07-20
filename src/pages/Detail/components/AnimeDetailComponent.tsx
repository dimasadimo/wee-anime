import * as React from "react";
import { AnimeList } from "../../Home/common/types";
import { ApolloError } from "@apollo/client";
import styled from '@emotion/styled/macro';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export type AnimeDetailProps = {
  data: AnimeList | null;
  isLoading: boolean;
  error: ApolloError | undefined;
};

export const AnimeDetailComponent: React.FC<AnimeDetailProps> = ({
  data,
  isLoading,
  error,
  // hasNextPage,
  // setPageNumber,
  // totalAnimeSeries,
  // noResultsFound,
}) => {

  const renderSkeletonCards = () => {
    const nodes = [];
    for (let i = 0; i < 10; i++) {
      nodes.push(
        <SkeletonCard >
          <Skeleton width={195} height={275}/>
          <Skeleton width={170} height={12} style={{marginTop: '15px'}}/>
          <Skeleton width={130} height={12} style={{marginTop: '10px'}}/>
        </SkeletonCard>
      );
    }
    return nodes;
  };

  return (
    <AnimeListWrapper>
      <div style={{backgroundColor: 'red'}}>sdadad</div>
      <div style={{backgroundColor: 'red'}}>sdadad</div>
    </AnimeListWrapper>
  )
}

export const SkeletonCard = styled.div`
  margin-bottom: 50px;
  opacity: 0.7;
`;

export const AnimeListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  
  justify-content: center;
  grid-column-gap: 3%;
  transition: all 0.5s ease-in-out;
  margin-top: 40px;
  
  --content-wrapper-padding-inline: 1.25rem;
  --content-width: 70.625rem;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: calc(var(--content-width) + var(--content-wrapper-padding-inline)*2);
  padding-left: var(--content-wrapper-padding-inline);
  padding-right: var(--content-wrapper-padding-inline);
  padding-top: 2rem;
`;

export const AnimeListTitle = styled.h5`
  text-align: left;
  font-size: 24px;
  font-weight: 500;

  
`;