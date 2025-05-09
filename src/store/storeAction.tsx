import {createSlice, type PayloadAction} from '@reduxjs/toolkit'

export interface storeAction {
  popup: {
    isShow: {
      status: boolean,
      popupForm: {
        thele: boolean,
        gift: boolean,
      }
    },
    data: string[] | number[] | any[];
  },
  activeTabs: number
}

const initialState: storeAction = {
  popup: {
    isShow: {
      status: false,
      popupForm: {
        thele: false,
        gift: false,
      }
    },
    data: []
  },
  activeTabs: 1
}

export const storeSlice = createSlice({
  name: 'storeAction',
  initialState,
  reducers: {
    togglePopup: (state, action: PayloadAction<any>) => {
      state.popup.isShow = {
        status: action.payload.status,
        popupForm: {
          thele: action.payload.popupForm.thele,
          gift: action.payload.popupForm.gift,
        }
      }
    },
    handleToggleTabs: (state, action: PayloadAction<number>) => {
      state.activeTabs = action.payload
    }
  },
  // extraReducers: (builder) => {
    // builder.addCase(postSignUp.pending, (state) => {
    //   state.popup.isShow = true
    // })
    // builder.addCase(postSignUp.fulfilled, (state, action: PayloadAction<any>) => {
    //   state.popup.data = action.payload
    // })
  // }
})

// Action creators are generated for each case reducer function
export const {togglePopup, handleToggleTabs} = storeSlice.actions

export default storeSlice.reducer
