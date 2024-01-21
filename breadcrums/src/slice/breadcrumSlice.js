import {createSlice} from '@reduxjs/toolkit';

const breadcrumsSlice = createSlice({
    name: 'breadcrum',
    initialState: {
        bredcrumList: [
            {
                name: 'Home',
                path: '/',
            }
        ]
    },
    reducers: {
        addBreadcrumToLast: (state, action) => {
            const {payload} = action;
            state.bredcrumList.push(payload)
        },
        removeBreadcrumFromIndex: (state, action) => {
            const {payload} = action;
            let index = 0;
            state.bredcrumList.forEach((ele, i) => {
                if(ele.name === payload.name) index = i;
            })
            if(index < state.bredcrumList.length-1)
            state.bredcrumList = state.bredcrumList.slice(0, index - 1);
            else state;
        }
    }
});

export const { addBreadcrumToLast, removeBreadcrumFromIndex } = breadcrumsSlice.actions;
export default breadcrumsSlice.reducer;
