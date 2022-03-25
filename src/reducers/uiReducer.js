import { uiActionTypes } from "../actionTypes/uiActionTypes";

const initialUiState = {
  isLoading: false,
};
const uiReducer = (state = initialUiState, action) => {
  switch (action.type) {
    case uiActionTypes.LOADING:
      return {
        isLoading: true,
      };
    case uiActionTypes.NOT_LOADING:
      return {
        isLoading: false,
      };
    default:
      return state;
  }
};
export default uiReducer;
