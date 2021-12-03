import { SELECTED_COLOR_TYPES } from "../actions/types";

const defaultState = {
  selectedColor: { id: 1, color: "red" },
};

export default function ColorReducer(state = defaultState, action) {
  switch (action.type) {
    case SELECTED_COLOR_TYPES.SET_SELECTED_COLOR:
      return {
        ...state,
        selectedColor: { ...action?.$payload },
      };
    default:
      return state;
  }
}
