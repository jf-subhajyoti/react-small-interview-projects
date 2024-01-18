import {createSlice} from '@reduxjs/toolkit';

const breadcrumsSlice = createSlice({
    name: 'breadcrum',
    initialState: [
        {
            name: 'Home',
            path: '/',
        }
    ],
    reducers: {
        addBreadcrumToLast: (state, action) => {
            const {payload} = action;
            state = [...state, payload];
        },
        removeBreadcrumFromIndex: (state, action) => {
            const {payload} = action;
            let newBreadcrumState = [];
            let i = 0;
            while(true) {
                newBreadcrumState[i] = state[i];
                if(state[i] === payload.name) break;
            }
            state = newBreadcrumState;
        }
    }
});

export const { addBreadcrumToLast, removeBreadcrumFromIndex } = breadcrumsSlice.actions;
export default breadcrumsSlice.reducer;
