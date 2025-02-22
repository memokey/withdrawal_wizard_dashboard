'use client'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CalcState {
    isNoticeModal: boolean;
    isEditableModal: boolean;
    isEdit: string;
    snGrowth: number[];
    balances: any[];
    avgGrowth: any;
    finalGrowth: any;
    calcAction: boolean;
    isLoading: boolean;
}

const initialState: CalcState = {
    isNoticeModal: false,
    isEditableModal: false,
    isEdit: "None",
    snGrowth: new Array(54).fill(0),
    balances: [],
    avgGrowth: {},
    finalGrowth: {},
    calcAction: false,
    isLoading: false,
}

export const calcSlice = createSlice({
    name: 'calc',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setNoticeModal(state, action: PayloadAction<boolean>) {
            state.isNoticeModal = action.payload;
        },
        setIsEditableModal(state, action: PayloadAction<boolean>) {
            state.isEditableModal = action.payload;
        },
        setSnGrowth(state, action: PayloadAction<number[]>) {
            state.snGrowth = action.payload;
        },
        setBalances(state, action: PayloadAction<any[]>) {
            state.balances = action.payload;
        },
        setAvgGrowth(state, action: PayloadAction<any>) {
            state.avgGrowth = action.payload;
        },
        setFinalGrowth(state, action: PayloadAction<any>) {
            state.finalGrowth = action.payload;
        },
        setSnSpecificGrowth(state, action: PayloadAction<any>) {
            const { snSpecificGrowth, index } = action.payload;
            state.snGrowth[index] = snSpecificGrowth;
        },
        setIsEdit(state, action: PayloadAction<string>) {
            state.isEdit = action.payload;
        },
        setCalcAction(state, action: PayloadAction<boolean>) {
            state.calcAction = action.payload;
        },
        setIsLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
    },
})

export const {
    setNoticeModal,
    setIsEditableModal,
    setSnGrowth,
    setBalances,
    setAvgGrowth,
    setFinalGrowth,
    setSnSpecificGrowth,
    setIsEdit,
    setCalcAction,
    setIsLoading,
} = calcSlice.actions

export default calcSlice.reducer
