export interface CharacterResponse {
  id: number;
  name: string;
  status: "Alive" | string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Location {
  name: string;
  url: string;
}
