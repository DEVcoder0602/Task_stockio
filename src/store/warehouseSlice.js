import { createSlice } from "@reduxjs/toolkit";

const warehouseSlice = createSlice({
  name: "warehouse",
  initialState: {
    warehouses: [],
    selectedCities: [],
    selectedClusters: [],
    selectedSpace: [],
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
    setSelectedSpace(state, action) {
      state.selectedSpace = action.payload;
    },
    updateWarehouse(state, action) {
      const updatedWarehouse = action.payload;
      // console.log(updatedWarehouse);
      const warehouseIndex = state.warehouses.findIndex(
        (warehouse) => warehouse.id === updatedWarehouse.id
      );
      state.warehouses[warehouseIndex] = updatedWarehouse;
      // console.log(state.warehouses);
    },
  },
});

export const {
  addWarehouses,
  setSelectedCities,
  setSelectedClusters,
  setSelectedSpace,
  updateWarehouse,
} = warehouseSlice.actions;
export default warehouseSlice.reducer;
