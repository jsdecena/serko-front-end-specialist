import { MovieType } from "@/components/Movies/Types/MovieType";
import { MediaTypeEnum } from "../Enums/MediaTypeEnum";

export type SearchResultItemType = {
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: MediaTypeEnum;
  genre_ids: Array<number>;
  popularity: number;
  release_date: string;
  vote_average: number;
  vote_count: number;
  name?: string
  known_for?: MovieType[]
  known_for_department?: string
  first_air_date?: string 
}