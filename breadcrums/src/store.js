import { configureStore } from "@reduxjs/toolkit";

import breadcrumReducer from './slice/breadcrumSlice';

const store = configureStore({
    reducer: {
        'breadcrum': breadcrumReducer,
    }
});

export default store;