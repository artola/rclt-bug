/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type trialQueryVariables = {};
export type trialQueryResponse = {
    readonly hero: {
        readonly name: string;
        readonly homePlanet?: string | null;
        readonly primaryFunction?: string;
    };
};
export type trialQuery = {
    readonly response: trialQueryResponse;
    readonly variables: trialQueryVariables;
};



/*
query trialQuery {
  hero {
    __typename
    name
    ... on Human {
      homePlanet
    }
    ... on Droid {
      primaryFunction
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "InlineFragment",
  "type": "Human",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "homePlanet",
      "args": null,
      "storageKey": null
    }
  ]
},
v2 = {
  "kind": "InlineFragment",
  "type": "Droid",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "primaryFunction",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "trialQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "hero",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "trialQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "hero",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "trialQuery",
    "id": null,
    "text": "query trialQuery {\n  hero {\n    __typename\n    name\n    ... on Human {\n      homePlanet\n    }\n    ... on Droid {\n      primaryFunction\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '54db429b24438a0e1b4b49c8dcbc3106';
export default node;
