import Movies from "@/components/Movies";
import Person from "@/components/Person";
import { MediaTypeEnum } from "@/components/Search/Enums/MediaTypeEnum";
import { SearchResultItemType } from "@/components/Search/Types/SearchResultItemType";
import Tv from "@/components/Tv";

export const SearchResultItem = async ({
  title = "",
  overview = "",
  media_type,
  release_date,
  vote_average,
  genre_ids,
  name = "",
  known_for,
  known_for_department,
  first_air_date
}: SearchResultItemType) => {
  switch(media_type) {
    case MediaTypeEnum.MOVIE:
      return <Movies mediaType={media_type} title={title} overview={overview} releaseDate={release_date} voteAverage={vote_average} genreIds={genre_ids} />
    case MediaTypeEnum.PERSON:
      return <Person name={name} department={known_for_department} knownFor={known_for} mediaType={media_type} />
    case MediaTypeEnum.TV:
      return <Tv name={name} overview={overview} firstAirDate={first_air_date} voteAverage={vote_average} genreIds={genre_ids} mediaType={media_type} />
    default:
      return 
  }
};
