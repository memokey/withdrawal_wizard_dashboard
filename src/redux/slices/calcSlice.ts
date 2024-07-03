'use client'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CalcState {
    noticeModal: Boolean;
}

const initialState: CalcState = {
    noticeModal: false,
}

export const calcSlice = createSlice({
    name: 'calc',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setNoticeModal(state, action: PayloadAction<any>) {
            state.noticeModal = action.payload;
        },
    },
})

export const {
    setNoticeModal,
} = calcSlice.actions

export default calcSlice.reducer
