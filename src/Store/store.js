import { configureStore } from "@reduxjs/toolkit";
import PaymentSlice from './Features/Reports/StatusPayment'
import ProfitSlice  from "./Features/Reports/StatusProfit"


export const store = configureStore({
  reducer:{
    payments: PaymentSlice,
    profits: ProfitSlice,
  }
})