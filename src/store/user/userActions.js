import { userActionTypes } from "./userActionTypes";
import { paginationActionTypes } from "../pagination/paginationActionTypes";
import { uiActionTypes } from "../ui/uiActionTypes";
export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch({ type: uiActionTypes.LOADING });
    const response = await fetch("https://reqres.in/api/users?page=1");
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

export const fetchUsersPagination = (pageNumber) => {
  return async (dispatch) => {
    dispatch({ type: uiActionTypes.LOADING });
    const response = await fetch(
      `https://reqres.in/api/users?page=${pageNumber}`
    );
    const data = await response.json();
    dispatch({
      type: paginationActionTypes.CHANGE_PAGE,
      currentPage: pageNumber,
    });
    dispatch({ type: uiActionTypes.NOT_LOADING });
    dispatch({ type: userActionTypes.FETCH_USER, data: data.data });
  };
};

export const deleteUser = (id) => {
  return { type: userActionTypes.DELETE_USER, id: id };
};
export const hoverUser = ({ isActive, id }) => {
  return { type: userActionTypes.SHOW_USER, isActive: isActive, id: id };
};
