import * as React from "react";
import { AnimeList } from "../common/types";
import styled from '@emotion/styled/macro';
import { useNavigate } from "react-router-dom";

export type AnimeCardComponentProps = {
  data: AnimeList;
};
export const AnimeCardComponent: React.FC<AnimeCardComponentProps> = ({
  data
}) => {

  const navigate = useNavigate();

  return (
    <AnimeCardWrapper onClick={() => navigate(`/series/${data.id}`)}>
      <AnimeCardImageWrapper
        height={295}
        src={data.coverImage.large}
      />
      <AnimeCardTitle >{data.title.english || "No title provided"}</AnimeCardTitle>
      <AnimeCardYear>{data.seasonYear || "No title provided"}</AnimeCardYear>
    </AnimeCardWrapper>
  )
}

const AnimeCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease-in;
  margin-bottom: 10px;

  :hover {
    opacity: 0.8;
    cursor: pointer;
    transform: translateY(-5px);
  }
`;

const AnimeCardImageWrapper = styled.img`
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

const AnimeCardTitle = styled.p`
  margin-bottom: 0;
`;

const AnimeCardYear = styled.p`
  margin-bottom: 10px;
  margin-top: 5px;
  color: #CFDBD5;
  font-size: 14px;
`;