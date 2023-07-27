import { createSlice } from "@reduxjs/toolkit";

const warehouseSlice = createSlice({
  name: "warehouse",
  initialState: {
    warehouses: [],
    selectedCities: [],
    selectedClusters: [],
  },
  reducers: {
    addWarehouses(state, action) {
      state.warehouses = action.payload;
    },
    setSelectedCities(state, action) {
      state.selectedCities = action.payload;
    },
    setSelectedClusters(state, action) {
      state.selectedClusters = action.payload;
    },
    updateWarehouse(state, action) {
      const updatedWarehouse = action.payload;
      // console.log(updatedWarehouse);
      const warehouseIndex = state.warehouses.findIndex(
        (warehouse) => warehouse.id === updatedWarehouse.id
      );
      state.warehouses[warehouseIndex] = updatedWarehouse;
      console.log(state.warehouses);
    },
  },
});

export const {
  addWarehouses,
  setSelectedCities,
  setSelectedClusters,
  updateWarehouse,
} = warehouseSlice.actions;
export default warehouseSlice.reducer;
