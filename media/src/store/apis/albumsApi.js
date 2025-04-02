import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

// DEV ONLY!!!
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const albumsApi = createApi({
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
    fetchFn: async (...args) => {
      // REMOVE FOR PRODUCTION
      await pause(1000);
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {

      removeAlbum: builder.mutation({
        invalidatesTags: (result, error, album) => {
          console.log(album)
          return [{ type: 'Album', id: album.id }]
        },
        query: (album) => {
          return {
            url: `/albums/${album.id}`,
            method: 'DELETE',
          }
        }
      }),
      addAlbum: builder.mutation({
        invalidatesTags: (result, error, user) => {
          return [{ type: 'Album', id: user.id }];
        },
        query: (user) => {
          return {
            url: '/albums',
            method: 'POST',
            body: {
              userId: user.id,
              title: faker.commerce.productName(),
            },
          };
        },
      }),
      fetchAlbums: builder.query({
        providesTags: (result, error, user) => {
          const tags = result.map(album => {
            return { type: 'Album', id: album.id }
          })
          tags.push({ type: 'UsersAlbums', id: user.id })
          return tags
        },
        query: (user) => {
          return {
            url: '/albums',
            params: {
              userId: user.id,
            },
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } = albumsApi;
export { albumsApi };



/**
 * Creating a RTK query API
 * 
 * 1. identify a group of related requests that your app needs to make
 * 2. Make a new file that will create the api
 * 3. the API needs to store a ton of state related to data, request status, errors. 
 *   Add a 'reducerPath'
 * 4. the API needs to know how and where to send requests. Add a 'baseQuery'
 * 5. add 'endpoints', one for each kind of request you want to make. Reqs that
 * read data are queries, wrtie data are mutations
 * 6. export all of the automaticlaly generated hooks
 * 7. connect the API to the store. Reducer, middleware, and listeners. 
 * 8. Export the hooks from the store/index.js file 
 * 9. use the generated hooks in a component
 * 
 * 
 */