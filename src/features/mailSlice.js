import { createSlice } from '@reduxjs/toolkit'

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    selectMail: null,
    SendMessageIsOpen: false,
  },
  reducers: {
    selectMail: (state, action) => {
      state.selectMail = action.payload
    },
    openSendMessage: (state) => {
      state.SendMessageIsOpen = true
    },
    closeSendMessage: (state) => {
      state.SendMessageIsOpen = false
    },
  },
})

export const { selectMail, openSendMessage, closeSendMessage } =
  mailSlice.actions

export const selectOpenMail = (state) => state.mail.selectMail
export const SendMessageIsOpen = (state) => state.mail.SendMessageIsOpen

export default mailSlice.reducer
