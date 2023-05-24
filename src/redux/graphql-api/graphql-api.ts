import { BASE_URL } from '@/utils/const';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import fetch from 'isomorphic-fetch';

export const graphiqlApi = createApi({
  reducerPath: 'graphiqlApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, fetchFn: fetch }),
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
