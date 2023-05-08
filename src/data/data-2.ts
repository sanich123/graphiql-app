export const DATA_2 = {
    "data": {
      "__schema": {
        "queryType": {
          "name": "Query"
        },
        "mutationType": {
          "name": "Mutation"
        },
        "types": [
          {
            "kind": "OBJECT",
            "name": "Query",
            "fields": [
              {
                "name": "_",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "albums",
                "args": [
                  {
                    "name": "options",
                    "type": {
                      "kind": "INPUT_OBJECT",
                      "name": "PageQueryOptions",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "AlbumsPage",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "album",
                "args": [
                  {
                    "name": "id",
                    "type": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "ID",
                        "ofType": null
                      }
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "Album",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "comments",
                "args": [
                  {
                    "name": "options",
                    "type": {
                      "kind": "INPUT_OBJECT",
                      "name": "PageQueryOptions",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "CommentsPage",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "comment",
                "args": [
                  {
                    "name": "id",
                    "type": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "ID",
                        "ofType": null
                      }
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "Comment",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "photos",
                "args": [
                  {
                    "name": "options",
                    "type": {
                      "kind": "INPUT_OBJECT",
                      "name": "PageQueryOptions",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "PhotosPage",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "photo",
                "args": [
                  {
                    "name": "id",
                    "type": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "ID",
                        "ofType": null
                      }
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "Photo",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "posts",
                "args": [
                  {
                    "name": "options",
                    "type": {
                      "kind": "INPUT_OBJECT",
                      "name": "PageQueryOptions",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "PostsPage",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "post",
                "args": [
                  {
                    "name": "id",
                    "type": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "ID",
                        "ofType": null
                      }
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "Post",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "todos",
                "args": [
                  {
                    "name": "options",
                    "type": {
                      "kind": "INPUT_OBJECT",
                      "name": "PageQueryOptions",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "TodosPage",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "todo",
                "args": [
                  {
                    "name": "id",
                    "type": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "ID",
                        "ofType": null
                      }
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "Todo",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "users",
                "args": [
                  {
                    "name": "options",
                    "type": {
                      "kind": "INPUT_OBJECT",
                      "name": "PageQueryOptions",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "UsersPage",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "user",
                "args": [
                  {
                    "name": "id",
                    "type": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "ID",
                        "ofType": null
                      }
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "SCALAR",
            "name": "Int",
            "fields": null,
            "inputFields": null,
            "interfaces": null,
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "INPUT_OBJECT",
            "name": "PageQueryOptions",
            "fields": null,
            "inputFields": [
              {
                "name": "paginate",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PaginateOptions",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "slice",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "SliceOptions",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "sort",
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "SortOptions",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "operators",
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "OperatorOptions",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "search",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "SearchOptions",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "interfaces": null,
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "INPUT_OBJECT",
            "name": "PaginateOptions",
            "fields": null,
            "inputFields": [
              {
                "name": "page",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "interfaces": null,
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "INPUT_OBJECT",
            "name": "SliceOptions",
            "fields": null,
            "inputFields": [
              {
                "name": "start",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "end",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "interfaces": null,
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "INPUT_OBJECT",
            "name": "SortOptions",
            "fields": null,
            "inputFields": [
              {
                "name": "field",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "order",
                "type": {
                  "kind": "ENUM",
                  "name": "SortOrderEnum",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "interfaces": null,
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "SCALAR",
            "name": "String",
            "fields": null,
            "inputFields": null,
            "interfaces": null,
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "ENUM",
            "name": "SortOrderEnum",
            "fields": null,
            "inputFields": null,
            "interfaces": null,
            "enumValues": [
              {
                "name": "ASC",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "DESC",
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "possibleTypes": null
          },
          {
            "kind": "INPUT_OBJECT",
            "name": "OperatorOptions",
            "fields": null,
            "inputFields": [
              {
                "name": "kind",
                "type": {
                  "kind": "ENUM",
                  "name": "OperatorKindEnum",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "field",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "value",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "interfaces": null,
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "ENUM",
            "name": "OperatorKindEnum",
            "fields": null,
            "inputFields": null,
            "interfaces": null,
            "enumValues": [
              {
                "name": "GTE",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "LTE",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "NE",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "LIKE",
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "possibleTypes": null
          },
          {
            "kind": "INPUT_OBJECT",
            "name": "SearchOptions",
            "fields": null,
            "inputFields": [
              {
                "name": "q",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "interfaces": null,
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "AlbumsPage",
            "fields": [
              {
                "name": "data",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Album",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "links",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "PaginationLinks",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "meta",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "PageMetadata",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "Album",
            "fields": [
              {
                "name": "id",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "title",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "user",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "photos",
                "args": [
                  {
                    "name": "options",
                    "type": {
                      "kind": "INPUT_OBJECT",
                      "name": "PageQueryOptions",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "PhotosPage",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "SCALAR",
            "name": "ID",
            "fields": null,
            "inputFields": null,
            "interfaces": null,
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "User",
            "fields": [
              {
                "name": "id",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "name",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "username",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "email",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "address",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "Address",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "phone",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "website",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "company",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "Company",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "posts",
                "args": [
                  {
                    "name": "options",
                    "type": {
                      "kind": "INPUT_OBJECT",
                      "name": "PageQueryOptions",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "PostsPage",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "albums",
                "args": [
                  {
                    "name": "options",
                    "type": {
                      "kind": "INPUT_OBJECT",
                      "name": "PageQueryOptions",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "AlbumsPage",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "todos",
                "args": [
                  {
                    "name": "options",
                    "type": {
                      "kind": "INPUT_OBJECT",
                      "name": "PageQueryOptions",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "TodosPage",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "Address",
            "fields": [
              {
                "name": "street",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "suite",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "city",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "zipcode",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "geo",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "Geo",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "Geo",
            "fields": [
              {
                "name": "lat",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Float",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "lng",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Float",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "SCALAR",
            "name": "Float",
            "fields": null,
            "inputFields": null,
            "interfaces": null,
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "Company",
            "fields": [
              {
                "name": "name",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "catchPhrase",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "bs",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "PostsPage",
            "fields": [
              {
                "name": "data",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Post",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "links",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "PaginationLinks",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "meta",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "PageMetadata",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "Post",
            "fields": [
              {
                "name": "id",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "title",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "body",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "user",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "comments",
                "args": [
                  {
                    "name": "options",
                    "type": {
                      "kind": "INPUT_OBJECT",
                      "name": "PageQueryOptions",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "CommentsPage",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "CommentsPage",
            "fields": [
              {
                "name": "data",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Comment",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "links",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "PaginationLinks",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "meta",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "PageMetadata",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "Comment",
            "fields": [
              {
                "name": "id",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "name",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "email",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "body",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "post",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "Post",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "PaginationLinks",
            "fields": [
              {
                "name": "first",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "PageLimitPair",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "prev",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "PageLimitPair",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "next",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "PageLimitPair",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "last",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "PageLimitPair",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "PageLimitPair",
            "fields": [
              {
                "name": "page",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "limit",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "PageMetadata",
            "fields": [
              {
                "name": "totalCount",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "TodosPage",
            "fields": [
              {
                "name": "data",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Todo",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "links",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "PaginationLinks",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "meta",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "PageMetadata",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "Todo",
            "fields": [
              {
                "name": "id",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "title",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "completed",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "user",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "SCALAR",
            "name": "Boolean",
            "fields": null,
            "inputFields": null,
            "interfaces": null,
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "PhotosPage",
            "fields": [
              {
                "name": "data",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Photo",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "links",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "PaginationLinks",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "meta",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "PageMetadata",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "Photo",
            "fields": [
              {
                "name": "id",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "title",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "url",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "thumbnailUrl",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "album",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "Album",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "UsersPage",
            "fields": [
              {
                "name": "data",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "User",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "links",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "PaginationLinks",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "meta",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "PageMetadata",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "Mutation",
            "fields": [
              {
                "name": "_",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "createAlbum",
                "args": [
                  {
                    "name": "input",
                    "type": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "CreateAlbumInput",
                        "ofType": null
                      }
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "Album",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "updateAlbum",
                "args": [
                  {
                    "name": "id",
                    "type": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "ID",
                        "ofType": null
                      }
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "input",
                    "type": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "UpdateAlbumInput",
                        "ofType": null
                      }
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "Album",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "deleteAlbum",
                "args": [
                  {
                    "name": "id",
                    "type": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "ID",
                        "ofType": null
                      }
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "createComment",
                "args": [
                  {
                    "name": "input",
                    "type": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "CreateCommentInput",
                        "ofType": null
                      }
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "Comment",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "updateComment",
                "args": [
                  {
                    "name": "id",
                    "type": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "ID",
                        "ofType": null
                      }
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "input",
                    "type": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "UpdateCommentInput",
                        "ofType": null
                      }
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "Comment",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "deleteComment",
                "args": [
                  {
                    "name": "id",
                    "type": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "ID",
                        "ofType": null
                      }
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "createPhoto",
                "args": [
                  {
                    "name": "input",
                    "type": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "CreatePhotoInput",
                        "ofType": null
                      }
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "Photo",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "updatePhoto",
                "args": [
                  {
                    "name": "id",
                    "type": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "ID",
                        "ofType": null
                      }
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "input",
                    "type": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "UpdatePhotoInput",
                        "ofType": null
                      }
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "Photo",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "deletePhoto",
                "args": [
                  {
                    "name": "id",
                    "type": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "ID",
                        "ofType": null
                      }
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "createPost",
                "args": [
                  {
                    "name": "input",
                    "type": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "CreatePostInput",
                        "ofType": null
                      }
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "Post",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "updatePost",
                "args": [
                  {
                    "name": "id",
                    "type": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "ID",
                        "ofType": null
                      }
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "input",
                    "type": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "UpdatePostInput",
                        "ofType": null
                      }
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "Post",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "deletePost",
                "args": [
                  {
                    "name": "id",
                    "type": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "ID",
                        "ofType": null
                      }
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "createTodo",
                "args": [
                  {
                    "name": "input",
                    "type": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "CreateTodoInput",
                        "ofType": null
                      }
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "Todo",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "updateTodo",
                "args": [
                  {
                    "name": "id",
                    "type": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "ID",
                        "ofType": null
                      }
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "input",
                    "type": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "UpdateTodoInput",
                        "ofType": null
                      }
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "Todo",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "deleteTodo",
                "args": [
                  {
                    "name": "id",
                    "type": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "ID",
                        "ofType": null
                      }
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "createUser",
                "args": [
                  {
                    "name": "input",
                    "type": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "CreateUserInput",
                        "ofType": null
                      }
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "updateUser",
                "args": [
                  {
                    "name": "id",
                    "type": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "ID",
                        "ofType": null
                      }
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "input",
                    "type": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "UpdateUserInput",
                        "ofType": null
                      }
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "deleteUser",
                "args": [
                  {
                    "name": "id",
                    "type": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "ID",
                        "ofType": null
                      }
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "INPUT_OBJECT",
            "name": "CreateAlbumInput",
            "fields": null,
            "inputFields": [
              {
                "name": "title",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "userId",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "interfaces": null,
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "INPUT_OBJECT",
            "name": "UpdateAlbumInput",
            "fields": null,
            "inputFields": [
              {
                "name": "title",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "userId",
                "type": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "interfaces": null,
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "INPUT_OBJECT",
            "name": "CreateCommentInput",
            "fields": null,
            "inputFields": [
              {
                "name": "name",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "email",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "body",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "interfaces": null,
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "INPUT_OBJECT",
            "name": "UpdateCommentInput",
            "fields": null,
            "inputFields": [
              {
                "name": "name",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "email",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "body",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "interfaces": null,
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "INPUT_OBJECT",
            "name": "CreatePhotoInput",
            "fields": null,
            "inputFields": [
              {
                "name": "title",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "url",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "thumbnailUrl",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "interfaces": null,
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "INPUT_OBJECT",
            "name": "UpdatePhotoInput",
            "fields": null,
            "inputFields": [
              {
                "name": "title",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "url",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "thumbnailUrl",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "interfaces": null,
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "INPUT_OBJECT",
            "name": "CreatePostInput",
            "fields": null,
            "inputFields": [
              {
                "name": "title",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "body",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "interfaces": null,
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "INPUT_OBJECT",
            "name": "UpdatePostInput",
            "fields": null,
            "inputFields": [
              {
                "name": "title",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "body",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "interfaces": null,
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "INPUT_OBJECT",
            "name": "CreateTodoInput",
            "fields": null,
            "inputFields": [
              {
                "name": "title",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "completed",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "interfaces": null,
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "INPUT_OBJECT",
            "name": "UpdateTodoInput",
            "fields": null,
            "inputFields": [
              {
                "name": "title",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "completed",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "interfaces": null,
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "INPUT_OBJECT",
            "name": "CreateUserInput",
            "fields": null,
            "inputFields": [
              {
                "name": "name",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "username",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "email",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "address",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "AddressInput",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "phone",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "website",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "company",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "CompanyInput",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "interfaces": null,
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "INPUT_OBJECT",
            "name": "AddressInput",
            "fields": null,
            "inputFields": [
              {
                "name": "street",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "suite",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "city",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "zipcode",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "geo",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "GeoInput",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "interfaces": null,
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "INPUT_OBJECT",
            "name": "GeoInput",
            "fields": null,
            "inputFields": [
              {
                "name": "lat",
                "type": {
                  "kind": "SCALAR",
                  "name": "Float",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "lng",
                "type": {
                  "kind": "SCALAR",
                  "name": "Float",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "interfaces": null,
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "INPUT_OBJECT",
            "name": "CompanyInput",
            "fields": null,
            "inputFields": [
              {
                "name": "name",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "catchPhrase",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "bs",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "interfaces": null,
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "INPUT_OBJECT",
            "name": "UpdateUserInput",
            "fields": null,
            "inputFields": [
              {
                "name": "name",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "username",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "email",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "address",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "AddressInput",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "phone",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "website",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "company",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "CompanyInput",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "interfaces": null,
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "__Schema",
            "fields": [
              {
                "name": "types",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "OBJECT",
                        "name": "__Type",
                        "ofType": null
                      }
                    }
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "queryType",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__Type",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "mutationType",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "__Type",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "subscriptionType",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "__Type",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "directives",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "OBJECT",
                        "name": "__Directive",
                        "ofType": null
                      }
                    }
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "__Type",
            "fields": [
              {
                "name": "kind",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "ENUM",
                    "name": "__TypeKind",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "name",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "description",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "fields",
                "args": [
                  {
                    "name": "includeDeprecated",
                    "type": {
                      "kind": "SCALAR",
                      "name": "Boolean",
                      "ofType": null
                    },
                    "defaultValue": "false"
                  }
                ],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "__Field",
                      "ofType": null
                    }
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "interfaces",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "__Type",
                      "ofType": null
                    }
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "possibleTypes",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "__Type",
                      "ofType": null
                    }
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "enumValues",
                "args": [
                  {
                    "name": "includeDeprecated",
                    "type": {
                      "kind": "SCALAR",
                      "name": "Boolean",
                      "ofType": null
                    },
                    "defaultValue": "false"
                  }
                ],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "__EnumValue",
                      "ofType": null
                    }
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "inputFields",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "__InputValue",
                      "ofType": null
                    }
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "ofType",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "__Type",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "ENUM",
            "name": "__TypeKind",
            "fields": null,
            "inputFields": null,
            "interfaces": null,
            "enumValues": [
              {
                "name": "SCALAR",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "OBJECT",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "INTERFACE",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "UNION",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "ENUM",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "INPUT_OBJECT",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "LIST",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "NON_NULL",
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "__Field",
            "fields": [
              {
                "name": "name",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "description",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "args",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "OBJECT",
                        "name": "__InputValue",
                        "ofType": null
                      }
                    }
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "type",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__Type",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "isDeprecated",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "deprecationReason",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "__InputValue",
            "fields": [
              {
                "name": "name",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "description",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "type",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__Type",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "defaultValue",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "__EnumValue",
            "fields": [
              {
                "name": "name",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "description",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "isDeprecated",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "deprecationReason",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "__Directive",
            "fields": [
              {
                "name": "name",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "description",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "locations",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "ENUM",
                        "name": "__DirectiveLocation",
                        "ofType": null
                      }
                    }
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "args",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "OBJECT",
                        "name": "__InputValue",
                        "ofType": null
                      }
                    }
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "ENUM",
            "name": "__DirectiveLocation",
            "fields": null,
            "inputFields": null,
            "interfaces": null,
            "enumValues": [
              {
                "name": "QUERY",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "MUTATION",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "SUBSCRIPTION",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "FIELD",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "FRAGMENT_DEFINITION",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "FRAGMENT_SPREAD",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "INLINE_FRAGMENT",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "VARIABLE_DEFINITION",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "SCHEMA",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "SCALAR",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "OBJECT",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "FIELD_DEFINITION",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "ARGUMENT_DEFINITION",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "INTERFACE",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "UNION",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "ENUM",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "ENUM_VALUE",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "INPUT_OBJECT",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "INPUT_FIELD_DEFINITION",
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "possibleTypes": null
          },
          {
            "kind": "ENUM",
            "name": "CacheControlScope",
            "fields": null,
            "inputFields": null,
            "interfaces": null,
            "enumValues": [
              {
                "name": "PUBLIC",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "PRIVATE",
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "possibleTypes": null
          },
          {
            "kind": "SCALAR",
            "name": "Upload",
            "fields": null,
            "inputFields": null,
            "interfaces": null,
            "enumValues": null,
            "possibleTypes": null
          }
        ],
        "directives": [
          {
            "name": "cacheControl",
            "locations": [
              "FIELD_DEFINITION",
              "OBJECT",
              "INTERFACE"
            ],
            "args": [
              {
                "name": "maxAge",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "scope",
                "type": {
                  "kind": "ENUM",
                  "name": "CacheControlScope",
                  "ofType": null
                },
                "defaultValue": null
              }
            ]
          },
          {
            "name": "skip",
            "locations": [
              "FIELD",
              "FRAGMENT_SPREAD",
              "INLINE_FRAGMENT"
            ],
            "args": [
              {
                "name": "if",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ]
          },
          {
            "name": "include",
            "locations": [
              "FIELD",
              "FRAGMENT_SPREAD",
              "INLINE_FRAGMENT"
            ],
            "args": [
              {
                "name": "if",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ]
          },
          {
            "name": "deprecated",
            "locations": [
              "FIELD_DEFINITION",
              "ENUM_VALUE"
            ],
            "args": [
              {
                "name": "reason",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": "\"No longer supported\""
              }
            ]
          }
        ]
      }
    }
  }
