import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const graphiqlApi = createApi({
  reducerPath: 'graphiqlApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://graphqlzero.almansi.me' }),
  endpoints: (builder) => ({
    sendGraphiqlResponse: builder.mutation({
      query: (graphiqlRequest) => ({
        url: '/api',
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          query: `{
            ${graphiqlRequest},
          }`,
        }),
      }),
    }),
  }),
});

export const { useSendGraphiqlResponseMutation } = graphiqlApi;
