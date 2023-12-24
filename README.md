<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## GraphQL Schema

```graphql
# Types
type Datum {
  # Example field (placeholder)
  id: String!

  # Example field (placeholder)
  name: String!

  # Example field (placeholder)
  parentId: String!

  # Example field (placeholder)
  createdAt: DateTime!

  # Example field (placeholder)
  cost: Int!

  # Example field (placeholder)
  children: [Datum!]!
}

# Available queries
type Query {
  data: [Datum!]!
  datum(id: String!): Datum!
}

# Data query
query Data {
  data {
    id
    name
    parentId
    createdAt
    cost
    children {
      id
      name
      parentId
      createdAt
      cost
    }
  }
}
# Response
{
  "data": {
    "data": [
      {
        "id": "uuid-1",
        "name": "Webprovise Corp",
        "cost": 52983,
        "children": [
          {
            "name": "Stamm LLC",
            "cost": 8969,
            "createdAt": "2021-02-25T10:35:32.978Z"
          },
          {
            "name": "Blanda, Langosh and Barton",
            "cost": 27579,
            "createdAt": "2021-02-25T15:16:30.887Z"
          },
          {
            "name": "Bartell - Mosciski",
            "cost": 64393,
            "createdAt": "2021-02-25T23:47:57.596Z"
          },
          {
            "name": "Walter, Schmidt and Osinski",
            "cost": 2033,
            "createdAt": "2021-02-26T02:31:22.154Z"
          }
        ],
        "createdAt": "2021-02-26T00:55:36.632Z"
      },
      {
        "id": "uuid-2",
        "name": "Stamm LLC",
        "cost": 8969,
        "children": [
          {
            "name": "Price and Sons",
            "cost": 1340,
            "createdAt": "2021-02-25T06:11:47.519Z"
          },
          {
            "name": "Zieme - Mills",
            "cost": 1636,
            "createdAt": "2021-02-25T07:56:32.335Z"
          },
          {
            "name": "Schneider - Adams",
            "cost": 794,
            "createdAt": "2021-02-25T21:06:18.777Z"
          }
        ],
        "createdAt": "2021-02-25T10:35:32.978Z"
      },
    ]
  }
}

# Datum query
query Datum {
  datum(id: "uuid-1") {
    id
    name
    parentId
    createdAt
    cost
    children {
      id
      name
      parentId
      createdAt
      cost
    }
  }
}

# Response
{
  "data": {
    "datum": {
      "id": "uuid-1",
      "name": "Webprovise Corp",
      "parentId": "0",
      "createdAt": "2021-02-26T00:55:36.632Z",
      "cost": 52983,
      "children": [
        {
          "id": "uuid-2",
          "name": "Stamm LLC",
          "parentId": "uuid-1",
          "createdAt": "2021-02-25T10:35:32.978Z",
          "cost": 8969
        },
        {
          "id": "uuid-3",
          "name": "Blanda, Langosh and Barton",
          "parentId": "uuid-1",
          "createdAt": "2021-02-25T15:16:30.887Z",
          "cost": 27579
        },
        {
          "id": "uuid-8",
          "name": "Bartell - Mosciski",
          "parentId": "uuid-1",
          "createdAt": "2021-02-25T23:47:57.596Z",
          "cost": 64393
        },
        {
          "id": "uuid-18",
          "name": "Walter, Schmidt and Osinski",
          "parentId": "uuid-1",
          "createdAt": "2021-02-26T02:31:22.154Z",
          "cost": 2033
        }
      ]
    }
  }
}
```