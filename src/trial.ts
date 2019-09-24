import graphql from 'relay-runtime';

graphql`
  query trialQuery {
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
