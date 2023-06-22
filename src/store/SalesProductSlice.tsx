import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SalesProduct } from "../components/types/Types";

interface SalesProductState {
  selectedProduct: SalesProduct | null;
}

const initialState: SalesProductState = {
  selectedProduct: null,
};

const SalesProductSlice = createSlice({
  name: "salesProduct",
  initialState,
  reducers: {
    setSelectedProduct: (state, action: PayloadAction<SalesProduct | null>) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const { setSelectedProduct } = SalesProductSlice.actions;

export default SalesProductSlice.reducer;
