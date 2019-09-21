import graphql from 'relay-runtime';

graphql`
  query trialQuery {
    __typename
    hero {
      name
      ... on Human {
        homePlanet
      }
      ... on Droid {
        primaryFunction
      }
    }
  }
`;
