import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { faker } from '@faker-js/faker'



// DEV ONLY!!!
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};



const albumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005'
    }),
    fetchFn: async (...args) => {
        await pause(100)
        return fetch(...args)
    },
    endpoints(builder) {
        return {
            addAlbum: builder.mutation({
                invalidatesTags: (result, error, user) => {
                    return [{ type: 'Albumm', id: user.id }]
                },
                query: (user) => {
                    return {
                        url: '/albums',
                        method: 'POST',
                        body: {
                            userId: user.id,
                            title: faker.commerce.productName()
                        }
                    }
                }
            }),
            fetchAlbums: builder.query({
                providesTags: (result, error, user) => {
                    return [{ type: 'Albumm', id: user.id }]
                },
                query: (user) => {
                    return {
                        url: '/albums',
                        params: {
                            userId: user.id
                        },
                        method: 'GET',
                    }
                }
            })
        }
    }
})

export const {
    useFetchAlbumsQuery,
    useAddAlbumMutation
} = albumsApi;
export { albumsApi }



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