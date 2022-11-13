import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  templates: [],
  currentPage: 1,
  itemOffSet: 0,
  endOffSet: 15,
  totalTemplates: 0,
  currentItems: [],
  pageCount: 1,
  loading: false,
  category: "All",
  order: "Default",
  date: "Default",
};

const templateSlice = createSlice({
  name: "template",
  initialState,
  reducers: {
    setTemplates: (state, { payload }) => {
      state.templates = payload;
    },
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
    setItemOffSet: (state, { payload }) => {
      state.itemOffSet = payload;
    },
    setEndOffset: (state, { payload }) => {
      state.endOffSet = payload;
    },
    setTotalTemplates: (state, { payload }) => {
      state.totalTemplates = payload;
    },
    setCurrentItems: (state, { payload }) => {
      state.currentItems = payload;
    },
    setPageCount: (state, { payload }) => {
      state.pageCount = payload;
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setCategory: (state, { payload }) => {
      state.category = payload;
    },
    setOrder: (state, { payload }) => {
      state.order = payload;
    },
    setDate: (state, { payload }) => {
      state.date = payload;
    },

    resetAppState: () => {},
  },
});

export const {
  setTemplates,
  resetAppState,
  setCurrentPage,
  setCurrentItems,
  setItemOffSet,
  setEndOffset,
  setTotalTemplates,
  setPageCount,
  setLoading,
  setCategory,
  setOrder,
  setDate,
} = templateSlice?.actions;

export default templateSlice?.reducer;

export const templateSelector = (state) => state?.template;
