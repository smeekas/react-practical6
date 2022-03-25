import { userActionTypes } from "../actionTypes/userActionTypes";
const initialValues = {
  data: [],
  userDetail: null,
};

const userReducer = (state = initialValues, action) => {
  switch (action.type) {
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
