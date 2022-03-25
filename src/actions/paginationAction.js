import { paginationActionTypes } from "../actionTypes/paginationActionTypes";
import { uiActionTypes } from "../actionTypes/uiActionTypes";
import { userActionTypes } from "../actionTypes/userActionTypes";
export const fetchUserPageChanged = (perPage) => {
  return async (dispatch) => {
    dispatch({ type: uiActionTypes.LOADING });
    const response = await fetch(
      `https://reqres.in/api/users?page=1&per_page=${perPage}`
    );
    const data = await response.json();
    dispatch({
      type: paginationActionTypes.ADD_PAGINATION,
      currentPage: data.page,
      perPage: data.per_page,
      total: data.total,
      totalPages: data.total_pages,
    });
    dispatch({ type: uiActionTypes.NOT_LOADING });
    dispatch({ type: userActionTypes.FETCH_USER, data: data.data });
  };
};
