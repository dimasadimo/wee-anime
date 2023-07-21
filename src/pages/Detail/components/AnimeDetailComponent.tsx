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

  const formatNumber = (num: number, precision = 2) => {
    const map = [
      { suffix: 'T', threshold: 1e12 },
      { suffix: 'B', threshold: 1e9 },
      { suffix: 'M', threshold: 1e6 },
      { suffix: 'K', threshold: 1e3 },
      { suffix: '', threshold: 1 },
    ];
  
    const found = map.find((x) => Math.abs(num) >= x.threshold);
    if (found) {
      const formatted = (num / found.threshold).toFixed(precision) + found.suffix;
      return formatted;
    }
  
    return num;
  }

  return (
    <AnimeDetailWrapper>
      {data && 
      <>
        <AnimeDetailImage
          src={data.coverImage.extraLarge}
        />
        <AnimeDetailContent>
          <AnimeDetailTitle>{data.title.english}</AnimeDetailTitle>
          <AnimeDetailYear>{data.seasonYear}</AnimeDetailYear>
          <AnimeDetailData>
            <AnimeDetailEpisode>Total episodes: <b>{data.episodes}</b></AnimeDetailEpisode>
            <AnimeDetailRating>Average rating: <b>{data.averageScore / 10}</b></AnimeDetailRating>
            <AnimeDetailPopularity>Popularity: <b>{formatNumber(data.popularity)}</b></AnimeDetailPopularity>
          </AnimeDetailData>
          <AnimeDetailCollection>
            {/* <AnimeDetailCollectionButton>ADD TO COLLECTION</AnimeDetailCollectionButton>
            <div>dsadad</div> */}
          </AnimeDetailCollection>
          <AnimeDetailDescription dangerouslySetInnerHTML={{__html: data.description}} />
        </AnimeDetailContent>
      </>}
      {isLoading &&
      <>
        <Skeleton width={375} height={500} style={{opacity: '0.7'}}/>
        <SkeletonCard style={{marginTop: '30px'}}>
          <Skeleton width={350} height={30} />
          <Skeleton width={100} height={20} style={{marginTop: '15px'}}/>
          <Skeleton width={400} height={20} style={{marginTop: '20px'}}/>
          <Skeleton width={200} height={30} style={{marginTop: '20px'}}/>

          <Skeleton width={700} height={15} style={{marginTop: '30px'}}/>
          <Skeleton width={700} height={15} style={{marginTop: '10px'}}/>
          <Skeleton width={700} height={15} style={{marginTop: '10px'}}/>
          <Skeleton width={700} height={15} style={{marginTop: '10px'}}/>
          <Skeleton width={700} height={15} style={{marginTop: '10px'}}/>
          <Skeleton width={700} height={15} style={{marginTop: '10px'}}/>
          <Skeleton width={500} height={15} style={{marginTop: '10px'}}/>
        </SkeletonCard>
      </>}
    </AnimeDetailWrapper>
  )
}

export const SkeletonCard = styled.div`
  margin-bottom: 50px;
  opacity: 0.7;
`;

export const AnimeDetailWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  
  justify-content: center;
  grid-column-gap: 5%;
  transition: all 0.5s ease-in-out;
  margin-top: 40px;
  
  --content-wrapper-padding-inline: 1.25rem;
  --content-width: 70.625rem;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: calc(var(--content-width) + var(--content-wrapper-padding-inline)*2);
  padding-left: var(--content-wrapper-padding-inline);
  padding-right: var(--content-wrapper-padding-inline);
  padding-top: 1rem;

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

export const AnimeListTitle = styled.h5`
  text-align: left;
  font-size: 24px;
  font-weight: 500;
`;

const AnimeDetailImage = styled.img`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  min-width: 185px;

  width:100%;
  height: 500;

  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 5),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

export const AnimeDetailContent = styled.div`

`;

export const AnimeDetailTitle = styled.h1`
  
`;

export const AnimeDetailYear= styled.p`
  color: #CFDBD5;
  font-size: 16px;
  opacity: .7;  
`;

export const AnimeDetailData = styled.div`
  margin-top: 1rem;
  display: flex;
  flex: 1;
  justify-content: flex-start;
`;

export const AnimeDetailEpisode = styled.div`
  padding: 0 0.5rem 0.2rem 0;
  font-size: 16px;
  color: #CFDBD5;
  border-right: 1px solid #4A4E58;
`;

export const AnimeDetailRating = styled.div`
  padding: 0 0.5rem 0.2rem 0.5rem;
  font-size: 16px;
  color: #CFDBD5;
  border-right: 1px solid #4A4E58;
`;

export const AnimeDetailPopularity = styled.div`
  padding: 0 0.5rem 0.2rem 0.5rem;
  font-size: 16px;
  color: #CFDBD5;
`;

export const AnimeDetailCollection = styled.div`
  margin-top: 0.7rem;
  display: flex;
  flex: 1;
  justify-content: flex-start;
`;

export const AnimeDetailCollectionButton = styled.button`
  padding: 0.5rem;
`;

export const AnimeDetailDescription = styled.p`
  border-top: 1px solid #4A4E58;
  padding-top: 1rem;
`;
