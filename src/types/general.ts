export interface ImageAsset {
  url: string;
  width: number;
  height: number;
}

export interface Country {
  name: string;
  image: ImageAsset;
}

export interface City {
  name: string;
  image: ImageAsset;
  country: Country;
}

export interface Continent {
  name: string;
  title: string;
  slug: string;
  description: string;
  image: ImageAsset;
  banner: ImageAsset;
  countries: number;
  languages: number;
  citiesInTopHundred: City[];
}
