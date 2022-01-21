
import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';

import rootReducer from '../slices';

export const store = configureStore({ 
    reducer: rootReducer ,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
});

export default { store };

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
