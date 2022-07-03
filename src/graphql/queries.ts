import { gql } from 'graphql-request';

export const GET_PREVIEW_CONTINENTS = gql`
  query getPreviewContinents {
    continents {
      name
      title
      slug
      image {
        id
        url
        width
        height
      }
    }
  }
`;

export const GET_CONTINENT_BY_SLUG = gql`
  query getContinentBySlug($slug: String!) {
    continent(where: { slug: $slug }) {
      name
      description
      countries
      languages
      citiesInTopHundred {
        id
        name
        image {
          url
          width
          height
        }
        country {
          name
          image {
            url
            width
            height
          }
        }
      }
      banner {
        url
        width
        height
      }
    }
  }
`;
