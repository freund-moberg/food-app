import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./reducers/categoryReducer";
import cartReducer from "./reducers/cartReducer"
import searchReducer from "./reducers/searchReducer";
import accountReducer from "./reducers/accountReducer";

const Store = configureStore({
    reducer: {
        category: categoryReducer,
        cart: cartReducer,
        search: searchReducer,
        account: accountReducer
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch
 
export default Store;