/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule BooksList_catalog.graphql
 * @generated SignedSource<<3a52dc173d9144ceca92eb6a8db7ebef>>
 * @flow
 * @nogrep
 */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type BooksList_catalog = {
  books?: ?BooksList_catalog_books;
};

export type BooksList_catalog_books_edges = {
  node?: ?any;
  cursor: string;
};

export type BooksList_catalog_books_pageInfo = {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor?: ?string;
  endCursor?: ?string;
};

export type BooksList_catalog_books = {
  edges?: ?Array<?BooksList_catalog_books_edges>;
  pageInfo: BooksList_catalog_books_pageInfo;
};
*/

/* eslint-disable comma-dangle, quotes */

const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "count",
      "type": "Int"
    },
    {
      "kind": "RootArgument",
      "name": "categoryId",
      "type": "String"
    },
    {
      "kind": "RootArgument",
      "name": "cursor",
      "type": "String"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": [
          "books"
        ]
      }
    ]
  },
  "name": "BooksList_catalog",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "books",
      "args": [
        {
          "kind": "Variable",
          "name": "categoryId",
          "variableName": "categoryId",
          "type": "String"
        }
      ],
      "concreteType": "BookConnection",
      "name": "__BooksList_books_connection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "BookEdge",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "args": null,
              "concreteType": "Book",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "kind": "FragmentSpread",
                  "name": "BooksListItem_book",
                  "args": null
                }
              ],
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "hasNextPage",
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "hasPreviousPage",
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "startCursor",
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "endCursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Catalog"
};

module.exports = fragment;
