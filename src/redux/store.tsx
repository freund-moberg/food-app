import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categoryReducer";
import cartReducer from "./cartReducer"
import searchReducer from "./searchReducer";

const Store = configureStore({
    reducer: {
        category: categoryReducer,
        cart: cartReducer,
        search: searchReducer
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch
 
export default Store;