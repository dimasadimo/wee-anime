import * as React from "react";
import { useLazyQuery, gql } from '@apollo/client';
import { AnimeList } from "../../Home/common/types";
import { useParams } from 'react-router-dom';
import { AnimeDetailComponent } from "../components";

type AnimeDetailQueryResult = {
  Media: AnimeList;
};

type AnimeDetailQueryVariables = {
  id: number;
};

const FETCH_ANIME_Detail = gql`
  query fetchAnimeSerie($id: Int) {
    Media(id: $id) {
      id
      title {
        english
      }
      coverImage {
        extraLarge
      }
      genres
      episodes
      averageScore
      seasonYear
      description
      popularity
    }
  }
`;

export const DetailContainer = () => {

  const { id } = useParams();
  const [animeDetail, setAnimeDetail] = React.useState<AnimeList | null>(null);
  const [fetchAnimeDetail, { loading, error }] = useLazyQuery<
    AnimeDetailQueryResult,
    AnimeDetailQueryVariables
  >(FETCH_ANIME_Detail , {
    onCompleted: (data) => {
      setAnimeDetail(data.Media);
    },
  });

  React.useEffect(() => {
    fetchAnimeDetail({ variables: { id: Number(id) }});
  }, [fetchAnimeDetail, id]);
  

  return (
    <AnimeDetailComponent
      data={animeDetail}
      isLoading={loading}
      error={error}
    />
  )
}
