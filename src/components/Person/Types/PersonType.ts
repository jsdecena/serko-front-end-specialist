import { MovieType } from "@/components/Movies/Types/MovieType";

export type PersonType = {
  name?: string
  department?: string
  knownFor?: MovieType[]
  mediaType?: string
}