import * as React from "react";
import { AnimeList } from "../common/types";
import { ApolloError } from "@apollo/client";
import styled from '@emotion/styled/macro';
import { AnimeCardComponent } from ".";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export type AnimeListProps = {
  data: AnimeList[];
  isLoading: boolean;
  error: ApolloError | undefined;
  // hasNextPage: boolean;
  // setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  // totalAnimeSeries: number;
  // noResultsFound: boolean;
};
export const AnimeListComponent: React.FC<AnimeListProps> = ({
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
    <>
      <AnimeListTitle>
          {"Popular"}
      </AnimeListTitle>
      <AnimeListWrapper>
        {data && data.map((item, i) => (
          <AnimeCardComponent
            data={item}
          />
        ))}
        {/* {noResultsFound && <p>No results found.</p>} */}
        {isLoading && renderSkeletonCards()}
        <div>{error && "Error"}</div>
      </AnimeListWrapper>
    </>
  )
}

export const SkeletonCard = styled.div`
  margin-bottom: 50px;
  opacity: 0.7;
`;

export const AnimeListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 215px);
  grid-template-rows: auto;
  justify-content: center;
  grid-column-gap: 3%;
  transition: all 0.5s ease-in-out;
  margin-top: 40px;
`;

export const AnimeListTitle = styled.h5`
  text-align: left;
  font-size: 24px;
  font-weight: 500;

  --content-wrapper-padding-inline: 1.25rem;
  --content-width: 75.625rem;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: calc(var(--content-width) + var(--content-wrapper-padding-inline)*2);
  padding-left: var(--content-wrapper-padding-inline);
  padding-right: var(--content-wrapper-padding-inline);
  padding-top: 2rem;
`;