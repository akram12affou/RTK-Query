import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export const apiSlice = createApi({
    reducerPath: 'api',
    tagTypes : ['Todos'],
    baseQuery:fetchBaseQuery({baseUrl : 'http://localhost:3000'}),
    endpoints : (builder) => ({
        getTodos: builder.query({
            query : () => '/todos',
            providesTags:['Todos']
        }),
        addTodo: builder.mutation({
            query : (todo) => ({
                url:'/todos',
                method: 'POST',
                body: todo
            }),
            invalidatesTags : ['Todos'],
        }),
        updateTodo: builder.mutation({
                query : (todo) => ({
                    url:`/todos/${todo.id}`,
                    method: 'PATCH',
                    body: todo
            }),
            invalidatesTags : ['Todos'],
        }),
        deleteTodo: builder.mutation({
            query: ({id}) => ({
                url:`/todos/${id}`,
                method: 'DELETE',
                body: id
            }),
            invalidatesTags : ['Todos'],
        }),
        }),

    })
export const {
    useGetTodosQuery,
    useAddTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation
} = apiSlice