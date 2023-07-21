import * as React from "react";
import { AnimeList } from "../common/types";
import { ApolloError } from "@apollo/client";
import styled from '@emotion/styled/macro';
import { AnimeCardComponent } from ".";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { GrNext, GrPrevious } from 'react-icons/gr';

export type AnimeListProps = {
  data: AnimeList[];
  isLoading: boolean;
  error: ApolloError | undefined;
  pageNumber: number;
  hasNextPage: boolean;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  // totalAnimeSeries: number;
  // noResultsFound: boolean;
};
export const AnimeListComponent: React.FC<AnimeListProps> = ({
  data,
  isLoading,
  error,
  pageNumber,
  hasNextPage,
  setPageNumber,
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
        {!isLoading && data.map((item, i) => (
          <AnimeCardComponent
            data={item}
          />
        ))}
        {/* {noResultsFound && <p>No results found.</p>} */}
        {isLoading && renderSkeletonCards()}
        <div>{error && "Error"}</div>
      </AnimeListWrapper>
      {data && hasNextPage &&
        <AnimeListPagination>
          <ButtonPagination disabled={pageNumber === 1} onClick={() => setPageNumber(pageNumber - 1)}><GrPrevious /></ButtonPagination>
          {pageNumber}
          <ButtonPagination onClick={() =>setPageNumber(pageNumber + 1)}><GrNext/></ButtonPagination>
        </AnimeListPagination>
      }
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

  @media (max-width: 1300px) {
    grid-template-columns: repeat(4, 215px);
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 215px);
  }

  @media (max-width: 740px) {
    grid-template-columns: repeat(2, 215px);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 215px);
    justify-content: start;
    margin-left: 3rem;  
  }
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

export const AnimeListPagination = styled.div`
  margin-top: 1rem;
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const ButtonPagination = styled.button`
  cursor: pointer;
  background-color: #242423;
  margin: 0 1rem 0 1rem;
  border: none;
`;