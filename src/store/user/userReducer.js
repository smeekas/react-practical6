import { userActionTypes } from "./userActionTypes";
const initialValues = {
  data: [],
  userDetail: null,
};

const userReducer = (state = initialValues, action) => {
  switch (action.type) {
    case userActionTypes.DELETE_USER:
      let newUserDetail;
      if (state.userDetail) {
        if (action.id === state.userDetail.id) {
          newUserDetail = null;
        } else {
          newUserDetail = state.userDetail;
        }
      } else {
        newUserDetail = null;
      }
      return {
        data: state.data.filter((user) => user.id !== action.id),
        userDetail: newUserDetail,
      };
    case userActionTypes.SHOW_USER:
      const detail = state.data.find((user) => user.id === action.id);
      return {
        data: state.data,
        userDetail: { ...detail, isActive: action.isActive },
      };
    case userActionTypes.FETCH_USER:
      return {
        data: action.data,
        userDetail: null,
      };

    default:
      return state;
  }
};
export default userReducer;
