import {createAsyncThunk} from "@reduxjs/toolkit";
import {
  CategoriesApiList,
  Category,
  CategoryApi,
} from "../types";
import axiosApi from "../axiosApi";

export const fetchCategories = createAsyncThunk<Category[]>(
  'home/fetchAllCategories',
  async () => {
    const categoriesResponse = await axiosApi.get<CategoriesApiList | null>('/categories.json');
    const categories = categoriesResponse.data;
    if (categories === null) {
      return [];
    } else {
      return Object.keys(categories).map(key => {
        const category = categories[key];
        return {
          ...category,
          id: key
        }
      });
    }
  },
)

export const addCategory = createAsyncThunk<void, CategoryApi>(
  'home/addOneCategory',
  async ({name, type}) => {
    await axiosApi.post<CategoryApi>('/categories.json', {name: name, type: type});
  }
);


export const fetchOneCategory = createAsyncThunk<Category, string>(
  'home/fetchOneCategory',
  async (id) => {
    const categoryResponse = await axiosApi.get<CategoryApi | null>('categories/' + id + '.json');
    const category = categoryResponse.data;

    if (category === null) {
      throw new Error('Not found!')
    }

    return (
      {
        id: id,
        type: category.type,
        name: category.name,
      }
    )
  },
)

interface UpdateCategoryParams {
  id: string;
  category: CategoryApi;
}

export const updateCategory = createAsyncThunk<void, UpdateCategoryParams>(
  'home/updateCategory',
  async (params) => {
    await axiosApi.put("/categories/" + params.id + '.json', params.category);
  }
);

export const deleteCategory = createAsyncThunk<void, string>(
  'home/deleteCategory',
  async (id) => {
    await axiosApi.delete('/categories/' + id + '.json');
  }
);