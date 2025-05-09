import {createSlice, type PayloadAction, } from '@reduxjs/toolkit'
import {getListConfig, getRegisterQuantity, getSiteConfig, postDoAction} from '../services'

export interface storeState {
  siteConfig: any
  quantity: number
  doAction: any
  configSlide: ListItemConfig
}

const initialState: storeState = {
  siteConfig: null,
  quantity: 0,
  doAction: false,
  configSlide: [],
}

export const storeSlice = createSlice({
  name: 'storeApi',
  initialState,
  reducers: {
    incrementQuantity: (state, action: PayloadAction<number>) => {
      state.quantity += action.payload
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getSiteConfig.fulfilled, (state, action: PayloadAction<any>) => {
      state.siteConfig = action.payload
    })
    builder.addCase(getRegisterQuantity.fulfilled, (state, action: PayloadAction<any>) => {
      state.quantity = action.payload
    })
    builder.addCase(postDoAction.fulfilled, (state, action: PayloadAction<boolean>) => {
      state.doAction = action.payload
    })
    builder.addCase(getListConfig.fulfilled, (state, action: PayloadAction<any>) => {
      state.configSlide = action.payload
    })
  },
})

// Action creators are generated for each case reducer function
export const {incrementQuantity} = storeSlice.actions

export default storeSlice.reducer
