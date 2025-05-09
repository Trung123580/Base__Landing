import {configureStore} from '@reduxjs/toolkit'
import storeApi from './storeApi'
import storeAction from './storeAction'

export const store = configureStore({
  reducer: {
    storeApp: storeApi,
    storeAction: storeAction
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
