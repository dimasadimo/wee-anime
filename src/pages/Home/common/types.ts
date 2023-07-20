export type AnimeList = {
  id: number;
  title: { english: string };
  genres: string[];
  averageScore: number;
  episodes: number;
  coverImage: {
    extraLarge: string;
    large: string;
  };
  seasonYear: string;
  description: string;
  meanScore: number;
  popularity: number;
};