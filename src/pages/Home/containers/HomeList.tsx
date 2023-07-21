import * as React from "react";
import { AnimeList } from "../common/types";
import { useLazyQuery, gql } from '@apollo/client';
import { AnimeListComponent } from "../components";

export type AnimeListQueryVariables = {
  page?: number;
  perPage?: number;
  search?: string | null | undefined;
};

export type PageInfo = {
  currentPage: number;
  hasNextPage: boolean;
  total: number;
};

export type Page = {
  media: AnimeList[];
  pageInfo: PageInfo;
};

export type Data = {
  Page: Page;
};

const FETCH_ANIME = gql`
  query fetchAnimeSeries($page: Int, $perPage: Int, $search: String) {
    Page(page: $page, perPage: $perPage) {
      media(isAdult: false, sort: POPULARITY_DESC, search: $search) {
        id
        title {
          english
        }
        coverImage {
          large
        }
        seasonYear
      }
      pageInfo {
        currentPage
        hasNextPage
        total
      }
    }
  }
`;

export const HomeList = () => {
  
  const PAGE_SIZE = 10;
  const [animeList, setAnimeList] = React.useState<AnimeList[]>([]);
  const [totalAnimeList, setTotalAnimeList] = React.useState<number>(0);
  const [noResultsFound, setNoResultsFound] = React.useState(false);
  const [pageNumber, setPageNumber] = React.useState<number>(1);
  const [hasNextPage, setHasNextPage] = React.useState<boolean>(true);

  const [fetchAnimeList, { loading, error }] = useLazyQuery<
    Data,
    AnimeListQueryVariables
  >(FETCH_ANIME, {
    variables: { page: 1, perPage: PAGE_SIZE },
    fetchPolicy: "cache-and-network",
    onCompleted: (data) => {

      setAnimeList(data.Page.media);
      if (!data.Page.media.length) setNoResultsFound(true);
      setHasNextPage(data.Page.pageInfo.hasNextPage);
      // if (searchQuery) {
      //   setTotalAnimeSeries(data.Page.pageInfo.total);
      // }
    },
    notifyOnNetworkStatusChange: true,
  });

  React.useEffect(() => {
    //setTotalAnimeSeries(0);
    setAnimeList([]);
    setPageNumber(1);
    setHasNextPage(true);
    setNoResultsFound(false);
    fetchAnimeList({
      variables: {
        search: null,
      },
    });
  }, []);

  React.useEffect(() => {
    if (pageNumber >= 1 && hasNextPage) {
      onLoadMore(pageNumber);
    }
  }, [pageNumber, hasNextPage]);

  const onLoadMore = (pageNumber: number) => {
    return fetchAnimeList({
      variables: {
        page: pageNumber,
        //search: searchQuery ? searchQuery : null,
      },
    });
  };

  return (
    <AnimeListComponent 
      data={animeList}
      isLoading={loading}
      error={error}
      pageNumber={pageNumber}
      hasNextPage={hasNextPage}
      setPageNumber={setPageNumber}
      // totalAnimeSeries={totalAnimeSeries}
      // noResultsFound={noResultsFound}
    />
  )
}
