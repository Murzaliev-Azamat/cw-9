import {createSlice} from "@reduxjs/toolkit";
import {Category, CategoryApi} from "../types";
import {addCategory, deleteCategory, fetchCategories, fetchOneCategory, updateCategory} from "./CategoryThunks";
import {RootState} from "../app/store";


interface CategoryState {
  categories: Category[] | [];
  category: CategoryApi | null;
  addLoading: boolean;
  fetchAllLoading: boolean;
  deleteLoading: boolean;
  fetchOneLoading: boolean;
  updateLoading: boolean;
}

const initialState: CategoryState = {
  categories: [],
  category: null,
  addLoading: false,
  fetchAllLoading: false,
  deleteLoading: false,
  fetchOneLoading: false,
  updateLoading: false,
}

export const CategorySlice = createSlice({
  name: 'category',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.fetchAllLoading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.fetchAllLoading = false;
      state.categories = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state) => {
      state.fetchAllLoading = false;
    });
    builder.addCase(addCategory.pending, (state) => {
      state.addLoading = true;
    });
    builder.addCase(addCategory.fulfilled, (state) => {
      state.addLoading = false;
    });
    builder.addCase(addCategory.rejected, (state) => {
      state.addLoading = false;
    });
    builder.addCase(fetchOneCategory.pending, (state) => {
      state.fetchOneLoading = true;
    });
    builder.addCase(fetchOneCategory.fulfilled, (state, action) => {
      state.fetchOneLoading = false;
      state.category = action.payload;
    });
    builder.addCase(fetchOneCategory.rejected, (state) => {
      state.fetchOneLoading = false;
    });
    builder.addCase(updateCategory.pending, (state) => {
      state.updateLoading = true;
    });
    builder.addCase(updateCategory.fulfilled, (state) => {
      state.updateLoading = false;
    });
    builder.addCase(updateCategory.rejected, (state) => {
      state.updateLoading = false;
    });
    builder.addCase(deleteCategory.pending, (state) => {
      state.deleteLoading = true;
    });
    builder.addCase(deleteCategory.fulfilled, (state) => {
      state.deleteLoading = false;
    });
    builder.addCase(deleteCategory.rejected, (state) => {
      state.deleteLoading = false;
    });
}});

export const categoryReducer = CategorySlice.reducer;

export const selectCategories = (state: RootState) => state.category.categories;
export const selectCategory = (state: RootState) => state.category.category;
