import { paginationActionTypes } from "../actionTypes/paginationActionTypes";

const initialiPaginationState = {
  currentPage: 0,
  perPage: 2,
  total: 0,
  totalPages: 0,
};

export const paginationReducer = (state = initialiPaginationState, action) => {
  switch (action.type) {
    case paginationActionTypes.ADD_PAGINATION:
      return {
        currentPage: action.currentPage,
        perPage: action.perPage,
        total: action.total,
        totalPages: action.totalPages,
      };
    case paginationActionTypes.CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case paginationActionTypes.PER_PAGE_CHANGE:
      return { ...state, perPage: action.perPage };
    default:
      return state;
  }
};
